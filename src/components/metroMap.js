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

  const padding = 40;
  const width = hasPhase2 ? 1100 : 900;
  const height = hasPhase2 ? 900 : 700;

  const result = { width, height, lines: [] };

  lines.forEach(line => {
    const coords = generateLineCoords(cityData.id, line, lines, padding, width, height, hasPhase2);
    result.lines.push({ coords, line });
  });

  // Snap interchange stations to the same position
  snapInterchanges(result.lines);

  return result;
}

function generateLineCoords(cityId, line, allLines, padding, width, height, hasPhase2) {
  const count = line.stations.length;
  const coords = [];

  /**
   * Smoothly interpolate station positions between defined waypoints.
   * Each waypoint is { idx, x, y } where idx is the station index in the line.
   * Stations between waypoints are linearly distributed along the path.
   */
  function interpolateWaypoints(waypoints, totalStations, coords, line) {
    // Ensure waypoints cover full range
    const sorted = [...waypoints].sort((a, b) => a.idx - b.idx);

    // Fill first waypoint if not at index 0
    if (sorted[0].idx !== 0) {
      sorted.unshift({ idx: 0, x: sorted[0].x, y: sorted[0].y });
    }
    // Fill last waypoint if not at last index
    if (sorted[sorted.length - 1].idx !== totalStations - 1) {
      const last = sorted[sorted.length - 1];
      sorted.push({ idx: totalStations - 1, x: last.x, y: last.y });
    }

    for (let i = 0; i < totalStations; i++) {
      // Find which two waypoints this station falls between
      let wpBefore = sorted[0];
      let wpAfter = sorted[sorted.length - 1];

      for (let w = 0; w < sorted.length - 1; w++) {
        if (i >= sorted[w].idx && i <= sorted[w + 1].idx) {
          wpBefore = sorted[w];
          wpAfter = sorted[w + 1];
          break;
        }
      }

      // Interpolate between the two waypoints
      const segLen = wpAfter.idx - wpBefore.idx;
      const t = segLen > 0 ? (i - wpBefore.idx) / segLen : 0;

      // Smoothstep for nicer curves at waypoint transitions
      const smooth = t * t * (3 - 2 * t);

      const x = wpBefore.x + (wpAfter.x - wpBefore.x) * smooth;
      const y = wpBefore.y + (wpAfter.y - wpBefore.y) * smooth;

      coords.push({ x, y, station: line.stations[i], line });
    }
  }

  // City-specific layout key
  const layoutKey = `${cityId}_${line.id}`;

  switch (layoutKey) {
    // ═══════════════════════════════════════════
    // CHENNAI LAYOUTS — Geographically accurate
    // Map orientation: x = West→East, y = North→South
    // All waypoint coords are normalized (0-1) and scaled to canvas
    // ═══════════════════════════════════════════
    case 'chennai_blue': {
      // Blue Line: Wimco Nagar (far NE coast) → Airport (south)
      // Runs north-south along the eastern side, curving slightly west
      const w = [
        { idx: 0, x: 0.72, y: 0.04 },  // Wimco Nagar Depot — far NE
        { idx: 2, x: 0.70, y: 0.11 },  // Tiruvottriyur — NE coast
        { idx: 6, x: 0.68, y: 0.22 },  // New Washermanpet — east
        { idx: 9, x: 0.66, y: 0.30 },  // Washermanpet — underground start
        { idx: 12, x: 0.62, y: 0.37 },  // Chennai Central — center-east
        { idx: 14, x: 0.60, y: 0.44 },  // Government Estate / LIC
        { idx: 16, x: 0.58, y: 0.50 },  // Thousand Lights
        { idx: 19, x: 0.53, y: 0.59 },  // Nandanam / Saidapet
        { idx: 22, x: 0.48, y: 0.70 },  // Alandur — interchange hub
        { idx: 23, x: 0.45, y: 0.76 },  // Nanganallur Road — Blue goes west/southwest
        { idx: 25, x: 0.43, y: 0.93 },  // Chennai Airport — southwest of Alandur
      ];
      interpolateWaypoints(w.map(p => ({ idx: p.idx, x: p.x * width, y: p.y * height })), count, coords, line);
      break;
    }

    case 'chennai_green': {
      // Green Line: Chennai Central (east) → Koyambedu (west) → St Thomas Mount (southwest)
      // Inverted-L shape: east→west then turns south-southwest
      const w = [
        { idx: 0, x: 0.62, y: 0.37 },  // Chennai Central — shared with Blue
        { idx: 2, x: 0.56, y: 0.35 },  // Nehru Park / Egmore
        { idx: 4, x: 0.49, y: 0.32 },  // Pachaiyappas College
        { idx: 6, x: 0.42, y: 0.29 },  // Anna Nagar East
        { idx: 8, x: 0.36, y: 0.27 },  // Thirumangalam
        { idx: 9, x: 0.32, y: 0.28 },  // Koyambedu — turn south
        { idx: 10, x: 0.31, y: 0.31 },  // CMBT
        { idx: 12, x: 0.35, y: 0.42 },  // Vadapalani
        { idx: 14, x: 0.40, y: 0.58 },  // Ekkattuthangal
        { idx: 15, x: 0.48, y: 0.70 },  // Alandur — interchange
        { idx: 16, x: 0.54, y: 0.76 },  // St. Thomas Mount — east of Alandur
      ];
      interpolateWaypoints(w.map(p => ({ idx: p.idx, x: p.x * width, y: p.y * height })), count, coords, line);
      break;
    }

    case 'chennai_purple': {
      // Purple Line: Madhavaram (north) → south through center → south along OMR → SIPCOT
      // Mostly NORTH-SOUTH with very slight eastward bulge around Mylapore
      // Real longitude varies only ~0.05° (80.22-80.27°E) — nearly vertical
      const w = [
        { idx: 0, x: 0.52, y: 0.03 },  // Madhavaram Milk Colony — north
        { idx: 4, x: 0.55, y: 0.14 },  // Sembiyam / Moolakadai
        { idx: 7, x: 0.57, y: 0.23 },  // Perambur Metro
        { idx: 11, x: 0.55, y: 0.34 },  // Purasawalkam / Kellys — slight west
        { idx: 14, x: 0.56, y: 0.42 },  // Chetpet / Sterling Rd
        { idx: 17, x: 0.58, y: 0.50 },  // Thousand Lights — near Blue
        { idx: 20, x: 0.61, y: 0.56 },  // Thirumayilai — interchange with Yellow (easternmost)
        { idx: 24, x: 0.59, y: 0.63 },  // Adyar Junction — back west slightly
        { idx: 28, x: 0.61, y: 0.70 },  // Nehru Nagar
        { idx: 31, x: 0.63, y: 0.76 },  // Perungudi — OMR, barely east
        { idx: 37, x: 0.64, y: 0.84 },  // Sholinganallur — interchange with Red
        { idx: 42, x: 0.63, y: 0.89 },  // Semmancheri — drifts back west
        { idx: 47, x: 0.62, y: 0.95 },  // SIPCOT 2 — far south, nearly same longitude
      ];
      interpolateWaypoints(w.map(p => ({ idx: p.idx, x: p.x * width, y: p.y * height })), count, coords, line);
      break;
    }

    case 'chennai_yellow': {
      // Yellow Line: Light House (east coast) → Poonamallee (far west)
      // East-west corridor
      const w = [
        { idx: 0, x: 0.70, y: 0.52 },  // Light House — Marina Beach, east
        { idx: 2, x: 0.61, y: 0.56 },  // Thirumayilai — interchange with Purple
        { idx: 4, x: 0.55, y: 0.54 },  // Bharathidasan Road
        { idx: 6, x: 0.52, y: 0.55 },  // Nandanam — near Blue
        { idx: 8, x: 0.44, y: 0.51 },  // Kodambakkam
        { idx: 11, x: 0.35, y: 0.42 },  // Vadapalani — interchange with Green
        { idx: 14, x: 0.25, y: 0.40 },  // Avichi / Alwarthirunagar
        { idx: 18, x: 0.17, y: 0.43 },  // Porur Junction — interchange with Red
        { idx: 22, x: 0.11, y: 0.41 },  // Iyyapanthangal / Kattupakkam
        { idx: 27, x: 0.05, y: 0.38 },  // Poonamallee Bus Depot — far west
      ];
      interpolateWaypoints(w.map(p => ({ idx: p.idx, x: p.x * width, y: p.y * height })), count, coords, line);
      break;
    }

    case 'chennai_red': {
      // Red Line: Madhavaram (north) → west arc to Porur → south through Alandur → south to Sholinganallur
      // Southern section is mostly vertical with gentle eastern drift
      const w = [
        { idx: 0, x: 0.52, y: 0.03 },  // Madhavaram Milk Colony — shared with Purple
        { idx: 4, x: 0.48, y: 0.13 },  // Velmurugan Nagar
        { idx: 8, x: 0.44, y: 0.21 },  // Retteri / Kolathur
        { idx: 14, x: 0.36, y: 0.27 },  // Thirumangalam — interchange with Green
        { idx: 17, x: 0.30, y: 0.35 },  // Sai Nagar / Elango Nagar
        { idx: 20, x: 0.25, y: 0.41 },  // Alwartiru Nagar
        { idx: 23, x: 0.17, y: 0.43 },  // Porur Junction — interchange with Yellow
        { idx: 26, x: 0.28, y: 0.52 },  // DLF IT SEZ / Sathya Nagar
        { idx: 29, x: 0.48, y: 0.70 },  // Alandur — interchange with Blue & Green
        { idx: 30, x: 0.54, y: 0.76 },  // St. Thomas Mount — interchange with Green
        { idx: 33, x: 0.55, y: 0.80 },  // Puzhuthivakkam — mostly south
        { idx: 38, x: 0.58, y: 0.84 },  // Kovilabakkam — gentle east
        { idx: 42, x: 0.61, y: 0.87 },  // Medavakkam — still mostly south
        { idx: 45, x: 0.64, y: 0.84 },  // Sholinganallur — interchange with Purple
      ];
      interpolateWaypoints(w.map(p => ({ idx: p.idx, x: p.x * width, y: p.y * height })), count, coords, line);
      break;
    }

    // ═══════════════════════════════════════════
    // BENGALURU LAYOUTS
    // ═══════════════════════════════════════════
    case 'bengaluru_purple': {
      // East-West line: Challaghatta → Whitefield (horizontal)
      const startX = padding + 20;
      const endX = width - padding - 20;
      const centerY = height * 0.42;

      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const x = startX + (endX - startX) * t;
        // Slight wave for visual interest
        const y = centerY + Math.sin(t * Math.PI * 1.5) * 25;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    case 'bengaluru_green': {
      // North-South line: Madavara → Silk Institute (vertical)
      const startY = padding + 10;
      const endY = height - padding - 10;
      const centerX = width * 0.45;

      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const y = startY + (endY - startY) * t;
        // Slight curve in the middle section
        const x = centerX + Math.sin(t * Math.PI) * 30;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    case 'bengaluru_yellow': {
      // South line: RV Road → Bommasandra (vertical, south of center)
      // Find RV Road position from green line for starting point
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
        // Diagonal going south-east from RV Road
        const x = rvX + (endX - rvX) * t;
        const y = rvY + (endY - rvY) * t;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    case 'bengaluru_pink': {
      // South-North line: Kalena Agrahara → Nagawara (vertical, east of center)
      const startY = height - padding - 60;
      const endY = padding + 30;
      const centerX = width * 0.58;

      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const y = startY + (endY - startY) * t;
        // Slight eastward curve
        const x = centerX + Math.sin(t * Math.PI) * 40;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    default: {
      // Generic vertical layout for any unrecognized line
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
  // Build map of station names to their first coordinate
  const stationPositions = {};

  // First pass: record positions (prioritize operational lines)
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

  // Second pass: snap all interchanges to the first recorded position
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
  // Convert hex color to RGB ratios for feColorMatrix
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

export function renderMetroMap(cityData, activeLine, activeStation, showUpcoming, onStationClick) {
  const container = document.getElementById('metro-map');
  if (!container) return;

  const layout = getLayout(cityData, showUpcoming);
  const renderedInterchanges = new Set();

  container.innerHTML = `
    <div class="metro-map-container">
      <div class="metro-map-title">Network Map — ${cityData.name} ${cityData.nameLocal}</div>
      <svg class="metro-map-svg" viewBox="0 0 ${layout.width} ${layout.height}" xmlns="${SVG_NS}">
        <defs>
          ${layout.lines.map(({ line }) => generateGlowFilter(line.id, line.color)).join('')}
        </defs>

        <!-- Grid dots background -->
        <pattern id="grid-dots" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="0.5" fill="rgba(148, 163, 184, 0.15)"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-dots)" rx="16"/>

        <!-- Line Paths -->
        ${layout.lines.map(({ coords, line }) => {
    const isActive = !activeLine || activeLine === line.id;
    const isUpcoming = line.status !== 'operational';
    return `
            <path d="${createSVGPath(coords)}"
                  stroke="${line.color}" stroke-width="${isActive ? 5 : 3}" fill="none"
                  stroke-linecap="round" stroke-linejoin="round"
                  opacity="${isActive ? 1 : 0.2}"
                  ${isUpcoming ? 'stroke-dasharray="12 6"' : ''}
                  filter="${activeLine === line.id ? `url(#glow-${line.id})` : ''}"
                  class="metro-line-path" />
          `;
  }).join('')}

        <!-- Station Dots -->
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
  `;

  // Bind events
  container.querySelectorAll('.map-station-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      if (onStationClick) onStationClick(dot.dataset.stationId, dot.dataset.lineId);
    });
    dot.addEventListener('mouseenter', (e) => showTooltip(e, dot.dataset.stationName, container));
    dot.addEventListener('mouseleave', () => hideTooltip(container));
  });
}

function renderMapStation(coord, index, activeLine, activeStation, lineId, totalStations) {
  const station = coord.station;
  const line = coord.line;
  const isActive = activeStation === station.id;
  const isLineActive = !activeLine || activeLine === lineId;
  const isUpcoming = line.status !== 'operational';
  const radius = 5;

  // Label positioning based on line direction
  const labelPositions = {
    // Chennai
    blue: { dx: 14, dy: 4, anchor: 'start' },
    green: { dx: 0, dy: -12, anchor: 'middle' },
    red: { dx: 14, dy: 4, anchor: 'start' },
    // Generic / Bengaluru
    purple: { dx: 0, dy: -12, anchor: 'middle' },
    yellow: { dx: 14, dy: 4, anchor: 'start' },
    pink: { dx: -14, dy: 4, anchor: 'end' },
  };
  const lp = labelPositions[lineId] || { dx: 14, dy: 4, anchor: 'start' };

  // Show labels for key stations only
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
