// Search Functionality for Country Autocomplete
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('country-search');
    const searchResults = document.getElementById('search-results');

    let searchDebounceTimer;
    const DEBOUNCE_DELAY = 300;
    let selectedIndex = -1;

    // Search input handler with debouncing
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchDebounceTimer);
        const query = e.target.value.trim();

        if (query.length < 2) {
            searchResults.classList.remove('visible');
            selectedIndex = -1;
            return;
        }

        searchDebounceTimer = setTimeout(() => {
            performSearch(query);
        }, DEBOUNCE_DELAY);
    });

    // Perform search and display results
    function performSearch(query) {
        const results = searchCountries(query);
        displaySearchResults(results);
    }

    // Display search results in dropdown
    function displaySearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No countries found</div>';
        } else {
            searchResults.innerHTML = results.map((country, index) => `
                <button
                    class="search-result-item"
                    data-country="${country.fullName}"
                    data-index="${index}"
                    role="option">
                    <span class="country-name">${country.displayName}</span>
                    <span class="country-gdp">${formatCurrency(country.gdpPerCapita)}</span>
                </button>
            `).join('');

            // Add click listeners to result items
            searchResults.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', function() {
                    selectCountry(this.dataset.country);
                });
            });
        }
        searchResults.classList.add('visible');
        selectedIndex = -1;
    }

    // Select a country from search results
    function selectCountry(countryName) {
        console.log('Selected country:', countryName);

        // Clear search input and hide results
        searchInput.value = '';
        searchResults.classList.remove('visible');
        selectedIndex = -1;

        // Highlight and zoom to country on map
        if (window.highlightAndZoomToCountry) {
            window.highlightAndZoomToCountry(countryName);
        }
    }

    // Keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        const items = searchResults.querySelectorAll('.search-result-item');

        if (!searchResults.classList.contains('visible') || items.length === 0) {
            return;
        }

        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
                updateSelection(items);
                break;

            case 'ArrowUp':
                e.preventDefault();
                selectedIndex = Math.max(selectedIndex - 1, -1);
                updateSelection(items);
                break;

            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    selectCountry(items[selectedIndex].dataset.country);
                }
                break;

            case 'Escape':
                e.preventDefault();
                searchResults.classList.remove('visible');
                selectedIndex = -1;
                break;
        }
    });

    // Update visual selection in dropdown
    function updateSelection(items) {
        items.forEach((item, index) => {
            if (index === selectedIndex) {
                item.style.background = '#fafafa';
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.style.background = '';
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('visible');
            selectedIndex = -1;
        }
    });

    // Focus search with '/' key
    document.addEventListener('keydown', function(e) {
        if (e.key === '/' && !searchInput.contains(document.activeElement)) {
            e.preventDefault();
            searchInput.focus();
        }
    });
});
