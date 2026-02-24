/**
 * Line Info Panel Component
 * Displays detailed information about the selected metro line
 * Handles both operational and under-construction lines
 */

export function renderLineInfo(line) {
  if (!line) return '';

  const firstStation = line.stations[0];
  const lastStation = line.stations[line.stations.length - 1];
  const isUpcoming = line.status !== 'operational';

  return `
    <div class="line-info" style="--line-color: ${line.color};">
      <div class="line-info-header">
        <div class="line-info-title">
          ${line.name}
          ${isUpcoming ? '<span class="line-info-status">🚧 Under Construction</span>' : ''}
        </div>
        <div class="line-info-corridor">${line.corridor} ${isUpcoming ? `• Expected ${line.expectedCompletion}` : `• Since ${line.operationalSince}`}</div>
      </div>
      <div class="line-info-grid">
        <div class="line-info-stat">
          <div class="line-info-stat-label">Length</div>
          <div class="line-info-stat-value">${line.length}</div>
        </div>
        <div class="line-info-stat">
          <div class="line-info-stat-label">Stations</div>
          <div class="line-info-stat-value">${line.totalStations}</div>
        </div>
        ${!isUpcoming ? `
          <div class="line-info-stat">
            <div class="line-info-stat-label">First Train</div>
            <div class="line-info-stat-value">${line.firstTrain}</div>
          </div>
          <div class="line-info-stat">
            <div class="line-info-stat-label">Last Train</div>
            <div class="line-info-stat-value">${line.lastTrain}</div>
          </div>
          <div class="line-info-stat">
            <div class="line-info-stat-label">Frequency</div>
            <div class="line-info-stat-value">${line.frequency}</div>
          </div>
        ` : `
          <div class="line-info-stat">
            <div class="line-info-stat-label">Status</div>
            <div class="line-info-stat-value" style="color: var(--warning);">Under Construction</div>
          </div>
          <div class="line-info-stat">
            <div class="line-info-stat-label">Expected</div>
            <div class="line-info-stat-value">${line.expectedCompletion}</div>
          </div>
          <div class="line-info-stat">
            <div class="line-info-stat-label">Phase</div>
            <div class="line-info-stat-value">Phase 2</div>
          </div>
        `}
        <div class="line-info-stat">
          <div class="line-info-stat-label">Gauge</div>
          <div class="line-info-stat-value">${line.gauge}</div>
        </div>
      </div>
      <div class="line-info-terminals">
        <span class="terminal-dot" style="--line-color: ${line.color};"></span>
        <span class="terminal-name">${firstStation.name}</span>
        <span class="terminal-line" style="--line-color: ${line.color}; ${isUpcoming ? 'border-top: 2px dashed ' + line.color + '; background: none; height: 0;' : ''}"></span>
        <span class="terminal-name">${lastStation.name}</span>
        <span class="terminal-dot" style="--line-color: ${line.color};"></span>
      </div>
    </div>
  `;
}
