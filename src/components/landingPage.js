/**
 * Landing Page Component
 * City cards are now generated dynamically from the cityRegistry.
 * To add a new city to the landing page, only the registry needs updating —
 * no changes required here.
 */

import { getOrderedCities } from '../data/cityRegistry.js';

export function renderLandingPage(onCitySelect) {
    const main = document.getElementById('app-main');

    // Remove existing landing page if present
    const existing = document.getElementById('landing-page');
    if (existing) existing.remove();

    const cities = getOrderedCities().filter(c => c.status === 'available');

    const lp = document.createElement('div');
    lp.id = 'landing-page';
    lp.className = 'landing-page';

    lp.innerHTML = `
        <div class="lp-hero">
            <div class="lp-hero-bg"></div>
            <div class="lp-hero-content">
                <div class="lp-badge">Smart Transit Portal</div>
                <h1 class="lp-title">Explore India's <span class="lp-highlight">Metro Networks</span></h1>
                <p class="lp-subtitle">Seamlessly navigate the interconnected future of Indian urban mobility with OneMetro. Interactive maps, real-time insights, and futuristic design.</p>
                
                <div class="hero-search-trigger" id="hero-search-trigger">
                    <span class="search-icon">🔍</span>
                    <span class="hero-search-text">Find a station, line, or city...</span>
                    <span class="hero-search-shortcut">
                        <kbd>Ctrl</kbd> <kbd>P</kbd>
                    </span>
                </div>
            </div>
        </div>

        <div class="lp-section">
            <div class="lp-section-header">
                <h2 class="lp-section-title">Select a City Network</h2>
                <div class="lp-section-line"></div>
            </div>

            <div class="lp-grid stagger-children">
                ${cities.map(city => renderCityCard(city)).join('')}
            </div>
        </div>

        <footer class="lp-footer">
            <p>&copy; 2026 OneMetro. Modernizing the way you view Indian transit.</p>
        </footer>
    `;

    main.appendChild(lp);

    // Bind click events on available city cards
    lp.querySelectorAll('.lp-card.available').forEach(card => {
        card.addEventListener('click', () => {
            const cityId = card.dataset.cityId;
            if (onCitySelect) onCitySelect(cityId);
        });
    });
}

/**
 * Renders a single city card from registry metadata.
 * Stats (lines, stations) come from cityRegistry — not from the loaded data.
 */
function renderCityCard(city) {
    return `
        <div class="lp-card available" data-city-id="${city.id}">
            <div class="lp-card-image ${city.imageClass}"></div>
            <div class="lp-card-content">
                <div class="lp-card-status">Operational</div>
                <h3 class="lp-card-title">${city.displayName} <span class="lp-card-local">${city.nameLocal}</span></h3>
                <p class="lp-card-desc">${city.tagline}</p>
                <div class="lp-card-stats">
                    <div class="lp-stat"><span>${city.stats.lines}</span> Lines</div>
                    <div class="lp-stat"><span>${city.stats.stations}</span> Stations</div>
                    <div class="lp-stat"><span>${city.stats.length}</span> Length</div>
                </div>
                <button class="lp-card-btn">Explore Network</button>
            </div>
        </div>
    `;
}
