import { getStationCoords } from "./stationCoords.js";

const yellowLineStationsData = [
    {
        name: 'Taj East Gate',
        nameLocal: 'ताज ईस्ट गेट',
        type: 'elevated',
        landmark: 'Taj Mahal Eastern Gate',
        gates: [
            { gate: '1', landmarks: ['Taj Mahal East Gate', 'I Love Agra Selfie Point'] },
            { gate: '2', landmarks: ['Taj Nature Walk', 'Hotel Trident'] }
        ]
    },
    {
        name: 'Shaheed Captain Shubham Gupta',
        nameLocal: 'शहीद कप्तान शुभम गुप्ता',
        type: 'elevated',
        landmark: 'Basai Area',
        gates: [
            { gate: '1', landmarks: ['ADA Zonal Park', 'Fatehabad Road'] },
            { gate: '2', landmarks: ['Taj Nagari Phase 2', 'TDI Mall'] }
        ]
    },
    {
        name: 'Fatehabad Road',
        nameLocal: 'फतेहाबाद रोड',
        type: 'elevated',
        landmark: 'Hotel Hub, Fatehabad Road',
        gates: [
            { gate: '1', landmarks: ['Sadar Bazar', 'BD Jain College'] },
            { gate: '2', landmarks: ['Mall Road', 'Agarsen Chowk'] }
        ]
    },
    {
        name: 'Taj Mahal',
        nameLocal: 'ताज महल',
        type: 'underground',
        landmark: 'Taj Mahal Purani Mandi',
        isIsland: true,
        gates: [
            { gate: '1', landmarks: ['Taj Mahal West Gate', 'Tajganj', 'Purani Mandi Crossing'] },
            { gate: '2', landmarks: ['Circuit House', 'Shahjahan Garden'] }
        ]
    },
    {
        name: 'Agra Fort',
        nameLocal: 'आगरा किला',
        type: 'underground',
        landmark: 'Agra Fort, Old City',
        isIsland: true,
        gates: [
            { gate: '1', landmarks: ['Agra Fort Front Gate', 'Ramlila Ground'] },
            { gate: '2', landmarks: ['Agra Fort Railway Station', 'Bijli Ghar Bus Stand'] }
        ]
    },
    {
        name: 'Mankameshwar Mandir',
        nameLocal: 'मनकामेश्वर मंदिर',
        type: 'underground',
        landmark: 'Jama Masjid, Rawatpara',
        isIsland: true,
        gates: [
            { gate: '1', landmarks: ['Mankameshwar Temple', 'Rawatpara Market'] },
            { gate: '2', landmarks: ['Jama Masjid', 'Kinari Bazar', 'Passport Seva Kendra'] }
        ]
    }
];

const yellowUcStationsData = [
    { name: 'Medical College', nameLocal: 'मेडिकल कॉलेज', type: 'underground', landmark: 'S.N. Medical College', isIsland: true },
    { name: 'Agra College', nameLocal: 'आग्रा कॉलेज', type: 'underground', landmark: 'St. John\'s College / Agra College', isInterchange: true, interchangeWith: ['blue'], isIsland: true },
    { name: 'Raja Ki Mandi', nameLocal: 'राजा की मंडी', type: 'underground', landmark: 'Raja Ki Mandi Railway Station', isIsland: true },
    { name: 'RBS College', nameLocal: 'आरबीएस कॉलेज', type: 'underground', landmark: 'RBS College', isIsland: true },
    { name: 'Shastri Nagar', nameLocal: 'शास्त्री नगर', type: 'elevated', landmark: 'Shastri Nagar Residential' },
    { name: 'ISBT', nameLocal: 'आईएसबीटी', type: 'elevated', landmark: 'Agra Inter State Bus Terminal' },
    { name: 'Guru Ka Taal', nameLocal: 'गुरु का ताल', type: 'elevated', landmark: 'Gurudwara Guru Ka Taal' },
    { name: 'Sikandra', nameLocal: 'सिकंदरा', type: 'elevated', landmark: 'Tomb of Akbar the Great' }
];

