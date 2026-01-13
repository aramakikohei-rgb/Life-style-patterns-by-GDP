# World Map Information

## Map Data Source

**Current Map:** [datasets/geo-countries GeoJSON](https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson)

This map source provides better coverage of small countries and island nations compared to simplified world maps.

## Coverage of Small Countries

### Why Singapore and Small Countries Matter

Singapore, despite its small size (only 734 km²), is one of the world's wealthiest nations with:
- **GDP per Capita:** $82,807 USD
- **Population:** 5.45 million
- **Economic Classification:** High Income
- **Global Financial Hub:** 3rd largest financial center worldwide

### Small Countries Included

The map now includes and highlights these important small countries:

1. **Singapore** 🇸🇬
   - Location: Southeast Asia, south of Malaysia
   - Red marker for visibility
   - High GDP per capita

2. **Luxembourg** 🇱🇺
   - Location: Western Europe
   - Highest GDP per capita in dataset: $126,426
   - Red marker for visibility

3. **Qatar** 🇶🇦
   - Location: Middle East, Persian Gulf
   - GDP per capita: $84,514
   - Red marker for visibility

4. **Iceland** 🇮🇸
   - Location: North Atlantic
   - GDP per capita: $68,384
   - Red marker for visibility

5. **Kuwait** 🇰🇼
   - Location: Middle East, Persian Gulf
   - GDP per capita: $29,301
   - Red marker for visibility

### Visual Enhancements for Small Countries

To make small countries more visible and interactive:

1. **Red Circle Markers**
   - Small red dots mark the locations of tiny countries
   - Makes them easier to spot on the map
   - Helps users zoom in on the right area

2. **Country Labels**
   - Major countries are labeled
   - Includes small but economically important nations
   - Appears at country centroid

3. **Zoom Functionality**
   - Users can zoom up to 8x magnification
   - Allows detailed viewing of small countries
   - Pan around to explore regions

4. **Hover Works on All Countries**
   - Even very small countries show tooltips on hover
   - Includes all data (population, GDP, income level)
   - Works regardless of visual size

## How to Find Small Countries

### Finding Singapore:
1. Look at Southeast Asia region
2. Find Malaysia (large country)
3. Singapore is at the southern tip of Malaysia
4. Look for the **red marker dot**
5. Zoom in (scroll wheel) for better visibility
6. Hover over the small area to see Singapore's data

### Finding Luxembourg:
1. Look at Western Europe
2. Between France, Germany, and Belgium
3. Look for the **red marker dot**
4. Zoom in to see the small country
5. Hover to see Luxembourg's impressive $126,426 GDP per capita

## Map Features

### Interactive Elements:
- ✅ Hover tooltips for all countries
- ✅ Color-coded by GDP per capita
- ✅ Zoom (1x - 8x) with mouse wheel
- ✅ Pan by dragging
- ✅ Country border highlighting on hover
- ✅ Visual markers for tiny countries

### Color Coding:
- **Light Pink (#fee5d9):** Low Income (< $5,000)
- **Medium Pink (#fcae91):** Lower-Middle Income ($5,000 - $15,000)
- **Dark Pink (#fb6a4a):** Upper-Middle Income ($15,000 - $30,000)
- **Deep Red (#cb181d):** High Income (> $30,000)

## Data Coverage

### Total Countries: 100+

Includes comprehensive data for:
- All G20 nations
- Major economies worldwide
- Small high-income countries (Singapore, Luxembourg, Qatar, etc.)
- Developing nations across all continents
- Island nations (Iceland, New Zealand, etc.)

### Not Included:
Some very small territories and dependencies may not have data:
- Microstates (Vatican, Monaco, San Marino)
- Some Caribbean island nations
- Some Pacific island nations
- Overseas territories

## Technical Notes

### GeoJSON vs TopoJSON:
We use GeoJSON for better compatibility and easier debugging. The file includes:
- Country boundaries (polygons)
- Country names (properties.name)
- Geographic coordinates

### Map Projection:
**Mercator Projection** - Standard web mapping projection
- Pros: Preserves angles, good for navigation
- Cons: Distorts size near poles (Greenland appears larger than reality)

### Performance:
- Map loads in ~1-2 seconds
- Smooth hover interactions
- Optimized SVG rendering
- Responsive to window resizing

## Troubleshooting

### "I can't find Singapore on the map"
1. **Look for the red marker** in Southeast Asia
2. **Zoom in** using mouse wheel/trackpad
3. **Singapore is very small** - only visible when zoomed in
4. Try the debug tool: `debug.html`

### "The tooltip doesn't appear"
1. Make sure JavaScript is enabled
2. Check browser console for errors (F12)
3. Ensure you're hovering over a colored country (not gray)
4. Try refreshing the page

### "Countries appear gray"
Gray countries don't have data in our database yet. The country exists in the map but we haven't added its GDP/population data.

## Future Enhancements

Potential improvements:
- [ ] Add search box to find specific countries
- [ ] Zoom to country on click
- [ ] Show nearby countries when hovering
- [ ] Add country comparison feature
- [ ] Include more microstate data
- [ ] Add historical data (time slider)

---

**Last Updated:** December 2024
**Map Version:** datasets/geo-countries (Natural Earth data)
