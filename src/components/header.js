/**
 * Header Component
 * Renders the top bar with logo, branding, and city selector
 */

export function renderHeader(cityData, onCityChange) {
  const header = document.getElementById('app-header');
  header.className = 'app-header';
  const currentId = cityData ? cityData.id : '';

  header.innerHTML = `
    <div class="app-logo" id="header-logo" style="cursor: pointer;">
      <div class="app-logo-icon">M</div>
      <span class="app-logo-text">OneMetro</span>
      <span class="app-logo-sub">Indian Metro Systems</span>
    </div>
    <select class="city-selector" id="city-select" aria-label="Select city">
      <option value="" ${!currentId ? 'selected' : ''}>📍 Choose a City</option>
      <option value="chennai" ${currentId === 'chennai' ? 'selected' : ''}>🏛️ Chennai</option>
      <option value="delhi" ${currentId === 'delhi' ? 'selected' : ''}>🕌 Delhi</option>
      <option value="mumbai" ${currentId === 'mumbai' ? 'selected' : ''}>🌆 Mumbai</option>
      <option value="bengaluru" ${currentId === 'bengaluru' ? 'selected' : ''}>🌳 Bengaluru</option>
      <option value="kolkata" ${currentId === 'kolkata' ? 'selected' : ''}>🌉 Kolkata</option>
      <option value="hyderabad" ${currentId === 'hyderabad' ? 'selected' : ''}>🏰 Hyderabad</option>
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
