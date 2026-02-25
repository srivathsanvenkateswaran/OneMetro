const orangeLineStations = [
    'Automotive Square', 'Nari Road', 'Indora Square', 'Kadvi Square', 'Gaddigodam Square', 'Kasturchand Park', 'Zero Mile Freedom Park', 'Sitabuldi', 'Congress Nagar', 'Rahate Colony', 'Ajni Square', 'Chhatrapati Square', 'Jaiprakash Nagar', 'Ujjwal Nagar', 'Airport', 'Airport South', 'New Airport', 'Khapri'
];

const orangeNorthStations = [
    'Automotive Square', 'Pili Nadi', 'Khasara Fata', 'All India Radio', 'Kheri Fata', 'Lok Vihar', 'Lekha Nagar', 'Cantonment', 'Kamptee Police Station', 'Kamptee Municipal Council', 'Dragon Palace', 'Golf Club', 'Kanhan'
];

const orangeSouthStations = [
    'Khapri', 'Eco Park', 'Metro City', 'Ashokvan', 'Dongargaon', 'Mohgaon', 'Meghdoot CIDCO', 'Butibori Police Station', 'Mhada Colony', 'MIDC KEC', 'MIDC-ESR'
];

const aquaLineStations = [
    'Prajapati Nagar', 'Vaishno Devi Square', 'Ambedkar Square', 'Telephone Exchange', 'Chitar Oli Chowk', 'Agrasen Square', 'Dosar Vaisya Square', 'Nagpur Railway Station', 'Cotton Market', 'Sitabuldi', 'Jhansi Rani Square', 'Institute of Engineers', 'Shankar Nagar Square', 'LAD Square', 'Dharampeth College', 'Subhash Nagar', 'Rachana Ring Road Junction', 'Vasudev Nagar', 'Bansi Nagar', 'Lokmanya Nagar'
];

const aquaEastStations = [
    'Prajapati Nagar', 'Pardi', 'Kapsi Khurd', 'Transport Nagar'
];

const aquaWestStations = [
    'Lokmanya Nagar', 'Mount View', 'Rajiv Nagar', 'Wanadongri', 'APMC', 'Raipur', 'Hingna Bus Station', 'Hingna'
];

