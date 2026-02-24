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

            <div class="lp-grid stagger-children">
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

                <div class="lp-card available" data-city-id="delhi">
                    <div class="lp-card-image lp-img-delhi"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status">Operational</div>
                        <h3 class="lp-card-title">Delhi <span class="lp-card-local">दिल्ली</span></h3>
                        <p class="lp-card-desc">The nation's capital with the largest and most complex metro network in India.</p>
                        <div class="lp-card-stats">
                            <div class="lp-stat"><span>10</span> Lines</div>
                            <div class="lp-stat"><span>280+</span> Stations</div>
                        </div>
                        <button class="lp-card-btn">Explore Network</button>
                    </div>
                </div>

                <div class="lp-card available" data-city-id="mumbai">
                    <div class="lp-card-image lp-img-mumbai"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status">Operational</div>
                        <h3 class="lp-card-title">Mumbai <span class="lp-card-local">मुंबई</span></h3>
                        <p class="lp-card-desc">Connecting the Maximum City with the speed of tomorrow's integrated transit.</p>
                        <div class="lp-card-stats">
                            <div class="lp-stat"><span>4</span> Lines</div>
                            <div class="lp-stat"><span>70</span> Stations</div>
                        </div>
                        <button class="lp-card-btn">Explore Network</button>
                    </div>
                </div>

                <div class="lp-card available" data-city-id="kolkata">
                    <div class="lp-card-image lp-img-kolkata"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status">Operational</div>
                        <h3 class="lp-card-title">Kolkata <span class="lp-card-local">কলকাতা</span></h3>
                        <p class="lp-card-desc">The oldest metro system in India, modernizing for the city of joy.</p>
                        <div class="lp-card-stats">
                            <div class="lp-stat"><span>5</span> Lines</div>
                            <div class="lp-stat"><span>57</span> Stations</div>
                        </div>
                        <button class="lp-card-btn">Explore Network</button>
                    </div>
                </div>

                <div class="lp-card available" data-city-id="hyderabad">
                    <div class="lp-card-image lp-img-hyderabad"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status">Operational</div>
                        <h3 class="lp-card-title">Hyderabad <span class="lp-card-local">హైదరాబాద్</span></h3>
                        <p class="lp-card-desc">A highly efficient transit system built for India's emerging tech hub.</p>
                        <div class="lp-card-stats">
                            <div class="lp-stat"><span>3</span> Lines</div>
                            <div class="lp-stat"><span>57</span> Stations</div>
                        </div>
                        <button class="lp-card-btn">Explore Network</button>
                    </div>
                </div>

                <div class="lp-card available" data-city-id="pune">
                    <div class="lp-card-image lp-img-pune"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status">Operational</div>
                        <h3 class="lp-card-title">Pune <span class="lp-card-local">पुणे</span></h3>
                        <p class="lp-card-desc">An expanding modern transit network embracing the cultural capital of Maharashtra.</p>
                        <div class="lp-card-stats">
                            <div class="lp-stat"><span>2</span> Lines</div>
                            <div class="lp-stat"><span>30</span> Stations</div>
                        </div>
                        <button class="lp-card-btn">Explore Network</button>
                    </div>
                </div>

                <div class="lp-card available" data-city-id="nagpur">
                    <div class="lp-card-image lp-img-nagpur"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status">Operational</div>
                        <h3 class="lp-card-title">Nagpur <span class="lp-card-local">नागपूर</span></h3>
                        <p class="lp-card-desc">India's greenest metro system revolutionizing transit in the Orange City.</p>
                        <div class="lp-card-stats">
                            <div class="lp-stat"><span>2</span> Lines</div>
                            <div class="lp-stat"><span>37</span> Stations</div>
                        </div>
                        <button class="lp-card-btn">Explore Network</button>
                    </div>
                </div>

                <div class="lp-card available" data-city-id="ahmedabad">
                    <div class="lp-card-image lp-img-ahmedabad"></div>
                    <div class="lp-card-content">
                        <div class="lp-card-status">Operational</div>
                        <h3 class="lp-card-title">Ahmedabad <span class="lp-card-local">અમદાવાદ</span></h3>
                        <p class="lp-card-desc">Rapid transit connecting the sprawling twin cities of Ahmedabad and Gandhinagar.</p>
                        <div class="lp-card-stats">
                            <div class="lp-stat"><span>4</span> Lines</div>
                            <div class="lp-stat"><span>54</span> Stations</div>
                        </div>
                        <button class="lp-card-btn">Explore Network</button>
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
