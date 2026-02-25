import { getStationCoords } from "./stationCoords.js";

const yellowLineStations = [
    'Taj East Gate',
    'Shaheed Captain Shubham Gupta',
    'Fatehabad Road',
    'Taj Mahal',
    'Agra Fort',
    'Mankameshwar Mandir'
];

const yellowUcStations = [
    'Mankameshwar Mandir',
    'Medical College',
    'Agra College',
    'Raja Ki Mandi',
    'RBS College',
    'Shastri Nagar',
    'ISBT',
    'Guru Ka Taal',
    'Sikandra'
];

const blueLineStations = [
    'Agra Cantt',
    'Sultanpura',
    'Sadar Bazaar',
    'Pratap Pura',
    'Collectorate',
    'Subhash Park',
    'Agra College',
    'Hariparvat Chauraha',
    'Sanjay Place',
    'MG Road',
    'Sultanganj Crossing',
    'Kamla Nagar',
    'Rambagh',
    'Foundary Nagar',
    'Mandi Samiti',
    'Kalindi Vihar'
];

function buildStation(name, idPrefix, idx, lineColor) {
    let isInterchange = false;
    let interchangeWith = [];

    if (name === 'Agra College') {
        isInterchange = true;
        interchangeWith = (lineColor === 'yellow' || lineColor === 'yellow-uc') ? ['blue'] : ['yellow'];
    }

    return {
        id: `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: name,
        nameLocal: '',
        lat: null,
        lon: null,
        type: (lineColor === 'yellow' && idx >= 3 && idx <= 10) ? 'underground' : 'elevated',
        isInterchange,
        interchangeWith,
        landmark: name,
        zone: 1,
        fareZone: null,
        contact: '1860-258-2580',
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
    id: 'agra',
    name: 'Agra Metro',
    nameLocal: 'आगരാ मेट्रो',
    city: 'Agra',
    state: 'Uttar Pradesh',
    operator: 'Uttar Pradesh Metro Rail Corporation (UPMRC)',
    totalStations: 29,
    totalLength: '29.65 km',
    totalLines: 2,
    phase: 'Phase 1',
    phase2: {
        totalLines: 2,
        totalStations: 25,
        totalLength: '24.45 km',
        expectedCompletion: '2026',
    },
    established: '2024',
    website: 'https://upmetrorail.com/',
    lines: [
        {
            id: 'yellow',
            name: 'Yellow Line',
            color: '#FFEB3B',
            colorLight: '#FFF59D',
            corridor: 'Corridor 1',
            length: '5.2 km',
            totalStations: 6,
            status: 'operational',
            operationalSince: '2024',
            frequency: '5–10 min',
            firstTrain: '6:00 AM',
            lastTrain: '10:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Alstom',
            stations: yellowLineStations.map((name, i) => buildStation(name, 'y', i, 'yellow'))
        },
        {
            id: 'yellow-uc',
            name: 'Yellow Line (Ext)',
            color: '#FFEB3B',
            colorLight: '#FFF59D',
            corridor: 'Corridor 1 Ext',
            length: '9.05 km',
            totalStations: 9,
            status: 'under-construction',
            expectedCompletion: '2026',
            gauge: 'Standard Gauge (1435 mm)',
            stations: yellowUcStations.map((name, i) => buildStation(name, 'yuc', i, 'yellow-uc'))
        },
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#2196F3',
            colorLight: '#64B5F6',
            corridor: 'Corridor 2',
            length: '15.4 km',
            totalStations: 16,
            status: 'under-construction',
            expectedCompletion: '2026',
            gauge: 'Standard Gauge (1435 mm)',
            stations: blueLineStations.map((name, i) => buildStation(name, 'b', i, 'blue'))
        }
    ]
};

data.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('agra', line.id, i)
    }));
});

export default data;
