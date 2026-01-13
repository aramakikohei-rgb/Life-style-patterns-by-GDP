# Lifestyle Patterns by GDP per Capita

An interactive, data-driven webpage that explores the relationship between GDP per capita and lifestyle patterns across countries worldwide.

## Features

### 🗺️ Interactive World Map
- **Complete world map visualization** using D3.js
- **Color-coded countries** based on GDP per capita (4 income tiers)
- **Hover interactions** showing:
  - Country name
  - Population (formatted)
  - GDP per capita (in USD)
  - Income classification
- **Zoom and pan capabilities** for detailed exploration
- **Responsive design** that scales across devices

### 📊 Comprehensive Lifestyle Analysis

Seven key lifestyle dimensions analyzed across income levels:

1. **Health & Wellness**
   - Life expectancy trends
   - Healthcare coverage rates
   - Nutrition and fitness patterns

2. **Education & Technology**
   - Literacy rates
   - Internet penetration
   - Digital device ownership
   - Higher education access

3. **Work & Employment**
   - Average working hours
   - Remote work availability
   - Employment sector distribution
   - Job security metrics

4. **Consumer Behavior**
   - Spending patterns (necessities vs. discretionary)
   - E-commerce adoption
   - Brand consciousness
   - Sustainability awareness

5. **Housing & Transportation**
   - Home ownership rates
   - Living space per person
   - Vehicle ownership
   - Urbanization levels

6. **Leisure & Entertainment**
   - Vacation frequency
   - Entertainment spending
   - Dining habits
   - Cultural activity participation

7. **Social & Family**
   - Family structure and size
   - Household composition
   - Social networks
   - Volunteer participation

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, flexbox, and grid
- **JavaScript (ES6+)** - Interactive functionality
- **D3.js v7** - World map visualization
- **Chart.js** - Data visualizations (bar, line, radar, doughnut charts)

## File Structure

```
Prototype/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── data.js            # Country data (GDP, population)
├── map.js             # D3.js world map implementation
├── charts.js          # Chart.js visualizations
└── README.md          # Documentation (this file)
```

## Data Sources

- **World Bank** - GDP per capita data (2023-2024)
- **IMF** - Economic indicators
- **UN Development Programme** - Development statistics
- **GeoJSON** - World map boundaries

## GDP Income Tiers

Countries are classified into four income levels:

| Tier | GDP per Capita Range | Color Code |
|------|---------------------|------------|
| Low Income | < $5,000 | Light Pink (#fee5d9) |
| Lower-Middle Income | $5,000 - $15,000 | Medium Pink (#fcae91) |
| Upper-Middle Income | $15,000 - $30,000 | Dark Pink (#fb6a4a) |
| High Income | > $30,000 | Deep Red (#cb181d) |

## Setup Instructions

1. **Download all files** to a single directory
2. **Open index.html** in a modern web browser (Chrome, Firefox, Safari, Edge)
3. **Ensure internet connection** for CDN resources (D3.js, Chart.js) and GeoJSON data

### Local Development

For local development without internet:

1. Download D3.js and Chart.js libraries locally
2. Update script tags in index.html to point to local files
3. Download world.geojson file locally
4. Update the worldUrl variable in map.js

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## Accessibility Features

- ARIA labels for interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Sufficient color contrast (WCAG AA compliant)
- Proper heading hierarchy
- Screen reader compatible
- Reduced motion support

## Key Insights

### Low Income Countries (< $5,000)
- Focus on survival and basic needs
- Limited healthcare and education access
- Agriculture-based employment
- Strong community-based social networks
- Low digital connectivity

### Lower-Middle Income ($5,000 - $15,000)
- Transition to manufacturing and services
- Improving education access
- Growing urbanization
- Emerging consumer class
- Increasing technology adoption

### Upper-Middle Income ($15,000 - $30,000)
- Service-sector dominance
- Strong education systems
- Rising discretionary spending
- High internet penetration
- Improved work-life balance

### High Income (> $30,000)
- Knowledge-based economies
- Universal healthcare and education
- High quality of life metrics
- Advanced technology integration
- Focus on sustainability and wellness

## Customization

### Adding More Countries

Edit `data.js` and add entries to the `countryData` object:

```javascript
"Country Name": {
    gdpPerCapita: 12345,
    population: 1000000,
    name: "Display Name"
}
```

### Changing Color Scheme

Edit the `getGDPColor()` function in `data.js` and update the legend colors in `index.html`.

### Modifying Charts

Edit `charts.js` to customize chart types, data, or styling.

## Performance Optimization

- Efficient D3.js rendering
- Optimized SVG paths
- Compressed data structures
- Lazy loading considered for below-fold content
- Responsive images and viewBox scaling

## Future Enhancements

- [ ] Search functionality for countries
- [ ] Country comparison mode
- [ ] Historical data (time-series)
- [ ] Data export (CSV/JSON)
- [ ] Additional lifestyle metrics
- [ ] Filter by specific dimensions
- [ ] Mobile touch gestures
- [ ] Offline functionality with service workers

## Credits

Created as an interactive educational tool to explore global economic prosperity and lifestyle patterns.

Data sources: World Bank, IMF, UN Development Programme (2023-2024)

## License

This project is open source and available for educational purposes.

## Support

For questions or issues, please refer to the data source websites for the most up-to-date information.
# Lifestyle Patterns by GDP
