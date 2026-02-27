/**
 * OneMetro — Main Application Controller
 * Orchestrates all components, handles routing, state, and city data loading.
 *
 * City data is now LAZY-LOADED: individual city JS chunks are only fetched
 * when the user first selects that city, dramatically reducing initial bundle size.
 *
 * To add a new city:
 *   1. Add metadata to src/data/cityRegistry.js
 *   2. Create src/data/<cityId>.js with full station data
 *   3. Add one entry to cityLoaders below
 */

import { renderHeader } from './components/header.js';
import { renderLineSelector, bindLineCardEvents } from './components/lineSelector.js';
import { renderLineInfo } from './components/lineInfo.js';
import { renderStationList, bindStationEvents } from './components/stationList.js';
import { renderMetroMap } from './components/metroMap.js';
import { renderStationPage, bindStationPageEvents } from './components/stationPage.js';
import { renderLandingPage } from './components/landingPage.js';
import { buildSearchIndex, search } from './services/searchEngine.js';
import { renderSearchModal, bindSearchEvents, toggleSearchModal } from './components/searchModal.js';

// ── City Loaders ──────────────────────────────────────────────────────────────
// Dynamic imports create separate JS chunks, loaded only when a city is selected.
// Each entry returns a Promise that resolves to the city's default export.
// NOTE: Vite requires these to be explicit (not template-literal) so the bundler
// can statically analyze and code-split each city into its own chunk.
const cityLoaders = {
    chennai: () => import('./data/chennai.js').then(m => m.default),
    bengaluru: () => import('./data/bengaluru.js').then(m => m.default),
    delhi: () => import('./data/delhi.js').then(m => m.default),
    mumbai: () => import('./data/mumbai.js').then(m => m.default),
    "navi-mumbai": () => import('./data/navi-mumbai.js').then(m => m.default),
    hyderabad: () => import('./data/hyderabad.js').then(m => m.default),
    kolkata: () => import('./data/kolkata.js').then(m => m.default),
    pune: () => import('./data/pune.js').then(m => m.default),
    nagpur: () => import('./data/nagpur.js').then(m => m.default),
    ahmedabad: () => import('./data/ahmedabad.js').then(m => m.default),
    kochi: () => import('./data/kochi.js').then(m => m.default),
    bhopal: () => import('./data/bhopal.js').then(m => m.default),
    indore: () => import('./data/indore.js').then(m => m.default),
    jaipur: () => import('./data/jaipur.js').then(m => m.default),
    lucknow: () => import('./data/lucknow.js').then(m => m.default),
    agra: () => import('./data/agra.js').then(m => m.default),
    patna: () => import('./data/patna.js').then(m => m.default),
    noida: () => import('./data/noida.js').then(m => m.default),
    gurgaon: () => import('./data/gurgaon.js').then(m => m.default),
    rrts: () => import('./data/rrts.js').then(m => m.default),
    meerut: () => import('./data/meerut.js').then(m => m.default),
};

// ── City Data Cache ───────────────────────────────────────────────────────────
// Once a city is loaded, its data is cached here so subsequent visits are instant.
const cityCache = {};

/**
 * Resolves city data for a given cityId.
 * Returns cached data if already loaded, otherwise fetches the chunk.
 * Returns null if cityId is unknown.
 */
async function getCity(cityId) {
    if (!cityLoaders[cityId]) return null;
    if (!cityCache[cityId]) {
        cityCache[cityId] = await cityLoaders[cityId]();
    }
    return cityCache[cityId];
}

