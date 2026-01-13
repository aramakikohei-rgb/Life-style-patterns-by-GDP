// Country data with GDP per capita and population (2023-2024 estimates)
const countryData = {
    "United States of America": { gdpPerCapita: 76398, population: 331900000, name: "United States" },
    "China": { gdpPerCapita: 12720, population: 1412000000, name: "China" },
    "Japan": { gdpPerCapita: 33950, population: 125700000, name: "Japan" },
    "Germany": { gdpPerCapita: 48756, population: 83240000, name: "Germany" },
    "United Kingdom": { gdpPerCapita: 46371, population: 67330000, name: "United Kingdom" },
    "France": { gdpPerCapita: 42330, population: 64750000, name: "France" },
    "India": { gdpPerCapita: 2389, population: 1408000000, name: "India" },
    "Italy": { gdpPerCapita: 34260, population: 58940000, name: "Italy" },
    "Brazil": { gdpPerCapita: 8917, population: 215000000, name: "Brazil" },
    "Canada": { gdpPerCapita: 52051, population: 38930000, name: "Canada" },
    "Russia": { gdpPerCapita: 12172, population: 144100000, name: "Russia" },
    "South Korea": { gdpPerCapita: 32237, population: 51710000, name: "South Korea" },
    "Australia": { gdpPerCapita: 62723, population: 25690000, name: "Australia" },
    "Spain": { gdpPerCapita: 29350, population: 47420000, name: "Spain" },
    "Mexico": { gdpPerCapita: 10045, population: 128900000, name: "Mexico" },
    "Indonesia": { gdpPerCapita: 4788, population: 273800000, name: "Indonesia" },
    "Netherlands": { gdpPerCapita: 55985, population: 17530000, name: "Netherlands" },
    "Saudi Arabia": { gdpPerCapita: 27830, population: 35950000, name: "Saudi Arabia" },
    "Turkey": { gdpPerCapita: 10655, population: 85040000, name: "Turkey" },
    "Switzerland": { gdpPerCapita: 92434, population: 8703000, name: "Switzerland" },
    "Poland": { gdpPerCapita: 17840, population: 37750000, name: "Poland" },
    "Belgium": { gdpPerCapita: 49499, population: 11590000, name: "Belgium" },
    "Sweden": { gdpPerCapita: 58529, population: 10420000, name: "Sweden" },
    "Argentina": { gdpPerCapita: 10729, population: 45380000, name: "Argentina" },
    "Norway": { gdpPerCapita: 89203, population: 5457000, name: "Norway" },
    "Austria": { gdpPerCapita: 51509, population: 9042000, name: "Austria" },
    "United Arab Emirates": { gdpPerCapita: 44315, population: 9282000, name: "UAE" },
    "Nigeria": { gdpPerCapita: 2184, population: 218500000, name: "Nigeria" },
    "Israel": { gdpPerCapita: 52170, population: 9364000, name: "Israel" },
    "Ireland": { gdpPerCapita: 99152, population: 5033000, name: "Ireland" },
    "Denmark": { gdpPerCapita: 67803, population: 5857000, name: "Denmark" },
    "Singapore": { gdpPerCapita: 82807, population: 5454000, name: "Singapore" },
    "Malaysia": { gdpPerCapita: 11371, population: 33570000, name: "Malaysia" },
    "Thailand": { gdpPerCapita: 7233, population: 71800000, name: "Thailand" },
    "Philippines": { gdpPerCapita: 3499, population: 115600000, name: "Philippines" },
    "Vietnam": { gdpPerCapita: 4164, population: 97340000, name: "Vietnam" },
    "Bangladesh": { gdpPerCapita: 2457, population: 171200000, name: "Bangladesh" },
    "Pakistan": { gdpPerCapita: 1568, population: 231400000, name: "Pakistan" },
    "Egypt": { gdpPerCapita: 3876, population: 109300000, name: "Egypt" },
    "South Africa": { gdpPerCapita: 6485, population: 59390000, name: "South Africa" },
    "Colombia": { gdpPerCapita: 6417, population: 51870000, name: "Colombia" },
    "Chile": { gdpPerCapita: 15355, population: 19600000, name: "Chile" },
    "Peru": { gdpPerCapita: 6692, population: 33720000, name: "Peru" },
    "Czech Republic": { gdpPerCapita: 26378, population: 10510000, name: "Czech Republic" },
    "Romania": { gdpPerCapita: 14861, population: 19120000, name: "Romania" },
    "Portugal": { gdpPerCapita: 23551, population: 10340000, name: "Portugal" },
    "Greece": { gdpPerCapita: 19673, population: 10640000, name: "Greece" },
    "New Zealand": { gdpPerCapita: 48781, population: 5124000, name: "New Zealand" },
    "Finland": { gdpPerCapita: 53654, population: 5541000, name: "Finland" },
    "Ukraine": { gdpPerCapita: 4534, population: 43790000, name: "Ukraine" },
    "Algeria": { gdpPerCapita: 4274, population: 44180000, name: "Algeria" },
    "Morocco": { gdpPerCapita: 3795, population: 37080000, name: "Morocco" },
    "Ethiopia": { gdpPerCapita: 925, population: 120300000, name: "Ethiopia" },
    "Kenya": { gdpPerCapita: 2099, population: 53010000, name: "Kenya" },
    "Ghana": { gdpPerCapita: 2363, population: 32830000, name: "Ghana" },
    "Tanzania": { gdpPerCapita: 1192, population: 63590000, name: "Tanzania" },
    "Uganda": { gdpPerCapita: 883, population: 45740000, name: "Uganda" },
    "Myanmar": { gdpPerCapita: 1186, population: 54180000, name: "Myanmar" },
    "Afghanistan": { gdpPerCapita: 368, population: 40100000, name: "Afghanistan" },
    "Iraq": { gdpPerCapita: 4969, population: 43530000, name: "Iraq" },
    "Venezuela": { gdpPerCapita: 3946, population: 28300000, name: "Venezuela" },
    "Hungary": { gdpPerCapita: 18728, population: 9710000, name: "Hungary" },
    "Belarus": { gdpPerCapita: 6877, population: 9340000, name: "Belarus" },
    "Ecuador": { gdpPerCapita: 6222, population: 18000000, name: "Ecuador" },
    "Kazakhstan": { gdpPerCapita: 10373, population: 19400000, name: "Kazakhstan" },
    "Cambodia": { gdpPerCapita: 1785, population: 16590000, name: "Cambodia" },
    "Jordan": { gdpPerCapita: 4330, population: 11150000, name: "Jordan" },
    "Tunisia": { gdpPerCapita: 3807, population: 12260000, name: "Tunisia" },
    "Bolivia": { gdpPerCapita: 3548, population: 12080000, name: "Bolivia" },
    "Dominican Republic": { gdpPerCapita: 9673, population: 11120000, name: "Dominican Republic" },
    "Sri Lanka": { gdpPerCapita: 3293, population: 22160000, name: "Sri Lanka" },
    "Nepal": { gdpPerCapita: 1336, population: 30030000, name: "Nepal" },
    "Luxembourg": { gdpPerCapita: 126426, population: 640000, name: "Luxembourg" },
    "Croatia": { gdpPerCapita: 17685, population: 4060000, name: "Croatia" },
    "Panama": { gdpPerCapita: 15643, population: 4380000, name: "Panama" },
    "Costa Rica": { gdpPerCapita: 12509, population: 5154000, name: "Costa Rica" },
    "Uruguay": { gdpPerCapita: 17278, population: 3422000, name: "Uruguay" },
    "Lebanon": { gdpPerCapita: 2955, population: 5490000, name: "Lebanon" },
    "Serbia": { gdpPerCapita: 9212, population: 6834000, name: "Serbia" },
    "Libya": { gdpPerCapita: 6357, population: 6812000, name: "Libya" },
    "Paraguay": { gdpPerCapita: 5109, population: 7220000, name: "Paraguay" },
    "Slovenia": { gdpPerCapita: 28104, population: 2119000, name: "Slovenia" },
    "Lithuania": { gdpPerCapita: 23723, population: 2795000, name: "Lithuania" },
    "Latvia": { gdpPerCapita: 20755, population: 1885000, name: "Latvia" },
    "Estonia": { gdpPerCapita: 27730, population: 1331000, name: "Estonia" },
    "Qatar": { gdpPerCapita: 84514, population: 2688000, name: "Qatar" },
    "Kuwait": { gdpPerCapita: 29301, population: 4250000, name: "Kuwait" },
    "Oman": { gdpPerCapita: 19302, population: 4520000, name: "Oman" },
    "Iceland": { gdpPerCapita: 68384, population: 376000, name: "Iceland" },
    "Slovakia": { gdpPerCapita: 21107, population: 5460000, name: "Slovakia" },
    "Bulgaria": { gdpPerCapita: 12221, population: 6877000, name: "Bulgaria" },
    "Azerbaijan": { gdpPerCapita: 5574, population: 10140000, name: "Azerbaijan" },
    "Zimbabwe": { gdpPerCapita: 1464, population: 15990000, name: "Zimbabwe" },
    "Cameroon": { gdpPerCapita: 1654, population: 27200000, name: "Cameroon" },
    "Mozambique": { gdpPerCapita: 504, population: 32080000, name: "Mozambique" },
    "Madagascar": { gdpPerCapita: 515, population: 28920000, name: "Madagascar" },
    "Angola": { gdpPerCapita: 2050, population: 34500000, name: "Angola" },
    "Zambia": { gdpPerCapita: 1212, population: 19470000, name: "Zambia" },
    "Senegal": { gdpPerCapita: 1606, population: 17320000, name: "Senegal" },
    "Mali": { gdpPerCapita: 893, population: 21900000, name: "Mali" },
    "Burkina Faso": { gdpPerCapita: 893, population: 22100000, name: "Burkina Faso" },
    "Niger": { gdpPerCapita: 590, population: 25250000, name: "Niger" },
    "Chad": { gdpPerCapita: 662, population: 17180000, name: "Chad" },
    "Haiti": { gdpPerCapita: 1748, population: 11450000, name: "Haiti" },
    "Rwanda": { gdpPerCapita: 966, population: 13460000, name: "Rwanda" },
    "Benin": { gdpPerCapita: 1358, population: 12870000, name: "Benin" },
    "Burundi": { gdpPerCapita: 237, population: 12550000, name: "Burundi" },
    "Guinea": { gdpPerCapita: 1265, population: 13530000, name: "Guinea" },
    "Somalia": { gdpPerCapita: 461, population: 17070000, name: "Somalia" },
    "Malawi": { gdpPerCapita: 643, population: 19890000, name: "Malawi" },
    "Dem. Rep. Congo": { gdpPerCapita: 584, population: 95890000, name: "DR Congo" },
    "Congo": { gdpPerCapita: 2289, population: 5835000, name: "Congo" },
    "Central African Republic": { gdpPerCapita: 511, population: 5457000, name: "CAR" },
    "Yemen": { gdpPerCapita: 676, population: 32980000, name: "Yemen" }
};

