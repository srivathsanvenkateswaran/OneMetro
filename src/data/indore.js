import { getStationCoords } from "./stationCoords.js";

const yellowLineStations = [
  {
    id: 'y01', name: 'Devi Ahilya Bai Holkar Terminal', nameLocal: 'देवी अहिल्या बाई होलकर टर्मिनल', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Indore Metro Depot', zone: 1,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending', 'PSDs'],
    platforms: [
      { no: 1, towards: 'Super Corridor 3', type: 'Side' },
      { no: 2, towards: 'Terminal', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Gandhi Nagar', 'Indore Metro Depot'] },
      { gate: 'B', landmarks: ['Nanod Road', 'Airport side'] },
      { gate: 'C', landmarks: ['Depot Main Gate'] }
    ]
  },
  {
    id: 'y02', name: 'Maharani Lakshmi Bai', nameLocal: 'महारानी लक्ष्मीबाई', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Super Corridor Sector 6', zone: 1,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending', 'PSDs'],
    platforms: [
      { no: 1, towards: 'Super Corridor 3', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Super Corridor Sector 6'] },
      { gate: 'B', landmarks: ['DLF Garden City'] }
    ]
  },
  {
    id: 'y03', name: 'Rani Avanti Bai Lodhi', nameLocal: 'रानी अवंती बाई लोधी', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Super Corridor Sector 5', zone: 1,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending', 'PSDs'],
    platforms: [
      { no: 1, towards: 'Super Corridor 3', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['TCS Indore SEZ side'] },
      { gate: 'B', landmarks: ['Super Corridor Sector 5'] }
    ]
  },
  {
    id: 'y04', name: 'Rani Durgavati', nameLocal: 'रानी दुर्गावती', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Super Corridor Sector 4', zone: 1,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending', 'PSDs'],
    platforms: [
      { no: 1, towards: 'Super Corridor 3', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Infosys Indore SEZ side'] },
      { gate: 'B', landmarks: ['Super Corridor Sector 4'] }
    ]
  },
  {
    id: 'y05', name: 'Veerangana Jhalkari Bai', nameLocal: 'वीरांगना झलकारी बाई', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Super Corridor Sector 3', zone: 1,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending', 'PSDs'],
    platforms: [
      { no: 1, towards: 'Terminal', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Super Corridor Sector 3'] },
      { gate: 'B', landmarks: ['Towards Airport Road'] }
    ]
  },
  {
    id: 'y06', name: 'Super Corridor 2', nameLocal: 'सुपर कॉरिडोर 2', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Super Corridor Sector 2', zone: 2,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Airport / Rajwada', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Super Corridor Sector 2'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y07', name: 'Super Corridor 1', nameLocal: 'सुपर कॉरिडोर 1', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Super Corridor Sector 1', zone: 2,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Airport / Rajwada', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Super Corridor Sector 1'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y08', name: 'Airport', nameLocal: 'हवाई अड्डा', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Devi Ahilya Bai Holkar Airport', zone: 2,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Rajwada / Railway Station', type: 'Island' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Airport Terminal 1'] },
      { gate: 'B', landmarks: ['Airport Road'] }
    ]
  },
  {
    id: 'y09', name: 'BSF', nameLocal: 'बीएसएफ', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'BSF Campus', zone: 2,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Rajwada / Railway Station', type: 'Island' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['BSF Campus Gate'] },
      { gate: 'B', landmarks: ['Aurobindo Hospital Road'] }
    ]
  },
  {
    id: 'y10', name: 'Kalani Nagar', nameLocal: 'कलानी नगर', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Kalani Nagar', zone: 2,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Rajwada / Railway Station', type: 'Island' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Kalani Nagar Market'] },
      { gate: 'B', landmarks: ['Sudama Nagar side'] }
    ]
  },
  {
    id: 'y11', name: 'Ramchandra Nagar Square', nameLocal: 'रामचंद्र नगर चौराहा', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Ramchandra Nagar', zone: 3,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Rajwada / Railway Station', type: 'Island' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Ramchandra Nagar Sq.'] },
      { gate: 'B', landmarks: ['Aerodrome Road'] }
    ]
  },
  {
    id: 'y12', name: 'Bada Ganpati', nameLocal: 'बड़ा गणपति', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Bada Ganpati Temple', zone: 3,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Rajwada / Railway Station', type: 'Island' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Bada Ganpati Temple Entrance'] },
      { gate: 'B', landmarks: ['Jawahar Marg side'] }
    ]
  },
  {
    id: 'y13', name: 'Rajwada Palace', nameLocal: 'राजवाड़ा पैलेस', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Rajwada Palace / Old City', zone: 3,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Railway Station', type: 'Island' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Rajwada Palace Entrance'] },
      { gate: 'B', landmarks: ['Sarafa Bazar', 'Central Museum'] }
    ]
  },
  {
    id: 'y14', name: 'Indore Railway Station', nameLocal: 'इंदौर रेलवे स्टेशन', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Indore Junction Railway Station', zone: 3,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Vijay Nagar', type: 'Island' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Indore Railway Junction Main Gate'] },
      { gate: 'B', landmarks: ['Railway Station Platform 1'] }
    ]
  },
  {
    id: 'y15', name: 'High Court', nameLocal: 'हाई कोर्ट', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Indore High Court', zone: 3,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Vijay Nagar', type: 'Island' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Indore High Court'] },
      { gate: 'B', landmarks: ['GPO Square side'] }
    ]
  },
  {
    id: 'y16', name: 'Palasia Square', nameLocal: 'पलासिया चौराहा', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Palasia Market', zone: 4,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Vijay Nagar', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Palasia Square'] },
      { gate: 'B', landmarks: ['A.B. Road side'] }
    ]
  },
  {
    id: 'y17', name: 'Patrakar Colony', nameLocal: 'पत्रकार कॉलोनी', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Patrakar Colony', zone: 4,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Vijay Nagar', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Patrakar Colony side'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y18', name: 'Bengali Square', nameLocal: 'बंगाली चौराहा', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Bengali Square Flyover', zone: 4,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Vijay Nagar', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Bengali Square Junction'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y19', name: 'Radisson Square', nameLocal: 'रेडिसन चौराहा', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Radisson Blu Hotel', zone: 4,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Vijay Nagar', type: 'Side' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Radisson Blu Hotel'] },
      { gate: 'B', landmarks: ['Khajrana Road side'] }
    ]
  },
  {
    id: 'y20', name: 'Vijay Nagar Square', nameLocal: 'विजय नगर चौराहा', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Vijay Nagar Mall District', zone: 5,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Gandhi Nagar', type: 'Side' },
      { no: 2, towards: 'Rajwada', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Vijay Nagar Square'] },
      { gate: 'B', landmarks: ['C21 Mall side'] }
    ]
  },
  {
    id: 'y21', name: 'Meghdoot Garden', nameLocal: 'मेघदूत गार्डन', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Meghdoot Upvan', zone: 5,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Gandhi Nagar', type: 'Side' },
      { no: 2, towards: 'Vijay Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Meghdoot Garden Entrance'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y22', name: 'Bapat Square', nameLocal: 'बापट चौराहा', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Bapat Square', zone: 5,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Gandhi Nagar', type: 'Side' },
      { no: 2, towards: 'Vijay Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Bapat Square Junction'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y23', name: 'Hira Nagar', nameLocal: 'हीरा नगर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Hira Nagar Police Station', zone: 5,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Gandhi Nagar', type: 'Side' },
      { no: 2, towards: 'Vijay Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Hira Nagar Police Station'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y24', name: 'Chandragupta Square', nameLocal: 'चंद्रगुप्त चौराहा', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Chandragupta Square', zone: 6,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Gandhi Nagar', type: 'Side' },
      { no: 2, towards: 'Vijay Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Chandragupta Square Junction'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y25', name: 'ISBT / MR 10 Flyover', nameLocal: 'आईएसबीटी', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Indore ISBT', zone: 6,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Gandhi Nagar', type: 'Side' },
      { no: 2, towards: 'Vijay Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Indore ISBT (Bus Stand)'] },
      { gate: 'B', landmarks: ['Exit towards Flyover'] }
    ]
  },
  {
    id: 'y26', name: 'MR 10 Road', nameLocal: 'एमआर 10 रोड', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'MR 10 Road', zone: 6,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Gandhi Nagar', type: 'Side' },
      { no: 2, towards: 'Vijay Nagar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['MR 10 Road'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y27', name: 'Maulana Azad Marg', nameLocal: 'मौलाना आजाद मार्ग', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Maulana Azad Marg', zone: 6,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Rajwada', type: 'Island' },
      { no: 2, towards: 'Gandhi Nagar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Maulana Azad Marg Entrance'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y28', name: 'Chota Ganpati', nameLocal: 'छोटा गणपति', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Chota Ganpati Temple', zone: 6,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Gandhi Nagar', type: 'Island' },
      { no: 2, towards: 'Rajwada', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Chota Ganpati Temple Entrance'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  },
  {
    id: 'y29', name: 'Bhaorsala Square', nameLocal: 'भौरसाला चौराहा', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Bhaorsala', zone: 6,
    contact: '0731-240-0000',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Gandhi Nagar', type: 'Side' },
      { no: 2, towards: 'Rajwada', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Bhaorsala Square'] },
      { gate: 'B', landmarks: ['Exit'] }
    ]
  }
];



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
      stations: yellowLineStations
        .filter(st => ['y01', 'y02', 'y03', 'y04', 'y05'].includes(st.id))
        .map((station) => ({
          ...station,
          ...getStationCoords('indore', 'yellow', parseInt(station.id.substring(1)) - 1)
        }))
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
      stations: yellowLineStations
        .filter(st => !['y01', 'y02', 'y03', 'y04', 'y05'].includes(st.id))
        .map((station, i) => ({
          ...station,
          ...getStationCoords('indore', 'yellow-ext', i)
        }))
    }
  ]
};



export default indoreData;
