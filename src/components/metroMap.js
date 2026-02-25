/**
 * Metro Map Component
 * ─────────────────────────────────────────────────────────────────────────
 * Generic SVG metro map renderer. All city-specific layout data lives in
 * src/data/mapLayouts.js — this file contains ZERO city-specific logic.
 *
 * To add a new city map: add an entry to mapLayouts.js. Done.
 */

import { mapLayouts } from '../data/mapLayouts.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

// ─────────────────────────────────────────────────────────────────────────
// LAYOUT ENGINE
// ─────────────────────────────────────────────────────────────────────────

/**
 * Compute canvas dimensions and per-line coordinates for a city.
 * Reads config from mapLayouts.js — no city-specific branches here.
 */
function getLayout(cityData, showUpcoming) {
  const lines = cityData.lines.filter(l => showUpcoming || l.status === 'operational');
  const hasPhase2 = lines.some(l => l.status !== 'operational');

  const cityLayout = mapLayouts[cityData.id];

  let width, height, geoBounds = null;

  if (!cityLayout) {
    // Unknown city — fallback generic canvas
    width = hasPhase2 ? 1100 : 900;
    height = hasPhase2 ? 900 : 700;
  } else if (cityLayout.type === 'geo') {
    // Geographic projection: canvas size derived from lat/lon bounds
    const bounds = (hasPhase2 && cityLayout.boundsExpanded)
      ? cityLayout.boundsExpanded
      : cityLayout.bounds;
    geoBounds = bounds;
    const scale = cityLayout.scale || 3000;
    const pad = cityLayout.pad || 50;
    width = Math.round((bounds.lonMax - bounds.lonMin) * scale) + 2 * pad;
    height = Math.round((bounds.latMax - bounds.latMin) * scale) + 2 * pad;
  } else if (cityData.id === 'bengaluru') {
    // Algorithmic city — canvas size defined here, coords computed by helper
    width = hasPhase2 ? 1100 : 900;
    height = hasPhase2 ? 1200 : 700;
  } else if (cityLayout.type === 'schematic') {
    // Schematic pixel layout — fixed canvas, optionally with phase-2 expansion
    width = (hasPhase2 && cityLayout.widthExpanded) ? cityLayout.widthExpanded : (cityLayout.width || cityLayout.widthPhase1 || 1200);
    height = (hasPhase2 && cityLayout.heightExpanded) ? cityLayout.heightExpanded : (cityLayout.height || cityLayout.heightPhase1 || 1200);
  } else {
    width = hasPhase2 ? 1100 : 900;
    height = hasPhase2 ? 900 : 700;
  }

  const result = { width, height, lines: [] };

  lines.forEach(line => {
    const coords = generateLineCoords(
      cityData.id, cityLayout, line, lines,
      50, width, height, hasPhase2, geoBounds
    );
    result.lines.push({ coords, line });
  });

  snapInterchanges(result.lines);
  return result;
}

/**
 * Project a geographic coordinate (lat/lon) to SVG pixel space.
 */
function geoProject(lat, lon, bounds, width, height, pad = 50) {
  const x = pad + ((lon - bounds.lonMin) / (bounds.lonMax - bounds.lonMin)) * (width - 2 * pad);
  const y = pad + ((bounds.latMax - lat) / (bounds.latMax - bounds.latMin)) * (height - 2 * pad);
  return { x, y };
}

/**
 * Interpolate a station array across a sparse set of waypoints.
 * Uses a smooth Hermite curve (smoothstep) between each pair of waypoints.
 * Waypoints must carry { idx, x, y } (already in pixel space).
 */
