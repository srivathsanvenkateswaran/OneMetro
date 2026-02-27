import Fuse from 'fuse.js';
import { cityRegistry } from '../data/cityRegistry.js';

let fuse = null;
let indexBuilt = false;

/**
 * Builds the search index by combining city metadata and full city data.
 * @param {Object} cityLoaders - Object containing lazy-loader functions for each city.
 */
export async function buildSearchIndex(cityLoaders) {
    if (indexBuilt) return;

    console.log('Building search index...');

    // 1. Initialize with basic city metadata (instant)
    const searchData = Object.values(cityRegistry).map(city => ({
        id: city.id,
        name: city.displayName,
        nameLocal: city.nameLocal,
        sub: `${city.state} • ${city.stats.lines} Lines`,
        type: 'city',
        cityId: city.id,
        keywords: `${city.displayName} ${city.nameLocal} ${city.state} city metro india`
    }));

    // 2. Load all city data to index lines and stations (lazy)
    try {
        const cityDataPromises = Object.entries(cityLoaders).map(([id, loader]) =>
            loader().then(data => ({ id, data }))
        );

        const cities = await Promise.all(cityDataPromises);

        cities.forEach(({ id, data }) => {
            if (!data || !data.lines) return;

            data.lines.forEach(line => {
                const lineKeywords = `${line.name} ${data.city} ${data.displayName || ''} line metro ${id}`.toLowerCase();

                // Index Line
                searchData.push({
                    id: `${id}-${line.id}`,
                    name: line.name,
                    sub: `${data.city} • ${line.totalStations} Stations`,
                    type: 'line',
                    cityId: id,
                    lineId: line.id,
                    keywords: lineKeywords
                });

                // Index Stations
                if (line.stations) {
                    line.stations.forEach(station => {
                        const stationKeywords = `${station.name} ${station.nameLocal || ''} ${line.name} ${data.city} station metro`.toLowerCase();

                        searchData.push({
                            id: station.id,
                            name: station.name,
                            sub: `${data.city} • ${line.name}`,
                            type: 'station',
                            cityId: id,
                            lineId: line.id,
                            stationId: station.id,
                            keywords: stationKeywords
                        });

                        // Also index local names for fuzzy matching if they are distinct enough
                        if (station.nameLocal && station.nameLocal !== station.name) {
                            searchData.push({
                                id: `${station.id}-local`,
                                name: station.nameLocal,
                                sub: `${station.name} • ${data.city}`,
                                type: 'station',
                                cityId: id,
                                lineId: line.id,
                                stationId: station.id,
                                isLocalName: true,
                                keywords: stationKeywords
                            });
                        }
                    });
                }
            });
        });

        // 3. Initialize Fuse with refined weightings
        fuse = new Fuse(searchData, {
            keys: [
                { name: 'name', weight: 0.5 },
                { name: 'nameLocal', weight: 0.5 },
                { name: 'keywords', weight: 0.8 },
                { name: 'sub', weight: 0.2 }
            ],
            threshold: 0.35,
            location: 0,
            distance: 100,
            minMatchCharLength: 2,
            includeMatches: true,
            shouldSort: true,
            findAllMatches: true
        });

        indexBuilt = true;
        console.log('Search index built successfully with', searchData.length, 'items.');
    } catch (error) {
        console.error('Failed to build search index:', error);
    }
}

/**
 * Executes a fuzzy search query.
 */
export function search(query) {
    if (!fuse) {
        return [];
    }
    return fuse.search(query).slice(0, 10);
}
