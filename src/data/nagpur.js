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

function buildStation(name, idPrefix, idx, lineColor) {
    let isInterchange = false;
    let interchangeWith = [];

    if (name === 'Sitabuldi') {
        isInterchange = true;
        interchangeWith = lineColor === 'orange' ? ['aqua'] : ['orange'];
    }

    return {
        id: `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: name,
        nameLocal: '',
        type: 'elevated', // Most Nagpur metro stations are elevated, some are at-grade
        isInterchange,
        interchangeWith,
        landmark: name,
        zone: Math.floor(idx / 5) + 1,
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
