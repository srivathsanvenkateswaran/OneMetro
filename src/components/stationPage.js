/**
 * Station Page Component
 * Renders the detailed view for a single metro station.
 */

export function renderStationPage(station, line, onBack) {
    if (!station) return '';

    const {
        name,
        nameLocal,
        type,
        isInterchange,
        landmark,
        contact,
        parking,
        facilities,
        platforms,
        gates
    } = station;

    const bgColor = line ? line.color : 'var(--border)';
    const txColor = '#ffffff';

    return `
    <div class="station-page-container animate-fade-in">
        <div class="station-page-header animate-fade-in-up" style="border-bottom: 4px solid ${bgColor};">
            <button class="btn-back" id="btn-back-to-line" aria-label="Back to Line View">
                ← Back to ${line ? line.name : 'Network'}
            </button>
            <div class="title-row">
                <div class="title-text">
                    <h1>${name}</h1>
                    ${nameLocal ? `<h2 class="local-name">${nameLocal}</h2>` : ''}
                </div>
                <div class="badges-row">
                    <span class="station-type-badge ${type}">
                        ${type === 'underground' ? '⬇ Underground' : type === 'elevated' ? '⬆ Elevated' : '━ At-grade'}
                    </span>
                    ${isInterchange ? `<span class="interchange-badge">⇄ Interchange</span>` : ''}
                </div>
            </div>
        </div>

        <div class="station-page-content">
            <div class="info-grid stagger-children">
                
                <!-- Quick Info -->
                <div class="info-card">
                    <h3>General Info</h3>
                    <ul class="data-list">
                        ${landmark ? `<li><strong>Landmark:</strong> ${landmark}</li>` : ''}
                        ${line ? `<li><strong>Line:</strong> <span style="color: ${line.colorLight}">${line.name}</span></li>` : ''}
                        ${contact ? `<li><strong>Contact:</strong> <a href="tel:${contact.replace(/\D/g, '')}">${contact}</a></li>` : ''}
                        <li><strong>Parking:</strong> ${parking ? 'Available ✅' : 'Not Available ❌'}</li>
                    </ul>
                </div>

                <!-- Platforms -->
                <div class="info-card">
                    <h3>Platforms Overview</h3>
                    ${platforms && platforms.length > 0 ? `
                        <ul class="platform-list">
                            ${platforms.map(p => `
                                <li>
                                    <span class="plat-no">Platform ${p.no}</span>
                                    <span class="plat-dest">➔ Towards ${p.towards}</span>
                                </li>
                            `).join('')}
                        </ul>
                    ` : '<p class="text-muted">Platform details not available.</p>'}
                </div>

                <!-- Facilities -->
                <div class="info-card">
                    <h3>Station Facilities</h3>
                    ${facilities && facilities.length > 0 ? `
                        <div class="facilities-tags">
                            ${facilities.map(f => `<span class="facility-tag">${f}</span>`).join('')}
                        </div>
                    ` : '<p class="text-muted">Standard facilities available.</p>'}
                </div>

                <!-- Gates / Entrances -->
                <div class="info-card">
                    <h3>Gates & Entrances</h3>
                    ${gates && gates.length > 0 ? `
                        <div class="gates-list">
                            ${gates.map(g => `
                                <div class="gate-item">
                                    <div class="gate-id">Gate ${g.gate}</div>
                                    <div class="gate-landmarks">
                                        ${g.landmarks.map(l => `<span>${l}</span>`).join(', ')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : '<p class="text-muted">Gates details not available.</p>'}
                </div>

            </div>
        </div>
    </div>
    `;
}

export function bindStationPageEvents(onBack) {
    const backBtn = document.getElementById('btn-back-to-line');
    if (backBtn) {
        backBtn.addEventListener('click', onBack);
    }
}
