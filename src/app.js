/**
 * OneMetro — Main Application Controller
 * Orchestrates all components, handles routing and state
 */

import chennaiMetro from './data/chennai.js';
import bengaluruMetro from './data/bengaluru.js';
import delhiMetro from './data/delhi.js';
import { renderHeader } from './components/header.js';
import { renderLineSelector, bindLineCardEvents } from './components/lineSelector.js';
import { renderLineInfo } from './components/lineInfo.js';
import { renderStationList, bindStationEvents } from './components/stationList.js';
import { renderMetroMap } from './components/metroMap.js';
import { renderStationPage, bindStationPageEvents } from './components/stationPage.js';

import { renderLandingPage } from './components/landingPage.js';

// ── City Registry ──
const cities = {
    chennai: chennaiMetro,
    bengaluru: bengaluruMetro,
    delhi: delhiMetro,
};

// ── State ──
const state = {
    cityId: null,
    city: null,
    activeLine: null,
    activeStation: null,
    showUpcoming: false, // toggle for Phase 2 lines
};

// ── Helpers ──
function getFilteredCity() {
    // Return city data filtered by showUpcoming toggle
    if (!state.city) return null;
    const city = state.city;
    if (state.showUpcoming) return city;
    return {
        ...city,
        lines: city.lines.filter(l => l.status === 'operational'),
    };
}

function getAllLines() {
    return state.city ? state.city.lines : [];
}

function getVisibleLines() {
    const filtered = getFilteredCity();
    return filtered ? filtered.lines : [];
}