function interpolateWaypoints(waypoints, totalStations, coords, line) {
  const sorted = [...waypoints].sort((a, b) => a.idx - b.idx);

  // Clamp to station 0 and last station if not provided
  if (sorted[0].idx !== 0) {
    sorted.unshift({ idx: 0, x: sorted[0].x, y: sorted[0].y });
  }
  if (sorted[sorted.length - 1].idx !== totalStations - 1) {
    const last = sorted[sorted.length - 1];
    sorted.push({ idx: totalStations - 1, x: last.x, y: last.y });
  }

  for (let i = 0; i < totalStations; i++) {
    let wpBefore = sorted[0];
    let wpAfter = sorted[sorted.length - 1];
    for (let w = 0; w < sorted.length - 1; w++) {
      if (i >= sorted[w].idx && i <= sorted[w + 1].idx) {
        wpBefore = sorted[w];
        wpAfter = sorted[w + 1];
        break;
      }
    }
    const segLen = wpAfter.idx - wpBefore.idx;
    const t = segLen > 0 ? (i - wpBefore.idx) / segLen : 0;
    const smooth = t * t * (3 - 2 * t); // smoothstep
    const x = wpBefore.x + (wpAfter.x - wpBefore.x) * smooth;
    const y = wpBefore.y + (wpAfter.y - wpBefore.y) * smooth;
    coords.push({ x, y, station: line.stations[i], line });
  }
}

/**
 * Dispatch coordinate generation for a single line.
 * - For geo cities:       project lat/lon waypoints from mapLayouts.js
 * - For schematic cities: use pixel waypoints from mapLayouts.js
 * - For Bengaluru:        delegate to the algorithmic helper below
 * - Unknown city/line:    simple vertical fallback
 */
function generateLineCoords(cityId, cityLayout, line, allLines, padding, width, height, hasPhase2, geoBounds) {
  const count = line.stations.length;
  const coords = [];

  // ── Bengaluru: algorithmically computed (lines reference each other) ──
  if (cityId === 'bengaluru') {
    return generateBengaluruCoords(line, allLines, padding, width, height, hasPhase2);
  }

  // ── All other cities: data-driven from mapLayouts ──
  const lineWaypoints = cityLayout && cityLayout.lines && cityLayout.lines[line.id];

  if (!lineWaypoints || !lineWaypoints.length) {
    // Fallback: evenly-spaced vertical line
    const stepY = (height - 2 * padding) / Math.max(count - 1, 1);
    for (let i = 0; i < count; i++) {
      coords.push({ x: width / 2, y: padding + i * stepY, station: line.stations[i], line });
    }
    return coords;
  }

  if (cityLayout.type === 'geo') {
    // Project lat/lon waypoints into pixel space, then interpolate
    const pad = cityLayout.pad || 50;
    const pixelWaypoints = lineWaypoints.map(wp => {
      const pos = geoProject(wp.lat, wp.lon, geoBounds, width, height, pad);
      return { idx: wp.idx, x: pos.x, y: pos.y };
    });
    interpolateWaypoints(pixelWaypoints, count, coords, line);
  } else {
    // Schematic: waypoints already in pixel space
    interpolateWaypoints(lineWaypoints, count, coords, line);
  }

  return coords;
}

// ─────────────────────────────────────────────────────────────────────────
// BENGALURU — Algorithmic layout
// Lines are positioned relative to each other (intersection snapping).
// This is the ONLY city-specific code in metroMap.js.
// ─────────────────────────────────────────────────────────────────────────