// Real-world coordinates for all Nagpur Metro stations (WGS84)
const stationCoords = {
    // Orange Line — Automotive Square → Khapri (N–S)
    'Automotive Square': { lat: 21.1613, lon: 79.0657 },
    'Nari Road': { lat: 21.1575, lon: 79.0673 },
    'Indora Square': { lat: 21.1539, lon: 79.0688 },
    'Kadvi Square': { lat: 21.1507, lon: 79.0719 },
    'Gaddigodam Square': { lat: 21.1484, lon: 79.0742 },
    'Kasturchand Park': { lat: 21.1468, lon: 79.0767 },
    'Zero Mile Freedom Park': { lat: 21.1451, lon: 79.0799 },
    'Sitabuldi': { lat: 21.1431, lon: 79.0822 }, // interchange Orange–Aqua
    'Congress Nagar': { lat: 21.1388, lon: 79.0849 },
    'Rahate Colony': { lat: 21.1333, lon: 79.0878 },
    'Ajni Square': { lat: 21.1278, lon: 79.0908 },
    'Chhatrapati Square': { lat: 21.1224, lon: 79.0942 },
    'Jaiprakash Nagar': { lat: 21.1176, lon: 79.0979 },
    'Ujjwal Nagar': { lat: 21.1140, lon: 79.1007 },
    'Airport': { lat: 21.1012, lon: 79.0966 },
    'Airport South': { lat: 21.0897, lon: 79.0893 },
    'New Airport': { lat: 21.0827, lon: 79.0862 },
    'Khapri': { lat: 21.0759, lon: 79.0833 },
    // Orange North Extension — Automotive Square → Kanhan
    'Pili Nadi': { lat: 21.1697, lon: 79.0703 },
    'Khasara Fata': { lat: 21.1781, lon: 79.0758 },
    'All India Radio': { lat: 21.1865, lon: 79.0812 },
    'Kheri Fata': { lat: 21.1947, lon: 79.0866 },
    'Lok Vihar': { lat: 21.2028, lon: 79.0917 },
    'Lekha Nagar': { lat: 21.2108, lon: 79.0969 },
    'Cantonment': { lat: 21.2165, lon: 79.1073 },
    'Kamptee Police Station': { lat: 21.2193, lon: 79.1185 },
    'Kamptee Municipal Council': { lat: 21.2201, lon: 79.1288 },
    'Dragon Palace': { lat: 21.2207, lon: 79.1385 },
    'Golf Club': { lat: 21.2219, lon: 79.1479 },
    'Kanhan': { lat: 21.2236, lon: 79.1576 },
    // Orange South Extension — Khapri → MIDC-ESR
    'Eco Park': { lat: 21.0674, lon: 79.0876 },
    'Metro City': { lat: 21.0586, lon: 79.0918 },
    'Ashokvan': { lat: 21.0494, lon: 79.0958 },
    'Dongargaon': { lat: 21.0400, lon: 79.0996 },
    'Mohgaon': { lat: 21.0308, lon: 79.1033 },
    'Meghdoot CIDCO': { lat: 21.0216, lon: 79.1069 },
    'Butibori Police Station': { lat: 21.0124, lon: 79.1104 },
    'Mhada Colony': { lat: 21.0033, lon: 79.1138 },
    'MIDC KEC': { lat: 20.9942, lon: 79.1172 },
    'MIDC-ESR': { lat: 20.9851, lon: 79.1206 },
    // Aqua Line — Prajapati Nagar → Lokmanya Nagar (E–W)
    'Prajapati Nagar': { lat: 21.1572, lon: 79.1408 },
    'Vaishno Devi Square': { lat: 21.1548, lon: 79.1340 },
    'Ambedkar Square': { lat: 21.1524, lon: 79.1273 },
    'Telephone Exchange': { lat: 21.1502, lon: 79.1208 },
    'Chitar Oli Chowk': { lat: 21.1487, lon: 79.1143 },
    'Agrasen Square': { lat: 21.1471, lon: 79.1080 },
    'Dosar Vaisya Square': { lat: 21.1455, lon: 79.1003 },
    'Nagpur Railway Station': { lat: 21.1448, lon: 79.0940 },
    'Cotton Market': { lat: 21.1439, lon: 79.0880 },
    'Jhansi Rani Square': { lat: 21.1415, lon: 79.0757 },
    'Institute of Engineers': { lat: 21.1395, lon: 79.0688 },
    'Shankar Nagar Square': { lat: 21.1375, lon: 79.0619 },
    'LAD Square': { lat: 21.1347, lon: 79.0554 },
    'Dharampeth College': { lat: 21.1320, lon: 79.0490 },
    'Subhash Nagar': { lat: 21.1280, lon: 79.0424 },
    'Rachana Ring Road Junction': { lat: 21.1250, lon: 79.0353 },
    'Vasudev Nagar': { lat: 21.1211, lon: 79.0283 },
    'Bansi Nagar': { lat: 21.1174, lon: 79.0217 },
    'Lokmanya Nagar': { lat: 21.1138, lon: 79.0153 },
    // Aqua East Extension — Prajapati Nagar → Transport Nagar
    'Pardi': { lat: 21.1554, lon: 79.1524 },
    'Kapsi Khurd': { lat: 21.1537, lon: 79.1640 },
    'Transport Nagar': { lat: 21.1519, lon: 79.1756 },
    // Aqua West Extension — Lokmanya Nagar → Hingna
    'Mount View': { lat: 21.1101, lon: 79.0081 },
    'Rajiv Nagar': { lat: 21.1058, lon: 79.0009 },
    'Wanadongri': { lat: 21.1014, lon: 78.9937 },
    'APMC': { lat: 21.0970, lon: 78.9865 },
    'Raipur': { lat: 21.0926, lon: 78.9793 },
    'Hingna Bus Station': { lat: 21.0882, lon: 78.9721 },
    'Hingna': { lat: 21.0838, lon: 78.9649 },
};

