/**
 * Header Component
 * The city dropdown is generated dynamically from the cityRegistry.
 * Adding a new city to the registry automatically makes it appear in the header.
 */

import { getOrderedCities } from '../data/cityRegistry.js';

export function renderHeader(cityData, onCityChange) {
  const header = document.getElementById('app-header');
  header.className = 'app-header';
  const currentId = cityData ? cityData.id : '';

  const cityOptions = getOrderedCities()
    .map(c => `<option value="${c.id}" ${currentId === c.id ? 'selected' : ''}>${c.emoji} ${c.displayName}</option>`)
    .join('');

  header.innerHTML = `
        <div class="app-logo" id="header-logo" style="cursor: pointer;">
            <div class="app-logo-icon">M</div>
            <span class="app-logo-text">OneMetro</span>
            <span class="app-logo-sub">Indian Metro Systems</span>
        </div>
        <select class="city-selector" id="city-select" aria-label="Select city">
            <option value="" ${!currentId ? 'selected' : ''}>📍 Choose a City</option>
            ${cityOptions}
        </select>
    `;

  const select = header.querySelector('#city-select');
  select.addEventListener('change', (e) => {
    if (onCityChange && e.target.value) onCityChange(e.target.value);
  });

  const logo = header.querySelector('#header-logo');
  logo.addEventListener('click', () => {
    window.location.hash = '';
  });
}