function generateBengaluruCoords(line, allLines, padding, width, height, hasPhase2) {
  const count = line.stations.length;
  const coords = [];
  const offsetY = hasPhase2 ? 300 : 0;
  const baseHeight = hasPhase2 ? 900 : height;

  switch (line.id) {
    case 'purple': {
      const startX = padding + 20;
      const endX = width - padding - 20;
      const centerY = baseHeight * 0.42 + offsetY;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        coords.push({
          x: startX + (endX - startX) * t,
          y: centerY + Math.sin(t * Math.PI * 1.5) * 25,
          station: line.stations[i], line,
        });
      }
      break;
    }

    case 'green': {
      const startY = padding - 30 + offsetY;
      const endY = baseHeight - padding - 70 + offsetY;
      const centerX = width * 0.40;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        coords.push({
          x: centerX + Math.sin(t * Math.PI) * 30,
          y: startY + (endY - startY) * t,
          station: line.stations[i], line,
        });
      }
      break;
    }

    case 'yellow': {
      const greenData = allLines.find(l => l.id === 'green');
      const rvIndex = greenData ? greenData.stations.findIndex(s => s.name === 'RV Road') : 23;
      const greenCount = greenData ? greenData.stations.length : 32;
      const gStartY = padding - 30 + offsetY;
      const gEndY = baseHeight - padding - 70 + offsetY;
      const gCenterX = width * 0.40;
      const rvT = rvIndex / (greenCount - 1);
      const rvY = gStartY + (gEndY - gStartY) * rvT;
      const rvX = gCenterX + Math.sin(rvT * Math.PI) * 30;
      const endX = width * 0.7;
      const endY = baseHeight - padding + offsetY;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        coords.push({
          x: rvX + (endX - rvX) * t,
          y: rvY + (endY - rvY) * t,
          station: line.stations[i], line,
        });
      }
      break;
    }

    case 'pink': {
      const purpleData = allLines.find(l => l.id === 'purple');
      const mgIndex = purpleData ? purpleData.stations.findIndex(s => s.name === 'M.G. Road') : 18;
      const purpleCount = purpleData ? purpleData.stations.length : 37;
      const pStartX = padding + 20;
      const pEndX = width - padding - 20;
      const pCenterY = baseHeight * 0.42 + offsetY;
      const mgT = mgIndex / (purpleCount - 1);
      const mgX = pStartX + (pEndX - pStartX) * mgT;
      const greenX = width * 0.40;
      const startY = baseHeight - padding - 40 + offsetY;
      const endY = padding - 40 + offsetY;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const y = startY + (endY - startY) * t;
        let bX;
        if (i <= 4) {
          bX = greenX + 45;
        } else if (i <= 10) {
          const localT = (i - 4) / (10 - 4);
          bX = (greenX + 45) + (mgX - (greenX + 45)) * localT;
        } else {
          bX = mgX;
        }
        coords.push({ x: bX + Math.sin(t * Math.PI) * 20, y, station: line.stations[i], line });
      }
      break;
    }

    case 'blue': {
      // Silk Board anchor — from Yellow line
      const greenData = allLines.find(l => l.id === 'green');
      const rvIndex = greenData ? greenData.stations.findIndex(s => s.name === 'RV Road') : 23;
      const greenCount = greenData ? greenData.stations.length : 32;
      const gStartY = padding - 30 + offsetY;
      const gEndY = baseHeight - padding - 70 + offsetY;
      const gCenterX = width * 0.40;
      const rvT = rvIndex / (greenCount - 1);
      const rvY = gStartY + (gEndY - gStartY) * rvT;
      const rvX = gCenterX + Math.sin(rvT * Math.PI) * 30;
      const yEndX = width * 0.7;
      const yEndY = baseHeight - padding + offsetY;
      const tSilk = 4 / 15;
      const silkX = rvX + (yEndX - rvX) * tSilk;
      const silkY = rvY + (yEndY - rvY) * tSilk;
      // KR Puram anchor — from Purple line
      const pStartX = padding + 20;
      const pEndX = width - padding - 20;
      const pCenterY = baseHeight * 0.42 + offsetY;
      const tKR = 24 / 36;
      const krX = pStartX + (pEndX - pStartX) * tKR;
      const krY = pCenterY + Math.sin(tKR * Math.PI * 1.5) * 25;
      // Nagawara anchor — from Pink line top
      const purpleData = allLines.find(l => l.id === 'purple');
      const mgIndexBlue = purpleData ? purpleData.stations.findIndex(s => s.name === 'M.G. Road') : 18;
      const mgX = pStartX + (pEndX - pStartX) * (mgIndexBlue / 36);
      const nagX = mgX;
      const nagY = padding - 40 + offsetY;

      for (let i = 0; i < count; i++) {
        let x, y;
        if (i <= 12) {
          const t = i / 12;
          x = silkX + (krX - silkX) * t + Math.sin(t * Math.PI) * 80;
          y = silkY + (krY - silkY) * t;
        } else if (i <= 18) {
          const t = (i - 12) / (18 - 12);
          x = krX + (nagX - krX) * t + Math.sin(t * Math.PI) * 50;
          y = krY + (nagY - krY) * t;
        } else {
          const t = (i - 18) / (count - 1 - 18);
          x = nagX + Math.sin(t * Math.PI) * 20;
          y = nagY - t * (nagY - padding);
        }
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    default: {
      // Fallback for any unknown Bengaluru line
      const stepY = (height - 2 * padding) / Math.max(count - 1, 1);
      for (let i = 0; i < count; i++) {
        coords.push({ x: width / 2, y: padding + i * stepY, station: line.stations[i], line });
      }
    }
  }

  return coords;
}


