/**
 * Metro Map Component
 * Generates a schematic SVG metro map with interactive station dots
 * Supports multiple lines, upcoming (dashed) lines, and interchanges
 */

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Generate schematic layout coordinates for any city
 */
function getLayout(cityData, showUpcoming) {
  const lines = cityData.lines.filter(l => showUpcoming || l.status === 'operational');
  const hasPhase2 = lines.some(l => l.status !== 'operational');

  let width, height, geoBounds = null;

  if (cityData.id === 'chennai') {
    // Geographic projection — canvas size from actual lat/lon extent
    geoBounds = hasPhase2
      ? { latMin: 12.82, latMax: 13.19, lonMin: 80.08, lonMax: 80.34 }
      : { latMin: 12.96, latMax: 13.19, lonMin: 80.15, lonMax: 80.34 };
    const scale = 2600;
    const pad = 50;
    width = Math.round((geoBounds.lonMax - geoBounds.lonMin) * scale) + 2 * pad;
    height = Math.round((geoBounds.latMax - geoBounds.latMin) * scale) + 2 * pad;
  } else {
    width = hasPhase2 ? 1100 : 900;
    height = hasPhase2 ? 900 : 700;
  }

  const result = { width, height, lines: [] };

  lines.forEach(line => {
    const coords = generateLineCoords(cityData.id, line, lines, 50, width, height, hasPhase2, geoBounds);
    result.lines.push({ coords, line });
  });

  snapInterchanges(result.lines);
  return result;
}

/**
 * Project lat/lon to pixel coordinates within the given bounds and canvas
 */
function geoProject(lat, lon, bounds, width, height, pad = 50) {
  const x = pad + ((lon - bounds.lonMin) / (bounds.lonMax - bounds.lonMin)) * (width - 2 * pad);
  const y = pad + ((bounds.latMax - lat) / (bounds.latMax - bounds.latMin)) * (height - 2 * pad);
  return { x, y };
}

