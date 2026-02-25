const redLineStations = [
    'Miyapur', 'JNTU College', 'KPHB Colony', 'Kukatpally', 'Balanagar', 'Moosapet', 'Bharat Nagar', 'Erragadda', 'ESI Hospital', 'S.R. Nagar', 'Ameerpet', 'Punjagutta', 'Irrum Manzil', 'Khairtabad', 'Lakdi-ka-Pul', 'Assembly', 'Nampally', 'Gandhi Bhavan', 'Osmania Medical College', 'MG Bus Station', 'Malakpet', 'New Market', 'Musarambagh', 'Dilsukhnagar', 'Chaitanya Puri', 'Victoria Memorial', 'LB Nagar'
];
const blueLineStations = [
    'Nagole', 'Uppal', 'Stadium', 'NGRI', 'Habsiguda', 'Tarnaka', 'Mettuguda', 'Secunderabad East', 'Parade Ground', 'Paradise', 'Rasoolpura', 'Prakash Nagar', 'Begumpet', 'Ameerpet', 'Madhura Nagar', 'Yusufguda', 'Road No.5 Jubilee Hills', 'Jubilee Hills Check Post', 'Peddamma Gudi', 'Madhapur', 'Durgam Cheruvu', 'HITEC City', 'Raidurg'
];
const greenLineStations = [
    'JBS Parade Ground', 'Secunderabad West', 'Gandhi Hospital', 'Musheerabad', 'RTC X Roads', 'Chikkadpally', 'Narayanguda', 'Sultan Bazar', 'MG Bus Station'
];

// Real-world coordinates for all Hyderabad Metro stations (WGS84)
const stationCoords = {
    // Red Line — Miyapur → LB Nagar
    'Miyapur': { lat: 17.4944, lon: 78.3574 },
    'JNTU College': { lat: 17.4958, lon: 78.3660 },
    'KPHB Colony': { lat: 17.4952, lon: 78.3747 },
    'Kukatpally': { lat: 17.4895, lon: 78.3820 },
    'Balanagar': { lat: 17.4710, lon: 78.4025 },
    'Moosapet': { lat: 17.4575, lon: 78.4112 },
    'Bharat Nagar': { lat: 17.4483, lon: 78.4288 },
    'Erragadda': { lat: 17.4430, lon: 78.4385 },
    'ESI Hospital': { lat: 17.4390, lon: 78.4470 },
    'S.R. Nagar': { lat: 17.4360, lon: 78.4540 },
    'Ameerpet': { lat: 17.4374, lon: 78.4483 }, // interchange Red–Blue
    'Punjagutta': { lat: 17.4274, lon: 78.4510 },
    'Irrum Manzil': { lat: 17.4228, lon: 78.4545 },
    'Khairtabad': { lat: 17.4144, lon: 78.4540 },
    'Lakdi-ka-Pul': { lat: 17.4046, lon: 78.4560 },
    'Assembly': { lat: 17.3972, lon: 78.4576 },
    'Nampally': { lat: 17.3887, lon: 78.4597 },
    'Gandhi Bhavan': { lat: 17.3834, lon: 78.4595 },
    'Osmania Medical College': { lat: 17.3802, lon: 78.4650 },
    'MG Bus Station': { lat: 17.3753, lon: 78.4773 }, // interchange Red–Green
    'Malakpet': { lat: 17.3731, lon: 78.4897 },
    'New Market': { lat: 17.3718, lon: 78.4994 },
    'Musarambagh': { lat: 17.3695, lon: 78.5085 },
    'Dilsukhnagar': { lat: 17.3676, lon: 78.5226 },
    'Chaitanya Puri': { lat: 17.3620, lon: 78.5340 },
    'Victoria Memorial': { lat: 17.3548, lon: 78.5414 },
    'LB Nagar': { lat: 17.3508, lon: 78.5537 },
    // Blue Line — Nagole → Raidurg
    'Nagole': { lat: 17.3934, lon: 78.5653 },
    'Uppal': { lat: 17.4048, lon: 78.5574 },
    'Stadium': { lat: 17.4108, lon: 78.5455 },
    'NGRI': { lat: 17.4170, lon: 78.5423 },
    'Habsiguda': { lat: 17.4214, lon: 78.5413 },
    'Tarnaka': { lat: 17.4275, lon: 78.5282 },
    'Mettuguda': { lat: 17.4305, lon: 78.5197 },
    'Secunderabad East': { lat: 17.4375, lon: 78.5113 },
    'Parade Ground': { lat: 17.4393, lon: 78.4976 }, // interchange Blue–Green
    'Paradise': { lat: 17.4413, lon: 78.4870 },
    'Rasoolpura': { lat: 17.4428, lon: 78.4737 },
    'Prakash Nagar': { lat: 17.4377, lon: 78.4653 },
    'Begumpet': { lat: 17.4374, lon: 78.4595 },
    'Madhura Nagar': { lat: 17.4361, lon: 78.4399 },
    'Yusufguda': { lat: 17.4363, lon: 78.4316 },
    'Road No.5 Jubilee Hills': { lat: 17.4376, lon: 78.4206 },
    'Jubilee Hills Check Post': { lat: 17.4337, lon: 78.4128 },
    'Peddamma Gudi': { lat: 17.4256, lon: 78.4058 },
    'Madhapur': { lat: 17.4290, lon: 78.3912 },
    'Durgam Cheruvu': { lat: 17.4294, lon: 78.3838 },
    'HITEC City': { lat: 17.4465, lon: 78.3808 },
    'Raidurg': { lat: 17.4290, lon: 78.3295 },
    // Green Line — JBS Parade Ground → MG Bus Station
    'JBS Parade Ground': { lat: 17.4393, lon: 78.4972 }, // interchange Green–Blue
    'Secunderabad West': { lat: 17.4322, lon: 78.4870 },
    'Gandhi Hospital': { lat: 17.4240, lon: 78.4781 },
    'Musheerabad': { lat: 17.4144, lon: 78.4768 },
    'RTC X Roads': { lat: 17.4046, lon: 78.4788 },
    'Chikkadpally': { lat: 17.3967, lon: 78.4842 },
    'Narayanguda': { lat: 17.3872, lon: 78.4841 },
    'Sultan Bazar': { lat: 17.3800, lon: 78.4800 },
};

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

    const { lat = null, lon = null } = stationCoords[name] ?? {};
    return {
        id: `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: name,
        nameLocal: '',
        lat,
        lon,
        type: 'elevated',
        isInterchange,
        interchangeWith,
        landmark: name,
        zone: Math.floor(idx / 5) + 1,
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