function snapInterchanges(lineEntries) {
  const stationPositions = {};
  const sorted = [...lineEntries].sort((a, b) => {
    if (a.line.status === 'operational' && b.line.status !== 'operational') return -1;
    if (b.line.status === 'operational' && a.line.status !== 'operational') return 1;
    return 0;
  });
  sorted.forEach(({ coords }) => {
    coords.forEach(coord => {
      if (coord.station.isInterchange) {
        const key = coord.station.name;
        if (!stationPositions[key]) {
          stationPositions[key] = { x: coord.x, y: coord.y };
        }
      }
    });
  });
  lineEntries.forEach(({ coords }) => {
    coords.forEach(coord => {
      if (coord.station.isInterchange) {
        const key = coord.station.name;
        const pos = stationPositions[key];
        if (pos) {
          coord.x = pos.x;
          coord.y = pos.y;
        }
      }
    });
  });
}

function createSVGPath(coords) {
  if (coords.length < 2) return '';
  let d = `M ${coords[0].x} ${coords[0].y}`;
  for (let i = 1; i < coords.length; i++) {
    d += ` L ${coords[i].x} ${coords[i].y}`;
  }
  return d;
}

function generateGlowFilter(lineId, color) {
  const r = parseInt(color.slice(1, 3), 16) / 255;
  const g = parseInt(color.slice(3, 5), 16) / 255;
  const b = parseInt(color.slice(5, 7), 16) / 255;
  return `
    <filter id="glow-${lineId}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="0 0 0 0 ${r.toFixed(2)}  0 0 0 0 ${g.toFixed(2)}  0 0 0 0 ${b.toFixed(2)}  0 0 0 0.6 0"/>
      <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  `;
}

// ═══════════════════════════════════════════════════
// RENDER + MAP VIEWER (toolbar, zoom, pan, fullscreen)
// ═══════════════════════════════════════════════════

