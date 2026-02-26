import fs from 'fs';
import path from 'path';

/**
 * Smart OneMetro Data Validator
 * Checks for metadata drift and ensures station counts are correct based on unique IDs.
 */

const DATA_DIR = './src/data';
const LAYOUT_FILE = './src/data/mapLayouts.js';
const IGNORE_FILES = ['mapLayouts.js', 'stationCoords.js', 'variables.css', 'cityRegistry.js', 'schema.js'];

async function validate() {
    console.log('🔍 Starting Smart OneMetro Data Validation...\n');

    const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.js') && !IGNORE_FILES.includes(f));

    let errors = 0;

    for (const file of files) {
        const cityId = file.replace('.js', '');
        try {
            const modulePath = path.resolve(DATA_DIR, file);
            const cityModule = await import(`file://${modulePath}`);
            const cityData = cityModule.default;

            if (!cityData || !cityData.name) continue;

            console.log(`Checking ${cityData.name}...`);

            const uniqueStationIds = new Set();
            const nameToId = new Map();

            cityData.lines.forEach(line => {
                line.stations.forEach(st => {
                    if (!st.id) {
                        console.error(`  ❌ Error: Station "${st.name}" in line "${line.id}" is missing an ID.`);
                        errors++;
                    }

                    if (nameToId.has(st.name) && nameToId.get(st.name) !== st.id) {
                        console.warn(`  ❓ Potential Missing Interchange: "${st.name}" has multiple IDs (${nameToId.get(st.name)} and ${st.id}).`);
                    }

                    uniqueStationIds.add(st.id);
                    nameToId.set(st.name, st.id);
                });
            });

            // Check unique station count vs totalStations metadata
            const actualUniqueCount = uniqueStationIds.size;
            const sortedIds = Array.from(uniqueStationIds).sort();
            console.log(`  📊 Found ${actualUniqueCount} unique IDs: ${sortedIds.join(', ')}`);

            if (cityData.totalStations !== actualUniqueCount) {
                console.warn(`  ⚠️  Station Count Mismatch for ${cityId}: Metadata says ${cityData.totalStations}, but calculated ${actualUniqueCount} unique stations.`);
            }

        } catch (e) {
            console.error(`  ❌ Error parsing ${file}:`, e.message);
            errors++;
        }
    }

    if (errors > 0) {
        console.log(`\n❌ Validation failed with ${errors} errors.`);
        process.exit(1);
    } else {
        console.log('\n✅ Smart Validation complete!');
    }
}

validate();
