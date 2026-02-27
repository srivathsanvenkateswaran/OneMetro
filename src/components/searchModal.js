/**
 * Search Modal Component — macOS Finder Style
 */
export function renderSearchModal() {
    // Create element if it doesn't exist
    if (!document.getElementById('search-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'search-overlay';
        overlay.className = 'search-overlay';
        overlay.innerHTML = `
            <div class="search-modal">
                <div class="search-header">
                    <span class="search-icon">🔍</span>
                    <input type="text" class="search-input" id="search-input" placeholder="Search cities, lines, or stations..." autocomplete="off">
                </div>
                <div class="search-results" id="search-results"></div>
                <div class="search-footer">
                    <div class="search-shortcuts">
                        <span><kbd>↑↓</kbd> Navigate</span>
                        <span><kbd>↵</kbd> Select</span>
                        <span><kbd>esc</kbd> Close</span>
                    </div>
                    <div class="search-meta">OneMetro Universal Search</div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
}

export function bindSearchEvents(onSearch, onSelect, onClose) {
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');

    let selectedIndex = 0;
    let currentResults = [];

    const handleInput = (e) => {
        const query = e.target.value.trim();
        if (query.length < 2) {
            resultsContainer.innerHTML = '';
            currentResults = [];
            return;
        }

        currentResults = onSearch(query);
        renderResults(currentResults);
    };

    const handleKeydown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, currentResults.length - 1);
            updateSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentResults[selectedIndex]) {
                onSelect(currentResults[selectedIndex].item);
            }
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    const handleClickOverlay = (e) => {
        if (e.target === overlay) onClose();
    };

    const renderResults = (results) => {
        selectedIndex = 0;
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
                    No results found for "${input.value}"
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = results.map((res, i) => {
            const item = res.item;
            const icon = getIconForType(item.type);
            return `
                <div class="search-item ${i === 0 ? 'selected' : ''}" data-index="${i}">
                    <div class="search-item-icon">${icon}</div>
                    <div class="search-item-content">
                        <span class="search-item-title">${item.name}</span>
                        <span class="search-item-sub">${item.sub}</span>
                    </div>
                    <div class="search-item-meta">
                        <span class="search-item-type">${item.type}</span>
                    </div>
                </div>
            `;
        }).join('');

        // Bind clicks
        resultsContainer.querySelectorAll('.search-item').forEach(el => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.dataset.index);
                onSelect(results[idx].item);
            });
        });
    };

    const updateSelection = () => {
        const items = resultsContainer.querySelectorAll('.search-item');
        items.forEach((item, i) => {
            item.classList.toggle('selected', i === selectedIndex);
            if (i === selectedIndex) {
                item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        });
    };

    function getIconForType(type) {
        switch (type) {
            case 'city': return '🏙️';
            case 'line': return '🛣️';
            case 'station': return '🚉';
            default: return '🔍';
        }
    }

    // Cleanup and Refresh bindings
    input.removeEventListener('input', handleInput);
    input.addEventListener('input', handleInput);

    input.removeEventListener('keydown', handleKeydown);
    input.addEventListener('keydown', handleKeydown);

    overlay.removeEventListener('click', handleClickOverlay);
    overlay.addEventListener('click', handleClickOverlay);

    // Focus input
    setTimeout(() => input.focus(), 10);
}

export function toggleSearchModal(visible) {
    const overlay = document.getElementById('search-overlay');
    if (!overlay) return;

    if (visible) {
        overlay.classList.add('active');
        const input = document.getElementById('search-input');
        input.value = '';
        input.focus();
        document.getElementById('search-results').innerHTML = '';
    } else {
        overlay.classList.remove('active');
        document.getElementById('search-input').blur();
    }
}