export function renderMetroMap(cityData, activeLine, activeStation, showUpcoming, onStationClick) {
  const container = document.getElementById('metro-map');
  if (!container) return;

  const layout = getLayout(cityData, showUpcoming);
  const renderedInterchanges = new Set();

  container.innerHTML = `
    <div class="metro-map-container" id="map-viewer">
      <div class="map-toolbar">
        <div class="map-toolbar-left">
          <button class="map-ctrl-btn map-minimize-btn" id="map-minimize" title="Minimize/Expand map">∨</button>
          <div class="map-toolbar-title">
            <span class="map-toolbar-dot"></span>
            Network Map
          </div>
        </div>
        <div class="map-toolbar-controls">
          <span class="map-zoom-level" id="zoom-level">100%</span>
          <button class="map-ctrl-btn" id="zoom-in" title="Zoom in">+</button>
          <button class="map-ctrl-btn" id="zoom-out" title="Zoom out">−</button>
          <button class="map-ctrl-btn" id="zoom-reset" title="Reset zoom">⟲</button>
          <button class="map-ctrl-btn map-fullscreen-btn" id="fullscreen-toggle" title="Toggle fullscreen">⛶</button>
        </div>
      </div>
      <div class="map-viewport" id="map-viewport">
          <svg class="metro-map-svg" id="map-svg" viewBox="0 0 ${layout.width} ${layout.height}" xmlns="${SVG_NS}">
            <defs>
              ${layout.lines.map(({ line }) => generateGlowFilter(line.id, line.color)).join('')}
            </defs>
            <pattern id="grid-dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="0.5" fill="rgba(148, 163, 184, 0.15)"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-dots)" rx="16"/>

            ${layout.lines.map(({ coords, line }) => {
    const isActive = !activeLine || activeLine === line.id;
    const isUpcoming = line.status !== 'operational';
    return `<path d="${createSVGPath(coords)}"
                stroke="${line.color}" stroke-width="${isActive ? 5 : 3}" fill="none"
                stroke-linecap="round" stroke-linejoin="round"
                opacity="${isActive ? 1 : 0.2}"
                ${isUpcoming ? 'stroke-dasharray="12 6"' : ''}
                filter="${activeLine === line.id ? `url(#glow-${line.id})` : ''}"
                class="metro-line-path" />`;
  }).join('')}

            ${layout.lines.map(({ coords, line }) => {
    return coords.map((coord, i) => {
      // Logic for conditional interchange rendering
      let actsAsInterchange = false;
      if (coord.station.isInterchange) {
        const visibleLineIds = layout.lines.map(l => l.line.id);
        actsAsInterchange = coord.station.interchangeWith.some(id => visibleLineIds.includes(id));
      }

      if (actsAsInterchange) {
        const key = coord.station.name;
        if (renderedInterchanges.has(key)) return '';
        renderedInterchanges.add(key);
        return renderMapInterchange(coord, activeLine, activeStation);
      }
      return renderMapStation(coord, i, activeLine, activeStation, line.id, coords.length);
    }).join('');
  }).join('')}
          </svg>
      </div>
      <div class="map-legend" id="map-legend">
        <div class="map-legend-header" id="legend-header">
          <span class="map-legend-title">Legend</span>
          <button class="map-legend-toggle" id="legend-toggle" title="Toggle Legend">×</button>
        </div>
        <div class="map-legend-content">
          ${layout.lines.map(({ line }) => `
            <div class="map-legend-item ${activeLine === line.id ? 'active' : ''}" data-line-id="${line.id}">
              <span class="map-legend-color" style="background: ${line.color}; box-shadow: 0 0 8px ${line.color}44;"></span>
              <span class="map-legend-name">${line.name}</span>
              ${line.status !== 'operational' ? '<span class="map-legend-tag">Upcoming</span>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Bind station click/hover events
  container.querySelectorAll('.map-station-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      if (onStationClick) onStationClick(dot.dataset.stationId, dot.dataset.lineId);
    });
    dot.addEventListener('mouseenter', (e) => showTooltip(e, dot.dataset.stationName, container));
    dot.addEventListener('mouseleave', () => hideTooltip(container));
  });

  // Initialize zoom/pan/fullscreen controls
  initMapControls(container);
}

// ── SVG ViewBox Zoom / Pan / Fullscreen Controller ──
// Zoom by changing SVG viewBox (not CSS transform) — stays crisp at any level

