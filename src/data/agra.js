import { getStationCoords } from "./stationCoords.js";

const yellowLineStationsData = [
    { name: 'Taj East Gate', nameLocal: 'ताज ईस्ट गेट', type: 'elevated', landmark: 'Taj Mahal Eastern Gate' },
    { name: 'Shaheed Captain Shubham Gupta', nameLocal: 'शहीद कप्तान शुभम गुप्ता', type: 'elevated', landmark: 'Basai Area' },
    { name: 'Fatehabad Road', nameLocal: 'फतेहाबाद रोड', type: 'elevated', landmark: 'Hotel Hub, Fatehabad Road' },
    { name: 'Taj Mahal', nameLocal: 'ताज महल', type: 'underground', landmark: 'Taj Mahal Purani Mandi' },
    { name: 'Agra Fort', nameLocal: 'आगरा किला', type: 'underground', landmark: 'Agra Fort, Old City' },
    { name: 'Mankameshwar Mandir', nameLocal: 'मनकामेश्वर मंदिर', type: 'underground', landmark: 'Jama Masjid, Rawatpara' }
];

const yellowUcStationsData = [
    { name: 'Medical College', nameLocal: 'मेडिकल कॉलेज', type: 'underground', landmark: 'S.N. Medical College' },
    { name: 'Agra College', nameLocal: 'आग्रा कॉलेज', type: 'underground', landmark: 'Agra College', isInterchange: true, interchangeWith: ['blue'] },
    { name: 'Raja Ki Mandi', nameLocal: 'राजा की मंडी', type: 'underground', landmark: 'Raja Ki Mandi Railway Station' },
    { name: 'RBS College', nameLocal: 'आरबीएस कॉलेज', type: 'underground', landmark: 'RBS College' },
    { name: 'Shastri Nagar', nameLocal: 'शास्त्री नगर', type: 'elevated', landmark: 'Shastri Nagar' },
    { name: 'ISBT', nameLocal: 'आईएसबीटी', type: 'elevated', landmark: 'Agra ISBT' },
    { name: 'Guru Ka Taal', nameLocal: 'गुरु का ताल', type: 'elevated', landmark: 'Gurudwara Guru Ka Taal' },
    { name: 'Sikandra', nameLocal: 'सिकंदरा', type: 'elevated', landmark: 'Tomb of Akbar the Great' }
];

const blueLineStationsData = [
    { name: 'Agra Cantt', nameLocal: 'आगरा कैंट', type: 'elevated', landmark: 'Agra Cantt Railway Station' },
    { name: 'Sultanpura', nameLocal: 'सुल्तानपुरा', type: 'elevated', landmark: 'Sultanpura' },
    { name: 'Sadar Bazaar', nameLocal: 'सदर बाज़ार', type: 'elevated', landmark: 'Sadar Market' },
    { name: 'Pratap Pura', nameLocal: 'प्रताप पुरा', type: 'elevated', landmark: 'Pratap Pura' },
    { name: 'Collectorate', nameLocal: 'कलेक्ट्रेट', type: 'elevated', landmark: 'Agra Collectorate' },
    { name: 'Subhash Park', nameLocal: 'सुभाष पार्क', type: 'elevated', landmark: 'Subhash Park' },
    { name: 'Agra College', nameLocal: 'आग्रा कॉलेज', type: 'elevated', landmark: 'Agra College', isInterchange: true, interchangeWith: ['yellow'] },
    { name: 'Hariparvat Chauraha', nameLocal: 'हरिपरवत चौराहा', type: 'elevated', landmark: 'Hariparvat' },
    { name: 'Sanjay Place', nameLocal: 'संजय प्लेस', type: 'elevated', landmark: 'Sanjay Place Commercial Hub' },
    { name: 'MG Road', nameLocal: 'एमजी रोड', type: 'elevated', landmark: 'MG Road' },
    { name: 'Sultanganj Crossing', nameLocal: 'सुल्तानगंज क्रॉसिंग', type: 'elevated', landmark: 'Sultanganj' },
    { name: 'Kamla Nagar', nameLocal: 'कमला नगर', type: 'elevated', landmark: 'Kamla Nagar Market' },
    { name: 'Rambagh', nameLocal: 'रामबाग', type: 'elevated', landmark: 'Rambagh Garden' },
    { name: 'Foundary Nagar', nameLocal: 'फाउंड्री नगर', type: 'elevated', landmark: 'Foundry Nagar Industrial Area' },
    { name: 'Mandi Samiti', nameLocal: 'मंडी समिति', type: 'elevated', landmark: 'Agra Mandi' },
    { name: 'Kalindi Vihar', nameLocal: 'कालिंदी विहार', type: 'elevated', landmark: 'Kalindi Vihar Residential' }
];

function buildStation(st, idPrefix, idx) {
    return {
        id: `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: st.name,
        nameLocal: st.nameLocal,
        type: st.type,
        isInterchange: st.isInterchange || false,
        interchangeWith: st.interchangeWith || [],
        landmark: st.landmark,
        zone: 1,
        parking: true,
        facilities: ['Lifts', 'Escalators', 'CCTV', 'Restrooms', 'Drinking Water', 'Token Vending Machines'],
        platforms: [
            { no: 1, towards: 'Terminal 1' },
            { no: 2, towards: 'Terminal 2' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Main Entrance', 'Bus Stop'] },
            { gate: 'B', landmarks: ['Exit Area'] }
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
            stations: yellowLineStationsData.map((st, i) => buildStation(st, 'y', i))
        },
        {
            id: 'yellow-uc',
            name: 'Yellow Line (Ext)',
            color: '#FFEB3B',
            colorLight: '#FFF59D',
            corridor: 'Corridor 1 Ext',
            length: '9.05 km',
            totalStations: 8,
            status: 'under-construction',
            expectedCompletion: '2026',
            gauge: 'Standard Gauge (1435 mm)',
            stations: yellowUcStationsData.map((st, i) => buildStation(st, 'yuc', i))
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
            stations: blueLineStationsData.map((st, i) => buildStation(st, 'b', i))
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
