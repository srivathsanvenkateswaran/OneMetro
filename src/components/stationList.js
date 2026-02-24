/**
 * Station List Component
 * Renders the vertical metro route diagram with station dots and names
 */

export function renderStationList(line, activeStation, onStationClick) {
  if (!line) return '';

  return `
    <div class="station-list-container">
      <div class="station-list-header">
        <span class="station-list-title">Stations</span>
        <span class="station-count-badge">${line.totalStations} stops</span>
      </div>
      <div class="station-list stagger-children" style="--line-color: ${line.color}; --line-glow: ${line.id === 'blue' ? 'rgba(33,150,243,0.35)' : 'rgba(76,175,80,0.35)'};">
        ${line.stations.map((station, index) => {
    const isFirst = index === 0;
    const isLast = index === line.stations.length - 1;
    const isTerminal = isFirst || isLast;

    return `
            <div class="station-item ${activeStation === station.id ? 'active' : ''}"
                 data-station-id="${station.id}"
                 role="button"
                 tabindex="0"
                 aria-label="${station.name}${station.isInterchange ? ' - Interchange station' : ''}">
              <span class="station-dot ${station.isInterchange ? 'interchange' : ''} ${isTerminal ? 'terminal' : ''}"></span>
              <span class="station-name">${station.name}</span>
              <div class="station-badges">
                ${station.isInterchange ? `<span class="interchange-badge">⇄ Interchange</span>` : ''}
                <span class="station-type-badge ${station.type}">${station.type === 'underground' ? '⬇ UG' : station.type === 'elevated' ? '⬆ EL' : '━ AG'}</span>
              </div>
            </div>
          `;
  }).join('')}
      </div>
    </div>
  `;
}

export function bindStationEvents(onStationClick) {
  document.querySelectorAll('.station-item').forEach(item => {
    const handler = () => onStationClick(item.dataset.stationId);
    item.addEventListener('click', handler);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler();
      }
    });
  });
}