function initMapControls(container) {
  const viewer = container.querySelector('#map-viewer');
  const viewport = container.querySelector('#map-viewport');
  const svg = container.querySelector('#map-svg');
  const zoomLabel = container.querySelector('#zoom-level');

  // Parse original viewBox
  const orig = svg.getAttribute('viewBox').split(' ').map(Number);
  let vx = orig[0], vy = orig[1], vw = orig[2], vh = orig[3];
  const origW = vw, origH = vh;

  let scale = 1;
  let isPanning = false, startX = 0, startY = 0, startVx = 0, startVy = 0;
  const MIN_ZOOM = 0.5, MAX_ZOOM = 6;

  function updateViewBox() {
    svg.setAttribute('viewBox', `${vx} ${vy} ${vw} ${vh}`);
    zoomLabel.textContent = `${Math.round(scale * 100)}%`;
  }

  // Convert screen coords to SVG coords
  function screenToSVG(clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    const rx = (clientX - rect.left) / rect.width;
    const ry = (clientY - rect.top) / rect.height;
    return { x: vx + rx * vw, y: vy + ry * vh };
  }

  function zoomAt(factor, clientX, clientY) {
    // Point in SVG space under cursor
    const pt = (clientX !== undefined)
      ? screenToSVG(clientX, clientY)
      : { x: vx + vw / 2, y: vy + vh / 2 };

    const newScale = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, scale * factor));
    const newW = origW / newScale;
    const newH = origH / newScale;

    // Keep the point under cursor stationary
    const rx = (clientX !== undefined)
      ? (clientX - svg.getBoundingClientRect().left) / svg.getBoundingClientRect().width
      : 0.5;
    const ry = (clientY !== undefined)
      ? (clientY - svg.getBoundingClientRect().top) / svg.getBoundingClientRect().height
      : 0.5;

    vx = pt.x - rx * newW;
    vy = pt.y - ry * newH;
    vw = newW;
    vh = newH;
    scale = newScale;
    updateViewBox();
  }

  // Mouse wheel zoom
  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.85 : 1.18;
    zoomAt(factor, e.clientX, e.clientY);
  }, { passive: false });

  // Mouse drag pan (translate viewBox origin)
  viewport.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isPanning = true;
    startX = e.clientX;
    startY = e.clientY;
    startVx = vx;
    startVy = vy;
    viewport.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isPanning) return;
    const rect = svg.getBoundingClientRect();
    // Convert pixel delta to SVG coordinate delta
    const dx = (e.clientX - startX) / rect.width * vw;
    const dy = (e.clientY - startY) / rect.height * vh;
    vx = startVx - dx;
    vy = startVy - dy;
    updateViewBox();
  });

  window.addEventListener('mouseup', () => {
    if (isPanning) {
      isPanning = false;
      viewport.style.cursor = 'grab';
    }
  });

  // Touch pinch zoom + pan
  let lastDist = 0;
  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastDist = Math.sqrt(dx * dx + dy * dy);
    } else if (e.touches.length === 1) {
      isPanning = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startVx = vx;
      startVy = vy;
    }
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      if (lastDist > 0) zoomAt(dist / lastDist, cx, cy);
      lastDist = dist;
    } else if (e.touches.length === 1 && isPanning) {
      const rect = svg.getBoundingClientRect();
      const dx = (e.touches[0].clientX - startX) / rect.width * vw;
      const dy = (e.touches[0].clientY - startY) / rect.height * vh;
      vx = startVx - dx;
      vy = startVy - dy;
      updateViewBox();
    }
  }, { passive: false });

  viewport.addEventListener('touchend', () => { isPanning = false; lastDist = 0; });

  // Button controls
  container.querySelector('#zoom-in').addEventListener('click', () => zoomAt(1.3));
  container.querySelector('#zoom-out').addEventListener('click', () => zoomAt(0.75));
  container.querySelector('#zoom-reset').addEventListener('click', () => {
    scale = 1; vx = orig[0]; vy = orig[1]; vw = orig[2]; vh = orig[3];
    updateViewBox();
  });

  // Fullscreen toggle
  const fsBtn = container.querySelector('#fullscreen-toggle');
  fsBtn.addEventListener('click', () => {
    viewer.classList.toggle('map-fullscreen');
    fsBtn.textContent = viewer.classList.contains('map-fullscreen') ? '✕' : '⛶';
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && viewer.classList.contains('map-fullscreen')) {
      viewer.classList.remove('map-fullscreen');
      fsBtn.textContent = '⛶';
    }
  });

  // Minimize map toggle
  const minBtn = container.querySelector('#map-minimize');
  minBtn.addEventListener('click', () => {
    viewer.classList.toggle('map-minimized');
    minBtn.textContent = viewer.classList.contains('map-minimized') ? '>' : '∨';
  });

  // Toggle legend
  const legend = container.querySelector('#map-legend');
  const legendBtn = container.querySelector('#legend-toggle');
  legendBtn.addEventListener('click', () => {
    legend.classList.toggle('minimized');
    legendBtn.textContent = legend.classList.contains('minimized') ? '+' : '×';
  });
}

