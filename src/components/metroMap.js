/**
 * Metro Map Component
 * Generates a schematic SVG metro map with interactive station dots
 */

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * Generate map layout coordinates for Chennai Metro's two lines
 * Blue Line runs roughly north-south (vertical with slight curves)
 * Green Line runs east-west then south (horizontal then turns south)
 * They intersect at Chennai Central and Alandur
 */
function getChennaiLayout(cityData) {
    const blue = cityData.lines.find(l => l.id === 'blue');
    const green = cityData.lines.find(l => l.id === 'green');

    const padding = 50;
    const width = 900;
    const height = 700;

    // Blue Line: vertical path from top to bottom, slight curve in the middle
    const blueCoords = [];
    const blueStationCount = blue.stations.length;
    const blueStartX = 540;
    const blueStartY = padding + 10;
    const blueEndY = height - padding;
    const blueVerticalSpacing = (blueEndY - blueStartY) / (blueStationCount - 1);

    for (let i = 0; i < blueStationCount; i++) {
        // Add a gentle curve: stations in the central section shift left
        let xOffset = 0;
        if (i >= 10 && i <= 20) {
            xOffset = -Math.sin((i - 10) / 10 * Math.PI) * 60;
        }
        blueCoords.push({
            x: blueStartX + xOffset,
            y: blueStartY + i * blueVerticalSpacing,
            station: blue.stations[i],
            line: blue,
        });
    }

    // Green Line: starts at Chennai Central (shared with Blue b13), goes west then south
    // Find Chennai Central position from blue line
    const centralBlueIndex = blue.stations.findIndex(s => s.name === 'Chennai Central');
    const centralPos = blueCoords[centralBlueIndex];

    const greenCoords = [];
    const greenStationCount = green.stations.length;

    // Green line starts at Chennai Central and goes west (left), then curves south
    for (let i = 0; i < greenStationCount; i++) {
        let x, y;

        if (i === 0) {
            // Chennai Central — same position as blue line
            x = centralPos.x;
            y = centralPos.y;
        } else if (i <= 9) {
            // Going west (leftward) with slight upward arc
            const progress = i / 9;
            x = centralPos.x - (i * 42);
            y = centralPos.y - Math.sin(progress * Math.PI) * 40 + (i * 4);
        } else {
            // After Koyambedu (index 9), curve southward toward Alandur
            const afterKoyambeduIndex = i - 9;
            const totalAfter = greenStationCount - 10;
            const koyambeduX = centralPos.x - (9 * 42);
            const koyambeduY = centralPos.y - Math.sin(1 * Math.PI) * 40 + (9 * 4);

            // Curve toward Alandur position
            const alandurBlueIndex = blue.stations.findIndex(s => s.name === 'Alandur');
            const alandurPos = blueCoords[alandurBlueIndex];

            // Last green station (St Thomas Mount) should be near Alandur
            const endX = alandurPos.x - 40;
            const endY = alandurPos.y + 25;

            const t = afterKoyambeduIndex / totalAfter;
            // Bezier-ish curve
            x = koyambeduX + (endX - koyambeduX) * t;
            y = koyambeduY + (endY - koyambeduY) * (t * t * (3 - 2 * t)); // smoothstep
        }

        greenCoords.push({
            x, y,
            station: green.stations[i],
            line: green,
        });
    }

    // Find Alandur interchange
    const alandurGreenIndex = green.stations.findIndex(s => s.name === 'Alandur');
    const alandurBlueIndex = blue.stations.findIndex(s => s.name === 'Alandur');
    if (alandurGreenIndex >= 0 && alandurBlueIndex >= 0) {
        // Snap green Alandur to blue Alandur position
        greenCoords[alandurGreenIndex].x = blueCoords[alandurBlueIndex].x;
        greenCoords[alandurGreenIndex].y = blueCoords[alandurBlueIndex].y;
    }

    return { blue: blueCoords, green: greenCoords, width, height, blueData: blue, greenData: green };
}

function createSVGPath(coords, color) {
    if (coords.length < 2) return '';

    let d = `M ${coords[0].x} ${coords[0].y}`;

    for (let i = 1; i < coords.length; i++) {
        const prev = coords[i - 1];
        const curr = coords[i];
        // Use quadratic bezier for smooth curves
        const midX = (prev.x + curr.x) / 2;
        const midY = (prev.y + curr.y) / 2;
        d += ` Q ${prev.x} ${prev.y} ${midX} ${midY}`;
    }
    // End at last point
    const last = coords[coords.length - 1];
    d += ` L ${last.x} ${last.y}`;

    return d;
}

