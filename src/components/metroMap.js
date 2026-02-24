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

  /**
   * Helper: convert lat/lon waypoints to pixel waypoints using geoProject
   */
  function projectGeoWaypoints(geoWaypoints) {
    return geoWaypoints.map(p => {
      const pos = geoProject(p.lat, p.lon, geoBounds, width, height);
      return { idx: p.idx, x: pos.x, y: pos.y };
    });
  }

  // City-specific layout key
  const layoutKey = `${cityId}_${line.id}`;

  switch (layoutKey) {
    // ═══════════════════════════════════════════
    // CHENNAI LAYOUTS — Geographic lat/lon projection
    // Canvas size computed from actual geographic extent
    // Positions from real lat/lon → geoProject → pixel coords
    // ═══════════════════════════════════════════
    case 'chennai_blue': {
      // Blue Line: Wimco Nagar (13.175°N) → Airport (12.98°N) = 32km
      // Starts FURTHER NORTH than Purple/Red (Madhavaram 13.15°N)
      const gw = [
        { idx: 0, lat: 13.175, lon: 80.325 },  // Wimco Nagar Depot — far NE coast
        { idx: 2, lat: 13.155, lon: 80.305 },  // Tiruvottriyur
        { idx: 6, lat: 13.125, lon: 80.285 },  // New Washermanpet
        { idx: 9, lat: 13.105, lon: 80.275 },  // Washermanpet
        { idx: 12, lat: 13.08, lon: 80.275 },  // Chennai Central
        { idx: 14, lat: 13.06, lon: 80.255 },  // Government Estate / LIC
        { idx: 16, lat: 13.05, lon: 80.255 },  // Thousand Lights
        { idx: 19, lat: 13.03, lon: 80.235 },  // Nandanam / Saidapet
        { idx: 22, lat: 12.995, lon: 80.198 },  // Alandur — interchange
        { idx: 23, lat: 12.985, lon: 80.185 },  // Nanganallur Road — west
        { idx: 25, lat: 12.98, lon: 80.17 },  // Chennai Airport — SW
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
      break;
    }

    case 'chennai_green': {
      // Green Line: Central (east) → Koyambedu (west) → St Thomas Mount = 22km
      const gw = [
        { idx: 0, lat: 13.08, lon: 80.275 },  // Chennai Central
        { idx: 2, lat: 13.075, lon: 80.255 },  // Nehru Park
        { idx: 4, lat: 13.078, lon: 80.235 },  // Pachaiyappas
        { idx: 6, lat: 13.085, lon: 80.215 },  // Anna Nagar East
        { idx: 8, lat: 13.085, lon: 80.195 },  // Thirumangalam
        { idx: 9, lat: 13.075, lon: 80.185 },  // Koyambedu — turn south
        { idx: 10, lat: 13.07, lon: 80.185 },  // CMBT
        { idx: 12, lat: 13.04, lon: 80.195 },  // Vadapalani
        { idx: 14, lat: 13.01, lon: 80.21 },  // Ekkattuthangal
        { idx: 15, lat: 12.995, lon: 80.198 },  // Alandur — interchange
        { idx: 16, lat: 12.995, lon: 80.21 },  // St. Thomas Mount — east
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
      break;
    }

    case 'chennai_purple': {
      // Purple Line: Madhavaram (13.15°N) → SIPCOT (12.83°N) = 45.8km
      // Much LONGER than Blue, starts SOUTH of Blue's start
      // Nearly vertical (lon 80.22-80.27°E — minimal east drift)
      const gw = [
        { idx: 0, lat: 13.15, lon: 80.23 },  // Madhavaram
        { idx: 4, lat: 13.13, lon: 80.245 },  // Sembiyam
        { idx: 7, lat: 13.11, lon: 80.255 },  // Perambur
        { idx: 11, lat: 13.085, lon: 80.255 },  // Purasawalkam
        { idx: 14, lat: 13.065, lon: 80.255 },  // Chetpet
        { idx: 17, lat: 13.05, lon: 80.255 },  // Thousand Lights
        { idx: 20, lat: 13.035, lon: 80.27 },  // Thirumayilai — interchange Yellow
        { idx: 24, lat: 13.00, lon: 80.255 },  // Adyar
        { idx: 28, lat: 12.97, lon: 80.245 },  // Nehru Nagar
        { idx: 31, lat: 12.95, lon: 80.245 },  // Perungudi — OMR
        { idx: 37, lat: 12.90, lon: 80.23 },  // Sholinganallur — interchange Red
        { idx: 42, lat: 12.87, lon: 80.225 },  // Semmancheri
        { idx: 47, lat: 12.83, lon: 80.22 },  // SIPCOT 2 — far south
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
      break;
    }

    case 'chennai_yellow': {
      // Yellow Line: Light House (east coast) → Poonamallee (far west) = 26km
      const gw = [
        { idx: 0, lat: 13.04, lon: 80.28 },  // Light House — Marina
        { idx: 2, lat: 13.035, lon: 80.27 },  // Thirumayilai — interchange Purple
        { idx: 4, lat: 13.035, lon: 80.255 },  // Bharathidasan Road
        { idx: 6, lat: 13.03, lon: 80.24 },  // Nandanam
        { idx: 8, lat: 13.04, lon: 80.22 },  // Kodambakkam
        { idx: 11, lat: 13.04, lon: 80.195 },  // Vadapalani — interchange Green
        { idx: 14, lat: 13.04, lon: 80.17 },  // Alwarthirunagar
        { idx: 18, lat: 13.04, lon: 80.145 },  // Porur — interchange Red
        { idx: 22, lat: 13.045, lon: 80.12 },  // Iyyapanthangal
        { idx: 27, lat: 13.05, lon: 80.10 },  // Poonamallee — far west
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
      break;
    }

    case 'chennai_red': {
      // Red Line: Madhavaram → Porur (west arc) → Sholinganallur (south) = 47km
      const gw = [
        { idx: 0, lat: 13.15, lon: 80.23 },  // Madhavaram — shared with Purple
        { idx: 4, lat: 13.13, lon: 80.22 },  // Velmurugan Nagar
        { idx: 8, lat: 13.11, lon: 80.21 },  // Retteri / Kolathur
        { idx: 14, lat: 13.085, lon: 80.195 },  // Thirumangalam — interchange Green
        { idx: 17, lat: 13.06, lon: 80.175 },  // Elango Nagar
        { idx: 20, lat: 13.045, lon: 80.16 },  // Alwartiru Nagar
        { idx: 23, lat: 13.04, lon: 80.145 },  // Porur — interchange Yellow
        { idx: 26, lat: 13.02, lon: 80.17 },  // DLF IT SEZ
        { idx: 29, lat: 12.995, lon: 80.198 },  // Alandur — interchange Blue & Green
        { idx: 30, lat: 12.995, lon: 80.21 },  // St. Thomas Mount — interchange Green
        { idx: 33, lat: 12.975, lon: 80.215 },  // Puzhuthivakkam
        { idx: 38, lat: 12.95, lon: 80.22 },  // Kovilabakkam
        { idx: 42, lat: 12.93, lon: 80.225 },  // Medavakkam
        { idx: 45, lat: 12.90, lon: 80.23 },  // Sholinganallur — interchange Purple
      ];
      interpolateWaypoints(projectGeoWaypoints(gw), count, coords, line);
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