// ── Station rendering helpers ──

function renderMapStation(coord, index, activeLine, activeStation, lineId, totalStations) {
  const station = coord.station;
  const line = coord.line;
  const isActive = activeStation === station.id;
  const isLineActive = !activeLine || activeLine === lineId;
  const isUpcoming = line.status !== 'operational';
  const radius = 5;

  const labelPositions = {
    blue: { dx: 14, dy: 4, anchor: 'start' },
    green: { dx: 0, dy: -12, anchor: 'middle' },
    red: { dx: 14, dy: 4, anchor: 'start' },
    purple: { dx: 0, dy: -12, anchor: 'middle' },
    yellow: { dx: 14, dy: 4, anchor: 'start' },
    pink: { dx: -14, dy: 4, anchor: 'end' },
  };
  const lp = labelPositions[lineId] || { dx: 14, dy: 4, anchor: 'start' };
  return `
    <circle class="map-station-dot ${isActive ? 'active' : ''}"
            cx="${coord.x}" cy="${coord.y}" r="${isActive ? 7 : radius}"
            fill="${isActive ? line.color : (isUpcoming ? line.color : '#0a0e1a')}"
            stroke="${line.color}" stroke-width="${isActive ? 3 : 2}"
            opacity="${isLineActive ? (isUpcoming ? 0.7 : 1) : 0.15}"
            data-station-id="${station.id}"
            data-station-name="${station.name}"
            data-line-id="${lineId}"
            style="animation: stationPop 0.3s ease both; animation-delay: ${index * 20}ms; cursor: pointer;" />
  `;
}

function renderMapInterchange(coord, activeLine, activeStation) {
  const station = coord.station;
  const isActive = activeStation === station.id;

  return `
    <g class="map-station-dot" data-station-id="${station.id}" data-station-name="${station.name} (Interchange)" data-line-id="interchange" style="cursor: pointer;">
      <circle cx="${coord.x}" cy="${coord.y}" r="12"
              fill="#0a0e1a" stroke="white" stroke-width="2.5" opacity="1" />
      <circle cx="${coord.x}" cy="${coord.y}" r="7"
              fill="${isActive ? 'white' : '#0a0e1a'}"
              stroke="white" stroke-width="2" opacity="1" />
    </g>
  `;
}

function showTooltip(event, name, container) {
  hideTooltip(container);
  const svgContainer = container.querySelector('.metro-map-container');
  const svgRect = svgContainer.getBoundingClientRect();
  const tooltip = document.createElement('div');
  tooltip.className = 'map-tooltip';
  tooltip.textContent = name;
  tooltip.id = 'map-tooltip';
  svgContainer.appendChild(tooltip);
  const dotRect = event.target.getBoundingClientRect
    ? event.target.getBoundingClientRect()
    : event.target.closest('g').getBoundingClientRect();
  const tooltipX = dotRect.left - svgRect.left + dotRect.width / 2;
  const tooltipY = dotRect.top - svgRect.top - 10;
  tooltip.style.left = `${tooltipX}px`;
  tooltip.style.top = `${tooltipY}px`;
  tooltip.style.transform = 'translate(-50%, -100%)';
}

function hideTooltip(container) {
  const existing = container.querySelector('#map-tooltip');
  if (existing) existing.remove();
}