export function renderMetroMap(cityData, activeLine, activeStation, onStationClick) {
    const container = document.getElementById('metro-map');
    if (!container) return;

    const layout = getChennaiLayout(cityData);

    container.innerHTML = `
    <div class="metro-map-container">
      <div class="metro-map-title">Network Map — ${cityData.name} ${cityData.nameLocal}</div>
      <svg class="metro-map-svg" viewBox="0 0 ${layout.width} ${layout.height}" xmlns="${SVG_NS}">
        <defs>
          <filter id="glow-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
            <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.13  0 0 0 0 0.59  0 0 0 0 0.95  0 0 0 0.6 0"/>
            <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="glow-green" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
            <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.30  0 0 0 0 0.69  0 0 0 0 0.31  0 0 0 0.6 0"/>
            <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- Grid dots background -->
        <pattern id="grid-dots" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="0.5" fill="rgba(148, 163, 184, 0.15)"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-dots)" rx="16"/>

        <!-- Blue Line Path -->
        <path d="${createSVGPath(layout.blue, layout.blueData.color)}"
              stroke="${layout.blueData.color}" stroke-width="5" fill="none"
              stroke-linecap="round" stroke-linejoin="round"
              opacity="${!activeLine || activeLine === 'blue' ? 1 : 0.25}"
              filter="${activeLine === 'blue' ? 'url(#glow-blue)' : ''}"
              class="metro-line-path" />

        <!-- Green Line Path -->
        <path d="${createSVGPath(layout.green, layout.greenData.color)}"
              stroke="${layout.greenData.color}" stroke-width="5" fill="none"
              stroke-linecap="round" stroke-linejoin="round"
              opacity="${!activeLine || activeLine === 'green' ? 1 : 0.25}"
              filter="${activeLine === 'green' ? 'url(#glow-green)' : ''}"
              class="metro-line-path" />

        <!-- Blue Line Stations -->
        ${layout.blue.map((coord, i) => renderMapStation(coord, i, activeLine, activeStation, 'blue', layout.blue.length)).join('')}

        <!-- Green Line Stations -->
        ${layout.green.map((coord, i) => {
        // Skip Chennai Central and Alandur on green line to avoid duplicates
        if (coord.station.isInterchange) {
            return renderMapInterchange(coord, activeLine, activeStation);
        }
        return renderMapStation(coord, i, activeLine, activeStation, 'green', layout.green.length);
    }).join('')}
      </svg>
    </div>
  `;

    // Bind click events to station dots
    container.querySelectorAll('.map-station-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const stationId = dot.dataset.stationId;
            if (onStationClick) onStationClick(stationId, dot.dataset.lineId);
        });

        // Tooltip on hover
        dot.addEventListener('mouseenter', (e) => showTooltip(e, dot.dataset.stationName, container));
        dot.addEventListener('mouseleave', () => hideTooltip(container));
    });
}

function renderMapStation(coord, index, activeLine, activeStation, lineId, totalStations) {
    const station = coord.station;
    const line = coord.line;
    const isActive = activeStation === station.id;
    const isLineActive = !activeLine || activeLine === lineId;
    const radius = station.isInterchange ? 8 : 5;

    // Skip rendering if this is an interchange (handled separately)
    if (station.isInterchange) return '';

    // Determine label position
    const isBlue = lineId === 'blue';
    const labelX = isBlue ? coord.x + 14 : coord.x;
    const labelY = isBlue ? coord.y + 4 : coord.y - 12;
    const anchor = isBlue ? 'start' : 'middle';

    // Only show labels for every other station or active station
    const showLabel = index % 2 === 0 || isActive || index === 0 || index === totalStations - 1;

    return `
    <circle class="map-station-dot ${isActive ? 'active' : ''}"
            cx="${coord.x}" cy="${coord.y}" r="${isActive ? 7 : radius}"
            fill="${isActive ? line.color : '#0a0e1a'}"
            stroke="${line.color}" stroke-width="${isActive ? 3 : 2}"
            opacity="${isLineActive ? 1 : 0.25}"
            data-station-id="${station.id}"
            data-station-name="${station.name}"
            data-line-id="${lineId}"
            style="animation: stationPop 0.3s ease both; animation-delay: ${index * 30}ms;" />
    ${showLabel ? `
      <text class="map-station-label" x="${labelX}" y="${labelY}"
            text-anchor="${anchor}" opacity="${isLineActive ? 1 : 0.2}"
            style="font-size: ${isActive ? '11px' : '9px'}; font-weight: ${isActive ? '700' : '400'};">
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
              fill="#0a0e1a" stroke="white" stroke-width="2.5"
              opacity="1" />
      <circle cx="${coord.x}" cy="${coord.y}" r="7"
              fill="${isActive ? 'white' : '#0a0e1a'}"
              stroke="white" stroke-width="2"
              opacity="1" />
      <text class="map-station-label" x="${coord.x}" y="${coord.y - 17}"
            text-anchor="middle"
            style="font-size: 11px; font-weight: 700; fill: #f1f5f9;">
        ${station.name}
      </text>
      <text x="${coord.x}" y="${coord.y - 6}"
            text-anchor="middle"
            style="font-size: 7px; font-weight: 600; fill: rgba(241,245,249,0.4); letter-spacing: 0.5px;">
      </text>
    </g>
  `;
}

function showTooltip(event, name, container) {
    hideTooltip(container);
    const rect = container.getBoundingClientRect();
    const svgContainer = container.querySelector('.metro-map-container');
    const svgRect = svgContainer.getBoundingClientRect();

    const tooltip = document.createElement('div');
    tooltip.className = 'map-tooltip';
    tooltip.textContent = name;
    tooltip.id = 'map-tooltip';

    svgContainer.appendChild(tooltip);

    // Position tooltip
    const dotRect = event.target.getBoundingClientRect();
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
