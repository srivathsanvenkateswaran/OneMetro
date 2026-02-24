/**
 * Landing Page Component
 * Renders the city selection portal with a premium, futuristic aesthetic.
 */

export function renderLandingPage(cities, onCitySelect) {
    const main = document.getElementById('app-main');

    // Remove existing landing page if any
    const existing = document.getElementById('landing-page');
    if (existing) existing.remove();

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
            </div>
        </div>

        <div class="lp-section">
            <div class="lp-section-header">
                <h2 class="lp-section-title">Select a City Network</h2>
                <div class="lp-section-line"></div>
            </div>

            <div class="lp-grid">
                <!-- Available Cities -->
                <div class="lp-card available" data-city-id="chennai">
                    <div class="lp-card-image lp-img-chennai"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status">Operational</div>
                        <h3 class="lp-card-title">Chennai <span class="lp-card-local">சென்னை</span></h3>
                        <p class="lp-card-desc">Experience the Gateway to South India with its rapidly expanding 5-line network.</p>
                        <div class="lp-card-stats">
                            <div class="lp-stat"><span>5</span> Lines</div>
                            <div class="lp-stat"><span>110+</span> Stations</div>
                        </div>
                        <button class="lp-card-btn">Explore Network</button>
                    </div>
                </div>

                <div class="lp-card available" data-city-id="bengaluru">
                    <div class="lp-card-image lp-img-bengaluru"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status">Operational</div>
                        <h3 class="lp-card-title">Bengaluru <span class="lp-card-local">ಬೆಂಗಳೂರು</span></h3>
                        <p class="lp-card-desc">Navigate the Silicon Valley of India through the innovative Namma Metro corridors.</p>
                        <div class="lp-card-stats">
                            <div class="lp-stat"><span>5</span> Lines</div>
                            <div class="lp-stat"><span>130+</span> Stations</div>
                        </div>
                        <button class="lp-card-btn">Explore Network</button>
                    </div>
                </div>

                <!-- Coming Soon Cities -->
                <div class="lp-card disabled">
                    <div class="lp-card-image lp-img-delhi"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status soon">Coming Soon</div>
                        <h3 class="lp-card-title">Delhi <span class="lp-card-local">दिल्ली</span></h3>
                        <p class="lp-card-desc">The nation's largest and most complex network is heading to OneMetro soon.</p>
                        <button class="lp-card-btn disabled">Stay Tuned</button>
                    </div>
                </div>

                <div class="lp-card disabled">
                    <div class="lp-card-image lp-img-mumbai"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status soon">Coming Soon</div>
                        <h3 class="lp-card-title">Mumbai <span class="lp-card-local">मुंबई</span></h3>
                        <p class="lp-card-desc">Connecting the Maximum City with the speed of tomorrow's integrated transit.</p>
                        <button class="lp-card-btn disabled">Stay Tuned</button>
                    </div>
                </div>
            </div>
        </div>

        <footer class="lp-footer">
            <p>&copy; 2026 OneMetro. Modernizing the way you view Indian transit.</p>
        </footer>
    `;

    main.appendChild(lp);

    // Bind events
    lp.querySelectorAll('.lp-card.available').forEach(card => {
        card.addEventListener('click', () => {
            const cityId = card.dataset.cityId;
            if (onCitySelect) onCitySelect(cityId);
        });
    });
}
