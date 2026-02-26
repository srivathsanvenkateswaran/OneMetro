/**
 * Bhopal Metro Rail — Station & Line Data
 * Enriched with gate landmarks, platform orientations, and facility information.
 */
import { getStationCoords } from "./stationCoords.js";

const orangeOperationalStations = [
  { name: 'AIIMS', nameLocal: 'एम्स', type: 'elevated', landmark: 'AIIMS Bhopal Hospital', gates: [{ gate: '1', landmarks: ['AIIMS Hospital Entry'] }, { gate: '2', landmarks: ['Saket Nagar'] }] },
  { name: 'Alkapuri', nameLocal: 'अलकापुरी', type: 'elevated', landmark: 'Alkapuri Bus Stand', gates: [{ gate: '1', landmarks: ['Alkapuri Main Road'] }, { gate: '2', landmarks: ['Local Market'] }] },
  { name: 'DRM Office', nameLocal: 'डीआरएम ऑफिस', type: 'elevated', landmark: 'Rail Administrative Office', gates: [{ gate: '1', landmarks: ['DRM Office Entry'] }, { gate: '2', landmarks: ['Habibganj Area'] }] },
  { name: 'Rani Kamalapati', nameLocal: 'रानी कमलापति', type: 'elevated', isInterchange: true, interchangeWith: ['rail'], landmark: 'RKMP Railway Station', gates: [{ gate: '1', landmarks: ['Main Entry (Platform 1 side)'] }, { gate: '2', landmarks: ['BHEL Side Entry'] }] },
  { name: 'MP Nagar', nameLocal: 'एमपी नगर', type: 'elevated', landmark: 'MP Nagar Zone 1 & 2', gates: [{ gate: '1', landmarks: ['Zone 1 Market'] }, { gate: '2', landmarks: ['Zone 2 Commercial Hub'] }] },
  { name: 'Board Office', nameLocal: 'बोर्ड ऑफिस', type: 'elevated', landmark: 'Board of Secondary Education', gates: [{ gate: '1', landmarks: ['Board Office Chauraha'] }, { gate: '2', landmarks: ['DB City Mall Side'] }] },
  { name: 'Kendriya Vidyalaya', nameLocal: 'केंद्रीय विद्यालय', type: 'elevated', landmark: 'KV No. 1 Bhopal', gates: [{ gate: '1', landmarks: ['Kendriya Vidyalaya'] }, { gate: '2', landmarks: ['Chetak Bridge Road'] }] },
  { name: 'Subhash Nagar', nameLocal: 'सुभाष नगर', type: 'elevated', landmark: 'DB City Mall', gates: [{ gate: '1', landmarks: ['Subhash Nagar RoB'] }, { gate: '2', landmarks: ['DB City Mall Entrance'] }] }
];

const orangeUcStations = [
  { name: 'Pul Bogda', nameLocal: 'पुल बोगदा', type: 'elevated', isInterchange: true, interchangeWith: ['blue'], landmark: 'Interchange Hub' },
  { name: 'Aish Bagh Crossing', nameLocal: 'ऐशबाग क्रॉसिंग', type: 'elevated', landmark: 'Aishbagh Stadium' },
  { name: 'Bhopal Junction', nameLocal: 'भोपाल जंक्शन', type: 'underground', isIsland: true, isInterchange: true, interchangeWith: ['rail'], landmark: 'Bhopal Central Railway Station' },
  { name: 'Nadra Bus Stand', nameLocal: 'नादरा बस स्टैंड', type: 'underground', isIsland: true, landmark: 'Hamidia Road Bus Stand' },
  { name: 'Sindhi Colony', nameLocal: 'सिंधी कॉलोनी', type: 'elevated', landmark: 'Sindhi Colony Market' },
  { name: 'DIG Bungalow', nameLocal: 'डीआईजी बंगला', type: 'elevated', landmark: 'DIG Office Area' },
  { name: 'Krishi Upaj Mandi', nameLocal: 'कृषि उपज मंडी', type: 'elevated', landmark: 'Karond Mandi' },
  { name: 'Karond Square', nameLocal: 'करोंद चौराहा', type: 'elevated', landmark: 'Karond Circle' }
];