function generateLineCoords(cityId, line, allLines, padding, width, height, hasPhase2, geoBounds) {
  const count = line.stations.length;
  const coords = [];

  function interpolateWaypoints(waypoints, totalStations, coords, line) {
    const sorted = [...waypoints].sort((a, b) => a.idx - b.idx);
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
      const smooth = t * t * (3 - 2 * t);
      const x = wpBefore.x + (wpAfter.x - wpBefore.x) * smooth;
      const y = wpBefore.y + (wpAfter.y - wpBefore.y) * smooth;
      coords.push({ x, y, station: line.stations[i], line });
    }
  }

  function projectGeoWaypoints(geoWaypoints) {
    return geoWaypoints.map(p => {
      const pos = geoProject(p.lat, p.lon, geoBounds, width, height);
      return { idx: p.idx, x: pos.x, y: pos.y };
    });
  }

  const layoutKey = `${cityId}_${line.id}`;

  switch (layoutKey) {
    // ═══════════════════════════════════════════
    // CHENNAI LAYOUTS — Geographic lat/lon projection
    // ═══════════════════════════════════════════
    case 'chennai_blue': {
      const gw = [
        { idx: 0, lat: 13.175, lon: 80.325 },
        { idx: 2, lat: 13.155, lon: 80.305 },
        { idx: 6, lat: 13.125, lon: 80.285 },
        { idx: 9, lat: 13.105, lon: 80.275 },
        { idx: 12, lat: 13.08, lon: 80.275 },
        { idx: 14, lat: 13.06, lon: 80.255 },
        { idx: 16, lat: 13.05, lon: 80.255 },
        { idx: 19, lat: 13.03, lon: 80.235 },
        { idx: 22, lat: 12.995, lon: 80.198 },
        { idx: 23, lat: 12.985, lon: 80.185 },
        { idx: 25, lat: 12.98, lon: 80.17 },
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
      break;
    }

    case 'chennai_green': {
      const gw = [
        { idx: 0, lat: 13.08, lon: 80.275 },
        { idx: 2, lat: 13.075, lon: 80.255 },
        { idx: 4, lat: 13.078, lon: 80.235 },
        { idx: 6, lat: 13.085, lon: 80.215 },
        { idx: 8, lat: 13.085, lon: 80.195 },
        { idx: 9, lat: 13.075, lon: 80.185 },
        { idx: 10, lat: 13.07, lon: 80.185 },
        { idx: 12, lat: 13.04, lon: 80.195 },
        { idx: 14, lat: 13.01, lon: 80.21 },
        { idx: 15, lat: 12.995, lon: 80.198 },
        { idx: 16, lat: 12.995, lon: 80.21 },
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
      break;
    }

    case 'chennai_purple': {
      const gw = [
        { idx: 0, lat: 13.15, lon: 80.23 },
        { idx: 4, lat: 13.13, lon: 80.245 },
        { idx: 7, lat: 13.11, lon: 80.255 },
        { idx: 11, lat: 13.085, lon: 80.255 },
        { idx: 14, lat: 13.065, lon: 80.255 },
        { idx: 17, lat: 13.05, lon: 80.255 },
        { idx: 20, lat: 13.035, lon: 80.27 },
        { idx: 24, lat: 13.00, lon: 80.255 },
        { idx: 28, lat: 12.97, lon: 80.245 },
        { idx: 31, lat: 12.95, lon: 80.245 },
        { idx: 37, lat: 12.90, lon: 80.23 },
        { idx: 42, lat: 12.87, lon: 80.225 },
        { idx: 47, lat: 12.83, lon: 80.22 },
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
      break;
    }

    case 'chennai_yellow': {
      const gw = [
        { idx: 0, lat: 13.04, lon: 80.28 },
        { idx: 2, lat: 13.035, lon: 80.27 },
        { idx: 4, lat: 13.035, lon: 80.255 },
        { idx: 6, lat: 13.03, lon: 80.24 },
        { idx: 8, lat: 13.04, lon: 80.22 },
        { idx: 11, lat: 13.04, lon: 80.195 },
        { idx: 14, lat: 13.04, lon: 80.17 },
        { idx: 18, lat: 13.04, lon: 80.145 },
        { idx: 22, lat: 13.045, lon: 80.12 },
        { idx: 27, lat: 13.05, lon: 80.10 },
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
      break;
    }

    case 'chennai_red': {
      const gw = [
        { idx: 0, lat: 13.15, lon: 80.23 },
        { idx: 4, lat: 13.13, lon: 80.22 },
        { idx: 8, lat: 13.11, lon: 80.21 },
        { idx: 14, lat: 13.085, lon: 80.195 },
        { idx: 17, lat: 13.06, lon: 80.175 },
        { idx: 20, lat: 13.045, lon: 80.16 },
        { idx: 23, lat: 13.04, lon: 80.145 },
        { idx: 26, lat: 13.02, lon: 80.17 },
        { idx: 29, lat: 12.995, lon: 80.198 },
        { idx: 30, lat: 12.995, lon: 80.21 },
        { idx: 33, lat: 12.975, lon: 80.215 },
        { idx: 38, lat: 12.95, lon: 80.22 },
        { idx: 42, lat: 12.93, lon: 80.225 },
        { idx: 45, lat: 12.90, lon: 80.23 },
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
      break;
    }

    // ═══════════════════════════════════════════
    // BENGALURU LAYOUTS
    // ═══════════════════════════════════════════
    case 'bengaluru_purple': {
      const startX = padding + 20;
      const endX = width - padding - 20;
      const centerY = height * 0.42;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const x = startX + (endX - startX) * t;
        const y = centerY + Math.sin(t * Math.PI * 1.5) * 25;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    case 'bengaluru_green': {
      const startY = padding + 10;
      const endY = height - padding - 10;
      const centerX = width * 0.45;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const y = startY + (endY - startY) * t;
        const x = centerX + Math.sin(t * Math.PI) * 30;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    case 'bengaluru_yellow': {
      const greenData = allLines.find(l => l.id === 'green');
      const rvIndex = greenData ? greenData.stations.findIndex(s => s.name === 'RV Road') : 23;
      const greenCount = greenData ? greenData.stations.length : 32;
      const gStartY = padding + 10;
      const gEndY = height - padding - 10;
      const gCenterX = width * 0.45;
      const rvT = rvIndex / (greenCount - 1);
      const rvY = gStartY + (gEndY - gStartY) * rvT;
      const rvX = gCenterX + Math.sin(rvT * Math.PI) * 30;
      const endX = width * 0.7;
      const endY = height - padding;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const x = rvX + (endX - rvX) * t;
        const y = rvY + (endY - rvY) * t;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    case 'bengaluru_pink': {
      const startY = height - padding - 60;
      const endY = padding + 30;
      const centerX = width * 0.58;
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const y = startY + (endY - startY) * t;
        const x = centerX + Math.sin(t * Math.PI) * 40;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    default: {
      const startY2 = padding;
      const endY2 = height - padding;
      const spacing = (endY2 - startY2) / Math.max(count - 1, 1);
      for (let i = 0; i < count; i++) {
        coords.push({
          x: width / 2,
          y: startY2 + i * spacing,
          station: line.stations[i],
          line,
        });
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
    const prev = coords[i - 1];
    const curr = coords[i];
    const midX = (prev.x + curr.x) / 2;
    const midY = (prev.y + curr.y) / 2;
    d += ` Q ${prev.x} ${prev.y} ${midX} ${midY}`;
  }
  const last = coords[coords.length - 1];
  d += ` L ${last.x} ${last.y}`;
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
        <div class="map-toolbar-title">
          <span class="map-toolbar-dot"></span>
          Network Map — ${cityData.name} ${cityData.nameLocal}
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
      if (coord.station.isInterchange) {
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
  const showLabel = isActive || index === 0 || index === totalStations - 1 || index % 3 === 0;

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
    ${showLabel ? `
      <text class="map-station-label" x="${coord.x + lp.dx}" y="${coord.y + lp.dy}"
            text-anchor="${lp.anchor}" opacity="${isLineActive ? (isUpcoming ? 0.5 : 0.85) : 0.1}"
            style="font-size: ${isActive ? '10px' : '8px'}; font-weight: ${isActive ? '700' : '400'};">
        ${station.name}
      </text>
    ` : ''}
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
      <text class="map-station-label" x="${coord.x}" y="${coord.y - 17}"
            text-anchor="middle"
            style="font-size: 10px; font-weight: 700; fill: #f1f5f9;">
        ${station.name}
      </text>
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