// ── State ─────────────────────────────────────────────────────────────────────
const state = {
    cityId: null,
    city: null,
    activeLine: null,
    activeStation: null,
    showUpcoming: false,
    searchInitialized: false
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function getFilteredCity() {
    if (!state.city) return null;
    if (state.showUpcoming) return state.city;
    return {
        ...state.city,
        lines: state.city.lines.filter(l => l.status === 'operational'),
    };
}

function getVisibleLines() {
    const filtered = getFilteredCity();
    return filtered ? filtered.lines : [];
}

// ── SEO / Document Meta ───────────────────────────────────────────────────────
function updateDocumentMeta() {
    let title = 'OneMetro — Indian Metro Systems';
    let description = "Explore India's metro rail systems. Interactive maps, stations, and line details.";

    if (state.city) {
        title = `${state.city.name} — OneMetro`;
        description = `Explore the ${state.city.name} network. View interactive maps, operational lines, and upcoming stations.`;

        if (state.activeLine) {
            const line = state.city.lines.find(l => l.id === state.activeLine);
            if (line) {
                title = `${line.name} | ${state.city.name} — OneMetro`;
                description = `Stations and interactive map for the ${line.name} of ${state.city.name}.`;

                if (state.activeStation) {
                    const station = line.stations.find(s => s.id === state.activeStation);
                    if (station) {
                        title = `${station.name} Station | ${line.name} — OneMetro`;
                        description = `Details for ${station.name} Station on the ${line.name} of ${state.city.name}.`;
                    }
                }
            }
        }
    }

    document.title = title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
}

// ── URL Routing ───────────────────────────────────────────────────────────────
// Format: #/cityId  |  #/cityId/lineId  |  #/cityId/lineId/stationId
function parseHash() {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const parts = hash.split('/').filter(Boolean);
    return {
        cityId: parts[0] || null,
        lineId: parts[1] || null,
        stationId: parts[2] || null,
    };
}

function setHash(cityId, lineId, stationId) {
    if (cityId) {
        if (stationId && lineId) {
            window.location.hash = `/${cityId}/${lineId}/${stationId}`;
        } else if (lineId) {
            window.location.hash = `/${cityId}/${lineId}`;
        } else {
            window.location.hash = `/${cityId}`;
        }
    } else {
        window.location.hash = '';
    }
}

// ── Loading State ─────────────────────────────────────────────────────────────
/** Shows a spinner while city JS chunk is being fetched */
function showLoadingState() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    if (sidebar) sidebar.style.display = 'none';
    if (content) {
        content.style.display = '';
        content.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p class="loading-text">Loading city data…</p>
            </div>
        `;
    }
    const lp = document.getElementById('landing-page');
    if (lp) lp.style.opacity = '0.4';
}

// ── Apply route state ─────────────────────────────────────────────────────────
/** After city data is loaded, apply any line/station from the URL route */
function applyRoute(route) {
    if (!state.city || !route.lineId) return;
    const line = state.city.lines.find(l => l.id === route.lineId);
    if (!line) return;

    state.activeLine = route.lineId;
    if (line.status !== 'operational') state.showUpcoming = true;

    if (route.stationId) {
        const station = line.stations.find(s => s.id === route.stationId);
        if (station) state.activeStation = route.stationId;
    }
}

// ── Initialize ────────────────────────────────────────────────────────────────
async function init() {
    // Render the header shell immediately (no city selected yet)
    renderHeader(null, handleCityChange);

    const main = document.getElementById('app-main');
    main.className = 'app-main';

    const route = parseHash();

    if (route.cityId) {
        // A city was in the URL — load it before first render
        showLoadingState();
        const city = await getCity(route.cityId);
        if (city) {
            state.cityId = route.cityId;
            state.city = city;
            applyRoute(route);
            renderHeader(state.city, handleCityChange);
        }
    }

    renderAll();

    // Handle all subsequent URL changes
    window.addEventListener('hashchange', handleHashChange);

    // ── Global Search Keyboard Shortcuts ──
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            handleOpenSearch();
        }
    });

    // Initialize Search UI (invisible until activated)
    renderSearchModal();
}

/**
 * Lazy-initializes the search index only when needed.
 */
async function handleOpenSearch() {
    toggleSearchModal(true);
    if (!state.searchInitialized) {
        state.searchInitialized = true;

        // Setup events once
        bindSearchEvents(
            search,
            handleSearchSelect,
            () => toggleSearchModal(false)
        );

        // Build index in background
        await buildSearchIndex(cityLoaders);
    }
}

/**
 * Handles selection from search results.
 */
function handleSearchSelect(item) {
    toggleSearchModal(false);

    if (item.type === 'city') {
        handleCityChange(item.cityId);
    } else if (item.type === 'line') {
        state.activeLine = item.lineId;
        state.activeStation = null;
        setHash(item.cityId, item.lineId, null);
        renderAll();
    } else if (item.type === 'station') {
        state.activeLine = item.lineId;
        state.activeStation = item.stationId;
        setHash(item.cityId, item.lineId, item.stationId);
        renderAll();
    }
}

// ── Hash Change Handler ───────────────────────────────────────────────────────
async function handleHashChange() {
    const route = parseHash();

    if (!route.cityId) {
        // Navigate back to home / landing page
        state.city = null;
        state.cityId = null;
        state.activeLine = null;
        state.activeStation = null;
        state.showUpcoming = false;
        renderHeader(null, handleCityChange);
        renderAll();
        return;
    }

    // City changed — load its data
    if (!state.city || state.cityId !== route.cityId) {
        showLoadingState();
        const newCity = await getCity(route.cityId);
        if (!newCity) return; // Unknown cityId in URL — do nothing

        state.city = newCity;
        state.cityId = route.cityId;
        state.activeLine = null;
        state.activeStation = null;
        state.showUpcoming = false;
        renderHeader(state.city, handleCityChange);
    }

    // Apply line / station from URL (handles deep links and back-navigation)
    if (route.lineId) {
        const line = state.city.lines.find(l => l.id === route.lineId);
        if (line) {
            state.activeLine = route.lineId;
            if (line.status !== 'operational') state.showUpcoming = true;

            if (route.stationId) {
                const station = line.stations.find(s => s.id === route.stationId);
                state.activeStation = station ? route.stationId : null;
            } else {
                state.activeStation = null;
            }
        }
    } else {
        state.activeLine = null;
        state.activeStation = null;
    }

    renderAll();
}

// ── Render All ────────────────────────────────────────────────────────────────
function renderAll() {
    updateDocumentMeta();

    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    if (!state.city) {
        if (sidebar) sidebar.style.display = 'none';
        if (content) content.style.display = 'none';
        renderLandingPage(handleCityChange);

        // Bind Hero Search trigger
        const heroSearch = document.getElementById('hero-search-trigger');
        if (heroSearch) {
            heroSearch.addEventListener('click', handleOpenSearch);
        }
        return;
    }

    // Restore app layout (sidebar + content)
    if (sidebar) sidebar.style.display = '';
    if (content) content.style.display = '';

    // Remove landing page if it exists
    const lp = document.getElementById('landing-page');
    if (lp) lp.remove();

    renderSidebar();
    renderContent();
}

// ── Smooth content transition helper ─────────────────────────────────────────
function crossfadeContent(updateFn) {
    const content = document.getElementById('content');
    content.style.opacity = '0';
    content.style.transform = 'scale(0.98)';

    setTimeout(() => {
        updateFn();
        void content.offsetHeight; // Force reflow
        content.style.opacity = '1';
        content.style.transform = 'scale(1)';
    }, 150);
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.className = 'sidebar';

    const visibleLines = getVisibleLines();
    const hasUpcoming = state.city.lines.some(l => l.status !== 'operational');

    sidebar.innerHTML = renderLineSelector(
        state.city,
        visibleLines,
        state.activeLine,
        state.showUpcoming,
        hasUpcoming,
        handleLineSelect
    );

    bindLineCardEvents(handleLineSelect);
    bindSidebarEvents();

    const lineInfoContainer = sidebar.querySelector('#line-info-container');
    if (state.activeLine && lineInfoContainer) {
        const line = state.city.lines.find(l => l.id === state.activeLine);
        if (line) lineInfoContainer.innerHTML = renderLineInfo(line);
    }
}

// ── Partial sidebar update (for toggle — avoids rebuilding the toggle itself) ─
function updateSidebarLines() {
    const sidebar = document.getElementById('sidebar');
    const visibleLines = getVisibleLines();

    // Update stats display
    const statsContainer = sidebar.querySelector('.city-stats');
    if (statsContainer) {
        const totalStations = visibleLines.reduce((sum, l) => sum + l.totalStations, 0);
        const totalLength = visibleLines.reduce((sum, l) => {
            return sum + (parseFloat(l.length.replace(/[^0-9.]/g, '')) || 0);
        }, 0);

        const statValues = statsContainer.querySelectorAll('.city-stat-value');
        if (statValues[0]) statValues[0].textContent = visibleLines.length;
        if (statValues[1]) statValues[1].textContent = totalStations;
        if (statValues[2]) statValues[2].textContent = `${totalLength.toFixed(1)} km`;
    }

    // Toggle upcoming info text
    const upcomingInfo = sidebar.querySelector('.upcoming-info');
    if (upcomingInfo) upcomingInfo.style.display = state.showUpcoming ? '' : 'none';

    // Update operational line cards active state
    const operationalSection = sidebar.querySelectorAll('.line-cards')[0];
    if (operationalSection) {
        operationalSection.querySelectorAll('.line-card').forEach(card => {
            card.classList.toggle('active', state.activeLine === card.dataset.lineId);
        });
    }

    // Show/hide / rebuild upcoming section as needed
    const upcomingSection = sidebar.querySelectorAll('.line-cards')[1];
    const upcomingLines = visibleLines.filter(l => l.status !== 'operational');

    if (upcomingSection) {
        upcomingSection.parentElement.style.display = upcomingLines.length > 0 ? '' : 'none';
    } else if (state.showUpcoming && upcomingLines.length > 0) {
        renderSidebar(); // Full rebuild needed to add the upcoming section
        return;
    }

    if (!state.showUpcoming && upcomingSection) {
        upcomingSection.parentElement.style.display = 'none';
    }

    // Refresh line info panel
    const lineInfoContainer = sidebar.querySelector('#line-info-container');
    if (lineInfoContainer) {
        if (state.activeLine) {
            const line = state.city.lines.find(l => l.id === state.activeLine);
            if (line) lineInfoContainer.innerHTML = renderLineInfo(line);
        } else {
            lineInfoContainer.innerHTML = '';
        }
    }
}

// ── Sidebar event binding ─────────────────────────────────────────────────────
function bindSidebarEvents() {
    const sidebar = document.getElementById('sidebar');

    const toggle = sidebar.querySelector('#upcoming-toggle');
    if (toggle) {
        toggle.addEventListener('change', (e) => {
            state.showUpcoming = e.target.checked;
            if (state.activeLine) {
                const line = state.city.lines.find(l => l.id === state.activeLine);
                if (line && line.status !== 'operational' && !state.showUpcoming) {
                    state.activeLine = null;
                    state.activeStation = null;
                    setHash(state.cityId, null, null);
                }
            }
            renderSidebar();
            crossfadeContent(renderContent);
        });
    }

    const viewAllBtn = sidebar.querySelector('#view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            state.activeLine = null;
            state.activeStation = null;
            setHash(state.cityId, null, null);
            renderAll();
        });
    }
}

// ── Content ───────────────────────────────────────────────────────────────────
function renderContent() {
    const content = document.getElementById('content');
    content.className = 'content';

    // Always exit map fullscreen state when navigating or re-rendering content
    document.body.classList.remove('map-fullscreen-active');
    document.body.style.overflow = '';

    const displayCity = state.showUpcoming ? state.city : getFilteredCity();

    // Station detail view
    if (state.activeStation && state.activeLine) {
        const line = state.city.lines.find(l => l.id === state.activeLine);
        const stationIdx = line ? line.stations.findIndex(s => s.id === state.activeStation) : -1;
        const station = stationIdx !== -1 ? line.stations[stationIdx] : null;
        if (station) {
            const prevStation = stationIdx > 0 ? line.stations[stationIdx - 1] : null;
            const nextStation = stationIdx < line.stations.length - 1 ? line.stations[stationIdx + 1] : null;

            content.innerHTML = renderStationPage(station, line, prevStation, nextStation);
            bindStationPageEvents({
                onBack: () => {
                    state.activeStation = null;
                    setHash(state.cityId, state.activeLine, null);
                    renderContent();
                },
                onNavigate: (stationId) => {
                    state.activeStation = stationId;
                    setHash(state.cityId, state.activeLine, stationId);
                    renderContent();
                },
            });
            return;
        }
    }

    // Full network map (no line selected)
    if (!state.activeLine) {
        content.innerHTML = `
            <div id="metro-map"></div>
            <div class="welcome-state">
                <div class="welcome-icon">🚇</div>
                <h2 class="welcome-title">Welcome to ${state.city.name}</h2>
                <p class="welcome-text">
                    Explore ${state.city.nameLocal} — ${getVisibleLines().length} lines, spanning across the city.
                    <br/><br/>
                    Select a metro line from the sidebar to view its route and stations.
                    ${state.city.phase2 ? `<br/><span style="color: var(--text-muted); font-size: var(--fs-xs);">Toggle "Show Upcoming" to see Phase 2 under-construction lines.</span>` : ''}
                </p>
            </div>
        `;
        renderMetroMap(displayCity, null, null, state.showUpcoming, handleMapStationClick);
        return;
    }

    // Line view with station list
    const line = state.city.lines.find(l => l.id === state.activeLine);
    if (!line) return;

    content.innerHTML = `
        <div id="metro-map"></div>
        <div id="station-list"></div>
    `;

    renderMetroMap(displayCity, state.activeLine, state.activeStation, state.showUpcoming, handleMapStationClick);

    const stationListContainer = document.getElementById('station-list');
    stationListContainer.innerHTML = renderStationList(line, state.activeStation, handleStationClick);
    bindStationEvents(handleStationClick);
}

// ── Event Handlers ────────────────────────────────────────────────────────────

/**
 * Called from header dropdown and landing page cards.
 * Simply updates the URL — all loading and rendering is driven by handleHashChange.
 */
function handleCityChange(cityId) {
    if (cityLoaders[cityId]) {
        setHash(cityId, null, null);
    }
}

function handleLineSelect(lineId) {
    if (state.activeLine === lineId) {
        state.activeLine = null;
        state.activeStation = null;
        setHash(state.cityId, null, null);
    } else {
        state.activeLine = lineId;
        state.activeStation = null;
        setHash(state.cityId, lineId, null);
    }
    renderAll();
}

function handleStationClick(stationId) {
    state.activeStation = state.activeStation === stationId ? null : stationId;
    setHash(state.cityId, state.activeLine, state.activeStation);
    renderContent();
}

function handleMapStationClick(stationId, lineId) {
    if (lineId && lineId !== 'interchange') {
        state.activeLine = lineId;
    } else if (lineId === 'interchange') {
        if (!state.activeLine) state.activeLine = 'blue';
    }

    state.activeStation = state.activeStation === stationId ? null : stationId;
    setHash(state.cityId, state.activeLine, state.activeStation);
    renderAll();
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