function buildStation(name, idPrefix, idx, lineColor) {
    let isInterchange = false;
    let interchangeWith = [];

    if (name === 'Sitabuldi') {
        isInterchange = true;
        interchangeWith = lineColor === 'orange' ? ['aqua'] : ['orange'];
    }

    const { lat = null, lon = null } = stationCoords[name] ?? {};
    return {
        id: `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: name,
        nameLocal: '',
        lat,
        lon,
        type: 'elevated', // Most Nagpur metro stations are elevated, some are at-grade
        isInterchange,
        interchangeWith,
        landmark: name,
        zone: Math.floor(idx / 5) + 1,
        fareZone: null,
        contact: '1800-270-0557', // Nagpur Metro Toll Free
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Terminal 1' },
            { no: 2, towards: 'Terminal 2' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
            { gate: 'B', landmarks: ['Residential Area Exit'] }
        ]
    };
}

const data = {
    id: 'nagpur',
    name: 'Nagpur Metro',
    nameLocal: 'नागपूर मेट्रो',
    city: 'Nagpur',
    state: 'Maharashtra',
    operator: 'Maharashtra Metro Rail Corporation Limited (Maha Metro)',
    totalStations: 37, // 18 + 20 - 1 interchange = 37 stations actual locations
    totalLength: '38.2 km',
    totalLines: 2,
    phase: 'Phase 1 (Operational)',
    established: '2019',
    website: 'http://www.metrorailnagpur.com/',
    phase2: {
        totalLines: 4,
        totalStations: 32,
        totalLength: '43.8 km',
        expectedCompletion: '2028–2029',
    },
    lines: [
        {
            id: 'orange',
            name: 'Orange Line',
            color: '#FF9800',
            colorLight: '#FFCC80',
            corridor: 'N-S Corridor',
            length: '19.65 km',
            totalStations: 18,
            status: 'operational',
            operationalSince: '2019',
            frequency: '10–15 min',
            firstTrain: '6:00 AM',
            lastTrain: '10:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'CRRC Dalian',
            stations: orangeLineStations.map((name, i) => buildStation(name, 'o', i, 'orange'))
        },
        {
            id: 'aqua',
            name: 'Aqua Line',
            color: '#00BCD4',
            colorLight: '#B2EBF2',
            corridor: 'E-W Corridor',
            length: '18.55 km',
            totalStations: 20,
            status: 'operational',
            operationalSince: '2020',
            frequency: '10–15 min',
            firstTrain: '6:00 AM',
            lastTrain: '10:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'CRRC Dalian',
            stations: aquaLineStations.map((name, i) => buildStation(name, 'a', i, 'aqua'))
        },
        // ═══════════════════════════════════════════
        // PHASE 2 — UNDER CONSTRUCTION
        // ═══════════════════════════════════════════
        {
            id: 'orange-north',
            name: 'Orange Line (North Ext)',
            color: '#FF9800',
            colorLight: '#FFCC80',
            corridor: 'N-Ext',
            length: '13.0 km',
            totalStations: 13,
            status: 'under-construction',
            expectedCompletion: '2028-2029',
            gauge: 'Standard Gauge (1435 mm)',
            stations: orangeNorthStations.map((name, i) => buildStation(name, 'on', i, 'orange'))
        },
        {
            id: 'orange-south',
            name: 'Orange Line (South Ext)',
            color: '#FF9800',
            colorLight: '#FFCC80',
            corridor: 'S-Ext',
            length: '18.7 km',
            totalStations: 11,
            status: 'under-construction',
            expectedCompletion: '2028-2029',
            gauge: 'Standard Gauge (1435 mm)',
            stations: orangeSouthStations.map((name, i) => buildStation(name, 'os', i, 'orange'))
        },
        {
            id: 'aqua-east',
            name: 'Aqua Line (East Ext)',
            color: '#00BCD4',
            colorLight: '#B2EBF2',
            corridor: 'E-Ext',
            length: '5.5 km',
            totalStations: 4,
            status: 'under-construction',
            expectedCompletion: '2028-2029',
            gauge: 'Standard Gauge (1435 mm)',
            stations: aquaEastStations.map((name, i) => buildStation(name, 'ae', i, 'aqua'))
        },
        {
            id: 'aqua-west',
            name: 'Aqua Line (West Ext)',
            color: '#00BCD4',
            colorLight: '#B2EBF2',
            corridor: 'W-Ext',
            length: '6.6 km',
            totalStations: 8,
            status: 'under-construction',
            expectedCompletion: '2028-2029',
            gauge: 'Standard Gauge (1435 mm)',
            stations: aquaWestStations.map((name, i) => buildStation(name, 'aw', i, 'aqua'))
        }
    ]
};

export default data;