const blueLineStationsData = [
    { name: 'Agra Cantt', nameLocal: 'आगरा कैंट', type: 'elevated', landmark: 'Agra Cantt Railway Station' },
    { name: 'Sultanpura', nameLocal: 'सुल्तानपुरा', type: 'elevated', landmark: 'Sultanpura Area' },
    { name: 'Sadar Bazaar', nameLocal: 'सदर बाज़ार', type: 'elevated', landmark: 'Sadar Market' },
    { name: 'Pratap Pura', nameLocal: 'प्रताप पुरा', type: 'elevated', landmark: 'Pratap Pura Crossing' },
    { name: 'Collectorate', nameLocal: 'कलेक्ट्रेट', type: 'elevated', landmark: 'Agra Collectorate' },
    { name: 'Subhash Park', nameLocal: 'सुभाष पार्क', type: 'elevated', landmark: 'Subhash Park' },
    { name: 'Agra College', nameLocal: 'आग्रा कॉलेज', type: 'elevated', landmark: 'St. John\'s / Agra College Interchange', isInterchange: true, interchangeWith: ['yellow'] },
    { name: 'Hariparvat Chauraha', nameLocal: 'हरिपरवत चौराहा', type: 'elevated', landmark: 'Hariparvat' },
    { name: 'Sanjay Place', nameLocal: 'संजय प्लेस', type: 'elevated', landmark: 'Sanjay Place Commercial Hub' },
    { name: 'MG Road', nameLocal: 'एमजी रोड', type: 'elevated', landmark: 'MG Road' },
    { name: 'Sultanganj Crossing', nameLocal: 'सुल्तानगंज क्रॉसिंग', type: 'elevated', landmark: 'Sultanganj Crossing' },
    { name: 'Kamla Nagar', nameLocal: 'कमला नगर', type: 'elevated', landmark: 'Kamla Nagar Market' },
    { name: 'Rambagh', nameLocal: 'रामबाग', type: 'elevated', landmark: 'Rambagh Garden' },
    { name: 'Foundary Nagar', nameLocal: 'फाउंड्री नगर', type: 'elevated', landmark: 'Foundry Nagar Industrial' },
    { name: 'Mandi Samiti', nameLocal: 'मंडी समिति', type: 'elevated', landmark: 'Agra Mandi' },
    { name: 'Kalindi Vihar', nameLocal: 'कालिंदी विहार', type: 'elevated', landmark: 'Kalindi Vihar' }
];

function buildStation(st, idPrefix, idx, lineId) {
    let towards1 = 'Sikandra';
    let towards2 = 'Taj East Gate';

    if (lineId === 'blue') {
        towards1 = 'Kalindi Vihar';
        towards2 = 'Agra Cantt';
    }

    const baseFacilities = [
        'Lifts',
        'Escalators',
        'CCTV & AI Surveillance',
        'Restrooms',
        'Drinking Water',
        'First Aid Box',
        'Wide Gates (Barrier-free)',
        'Tactile Path'
    ];

    if (st.type === 'elevated') {
        baseFacilities.push('Parking');
    }

    // Selfie points at major operational stations
    if (['y01', 'y04', 'y05', 'y06'].includes(`${idPrefix}${String(idx + 1).padStart(2, '0')}`)) {
        baseFacilities.push('Selfie Point');
    }

    return {
        id: `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: st.name,
        nameLocal: st.nameLocal,
        type: st.type,
        isInterchange: st.isInterchange || false,
        interchangeWith: st.interchangeWith || [],
        landmark: st.landmark,
        zone: 1,
        parking: st.type === 'elevated',
        facilities: baseFacilities,
        platforms: [
            { no: 1, towards: towards1, type: st.isIsland ? 'Island' : 'Side' },
            { no: 2, towards: towards2, type: st.isIsland ? 'Island' : 'Side' }
        ],
        gates: st.gates || [
            { gate: '1', landmarks: ['Main Entrance', 'Ticket Counter Area'] },
            { gate: '2', landmarks: ['Secondary Exit', 'Roadside Exit'] }
        ]
    };
}

const data = {
    id: 'agra',
    name: 'Agra Metro',
    nameLocal: 'आगरा मेट्रो',
    city: 'Agra',
    state: 'Uttar Pradesh',
    operator: 'Uttar Pradesh Metro Rail Corporation (UPMRC)',
    totalStations: 29,
    totalLength: '29.65 km',
    totalLines: 2,
    phase: 'Phase 1',
    established: '2024',
    website: 'https://upmetrorail.com/',
    lines: [
        {
            id: 'yellow',
            name: 'Yellow Line',
            color: '#FFEB3B',
            colorLight: '#FFF59D',
            corridor: 'Corridor 1 (Sikandra - Taj East Gate)',
            length: '5.2 km (Operational)',
            totalStations: 6,
            status: 'operational',
            operationalSince: '2024-03-06',
            frequency: '7–10 min',
            firstTrain: '6:00 AM',
            lastTrain: '10:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Alstom Metropolis',
            stations: yellowLineStationsData.map((st, i) => buildStation(st, 'y', i, 'yellow'))
        },
        {
            id: 'yellow-uc',
            name: 'Yellow Line (UC)',
            color: '#FFEB3B',
            colorLight: '#FFF59D',
            corridor: 'Corridor 1 Extension',
            length: '9.05 km',
            totalStations: 8,
            status: 'under-construction',
            expectedCompletion: '2026',
            gauge: 'Standard Gauge (1435 mm)',
            stations: yellowUcStationsData.map((st, i) => buildStation(st, 'yuc', i, 'yellow-uc'))
        },
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#2196F3',
            colorLight: '#64B5F6',
            corridor: 'Corridor 2 (Agra Cantt - Kalindi Vihar)',
            length: '15.4 km',
            totalStations: 16,
            status: 'under-construction',
            expectedCompletion: '2026',
            gauge: 'Standard Gauge (1435 mm)',
            stations: blueLineStationsData.map((st, i) => buildStation(st, 'b', i, 'blue'))
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
