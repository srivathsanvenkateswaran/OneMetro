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

  // City-specific layout key
  const layoutKey = `${cityId}_${line.id}`;

  switch (layoutKey) {
    // ═══════════════════════════════════════════
    // CHENNAI LAYOUTS
    // ═══════════════════════════════════════════
    case 'chennai_blue': {
      const startX = hasPhase2 ? 520 : 540;
      const startY = padding + 10;
      const endY = height - padding - (hasPhase2 ? 80 : 0);
      const spacing = (endY - startY) / (count - 1);

      for (let i = 0; i < count; i++) {
        let xOffset = 0;
        if (i >= 10 && i <= 20) {
          xOffset = -Math.sin((i - 10) / 10 * Math.PI) * 55;
        }
        coords.push({
          x: startX + xOffset,
          y: startY + i * spacing,
          station: line.stations[i],
          line,
        });
      }
      break;
    }

    case 'chennai_green': {
      // Find Chennai Central from blue line
      const blueData = allLines.find(l => l.id === 'blue');
      const blueCount = blueData ? blueData.stations.length : 26;
      const blueStartX = hasPhase2 ? 520 : 540;
      const blueStartY = padding + 10;
      const blueEndY = height - padding - (hasPhase2 ? 80 : 0);
      const blueSpacing = (blueEndY - blueStartY) / (blueCount - 1);
      const centralIndex = blueData ? blueData.stations.findIndex(s => s.name === 'Chennai Central') : 12;
      let centralXOffset = 0;
      if (centralIndex >= 10 && centralIndex <= 20) {
        centralXOffset = -Math.sin((centralIndex - 10) / 10 * Math.PI) * 55;
      }
      const centralX = blueStartX + centralXOffset;
      const centralY = blueStartY + centralIndex * blueSpacing;

      // Alandur position from blue
      const alandurIndex = blueData ? blueData.stations.findIndex(s => s.name === 'Alandur') : 22;
      let alandurXOffset = 0;
      if (alandurIndex >= 10 && alandurIndex <= 20) {
        alandurXOffset = -Math.sin((alandurIndex - 10) / 10 * Math.PI) * 55;
      }
      const alandurX = blueStartX + alandurXOffset;
      const alandurY = blueStartY + alandurIndex * blueSpacing;

      for (let i = 0; i < count; i++) {
        let x, y;
        if (i === 0) {
          x = centralX; y = centralY;
        } else if (i <= 9) {
          const progress = i / 9;
          x = centralX - (i * 38);
          y = centralY - Math.sin(progress * Math.PI) * 35 + (i * 4);
        } else {
          const afterIdx = i - 9;
          const totalAfter = count - 10;
          const kX = centralX - (9 * 38);
          const kY = centralY + 36;
          const endX = alandurX - 35;
          const endY = alandurY + 25;
          const t = afterIdx / totalAfter;
          x = kX + (endX - kX) * t;
          y = kY + (endY - kY) * (t * t * (3 - 2 * t));
        }
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    case 'chennai_purple': {
      // North to far south-east: Madhavaram → SIPCOT
      const startX = hasPhase2 ? 620 : 600;
      const startY = padding + 20;
      const endX = width - padding - 20;
      const endY = height - padding;

      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        // Gentle S-curve going south-east
        const x = startX + (endX - startX) * t + Math.sin(t * Math.PI * 2) * 30;
        const y = startY + (endY - startY) * t;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    case 'chennai_yellow': {
      // East to West: Light House → Poonamallee
      const startX = hasPhase2 ? 580 : 560;
      const startY = height * 0.45;
      const endX = padding + 20;
      const endY = height * 0.35;

      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        const x = startX - (startX - endX) * t;
        const y = startY + (endY - startY) * t - Math.sin(t * Math.PI) * 30;
        coords.push({ x, y, station: line.stations[i], line });
      }
      break;
    }

    case 'chennai_red': {
      // North to South-East via West arc: Madhavaram → Sholinganallur
      const startX = hasPhase2 ? 660 : 640;
      const startY = padding + 30;
      const midX = padding + 120;
      const midY = height * 0.5;
      const endX = width - padding - 60;
      const endY = height - padding - 10;

      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        // Quadratic bezier through mid-point
        const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
        const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * midY + t * t * endY;
        coords.push({ x, y, station: line.stations[i], line });
      }
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