// Add region data to countries
const regionMapping = {
    "Africa": ["Nigeria", "Egypt", "South Africa", "Ethiopia", "Kenya", "Ghana", "Tanzania", "Uganda", "Algeria", "Morocco", "Angola", "Cameroon", "Mozambique", "Madagascar", "Zambia", "Senegal", "Mali", "Burkina Faso", "Niger", "Chad", "Rwanda", "Benin", "Burundi", "Guinea", "Somalia", "Malawi", "Dem. Rep. Congo", "Congo", "Central African Republic", "Zimbabwe"],
    "Asia": ["China", "India", "Japan", "South Korea", "Indonesia", "Thailand", "Vietnam", "Philippines", "Bangladesh", "Pakistan", "Malaysia", "Singapore", "Myanmar", "Afghanistan", "Iraq", "Cambodia", "Jordan", "Sri Lanka", "Nepal", "Lebanon", "Israel", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Turkey", "Azerbaijan"],
    "Europe": ["Germany", "United Kingdom", "France", "Italy", "Spain", "Russia", "Poland", "Netherlands", "Belgium", "Sweden", "Austria", "Norway", "Switzerland", "Ireland", "Denmark", "Finland", "Ukraine", "Czech Republic", "Romania", "Portugal", "Greece", "Hungary", "Belarus", "Serbia", "Croatia", "Slovenia", "Lithuania", "Latvia", "Estonia", "Iceland", "Slovakia", "Bulgaria"],
    "North America": ["United States of America", "Canada", "Mexico", "Dominican Republic", "Panama", "Costa Rica", "Haiti"],
    "South America": ["Brazil", "Argentina", "Chile", "Peru", "Colombia", "Ecuador", "Bolivia", "Uruguay", "Paraguay", "Venezuela"],
    "Oceania": ["Australia", "New Zealand"]
};

// Enrich country data with regions
Object.keys(regionMapping).forEach(region => {
    regionMapping[region].forEach(countryName => {
        if (countryData[countryName]) {
            countryData[countryName].region = region;
        }
    });
});

// Create search index
let searchIndex = [];
function buildSearchIndex() {
    searchIndex = Object.keys(countryData).map(key => ({
        fullName: key,
        displayName: countryData[key].name,
        aliases: getCountryAliases(key),
        gdpPerCapita: countryData[key].gdpPerCapita
    }));
}

// Get country aliases for better search
function getCountryAliases(countryName) {
    const aliases = {
        "United States of America": ["USA", "US", "United States", "America"],
        "United Kingdom": ["UK", "Britain", "GB", "Great Britain", "England"],
        "United Arab Emirates": ["UAE", "Emirates"],
        "Dem. Rep. Congo": ["DRC", "Democratic Republic of Congo", "Congo-Kinshasa"],
        "South Korea": ["Korea", "ROK", "Republic of Korea"],
        "Czech Republic": ["Czechia"],
        "Dominican Republic": ["DR"],
        "Central African Republic": ["CAR"]
    };
    return aliases[countryName] || [];
}

// Search function
function searchCountries(query) {
    if (!searchIndex.length) buildSearchIndex();

    const lowerQuery = query.toLowerCase().trim();
    return searchIndex.filter(country =>
        country.displayName.toLowerCase().includes(lowerQuery) ||
        country.fullName.toLowerCase().includes(lowerQuery) ||
        country.aliases.some(alias => alias.toLowerCase().includes(lowerQuery))
    ).slice(0, 8);
}

// Build search index on load
buildSearchIndex();

// Function to get GDP tier
function getGDPTier(gdpPerCapita) {
    if (gdpPerCapita < 5000) return 'low';
    if (gdpPerCapita < 15000) return 'lower-middle';
    if (gdpPerCapita < 30000) return 'upper-middle';
    return 'high';
}

// Function to get color based on GDP (modernized colors)
function getGDPColor(gdpPerCapita) {
    if (gdpPerCapita < 5000) return '#FEF3C7';
    if (gdpPerCapita < 15000) return '#FCD34D';
    if (gdpPerCapita < 30000) return '#F59E0B';
    return '#DC2626';
}

// Function to format numbers
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to format currency
function formatCurrency(num) {
    return '$' + formatNumber(Math.round(num));
}
