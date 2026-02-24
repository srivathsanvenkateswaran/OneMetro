const redLineStations = [
    'Miyapur', 'JNTU College', 'KPHB Colony', 'Kukatpally', 'Balanagar', 'Moosapet', 'Bharat Nagar', 'Erragadda', 'ESI Hospital', 'S.R. Nagar', 'Ameerpet', 'Punjagutta', 'Irrum Manzil', 'Khairtabad', 'Lakdi-ka-Pul', 'Assembly', 'Nampally', 'Gandhi Bhavan', 'Osmania Medical College', 'MG Bus Station', 'Malakpet', 'New Market', 'Musarambagh', 'Dilsukhnagar', 'Chaitanya Puri', 'Victoria Memorial', 'LB Nagar'
];
const blueLineStations = [
    'Nagole', 'Uppal', 'Stadium', 'NGRI', 'Habsiguda', 'Tarnaka', 'Mettuguda', 'Secunderabad East', 'Parade Ground', 'Paradise', 'Rasoolpura', 'Prakash Nagar', 'Begumpet', 'Ameerpet', 'Madhura Nagar', 'Yusufguda', 'Road No.5 Jubilee Hills', 'Jubilee Hills Check Post', 'Peddamma Gudi', 'Madhapur', 'Durgam Cheruvu', 'HITEC City', 'Raidurg'
];
const greenLineStations = [
    'JBS Parade Ground', 'Secunderabad West', 'Gandhi Hospital', 'Musheerabad', 'RTC X Roads', 'Chikkadpally', 'Narayanguda', 'Sultan Bazar', 'MG Bus Station'
];

function buildStation(name, idPrefix, idx, lineColor) {
    let isInterchange = false;
    let interchangeWith = [];
    if (name === 'Ameerpet') {
        isInterchange = true;
        interchangeWith = lineColor === 'red' ? ['blue'] : ['red'];
    } else if (name === 'MG Bus Station') {
        isInterchange = true;
        interchangeWith = lineColor === 'red' ? ['green'] : ['red'];
    } else if (name === 'Parade Ground' || name === 'JBS Parade Ground') {
        isInterchange = true;
        interchangeWith = lineColor === 'blue' ? ['green'] : ['blue'];
    }

    return {
        id: `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: name,
        nameLocal: '',
        type: 'elevated',
        isInterchange,
        interchangeWith,
        landmark: name,
        zone: Math.floor(idx / 5) + 1,
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
    id: 'hyderabad',
    name: 'Hyderabad Metro',
    nameLocal: 'హైదరాబాద్ మెట్రో',
    city: 'Hyderabad',
    state: 'Telangana',
    operator: 'Hyderabad Metro Rail Limited (HMRL)',
    totalStations: 57,
    totalLength: '69 km',
    totalLines: 3,
    phase: 'Phase 1 (Operational)',
    established: '2017',
    website: 'https://www.ltmetro.com/',
    lines: [
        {
            id: 'red',
            name: 'Red Line',
            color: '#F44336',
            colorLight: '#EF9A9A',
            corridor: 'Corridor 1',
            length: '29.21 km',
            totalStations: 27,
            status: 'operational',
            operationalSince: '2017',
            frequency: '5–8 min',
            firstTrain: '6:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: redLineStations.map((name, i) => buildStation(name, 'r', i, 'red'))
        },
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#2196F3',
            colorLight: '#64B5F6',
            corridor: 'Corridor 3',
            length: '27.00 km',
            totalStations: 23,
            status: 'operational',
            operationalSince: '2017',
            frequency: '5–8 min',
            firstTrain: '6:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: blueLineStations.map((name, i) => buildStation(name, 'b', i, 'blue'))
        },
        {
            id: 'green',
            name: 'Green Line',
            color: '#4CAF50',
            colorLight: '#81C784',
            corridor: 'Corridor 2',
            length: '11.00 km',
            totalStations: 9,
            status: 'operational',
            operationalSince: '2020',
            frequency: '5–8 min',
            firstTrain: '6:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: greenLineStations.map((name, i) => buildStation(name, 'g', i, 'green'))
        }
    ]
};

export default data;
