import { getStationCoords } from "./stationCoords.js";

const redLineStations = [
    'CCS Airport', 'Amausi', 'Transport Nagar', 'Krishna Nagar', 'Singar Nagar',
    'Alambagh', 'Alambagh ISBT', 'Mawaiya', 'Durgapuri', 'Charbagh',
    'Hussainganj', 'Sachivalaya', 'Hazratganj', 'KD Singh Babu Stadium',
    'Vishwavidyalaya', 'IT College', 'Badshah Nagar', 'Lekhraj Market',
    'Bhootnath Market', 'Indira Nagar', 'Munshipulia'
];

const blueLineStations = [
    'Charbagh', 'Gautam Buddha Marg', 'Aminabad', 'Pandeyganj', 'City Railway Station',
    'Medical Chauraha', 'Nawazganj', 'Thakurganj', 'Balaganj', 'Sarfarazganj',
    'Musabagh', 'Vasant Kunj'
];

function buildStation(name, idPrefix, idx, lineColor) {
    let isInterchange = false;
    let interchangeWith = [];

    if (name === 'Charbagh') {
        isInterchange = true;
        interchangeWith = lineColor === 'red' ? ['blue'] : ['red'];
    }

    return {
        id: `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: name,
        lat: null,
        lon: null,
        type: 'elevated',
        isInterchange,
        interchangeWith,
        zone: 1,
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Terminal 1' },
            { no: 2, towards: 'Terminal 2' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Main Road Entrance'] },
            { gate: 'B', landmarks: ['Exit'] }
        ]
    };
}

const data = {
    id: 'lucknow',
    name: 'Lucknow Metro',
    nameLocal: 'लखनऊ मेट्रो',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    operator: 'Uttar Pradesh Metro Rail Corporation (UPMRC)',
    totalStations: 21,
    totalLength: '22.87 km',
    totalLines: 1,
    phase: 'Phase 1 (Operational)',
    established: '2017',
    website: 'https://www.lmrcl.com/',
    phase2: {
        totalLines: 1,
        totalStations: 12,
        totalLength: '11.10 km',
        expectedCompletion: 'Proposed',
    },
    lines: [
        {
            id: 'red',
            name: 'Red Line',
            color: '#E53935',
            colorLight: '#EF9A9A',
            corridor: 'N-S Corridor',
            length: '22.87 km',
            totalStations: 21,
            status: 'operational',
            operationalSince: '2017',
            frequency: '5–10 min',
            firstTrain: '6:00 AM',
            lastTrain: '10:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Alstom',
            stations: redLineStations.map((name, i) => buildStation(name, 'r', i, 'red'))
        },
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#1E88E5',
            colorLight: '#90CAF9',
            corridor: 'E-W Corridor',
            length: '11.10 km',
            totalStations: 12,
            status: 'under-construction',
            expectedCompletion: 'Proposed',
            gauge: 'Standard Gauge (1435 mm)',
            stations: blueLineStations.map((name, i) => buildStation(name, 'b', i, 'blue'))
        }
    ]
};

data.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('lucknow', line.id, i)
    }));
});

export default data;
