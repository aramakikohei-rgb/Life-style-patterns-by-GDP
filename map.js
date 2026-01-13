// World Map Visualization with D3.js
document.addEventListener('DOMContentLoaded', function() {
    // Set up dimensions for full-screen map
    const container = document.getElementById('world-map');
    const width = container.clientWidth;
    const height = container.clientHeight || window.innerHeight - 60;

    // Create SVG
    const svg = d3.select('#world-map')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    // Create map group for zooming/panning
    const g = svg.append('g');

    // Define projection
    const projection = d3.geoMercator()
        .scale(width / 6.5)
        .translate([width / 2, height / 1.5]);

    // Define path generator
    const path = d3.geoPath().projection(projection);

    // Get tooltip element
    const tooltip = d3.select('#tooltip');

    // Add zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([1, 8])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);

    // Load world map data - Using more detailed GeoJSON that includes small countries
    const worldUrl = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';

    d3.json(worldUrl).then(function(world) {
        // Draw countries
        g.selectAll('path')
            .data(world.features)
            .enter()
            .append('path')
            .attr('class', 'country')
            .attr('d', path)
            .attr('fill', function(d) {
                const countryName = d.properties.name;
                const data = countryData[countryName];
                return data ? getGDPColor(data.gdpPerCapita) : '#ccc';
            })
            .attr('stroke', '#fff')
            .attr('stroke-width', 0.5)
            .on('mouseover', function(event, d) {
                const countryName = d.properties.name;
                const data = countryData[countryName];

                console.log('Hovering over:', countryName, 'Data found:', !!data);

                if (data) {
                    // Highlight country
                    d3.select(this)
                        .attr('stroke', '#6366f1')
                        .attr('stroke-width', 2)
                        .style('filter', 'brightness(0.9)');

                    // Get GDP tier
                    const tier = getGDPTier(data.gdpPerCapita);
                    const tierInfo = {
                        'low': { name: 'Low Income', icon: '📊', color: '#FEF3C7', textColor: '#92400E' },
                        'lower-middle': { name: 'Lower-Middle', icon: '📈', color: '#FCD34D', textColor: '#92400E' },
                        'upper-middle': { name: 'Upper-Middle', icon: '💰', color: '#F59E0B', textColor: '#ffffff' },
                        'high': { name: 'High Income', icon: '💎', color: '#DC2626', textColor: '#ffffff' }
                    };
                    const info = tierInfo[tier];

                    // Calculate population density (if area available in future)
                    const density = 'N/A';

                    // Show enhanced tooltip with glassmorphism
                    tooltip.classed('visible', true);
                    tooltip.html(`
                        <div class="tooltip-header">
                            <h3>${data.name}</h3>
                            <span class="tier-badge" style="background: ${info.color}; color: ${info.textColor};">
                                ${info.icon} ${info.name}
                            </span>
                        </div>
                        <div class="tooltip-body">
                            <div class="tooltip-row">
                                <span class="label">GDP per Capita</span>
                                <span class="value">${formatCurrency(data.gdpPerCapita)}</span>
                            </div>
                            <div class="tooltip-row">
                                <span class="label">Population</span>
                                <span class="value">${formatNumber(data.population)}</span>
                            </div>
                            <div class="tooltip-row">
                                <span class="label">Density</span>
                                <span class="value">${density}</span>
                            </div>
                        </div>
                        <div class="tooltip-footer">
                            <small>Click to explore details →</small>
                        </div>
                    `);

                    console.log('Enhanced tooltip visible');
                }
            })
            .on('mousemove', function(event) {
                // Position tooltip near cursor (using clientX/Y for fixed positioning)
                tooltip
                    .style('left', (event.clientX + 15) + 'px')
                    .style('top', (event.clientY - 10) + 'px');
            })
            .on('mouseout', function() {
                // Reset country style
                d3.select(this)
                    .attr('stroke', '#fff')
                    .attr('stroke-width', 0.5)
                    .style('filter', 'none');

                // Hide tooltip
                tooltip.classed('visible', false);
            });

        // Add country labels for major countries (optional)
        const majorCountries = [
            'United States of America',
            'China',
            'Brazil',
            'Australia',
            'India',
            'Russia',
            'Singapore',  // Small but important
            'Luxembourg',  // Small but high GDP
            'Switzerland'
        ];

        g.selectAll('.country-label')
            .data(world.features.filter(d => majorCountries.includes(d.properties.name)))
            .enter()
            .append('text')
            .attr('class', 'country-label')
            .attr('transform', function(d) {
                const centroid = path.centroid(d);
                return `translate(${centroid[0]}, ${centroid[1]})`;
            })
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('fill', '#333')
            .attr('pointer-events', 'none')
            .attr('opacity', 0.7)
            .text(d => {
                const data = countryData[d.properties.name];
                return data ? data.name : '';
            });

        // Add markers for small but important countries to make them more visible
        const smallCountries = ['Singapore', 'Luxembourg', 'Qatar', 'Kuwait', 'Iceland'];

        g.selectAll('.country-marker')
            .data(world.features.filter(d => smallCountries.includes(d.properties.name)))
            .enter()
            .append('circle')
            .attr('class', 'country-marker')
            .attr('transform', function(d) {
                const centroid = path.centroid(d);
                return `translate(${centroid[0]}, ${centroid[1]})`;
            })
            .attr('r', 4)
            .attr('fill', '#e74c3c')
            .attr('stroke', '#fff')
            .attr('stroke-width', 2)
            .attr('opacity', 0.8)
            .attr('pointer-events', 'none')
            .append('title')
            .text(d => d.properties.name + ' (marker for visibility)');

    }).catch(function(error) {
        console.error('Error loading map data:', error);
        document.getElementById('world-map').innerHTML =
            '<div class="loading">Error loading map. Please check your internet connection.</div>';
    });

    // Add loading indicator
    svg.append('text')
        .attr('class', 'loading')
        .attr('x', width / 2)
        .attr('y', height / 2)
        .attr('text-anchor', 'middle')
        .attr('font-size', '18px')
        .attr('fill', '#3498db')
        .text('Loading world map...');

    // Remove loading text when map loads
    setTimeout(() => {
        d3.select('.loading').remove();
    }, 2000);

    // Handle window resize
    window.addEventListener('resize', function() {
        const newWidth = container.clientWidth;
        svg.attr('width', newWidth);
        projection.translate([newWidth / 2, height / 1.5]).scale(newWidth / 6.5);
        g.selectAll('path').attr('d', path);
        g.selectAll('.country-label').attr('transform', function(d) {
            const centroid = path.centroid(d);
            return `translate(${centroid[0]}, ${centroid[1]})`;
        });
    });

    // Highlight and zoom to country (for search functionality)
    window.highlightAndZoomToCountry = function(countryName) {
        // Remove previous highlights
        g.selectAll('.country').classed('highlighted', false);
        g.selectAll('.country').style('opacity', 0.3);

        // Find and highlight country
        const countryPath = g.selectAll('.country')
            .filter(d => d.properties.name === countryName);

        if (countryPath.size() > 0) {
            countryPath.classed('highlighted', true);
            countryPath.style('opacity', 1);

            // Calculate bounds and zoom
            const bounds = path.bounds(countryPath.datum());
            const dx = bounds[1][0] - bounds[0][0];
            const dy = bounds[1][1] - bounds[0][1];
            const x = (bounds[0][0] + bounds[1][0]) / 2;
            const y = (bounds[0][1] + bounds[1][1]) / 2;
            const scale = Math.min(8, 0.9 / Math.max(dx / width, dy / height));
            const translate = [width / 2 - scale * x, height / 2 - scale * y];

            svg.transition()
                .duration(750)
                .call(zoom.transform, d3.zoomIdentity
                    .translate(translate[0], translate[1])
                    .scale(scale));

            // Reset after 3 seconds
            setTimeout(() => {
                g.selectAll('.country').classed('highlighted', false);
                g.selectAll('.country').style('opacity', 1);
            }, 3000);
        }
    };

    // Apply filters to map (for filter functionality)
    window.applyFilters = function(filterState) {
        g.selectAll('.country')
            .transition()
            .duration(300)
            .style('opacity', function(d) {
                const data = countryData[d.properties.name];
                if (!data) return 0.3;

                const matchesGDP = data.gdpPerCapita >= filterState.gdpRange[0] &&
                                   data.gdpPerCapita <= filterState.gdpRange[1];
                const matchesPop = data.population >= filterState.populationRange[0] &&
                                   data.population <= filterState.populationRange[1];
                const matchesRegion = filterState.regions.length === 0 ||
                                     filterState.regions.includes(data.region);

                return (matchesGDP && matchesPop && matchesRegion) ? 1 : 0.2;
            });
    };
});
