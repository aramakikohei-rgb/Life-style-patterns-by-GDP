// Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterToggle = document.getElementById('filter-toggle');
    const filterPanel = document.getElementById('filter-panel');
    const filterClose = document.getElementById('filter-close');
    const applyBtn = document.getElementById('apply-filters');
    const resetBtn = document.getElementById('reset-filters');
    const filterBadge = document.getElementById('filter-badge');

    // Filter state
    const filterState = {
        gdpRange: [0, 150000],
        populationRange: [0, 1500000000],
        regions: ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'],
        activePreset: null
    };

    // Toggle filter panel
    filterToggle.addEventListener('click', function() {
        filterPanel.classList.add('active');
    });

    filterClose.addEventListener('click', function() {
        filterPanel.classList.remove('active');
    });

    // Close panel when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!filterPanel.contains(e.target) && !filterToggle.contains(e.target)) {
                filterPanel.classList.remove('active');
            }
        }
    });

    // GDP Range inputs
    const gdpMin = document.getElementById('gdp-min');
    const gdpMax = document.getElementById('gdp-max');
    const gdpRangeMin = document.getElementById('gdp-range-min');
    const gdpRangeMax = document.getElementById('gdp-range-max');

    gdpMin.addEventListener('input', function() {
        filterState.gdpRange[0] = parseInt(this.value);
        gdpRangeMin.value = this.value;
    });

    gdpMax.addEventListener('input', function() {
        filterState.gdpRange[1] = parseInt(this.value);
        gdpRangeMax.value = this.value;
    });

    gdpRangeMin.addEventListener('input', function() {
        filterState.gdpRange[0] = parseInt(this.value);
        gdpMin.value = this.value;
    });

    gdpRangeMax.addEventListener('input', function() {
        filterState.gdpRange[1] = parseInt(this.value);
        gdpMax.value = this.value;
    });

    // Population Range inputs
    const popMin = document.getElementById('pop-min');
    const popMax = document.getElementById('pop-max');
    const popRangeMin = document.getElementById('pop-range-min');
    const popRangeMax = document.getElementById('pop-range-max');

    popMin.addEventListener('input', function() {
        filterState.populationRange[0] = parseInt(this.value);
        popRangeMin.value = this.value;
    });

    popMax.addEventListener('input', function() {
        filterState.populationRange[1] = parseInt(this.value);
        popRangeMax.value = this.value;
    });

    popRangeMin.addEventListener('input', function() {
        filterState.populationRange[0] = parseInt(this.value);
        popMin.value = this.value;
    });

    popRangeMax.addEventListener('input', function() {
        filterState.populationRange[1] = parseInt(this.value);
        popMax.value = this.value;
    });

    // Region checkboxes
    const regionCheckboxes = document.querySelectorAll('.filter-checkboxes input[type="checkbox"]');
    regionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const region = this.value;
            if (this.checked) {
                if (!filterState.regions.includes(region)) {
                    filterState.regions.push(region);
                }
            } else {
                filterState.regions = filterState.regions.filter(r => r !== region);
            }
        });
    });

    // Quick preset filters
    document.getElementById('preset-high').addEventListener('click', function() {
        filterState.gdpRange = [30000, 150000];
        filterState.populationRange = [0, 1500000000];
        updateFilterInputs();
        this.classList.toggle('active');
        document.querySelectorAll('.preset-btn').forEach(btn => {
            if (btn !== this) btn.classList.remove('active');
        });
    });

    document.getElementById('preset-developing').addEventListener('click', function() {
        filterState.gdpRange = [0, 15000];
        filterState.populationRange = [0, 1500000000];
        updateFilterInputs();
        this.classList.toggle('active');
        document.querySelectorAll('.preset-btn').forEach(btn => {
            if (btn !== this) btn.classList.remove('active');
        });
    });

    document.getElementById('preset-small').addEventListener('click', function() {
        filterState.gdpRange = [0, 150000];
        filterState.populationRange = [0, 10000000];
        updateFilterInputs();
        this.classList.toggle('active');
        document.querySelectorAll('.preset-btn').forEach(btn => {
            if (btn !== this) btn.classList.remove('active');
        });
    });

    // Update filter inputs from state
    function updateFilterInputs() {
        gdpMin.value = filterState.gdpRange[0];
        gdpMax.value = filterState.gdpRange[1];
        gdpRangeMin.value = filterState.gdpRange[0];
        gdpRangeMax.value = filterState.gdpRange[1];

        popMin.value = filterState.populationRange[0];
        popMax.value = filterState.populationRange[1];
        popRangeMin.value = filterState.populationRange[0];
        popRangeMax.value = filterState.populationRange[1];
    }

    // Apply filters
    applyBtn.addEventListener('click', function() {
        if (window.applyFilters) {
            window.applyFilters(filterState);
        }
        updateFilterBadge();
        filterPanel.classList.remove('active');
    });

    // Reset filters
    resetBtn.addEventListener('click', function() {
        filterState.gdpRange = [0, 150000];
        filterState.populationRange = [0, 1500000000];
        filterState.regions = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];
        filterState.activePreset = null;

        updateFilterInputs();

        regionCheckboxes.forEach(checkbox => {
            checkbox.checked = true;
        });

        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        if (window.applyFilters) {
            window.applyFilters(filterState);
        }
        updateFilterBadge();
    });

    // Update filter badge count
    function updateFilterBadge() {
        let activeCount = 0;

        if (filterState.gdpRange[0] > 0 || filterState.gdpRange[1] < 150000) {
            activeCount++;
        }

        if (filterState.populationRange[0] > 0 || filterState.populationRange[1] < 1500000000) {
            activeCount++;
        }

        if (filterState.regions.length < 6) {
            activeCount++;
        }

        filterBadge.textContent = activeCount;
        if (activeCount > 0) {
            filterBadge.style.display = 'block';
        } else {
            filterBadge.style.display = 'none';
        }
    }

    // Toggle filters with 'F' key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'f' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            filterPanel.classList.toggle('active');
        }
    });

    // Initialize badge
    updateFilterBadge();
});
