/**
 * BharatOne — Main Application Controller
 * Orchestrates all components, handles routing and state
 */

import chennaiMetro from './data/chennai.js';
import { renderHeader } from './components/header.js';
import { renderLineSelector, bindLineCardEvents } from './components/lineSelector.js';
import { renderLineInfo } from './components/lineInfo.js';
import { renderStationList, bindStationEvents } from './components/stationList.js';
import { renderMetroMap } from './components/metroMap.js';

// ── State ──
const state = {
    city: chennaiMetro,
    activeLine: null,
    activeStation: null,
};

// ── Initialize ──
function init() {
    renderHeader(state.city, handleCityChange);

    const main = document.getElementById('app-main');
    main.className = 'app-main';

    // Check URL hash for direct linking
    const hash = window.location.hash.replace('#', '');
    if (hash && state.city.lines.find(l => l.id === hash)) {
        state.activeLine = hash;
    }

    renderAll();

    // Handle hash changes
    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash.replace('#', '');
        if (newHash && state.city.lines.find(l => l.id === newHash)) {
            state.activeLine = newHash;
            state.activeStation = null;
            renderAll();
        }
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
    sidebar.innerHTML = renderLineSelector(state.city, state.activeLine, handleLineSelect);
    bindLineCardEvents(handleLineSelect);

    // Render line info if a line is selected
    const lineInfoContainer = sidebar.querySelector('#line-info-container');
    if (state.activeLine) {
        const line = state.city.lines.find(l => l.id === state.activeLine);
        lineInfoContainer.innerHTML = renderLineInfo(line);
    }
}

// ── Content ──
function renderContent() {
    const content = document.getElementById('content');
    content.className = 'content';

    if (!state.activeLine) {
        // Show welcome state with map
        content.innerHTML = `
      <div id="metro-map"></div>
      <div class="welcome-state">
        <div class="welcome-icon">🚇</div>
        <h2 class="welcome-title">Welcome to ${state.city.name}</h2>
        <p class="welcome-text">
          Explore ${state.city.nameLocal} — ${state.city.totalLines} lines, ${state.city.totalStations} stations, spanning ${state.city.totalLength} across the city.
          <br/><br/>
          Select a metro line from the sidebar to view its route and stations.
        </p>
      </div>
    `;
        // Render the map showing both lines
        renderMetroMap(state.city, null, null, handleMapStationClick);
        return;
    }

    const line = state.city.lines.find(l => l.id === state.activeLine);

    // Build content with fresh divs
    content.innerHTML = `
      <div id="metro-map"></div>
      <div id="station-list"></div>
    `;

    // Render metro map
    renderMetroMap(state.city, state.activeLine, state.activeStation, handleMapStationClick);

    // Render station list
    const stationListContainer = document.getElementById('station-list');
    stationListContainer.innerHTML = renderStationList(line, state.activeStation, handleStationClick);
    bindStationEvents(handleStationClick);
}

// ── Event Handlers ──
function handleCityChange(cityId) {
    // Future: load different city data
    console.log('City changed to:', cityId);
}

function handleLineSelect(lineId) {
    if (state.activeLine === lineId) {
        // Deselect
        state.activeLine = null;
        state.activeStation = null;
        window.location.hash = '';
    } else {
        state.activeLine = lineId;
        state.activeStation = null;
        window.location.hash = lineId;
    }
    renderAll();
}

function handleStationClick(stationId) {
    state.activeStation = state.activeStation === stationId ? null : stationId;

    // Re-render content to show highlighted station
    renderContent();

    // Scroll the station into view
    const el = document.querySelector(`.station-item[data-station-id="${stationId}"]`);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function handleMapStationClick(stationId, lineId) {
    // If clicking from the map, also select the line
    if (lineId && lineId !== 'interchange') {
        state.activeLine = lineId;
        window.location.hash = lineId;
    } else if (lineId === 'interchange') {
        // For interchange, select the first line
        if (!state.activeLine) {
            state.activeLine = 'blue';
            window.location.hash = 'blue';
        }
    }

    state.activeStation = state.activeStation === stationId ? null : stationId;
    renderAll();

    // Scroll station into view in the list
    setTimeout(() => {
        const el = document.querySelector(`.station-item[data-station-id="${stationId}"]`);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', init);
