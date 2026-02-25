import { getStationCoords } from "./stationCoords.js";

const orangeOperationalStations = [
  { name: 'AIIMS', nameLocal: 'एम्स', type: 'elevated', landmark: 'AIIMS Bhopal' },
  { name: 'Alkapuri', nameLocal: 'अलकापुरी', type: 'elevated', landmark: 'Alkapuri Bus Stand' },
  { name: 'DRM Office', nameLocal: 'डीआरएम ऑफिस', type: 'elevated', landmark: 'Habibganj DRM Office' },
  { name: 'Rani Kamalapati', nameLocal: 'रानी कमलापति', type: 'elevated', landmark: 'Rani Kamalapati Railway Station' },
  { name: 'MP Nagar', nameLocal: 'एमपी नगर', type: 'elevated', landmark: 'MP Nagar Zone 1 & 2' },
  { name: 'Board Office', nameLocal: 'बोर्ड ऑफिस', type: 'elevated', landmark: 'DB City Mall' },
  { name: 'Kendriya Vidyalaya', nameLocal: 'केंद्रीय विद्यालय', type: 'elevated', landmark: 'Kendriya Vidyalaya No. 1' },
  { name: 'Subhash Nagar', nameLocal: 'सुभाष नगर', type: 'elevated', landmark: 'Subhash Nagar RoB' }
];

const orangeUcStations = [
  { name: 'Bogda Pul', nameLocal: 'बोगदा पुल', type: 'elevated', landmark: 'Bogda Pul / Pul Bogda', isInterchange: true, interchangeWith: ['blue'] },
  { name: 'Aish Bagh Crossing', nameLocal: 'ऐशबाग क्रॉसिंग', type: 'elevated', landmark: 'Aishbagh Stadium' },
  { name: 'Bhopal Junction', nameLocal: 'भोपाल जंक्शन', type: 'underground', landmark: 'Bhopal Central Railway Station' },
  { name: 'Nadra Bus Stand', nameLocal: 'नादरा बस स्टैंड', type: 'underground', landmark: 'Nadra Bus Stand / Hamidia Road' },
  { name: 'Sindhi Colony', nameLocal: 'सिंधी कॉलोनी', type: 'elevated', landmark: 'Sindhi Colony' },
  { name: 'DIG Bungalow', nameLocal: 'डीआईजी बंगला', type: 'elevated', landmark: 'DIG Bungalow' },
  { name: 'Krishi Upaj Mandi', nameLocal: 'कृषि उपज मंडी', type: 'elevated', landmark: 'Karond Mandi' },
  { name: 'Karond Square', nameLocal: 'करोंद चौराहा', type: 'elevated', landmark: 'Karond Circle' }
];

const blueLineStations = [
  { name: 'Bhadbhada Chauraha', nameLocal: 'भदभदा चौराहा', type: 'elevated', landmark: 'Bhadbhada Dam' },
  { name: 'Depot Chauraha', nameLocal: 'डिपो चौराहा', type: 'elevated', landmark: 'Bhopal Metro Depot' },
  { name: 'Jawahar Chowk', nameLocal: 'जवाहर चौक', type: 'elevated', landmark: 'Jawahar Chowk Market' },
  { name: 'Roshanpura Chauraha', nameLocal: 'रोशनपुरा चौराहा', type: 'elevated', landmark: 'Roshanpura Palace' },
  { name: 'Minto Hall', nameLocal: 'मिंटो हॉल', type: 'elevated', landmark: 'Old Vidhan Sabha' },
  { name: 'Parade Ground', nameLocal: 'परेड ग्राउंड', type: 'elevated', landmark: 'Parade Ground' },
  { name: 'Bogda Pul', nameLocal: 'बोगदा पुल', type: 'elevated', landmark: 'Bogda Pul', isInterchange: true, interchangeWith: ['orange'] },
  { name: 'Prabhat Chauraha', nameLocal: 'प्रभात चौराहा', type: 'elevated', landmark: 'Prabhat Petrol Pump' },
  { name: 'Govindpura', nameLocal: 'गोविंदपुरा', type: 'elevated', landmark: 'Govindpura Industrial Area' },
  { name: 'JK Road', nameLocal: 'जेके रोड', type: 'elevated', landmark: 'JK Road crossing' },
  { name: 'Indrapuri', nameLocal: 'इंद्रपुरी', type: 'elevated', landmark: 'Indrapuri Market' },
  { name: 'Piplani', nameLocal: 'पिपलानी', type: 'elevated', landmark: 'BHEL Piplani' },
  { name: 'Ratnagiri Tiraha', nameLocal: 'रत्नागिरी तिराहा', type: 'elevated', landmark: 'Ratnagiri Intersection' }
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
    facilities: ['Lifts', 'Escalators', 'CCTV', 'Restrooms', 'Drinking Water', 'Tactile Paths'],
    platforms: [
      { no: 1, towards: 'Terminal 1' },
      { no: 2, towards: 'Terminal 2' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Main Entrance'] },
      { gate: 'B', landmarks: ['Side Exit'] }
    ]
  };
}

const bhopalData = {
  id: 'bhopal',
  name: 'Bhopal Metro',
  nameLocal: 'भोपाल मेट्रो',
  city: 'Bhopal',
  state: 'Madhya Pradesh',
  operator: 'Madhya Pradesh Metro Rail Corporation Limited (MPMRCL)',
  totalStations: 29,
  length: '27.9 km',
  totalLines: 2,
  phase: 'Phase 1',
  website: 'https://mpmetrorail.com/',
  lines: [
    {
      id: 'orange',
      name: 'Orange Line',
      color: '#FF9800',
      colorLight: '#FFCC80',
      corridor: 'Priority Corridor',
      length: '6.22 km (Operational)',
      totalStations: 8,
      status: 'operational',
      operationalSince: '2025',
      frequency: '10–15 min',
      stations: orangeOperationalStations.map((st, i) => buildStation(st, 'o', i))
    },
    {
      id: 'orange-ext',
      name: 'Orange Line (Ext)',
      color: '#FF9800',
      colorLight: '#FFCC80',
      corridor: 'Karond - Subhash Nagar',
      length: '8.77 km',
      totalStations: 8,
      status: 'under-construction',
      stations: orangeUcStations.map((st, i) => buildStation(st, 'oe', i))
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
      stations: blueLineStations.map((st, i) => buildStation(st, 'b', i))
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
