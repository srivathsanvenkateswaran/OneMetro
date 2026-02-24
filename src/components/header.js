/**
 * Header Component
 * Renders the top bar with logo, branding, and city selector
 */

export function renderHeader(cityData, onCityChange) {
  const header = document.getElementById('app-header');
  header.className = 'app-header';
  header.innerHTML = `
    <div class="app-logo">
      <div class="app-logo-icon">M</div>
      <span class="app-logo-text">BharatOne</span>
      <span class="app-logo-sub">India Metro Systems</span>
    </div>
    <select class="city-selector" id="city-select" aria-label="Select city">
      <option value="chennai" ${cityData.id === 'chennai' ? 'selected' : ''}>🏛️ Chennai</option>
      <option value="delhi" disabled>🕌 Delhi (Coming Soon)</option>
      <option value="mumbai" disabled>🌆 Mumbai (Coming Soon)</option>
      <option value="bengaluru" ${cityData.id === 'bengaluru' ? 'selected' : ''}>🌳 Bengaluru</option>
      <option value="kolkata" disabled>🌉 Kolkata (Coming Soon)</option>
      <option value="hyderabad" disabled>🏰 Hyderabad (Coming Soon)</option>
      <option value="kochi" disabled>🌊 Kochi (Coming Soon)</option>
    </select>
  `;

  const select = header.querySelector('#city-select');
  select.addEventListener('change', (e) => {
    if (onCityChange) onCityChange(e.target.value);
  });
}
