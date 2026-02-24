/**
 * Line Selector Component
 * Renders line cards in the sidebar + city statistics + upcoming toggle
 */

function getLineGlow(line) {
  const glowMap = {
    blue: 'rgba(33,150,243,0.25)',
    green: 'rgba(76,175,80,0.25)',
    purple: 'rgba(156,39,176,0.25)',
    yellow: 'rgba(255,235,59,0.25)',
    red: 'rgba(244,67,54,0.25)',
    pink: 'rgba(233,30,99,0.25)',
    magenta: 'rgba(156,39,176,0.25)',
    orange: 'rgba(255,152,0,0.25)',
    aqua: 'rgba(0,188,212,0.25)',
    violet: 'rgba(126,87,194,0.25)',
    grey: 'rgba(158,158,158,0.25)',
  };
  return glowMap[line.id] || 'rgba(99,102,241,0.25)';
}

export function renderLineSelector(cityData, visibleLines, activeLine, showUpcoming, hasUpcoming, onLineSelect) {
  const operationalLines = visibleLines.filter(l => l.status === 'operational');
  const upcomingLines = visibleLines.filter(l => l.status !== 'operational');
  const totalStations = visibleLines.reduce((sum, l) => sum + l.totalStations, 0);

  // Calculate total length dynamically
  const totalLengthValue = visibleLines.reduce((sum, l) => {
    const numericLength = parseFloat(l.length.replace(/[^0-9.]/g, '')) || 0;
    return sum + numericLength;
  }, 0);
  const displayLength = `${totalLengthValue.toFixed(1)} km`;

  return `
    <div class="city-stats">
      <div class="city-stat">
        <div class="city-stat-value">${visibleLines.length}</div>
        <div class="city-stat-label">Lines</div>
      </div>
      <div class="city-stat">
        <div class="city-stat-value">${totalStations}</div>
        <div class="city-stat-label">Stations</div>
      </div>
      <div class="city-stat">
        <div class="city-stat-value">${displayLength}</div>
        <div class="city-stat-label">Network</div>
      </div>
    </div>

    ${activeLine ? `
      <button class="view-all-btn" id="view-all-btn" aria-label="View entire network">
        <span class="view-all-icon">←</span>
        <span>View Full Network</span>
      </button>
    ` : ''}

    ${hasUpcoming ? `
      <div class="upcoming-toggle-container">
        <label class="upcoming-toggle" for="upcoming-toggle">
          <input type="checkbox" id="upcoming-toggle" ${showUpcoming ? 'checked' : ''} />
          <span class="toggle-slider"></span>
          <span class="toggle-label">Show Upcoming Lines</span>
        </label>
        ${showUpcoming && cityData.phase2 ? `
          <div class="upcoming-info">
            Phase 2 • ${cityData.phase2.totalLength} • Expected ${cityData.phase2.expectedCompletion}
          </div>
        ` : ''}
      </div>
    ` : ''}

    <div>
      <div class="sidebar-section-title">Operational Lines</div>
      <div class="line-cards stagger-children">
        ${operationalLines.map(line => renderLineCard(line, activeLine)).join('')}
      </div>
    </div>

    ${upcomingLines.length > 0 ? `
      <div>
        <div class="sidebar-section-title">Under Construction</div>
        <div class="line-cards stagger-children">
          ${upcomingLines.map(line => renderLineCard(line, activeLine)).join('')}
        </div>
      </div>
    ` : ''}

    <div id="line-info-container"></div>
  `;
}

function renderLineCard(line, activeLine) {
  const isUpcoming = line.status !== 'operational';
  return `
    <div class="line-card ${activeLine === line.id ? 'active' : ''} ${isUpcoming ? 'upcoming' : ''}"
         data-line-id="${line.id}"
         style="--line-color: ${line.color}; --line-glow: ${getLineGlow(line)};"
         role="button"
         tabindex="0"
         aria-label="Select ${line.name}">
      <div class="line-card-header">
        <span class="line-card-name">${line.name}</span>
        <div style="display:flex; gap:4px; align-items:center;">
          ${isUpcoming ? `<span class="status-badge upcoming-badge">🚧</span>` : ''}
          <span class="line-card-badge" style="background: ${line.color};">${line.corridor}</span>
        </div>
      </div>
      <div class="line-card-meta">
        <span>🚉 ${line.totalStations} stations</span>
        <span>📏 ${line.length}</span>
        ${isUpcoming && line.expectedCompletion ? `<span>📅 ${line.expectedCompletion}</span>` : ''}
      </div>
    </div>
  `;
}

export function bindLineCardEvents(onLineSelect) {
  document.querySelectorAll('.line-card').forEach(card => {
    const handler = () => onLineSelect(card.dataset.lineId);
    card.addEventListener('click', handler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler();
      }
    });
  });
}
