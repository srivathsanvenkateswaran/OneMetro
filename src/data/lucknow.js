import { getStationCoords } from "./stationCoords.js";

const redLineStations = [
    { name: 'CCS Airport', nameLocal: 'चौधरी चरण सिंह हवाई अड्डा', type: 'elevated', landmark: 'CCS International Airport' },
    { name: 'Amausi', nameLocal: 'अमौसी', type: 'elevated', landmark: 'Amausi Railway Station' },
    { name: 'Transport Nagar', nameLocal: 'ट्रांसपोर्ट नगर', type: 'elevated', landmark: 'RTO Lucknow' },
    { name: 'Krishna Nagar', nameLocal: 'कृष्णा नगर', type: 'elevated', landmark: 'Dream World Amusement Park' },
    { name: 'Singar Nagar', nameLocal: 'सिंगार नगर', type: 'elevated', landmark: 'Singar Nagar Market' },
    { name: 'Alambagh', nameLocal: 'आलमबाग', type: 'elevated', landmark: 'Alambagh Market' },
    { name: 'Alambagh ISBT', nameLocal: 'आलमबाग बस स्टैंड', type: 'elevated', landmark: 'Alambagh Inter State Bus Terminus' },
    { name: 'Mawaiya', nameLocal: 'मवैया', type: 'elevated', landmark: 'Mawaiya Railway Crossing' },
    { name: 'Durgapuri', nameLocal: 'दुर्गापुरी', type: 'elevated', landmark: 'Lucknow Junction Railway Station' },
    { name: 'Charbagh', nameLocal: 'चारबाग', type: 'elevated', landmark: 'Lucknow NR Railway Station', isInterchange: true, interchangeWith: ['blue'] },
    { name: 'Hussainganj', nameLocal: 'हुसैनगंज', type: 'underground', landmark: 'Burlington Crossing' },
    { name: 'Sachivalaya', nameLocal: 'सचिवालय', type: 'underground', landmark: 'UP Vishan Sabha' },
    { name: 'Hazratganj', nameLocal: 'हजरतगंज', type: 'underground', landmark: 'Hazratganj Main Market' },
    { name: 'KD Singh Babu Stadium', nameLocal: 'केडी सिंह बाबू स्टेडियम', type: 'elevated', landmark: 'KD Singh Babu Stadium' },
    { name: 'Vishwavidyalaya', nameLocal: 'विश्वविद्यालय', type: 'elevated', landmark: 'University of Lucknow' },
    { name: 'IT College', nameLocal: 'आईटी कॉलेज', type: 'elevated', landmark: 'Isabella Thoburn College' },
    { name: 'Badshah Nagar', nameLocal: 'बादशाह नगर', type: 'elevated', landmark: 'Badshahnagar Railway Station' },
    { name: 'Lekhraj Market', nameLocal: 'लेखराज मार्केट', type: 'elevated', landmark: 'Lekhraj Market' },
    { name: 'Bhootnath Market', nameLocal: 'भूतनाथ मार्केट', type: 'elevated', landmark: 'Bhootnath Temple' },
    { name: 'Indira Nagar', nameLocal: 'इंदिरा नगर', type: 'elevated', landmark: 'Indira Nagar Residential Area' },
    { name: 'Munshipulia', nameLocal: 'मुंशीपुलिया', type: 'elevated', landmark: 'Munshi Pulia Chauraha' }
];

const blueLineStations = [
    { name: 'Charbagh', nameLocal: 'चारबाग', type: 'elevated', landmark: 'Lucknow NR Railway Station', isInterchange: true, interchangeWith: ['red'] },
    { name: 'Gautam Buddha Marg', nameLocal: 'गौतम बुद्ध मार्ग', type: 'elevated', landmark: 'Gautam Buddha Marg' },
    { name: 'Aminabad', nameLocal: 'अमीनाबाद', type: 'underground', landmark: 'Aminabad Market' },
    { name: 'Pandeyganj', nameLocal: 'पांडेयगंज', type: 'underground', landmark: 'Pandeyganj' },
    { name: 'City Railway Station', nameLocal: 'सिटी रेलवे स्टेशन', type: 'underground', landmark: 'Lucknow City Railway Station' },
    { name: 'Medical Chauraha', nameLocal: 'मेडिकल चौराहा', type: 'underground', landmark: 'KGMC' },
    { name: 'Nawazganj', nameLocal: 'नवाज़गंज', type: 'elevated', landmark: 'Nawazganj' },
    { name: 'Thakurganj', nameLocal: 'ठाकुरगंज', type: 'elevated', landmark: 'Thakurganj' },
    { name: 'Balaganj', nameLocal: 'बालागंज', type: 'elevated', landmark: 'Balaganj' },
    { name: 'Sarfarazganj', nameLocal: 'सरफ़राज़गंज', type: 'elevated', landmark: 'Sarfarazganj' },
    { name: 'Musabagh', nameLocal: 'मूसाबाग', type: 'elevated', landmark: 'Musabagh' },
    { name: 'Vasant Kunj', nameLocal: 'वसंत कुंज', type: 'elevated', landmark: 'Vasant Kunj' }
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
            stations: redLineStations.map((st, i) => buildStation(st, 'r', i))
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
            stations: blueLineStations.map((st, i) => buildStation(st, 'b', i))
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