const blueLineStations = [
  { name: 'Bhadbhada Chauraha', nameLocal: 'भदभदा चौराहा', type: 'elevated', landmark: 'Bhadbhada Dam Way' },
  { name: 'Depot Chauraha', nameLocal: 'डिपो चौराहा', type: 'elevated', landmark: 'Bhopal Metro Depot' },
  { name: 'Jawahar Chowk', nameLocal: 'जवाहर चौक', type: 'elevated', landmark: 'New Market/Jawahar Chowk' },
  { name: 'Roshanpura Chauraha', nameLocal: 'रोशनपुरा चौराहा', type: 'elevated', landmark: 'Raj Bhavan Way' },
  { name: 'Minto Hall', nameLocal: 'मिंटो हॉल', type: 'elevated', landmark: 'Old Vidhan Sabha / Minto Hall' },
  { name: 'Parade Ground', nameLocal: 'परे드 ग्राउंड', type: 'elevated', landmark: 'Jahangirabad' },
  { name: 'Pul Bogda', nameLocal: 'पुल बोगदा', type: 'elevated', isInterchange: true, interchangeWith: ['orange'], landmark: 'Interchange Station' },
  { name: 'Prabhat Chauraha', nameLocal: 'प्रभात चौराहा', type: 'elevated', landmark: 'Prabhat Petrol Pump' },
  { name: 'Govindpura', nameLocal: 'गोविंदपुरा', type: 'elevated', landmark: 'Industrial Area' },
  { name: 'JK Road', nameLocal: 'जेके रोड', type: 'elevated', landmark: 'JK Road crossing' },
  { name: 'Indrapuri', nameLocal: 'इंद्रपुरी', type: 'elevated', landmark: 'BHEL Indrapuri' },
  { name: 'Piplani', nameLocal: 'पिपलानी', type: 'elevated', landmark: 'BHEL Township' },
  { name: 'Ratnagiri Tiraha', nameLocal: 'रत्नागिरी तिराहा', type: 'elevated', landmark: 'Ratnagiri Intersection' }
];

function buildStation(st, idPrefix, idx, lineId) {
  let towards1 = 'Terminal 1';
  let towards2 = 'Terminal 2';

  if (lineId === 'orange') {
    towards1 = 'AIIMS';
    towards2 = 'Subhash Nagar'; // Priority Corridor
  } else if (lineId === 'orange-ext') {
    towards1 = 'Karond Square';
    towards2 = 'AIIMS';
  } else if (lineId === 'blue') {
    towards1 = 'Bhadbhada Chauraha';
    towards2 = 'Ratnagiri Tiraha';
  }

  const baseFacilities = [
    'Lifts',
    'Escalators',
    'CCTV',
    'Restrooms',
    'Drinking Water',
    'First Aid Kit',
    'Tactile Paths',
    'Divyang-friendly Ramps'
  ];

  if (st.type === 'underground') {
    baseFacilities.push('Platform Screen Doors (PSDs)');
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
    parking: true,
    facilities: baseFacilities,
    platforms: [
      { no: 1, towards: towards1, type: st.isIsland ? 'Island' : 'Side' },
      { no: 2, towards: towards2, type: st.isIsland ? 'Island' : 'Side' }
    ],
    gates: st.gates || [
      { gate: 'A', landmarks: [st.landmark || 'Main Entrance'] },
      { gate: 'B', landmarks: ['Secondary Exit'] }
    ]
  };
}

const bhopalData = {
  id: 'bhopal',
  name: 'Bhopal Metro (Bhoj Metro)',
  nameLocal: 'भोपाल मेट्रो',
  city: 'Bhopal',
  state: 'Madhya Pradesh',
  operator: 'Madhya Pradesh Metro Rail Corporation Limited (MPMRCL)',
  totalStations: 29,
  totalLength: '27.87 km',
  totalLines: 2,
  phase: 'Phase 1',
  established: '2024 (Operational since 2025)',
  website: 'https://mpmetrorail.com/',
  lines: [
    {
      id: 'orange',
      name: 'Orange Line (Priority)',
      color: '#FF9800',
      colorLight: '#FFCC80',
      corridor: 'AIIMS - Subhash Nagar',
      length: '6.22 km',
      totalStations: 8,
      status: 'operational',
      operationalSince: '2025-12-21',
      frequency: '10–15 min',
      firstTrain: '6:00 AM',
      lastTrain: '10:00 PM',
      gauge: 'Standard Gauge (1435 mm)',
      rollingStock: 'Alstom (Movia)',
      stations: orangeOperationalStations.map((st, i) => buildStation(st, 'o', i, 'orange'))
    },
    {
      id: 'orange-ext',
      name: 'Orange Line (Extension)',
      color: '#FF9800',
      colorLight: '#FFCC80',
      corridor: 'Subhash Nagar - Karond Square',
      length: '8.77 km',
      totalStations: 9,
      status: 'under-construction',
      expectedCompletion: '2026',
      stations: [
        { ...orangeOperationalStations[7], id: 'o08-ext' }, // Subhash Nagar connection
        ...orangeUcStations
      ].map((st, i) => buildStation(st, 'oe', i, 'orange-ext'))
    },
    {
      id: 'blue',
      name: 'Blue Line',
      color: '#2196F3',
      colorLight: '#64B5F6',
      corridor: 'Bhadbhada - Ratnagiri',
      length: '12.91 km',
      totalStations: 13,
      status: 'under-construction',
      expectedCompletion: '2027',
      stations: blueLineStations.map((st, i) => buildStation(st, 'b', i, 'blue'))
    }
  ]
};

bhopalData.lines.forEach(line => {
  line.stations = line.stations.map((st, i) => ({
    ...st,
    ...getStationCoords('bhopal', line.id, i)
  }));
});

export default bhopalData;
