import { getStationCoords } from "./stationCoords.js";

const yellowOperationalStations = [
  { name: 'Gandhi Nagar', nameLocal: 'गांधी नगर', type: 'elevated', landmark: 'Indore Metro Depot' },
  { name: 'Super Corridor 6', nameLocal: 'सुपर कॉरिडोर 6', type: 'elevated', landmark: 'Super Corridor Sector 6' },
  { name: 'Super Corridor 5', nameLocal: 'सुपर कॉरिडोर 5', type: 'elevated', landmark: 'Super Corridor Sector 5' },
  { name: 'Super Corridor 4', nameLocal: 'सुपर कॉरिडोर 4', type: 'elevated', landmark: 'Super Corridor Sector 4' },
  { name: 'Super Corridor 3', nameLocal: 'सुपर कॉरिडोर 3', type: 'elevated', landmark: 'Super Corridor Sector 3' }
];

const yellowUcStations = [
  { name: 'Super Corridor 2', nameLocal: 'सुपर कॉरिडोर 2', type: 'elevated', landmark: 'Super Corridor Sector 2' },
  { name: 'Super Corridor 1', nameLocal: 'सुपर कॉरिडोर 1', type: 'elevated', landmark: 'Super Corridor Sector 1' },
  { name: 'Airport', nameLocal: 'हवाई अड्डा', type: 'underground', landmark: 'Devi Ahilya Bai Holkar Airport' },
  { name: 'BSF', nameLocal: 'बीएसएफ', type: 'underground', landmark: 'BSF Campus' },
  { name: 'Kalani Nagar', nameLocal: 'कलानी नगर', type: 'underground', landmark: 'Kalani Nagar' },
  { name: 'Ramchandra Nagar Square', nameLocal: 'रामचंद्र नगर चौराहा', type: 'underground', landmark: 'Ramchandra Nagar' },
  { name: 'Bada Ganpati', nameLocal: 'बड़ा गणपति', type: 'underground', landmark: 'Bada Ganpati Temple' },
  { name: 'Rajwada Palace', nameLocal: 'राजवाड़ा पैलेस', type: 'underground', landmark: 'Rajwada Palace / Old City' },
  { name: 'Indore Railway Station', nameLocal: 'इंदौर रेलवे स्टेशन', type: 'underground', landmark: 'Indore Junction Railway Station' },
  { name: 'High Court', nameLocal: 'हाई कोर्ट', type: 'underground', landmark: 'Indore High Court' },
  { name: 'Palasia Square', nameLocal: 'पलासिया चौराहा', type: 'elevated', landmark: 'Palasia Market' },
  { name: 'Patrakar Colony', nameLocal: 'पत्रकार कॉलोनी', type: 'elevated', landmark: 'Patrakar Colony' },
  { name: 'Bengali Square', nameLocal: 'बंगाली चौराहा', type: 'elevated', landmark: 'Bengali Square Flyover' },
  { name: 'Radisson Square', nameLocal: 'रेडिसन चौराहा', type: 'elevated', landmark: 'Radisson Blu Hotel' },
  { name: 'Vijay Nagar Square', nameLocal: 'विजय नगर चौराहा', type: 'elevated', landmark: 'Vijay Nagar Mall District' },
  { name: 'Meghdoot Garden', nameLocal: 'मेघदूत गार्डन', type: 'elevated', landmark: 'Meghdoot Upvan' },
  { name: 'Bapat Square', nameLocal: 'बापट चौराहा', type: 'elevated', landmark: 'Bapat Square' },
  { name: 'Hira Nagar', nameLocal: 'हीरा नगर', type: 'elevated', landmark: 'Hira Nagar Police Station' },
  { name: 'Chandragupta Square', nameLocal: 'चंद्रगुप्त चौराहा', type: 'elevated', landmark: 'Chandragupta Square' },
  { name: 'ISBT / MR 10 Flyover', nameLocal: 'आईएसबीटी', type: 'elevated', landmark: 'Indore ISBT' },
  { name: 'MR 10 Road', nameLocal: 'एमआर 10 रोड', type: 'elevated', landmark: 'MR 10 Road' },
  { name: 'Maulana Azad Marg', nameLocal: 'मौलाना आजाद मार्ग', type: 'underground', landmark: 'Maulana Azad Marg' },
  { name: 'Chota Ganpati / Bada Ganpati', nameLocal: 'बड़ा गणपति', type: 'underground', landmark: 'Bada Ganpati' },
  { name: 'Bhaorsala Square', nameLocal: 'भौरसाला चौराहा', type: 'elevated', landmark: 'Bhaorsala' }
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
    facilities: ['Lifts', 'Escalators', 'CCTV', 'Restrooms', 'Drinking Water', 'Platform Screen Doors (PSDs)'],
    platforms: [
      { no: 1, towards: 'Terminal 1' },
      { no: 2, towards: 'Terminal 2' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Main Entrance'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  };
}

const indoreData = {
  id: 'indore',
  name: 'Indore Metro',
  nameLocal: 'इंदौर मेट्रो',
  city: 'Indore',
  state: 'Madhya Pradesh',
  operator: 'Madhya Pradesh Metro Rail Corporation Limited (MPMRCL)',
  totalStations: 29,
  length: '31.5 km',
  totalLines: 1,
  phase: 'Phase 1',
  website: 'https://mpmetrorail.com/',
  lines: [
    {
      id: 'yellow',
      name: 'Yellow Line',
      color: '#FFEB3B',
      colorLight: '#FFF59D',
      corridor: 'Priority Corridor',
      length: '6 km (Operational)',
      totalStations: 5,
      status: 'operational',
      operationalSince: '2025',
      frequency: '10–15 min',
      stations: yellowOperationalStations.map((st, i) => buildStation(st, 'y', i))
    },
    {
      id: 'yellow-ext',
      name: 'Yellow Line (Ext)',
      color: '#FFEB3B',
      colorLight: '#FFF59D',
      corridor: 'Ring Line (UC)',
      length: '25.5 km',
      totalStations: 24,
      status: 'under-construction',
      expectedCompletion: '2027',
      stations: yellowUcStations.map((st, i) => buildStation(st, 'ye', i))
    }
  ]
};

indoreData.lines.forEach(line => {
  line.stations = line.stations.map((st, i) => ({
    ...st,
    ...getStationCoords('indore', line.id, i)
  }));
});

export default indoreData;