// ── URL Routing ──
// Format: #/cityId or #/cityId/lineId
function parseHash() {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    const parts = hash.split('/').filter(Boolean);

    return {
        cityId: parts[0] || null,
        lineId: parts[1] || null,
        stationId: parts[2] || null
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

// ── Initialize ──
function init() {
    // Parse initial URL
    const route = parseHash();
    state.cityId = route.cityId;
    state.city = cities[route.cityId] || null;

    // If the line from URL exists, select it
    if (state.city && route.lineId) {
        const line = state.city.lines.find(l => l.id === route.lineId);
        if (line) {
            state.activeLine = route.lineId;
            // Auto-enable upcoming if the line is under construction
            if (line.status !== 'operational') {
                state.showUpcoming = true;
            }
            if (route.stationId) {
                const station = line.stations.find(s => s.id === route.stationId);
                if (station) {
                    state.activeStation = route.stationId;
                }
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

        if (!route.cityId) {
            state.city = null;
            state.cityId = null;
            state.activeLine = null;
            state.activeStation = null;
            renderHeader(null, handleCityChange);
        } else if (newCity && (!state.city || newCity.id !== state.city.id)) {
            state.city = newCity;
            state.cityId = route.cityId;
            state.activeLine = null;
            state.activeStation = null;
            renderHeader(state.city, handleCityChange);
        }

        if (state.city && route.lineId) {
            const line = state.city.lines.find(l => l.id === route.lineId);
            if (line) {
                state.activeLine = route.lineId;
                if (line.status !== 'operational') state.showUpcoming = true;

                if (route.stationId) {
                    const station = line.stations.find(s => s.id === route.stationId);
                    if (station) {
                        state.activeStation = route.stationId;
                    } else {
                        state.activeStation = null;
                    }
                } else {
                    state.activeStation = null;
                }
            }
        } else {
            state.activeLine = null;
            state.activeStation = null;
        }
        renderAll();
    });
}

// ── Render All ──
function renderAll() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    if (!state.city) {
        if (sidebar) sidebar.style.display = 'none';
        if (content) content.style.display = 'none';
        renderLandingPage(cities, handleCityChange);
        return;
    }

    // Restore layout
    if (sidebar) sidebar.style.display = '';
    if (content) content.style.display = '';

    // Clear landing page if it exists
    const lp = document.getElementById('landing-page');
    if (lp) lp.remove();

    renderSidebar();
    renderContent();
}

// ── Smooth content transition helper ──
function crossfadeContent(updateFn) {
    const content = document.getElementById('content');
    content.style.opacity = '0';
    content.style.transform = 'scale(0.98)';

    setTimeout(() => {
        updateFn();
        // Force reflow
        void content.offsetHeight;
        content.style.opacity = '1';
        content.style.transform = 'scale(1)';
    }, 150);
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
    bindSidebarEvents();

    // Render line info if a line is selected
    const lineInfoContainer = sidebar.querySelector('#line-info-container');
    if (state.activeLine && lineInfoContainer) {
        const line = state.city.lines.find(l => l.id === state.activeLine);
        if (line) {
            lineInfoContainer.innerHTML = renderLineInfo(line);
        }
    }
}

// ── Partial sidebar update (for toggle — avoids rebuilding the toggle itself) ──
function updateSidebarLines() {
    const sidebar = document.getElementById('sidebar');
    const visibleLines = getVisibleLines();

    // Update stats
    const statsContainer = sidebar.querySelector('.city-stats');
    if (statsContainer) {
        const totalStations = visibleLines.reduce((sum, l) => sum + l.totalStations, 0);
        const totalLength = visibleLines.reduce((sum, l) => {
            const numericLength = parseFloat(l.length.replace(/[^0-9.]/g, '')) || 0;
            return sum + numericLength;
        }, 0);

        const statValues = statsContainer.querySelectorAll('.city-stat-value');
        if (statValues[0]) statValues[0].textContent = visibleLines.length;
        if (statValues[1]) statValues[1].textContent = totalStations;
        if (statValues[2]) statValues[2].textContent = `${totalLength.toFixed(1)} km`;
    }

    // Update upcoming info text
    const upcomingInfo = sidebar.querySelector('.upcoming-info');
    if (upcomingInfo) {
        upcomingInfo.style.display = state.showUpcoming ? '' : 'none';
    }

    // Rebuild line cards sections only
    const operationalSection = sidebar.querySelectorAll('.line-cards')[0];
    const upcomingSection = sidebar.querySelectorAll('.line-cards')[1];
    const upcomingSectionTitle = sidebar.querySelectorAll('.sidebar-section-title')[1];

    const operationalLines = visibleLines.filter(l => l.status === 'operational');
    const upcomingLines = visibleLines.filter(l => l.status !== 'operational');

    // Update operational line cards active state
    if (operationalSection) {
        operationalSection.querySelectorAll('.line-card').forEach(card => {
            card.classList.toggle('active', state.activeLine === card.dataset.lineId);
        });
    }

    // Show/hide upcoming section
    if (upcomingSection) {
        upcomingSection.parentElement.style.display = upcomingLines.length > 0 ? '' : 'none';
    } else if (state.showUpcoming && upcomingLines.length > 0) {
        // Need to add the upcoming section — do a full sidebar render
        renderSidebar();
        return;
    }

    if (!state.showUpcoming && upcomingSection) {
        upcomingSection.parentElement.style.display = 'none';
    }

    // Update line info
    const lineInfoContainer = sidebar.querySelector('#line-info-container');
    if (lineInfoContainer) {
        if (state.activeLine) {
            const line = state.city.lines.find(l => l.id === state.activeLine);
            if (line) {
                lineInfoContainer.innerHTML = renderLineInfo(line);
            }
        } else {
            lineInfoContainer.innerHTML = '';
        }
    }
}

// ── Bind sidebar events (separated so we can call after full render) ──
function bindSidebarEvents() {
    const sidebar = document.getElementById('sidebar');

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
                    setHash(state.cityId, null, null);
                }
            }
            // Perform full render to ensure all sections (operational/upcoming) are correctly handled
            renderSidebar();
            crossfadeContent(renderContent);
        });
    }

    // Bind "View All Network" button
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

// ── Content ──
function renderContent() {
    const content = document.getElementById('content');
    content.className = 'content';
    const displayCity = state.showUpcoming ? state.city : getFilteredCity();

    // Check if we have an active station to show the detail page
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
                }
            });
            return;
        }
    }

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
        setHash(cityId, null, null);
        renderHeader(state.city, handleCityChange);
        renderAll();
    }
}

function handleLineSelect(lineId) {
    if (state.activeLine === lineId) {
        // Deselect → back to full network view
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
    if (state.activeStation === stationId) {
        state.activeStation = null;
    } else {
        state.activeStation = stationId;
    }
    setHash(state.cityId, state.activeLine, state.activeStation);
    renderContent();
}

function handleMapStationClick(stationId, lineId) {
    if (lineId && lineId !== 'interchange') {
        state.activeLine = lineId;
    } else if (lineId === 'interchange') {
        if (!state.activeLine) {
            state.activeLine = 'blue';
        }
    }

    if (state.activeStation === stationId) {
        state.activeStation = null;
    } else {
        state.activeStation = stationId;
    }

    setHash(state.cityId, state.activeLine, state.activeStation);
    renderAll();
}

// ── Boot ──
document.addEventListener('DOMContentLoaded', init);
