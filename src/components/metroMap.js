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
    // ═══════════════════════════════════════════
    case 'chennai_blue': {
      // Blue Line: Wimco Nagar (far NE coast) → Airport (south-center)
      // Runs mostly north-south along the eastern side of the city
      // Waypoints at key stations with geographic positions
      const waypoints = [
        { idx: 0, x: 760, y: 40 },   // Wimco Nagar Depot — far NE
        { idx: 2, x: 740, y: 100 },   // Tiruvottriyur — NE coast
        { idx: 6, x: 720, y: 200 },   // New Washermanpet — east
        { idx: 9, x: 700, y: 270 },   // Washermanpet — underground start
        { idx: 12, x: 660, y: 330 },   // Chennai Central — center-east
        { idx: 14, x: 640, y: 400 },   // Government Estate / LIC
        { idx: 16, x: 620, y: 450 },   // Thousand Lights
        { idx: 19, x: 560, y: 540 },   // Nandanam / Saidapet
        { idx: 22, x: 500, y: 640 },   // Alandur — interchange hub
        { idx: 25, x: 490, y: 820 },   // Chennai Airport — south
      ];
      interpolateWaypoints(waypoints, count, coords, line);
      break;
    }

    case 'chennai_green': {
      // Green Line: Chennai Central (east) → Koyambedu (west) → St Thomas Mount (south)
      // Inverted-L shape: east→west then turns south
      const waypoints = [
        { idx: 0, x: 660, y: 330 },   // Chennai Central — shared with Blue
        { idx: 2, x: 600, y: 310 },   // Nehru Park / Egmore
        { idx: 4, x: 530, y: 290 },   // Pachaiyappas College
        { idx: 6, x: 450, y: 260 },   // Anna Nagar East
        { idx: 8, x: 380, y: 240 },   // Thirumangalam
        { idx: 9, x: 340, y: 250 },   // Koyambedu — turn south
        { idx: 10, x: 330, y: 280 },   // CMBT
        { idx: 12, x: 370, y: 380 },   // Vadapalani
        { idx: 14, x: 430, y: 530 },   // Ekkattuthangal
        { idx: 15, x: 500, y: 640 },   // Alandur — interchange
        { idx: 16, x: 480, y: 690 },   // St. Thomas Mount
      ];
      interpolateWaypoints(waypoints, count, coords, line);
      break;
    }

    case 'chennai_purple': {
      // Purple Line: Madhavaram (north) → south through center → SE along OMR → SIPCOT
      // Goes from north, through city center, then curves southeast along OMR
      const waypoints = [
        { idx: 0, x: 540, y: 30 },    // Madhavaram Milk Colony — north
        { idx: 4, x: 580, y: 130 },   // Sembiyam / Moolakadai
        { idx: 7, x: 620, y: 210 },   // Perambur Metro — east of center
        { idx: 11, x: 590, y: 310 },   // Purasawalkam / Kellys
        { idx: 14, x: 600, y: 380 },   // Chetpet / Sterling Rd
        { idx: 17, x: 620, y: 450 },   // Thousand Lights — interchange with Blue
        { idx: 20, x: 640, y: 505 },   // Thirumayilai — interchange with Yellow
        { idx: 24, x: 670, y: 560 },   // Adyar Junction
        { idx: 28, x: 720, y: 620 },   // Nehru Nagar
        { idx: 31, x: 780, y: 670 },   // Perungudi — OMR corridor
        { idx: 37, x: 860, y: 730 },   // Sholinganallur — interchange with Red
        { idx: 42, x: 920, y: 790 },   // Semmancheri
        { idx: 47, x: 1000, y: 860 },  // SIPCOT 2 — far SE
      ];
      interpolateWaypoints(waypoints, count, coords, line);
      break;
    }

    case 'chennai_yellow': {
      // Yellow Line: Light House (east coast) → Poonamallee (far west)
      // Purely east-west corridor with slight southward dip in the middle
      const waypoints = [
        { idx: 0, x: 740, y: 470 },   // Light House — Marina Beach, east
        { idx: 2, x: 640, y: 505 },   // Thirumayilai — interchange with Purple
        { idx: 4, x: 590, y: 490 },   // Bharathidasan Road
        { idx: 6, x: 555, y: 500 },   // Nandanam — interchange with Blue
        { idx: 8, x: 470, y: 460 },   // Kodambakkam
        { idx: 11, x: 370, y: 380 },   // Vadapalani — interchange with Green
        { idx: 14, x: 270, y: 360 },   // Avichi / Alwarthirunagar
        { idx: 18, x: 180, y: 390 },   // Porur Junction — interchange with Red
        { idx: 22, x: 120, y: 370 },   // Iyyapanthangal / Kattupakkam
        { idx: 27, x: 50, y: 340 },    // Poonamallee Bus Depot — far west
      ];
      interpolateWaypoints(waypoints, count, coords, line);
      break;
    }

    case 'chennai_red': {
      // Red Line: Madhavaram (north) → south via west → Alandur → SE to Sholinganallur
      // Big arc: north → southwest through western suburbs → then curves southeast
      const waypoints = [
        { idx: 0, x: 540, y: 30 },    // Madhavaram Milk Colony — shared with Purple
        { idx: 4, x: 510, y: 120 },   // Velmurugan Nagar
        { idx: 8, x: 470, y: 190 },   // Retteri / Kolathur
        { idx: 14, x: 380, y: 240 },   // Thirumangalam — interchange with Green
        { idx: 17, x: 320, y: 320 },   // Sai Nagar / Elango Nagar
        { idx: 20, x: 270, y: 370 },   // Alwartiru Nagar
        { idx: 23, x: 180, y: 390 },   // Porur Junction — interchange with Yellow
        { idx: 26, x: 300, y: 470 },   // DLF IT SEZ / Sathya Nagar
        { idx: 29, x: 500, y: 640 },   // Alandur — interchange with Blue & Green
        { idx: 30, x: 480, y: 690 },   // St. Thomas Mount — interchange with Green
        { idx: 33, x: 530, y: 740 },   // Puzhuthivakkam / Vanuvampet
        { idx: 38, x: 650, y: 780 },   // Kovilabakkam / Vellakkal
        { idx: 42, x: 770, y: 810 },   // Medavakkam / Perumbakkam
        { idx: 45, x: 860, y: 730 },   // Sholinganallur — interchange with Purple
      ];
      interpolateWaypoints(waypoints, count, coords, line);
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
