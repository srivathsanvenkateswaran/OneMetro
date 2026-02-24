/**
 * BharatOne — Main Application Controller
 * Orchestrates all components, handles routing and state
 */

import chennaiMetro from './data/chennai.js';
import bengaluruMetro from './data/bengaluru.js';
import { renderHeader } from './components/header.js';
import { renderLineSelector, bindLineCardEvents } from './components/lineSelector.js';
import { renderLineInfo } from './components/lineInfo.js';
import { renderStationList, bindStationEvents } from './components/stationList.js';
import { renderMetroMap } from './components/metroMap.js';

// ── City Registry ──
const cities = {
    chennai: chennaiMetro,
    bengaluru: bengaluruMetro,
};

// ── State ──
const state = {
    cityId: 'chennai',
    city: chennaiMetro,
    activeLine: null,
    activeStation: null,
    showUpcoming: false, // toggle for Phase 2 lines
};

// ── Helpers ──
function getFilteredCity() {
    // Return city data filtered by showUpcoming toggle
    const city = state.city;
    if (state.showUpcoming) return city;
    return {
        ...city,
        lines: city.lines.filter(l => l.status === 'operational'),
    };
}

function getAllLines() {
    return state.city.lines;
}

function getVisibleLines() {
    return getFilteredCity().lines;
}

// ── URL Routing ──
// Format: #/cityId or #/cityId/lineId
function parseHash() {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const parts = hash.split('/').filter(Boolean);

    return {
        cityId: parts[0] || 'chennai',
        lineId: parts[1] || null,
    };
}

function setHash(cityId, lineId) {
    if (lineId) {
        window.location.hash = `/${cityId}/${lineId}`;
    } else {
        window.location.hash = `/${cityId}`;
    }
}

// ── Initialize ──
function init() {
    // Parse initial URL
    const route = parseHash();
    state.cityId = route.cityId;
    state.city = cities[route.cityId] || chennaiMetro;

    // If the line from URL exists, select it
    if (route.lineId) {
        const line = state.city.lines.find(l => l.id === route.lineId);
        if (line) {
            state.activeLine = route.lineId;
            // Auto-enable upcoming if the line is under construction
            if (line.status !== 'operational') {
                state.showUpcoming = true;
            }
        }
    }

    renderHeader(state.city, handleCityChange);

    const main = document.getElementById('app-main');
    main.className = 'app-main';

    renderAll();

    // Handle hash changes
    window.addEventListener('hashchange', () => {
        const route = parseHash();
        const newCity = cities[route.cityId];
        if (newCity && newCity.id !== state.city.id) {
            state.city = newCity;
            state.cityId = route.cityId;
            state.activeLine = null;
            state.activeStation = null;
            renderHeader(state.city, handleCityChange);
        }
        if (route.lineId) {
            const line = state.city.lines.find(l => l.id === route.lineId);
            if (line) {
                state.activeLine = route.lineId;
                if (line.status !== 'operational') state.showUpcoming = true;
            }
        } else {
            state.activeLine = null;
        }
        state.activeStation = null;
        renderAll();
    });
}

// ── Render All ──
function renderAll() {
    renderSidebar();
    renderContent();
}

// ── Sidebar ──
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

    // Bind "Show Upcoming" toggle
    const toggle = sidebar.querySelector('#upcoming-toggle');
    if (toggle) {
        toggle.addEventListener('change', (e) => {
            state.showUpcoming = e.target.checked;
            // If active line is now hidden, deselect it
            if (state.activeLine) {
                const line = state.city.lines.find(l => l.id === state.activeLine);
                if (line && line.status !== 'operational' && !state.showUpcoming) {
                    state.activeLine = null;
                    state.activeStation = null;
                    setHash(state.cityId, null);
                }
            }
            renderAll();
        });
    }

    // Bind "View All Network" button
    const viewAllBtn = sidebar.querySelector('#view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            state.activeLine = null;
            state.activeStation = null;
            setHash(state.cityId, null);
            renderAll();
        });
    }

    // Render line info if a line is selected
    const lineInfoContainer = sidebar.querySelector('#line-info-container');
    if (state.activeLine && lineInfoContainer) {
        const line = state.city.lines.find(l => l.id === state.activeLine);
        if (line) {
            lineInfoContainer.innerHTML = renderLineInfo(line);
        }
    }
}

// ── Content ──
function renderContent() {
    const content = document.getElementById('content');
    content.className = 'content';
    const displayCity = state.showUpcoming ? state.city : getFilteredCity();

    if (!state.activeLine) {
        // Show welcome state with full network map
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

// ── Event Handlers ──
function handleCityChange(cityId) {
    const newCity = cities[cityId];
    if (newCity) {
        state.city = newCity;
        state.cityId = cityId;
        state.activeLine = null;
        state.activeStation = null;
        state.showUpcoming = false;
        setHash(cityId, null);
        renderHeader(state.city, handleCityChange);
        renderAll();
    }
}

function handleLineSelect(lineId) {
    if (state.activeLine === lineId) {
        // Deselect → back to full network view
        state.activeLine = null;
        state.activeStation = null;
        setHash(state.cityId, null);
    } else {
        state.activeLine = lineId;
        state.activeStation = null;
        setHash(state.cityId, lineId);
    }
    renderAll();
}

function handleStationClick(stationId) {
    state.activeStation = state.activeStation === stationId ? null : stationId;
    renderContent();

    const el = document.querySelector(`.station-item[data-station-id="${stationId}"]`);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function handleMapStationClick(stationId, lineId) {
    if (lineId && lineId !== 'interchange') {
        state.activeLine = lineId;
        setHash(state.cityId, lineId);
    } else if (lineId === 'interchange') {
        if (!state.activeLine) {
            state.activeLine = 'blue';
            setHash(state.cityId, 'blue');
        }
    }

    state.activeStation = state.activeStation === stationId ? null : stationId;
    renderAll();

    setTimeout(() => {
        const el = document.querySelector(`.station-item[data-station-id="${stationId}"]`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', init);
