/**
 * Line Selector Component
 * Renders line cards in the sidebar + city statistics
 */

export function renderLineSelector(cityData, activeLine, onLineSelect) {
    return `
    <div class="city-stats animate-fade-in-up">
      <div class="city-stat">
        <div class="city-stat-value">${cityData.totalLines}</div>
        <div class="city-stat-label">Lines</div>
      </div>
      <div class="city-stat">
        <div class="city-stat-value">${cityData.totalStations}</div>
        <div class="city-stat-label">Stations</div>
      </div>
      <div class="city-stat">
        <div class="city-stat-value">${cityData.totalLength}</div>
        <div class="city-stat-label">Network</div>
      </div>
    </div>

    <div>
      <div class="sidebar-section-title">Metro Lines</div>
      <div class="line-cards stagger-children">
        ${cityData.lines.map(line => `
          <div class="line-card ${activeLine === line.id ? 'active' : ''}"
               data-line-id="${line.id}"
               style="--line-color: ${line.color}; --line-glow: ${line.id === 'blue' ? 'rgba(33,150,243,0.25)' : 'rgba(76,175,80,0.25)'};"
               role="button"
               tabindex="0"
               aria-label="Select ${line.name}">
            <div class="line-card-header">
              <span class="line-card-name">${line.name}</span>
              <span class="line-card-badge">${line.corridor}</span>
            </div>
            <div class="line-card-meta">
              <span>🚉 ${line.totalStations} stations</span>
              <span>📏 ${line.length}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div id="line-info-container"></div>
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
