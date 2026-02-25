import { getStationCoords } from "./stationCoords.js";

const pinkLineStations = [
  {
    id: 'p01', name: 'Mansarovar', nameLocal: 'मानसरोवर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Mansarovar Colony', zone: 1,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Side' },
      { no: 2, towards: 'Terminal', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Mansarovar Colony', 'Shopping Area'] },
      { gate: 'B', landmarks: ['Gurjar Ki Thadi', 'Towards VT Road'] },
      { gate: 'C', landmarks: ['Mansarovar Sector 3'] },
      { gate: 'D', landmarks: ['Mansarovar Sector 5'] }
    ]
  },
  {
    id: 'p02', name: 'New Aatish Market', nameLocal: 'नया आतिश मार्केट', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Aatish Market', zone: 1,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Aatish Market Entrance'] },
      { gate: 'B', landmarks: ['Gujar Ki Thadi X-Road'] }
    ]
  },
  {
    id: 'p03', name: 'Vivek Vihar', nameLocal: 'विवेक विहार', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Vivek Vihar', zone: 1,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Vivek Vihar Block A'] },
      { gate: 'B', landmarks: ['Shyam Nagar Flyover side'] }
    ]
  },
  {
    id: 'p04', name: 'Shyam Nagar', nameLocal: 'श्याम नगर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Shyam Nagar Market', zone: 1,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Shyam Nagar Market'] },
      { gate: 'B', landmarks: ['Sodala side'] }
    ]
  },
  {
    id: 'p05', name: 'Ram Nagar', nameLocal: 'राम नगर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Ram Nagar Gurudwara', zone: 1,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Ram Nagar Gurudwara'] },
      { gate: 'B', landmarks: ['Sushilpura'] }
    ]
  },
  {
    id: 'p06', name: 'Civil Lines', nameLocal: 'सिविल लाइन्स', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Government Offices, Civil Lines', zone: 2,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Civil Lines Government Offices'] },
      { gate: 'B', landmarks: ['Hawa Sadak'] }
    ]
  },
  {
    id: 'p07', name: 'Railway Station', nameLocal: 'रेलवे स्टेशन', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Jaipur Junction Railway Station', zone: 2,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Jaipur Junction Main Entrance'] },
      { gate: 'B', landmarks: ['Hasanpura'] }
    ]
  },
  {
    id: 'p08', name: 'Sindhi Camp', nameLocal: 'सिंधी कैंप', type: 'elevated', isInterchange: true, interchangeWith: ['orange'], landmark: 'Jaipur Central Bus Stand (ISBT)', zone: 2,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Sindhi Camp Bus Stand'] },
      { gate: 'B', landmarks: ['Station Road'] }
    ]
  },
  {
    id: 'p09', name: 'Chandpole', nameLocal: 'चांदपोल', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Historic Chandpole Gate', zone: 3,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Chandpole Gate'] },
      { gate: 'B', landmarks: ['Bazaar side'] }
    ]
  },
  {
    id: 'p10', name: 'Chhoti Chaupar', nameLocal: 'छोटी चौपड़', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Hawa Mahal West, City Market', zone: 3,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Badi Chaupar', type: 'Island' },
      { no: 2, towards: 'Mansarovar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Chhoti Chaupar Market'] },
      { gate: 'B', landmarks: ['Hawa Mahal West approaches'] }
    ]
  },
  {
    id: 'p11', name: 'Badi Chaupar', nameLocal: 'बड़ी चौपड़', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Hawa Mahal, City Palace, Jantar Mantar', zone: 3,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
    platforms: [
      { no: 1, towards: 'Terminal', type: 'Island' },
      { no: 2, towards: 'Mansarovar', type: 'Island' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Hawa Mahal'] },
      { gate: 'B', landmarks: ['City Palace', 'Jantar Mantar'] },
      { gate: 'C', landmarks: ['Badi Chaupar Square'] },
      { gate: 'D', landmarks: ['Johari Bazaar'] }
    ]
  }
];

const pinkExtStations = [
  {
    id: 'pe01', name: 'Ramganj Chaupar', nameLocal: 'रामगंज चौपड़', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Ramganj Market', zone: 3,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Transport Nagar', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Ramganj Market'] },
      { gate: 'B', landmarks: ['Towards Badi Chaupar'] }
    ]
  },
  {
    id: 'pe02', name: 'Transport Nagar', nameLocal: 'ट्रांसपोर्ट नगर', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Agra Road, Transport Nagar', zone: 3,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Terminal', type: 'Side' },
      { no: 2, towards: 'Mansarovar', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Transport Nagar'] },
      { gate: 'B', landmarks: ['Agra Road'] }
    ]
  }
];

const orangeLineStations = [
  {
    id: 'o01', name: 'India Gate', nameLocal: 'इंडिया गेट', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'India Gate Jaipur, Sitapura', zone: 4,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'Terminal', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['India Gate Jaipur'] },
      { gate: 'B', landmarks: ['Sitapura'] }
    ]
  },
  {
    id: 'o02', name: 'Sitapura Industrial Area', nameLocal: 'सीतापुरा औद्योगिक क्षेत्र', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Sitapura Industrial Hub', zone: 4,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Sitapura Industrial Hub'] },
      { gate: 'B', landmarks: ['RIICO Area'] }
    ]
  },
  {
    id: 'o03', name: 'Pratap Nagar', nameLocal: 'प्रताप नगर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Pratap Nagar Housing', zone: 4,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Pratap Nagar Housing'] },
      { gate: 'B', landmarks: ['Sector 8'] }
    ]
  },
  {
    id: 'o04', name: 'Haldi Ghati Gate', nameLocal: 'हल्दी घाटी गेट', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Haldi Ghati Gate', zone: 4,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Haldi Ghati Gate'] },
      { gate: 'B', landmarks: ['Sanganer Road'] }
    ]
  },
  {
    id: 'o05', name: 'Sanganer', nameLocal: 'सांगानेर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Sanganer Town', zone: 4,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Sanganer Town'] },
      { gate: 'B', landmarks: ['Airport side'] }
    ]
  },
  {
    id: 'o06', name: 'Tonk Phatak', nameLocal: 'टोंक फाटक', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Tonk Phatak', zone: 4,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Tonk Phatak'] },
      { gate: 'B', landmarks: ['Gopalpura Bypass direction'] }
    ]
  },
  {
    id: 'o07', name: 'Laxmi Nagar', nameLocal: 'लक्ष्मी नगर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Laxmi Nagar', zone: 4,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Laxmi Nagar'] },
      { gate: 'B', landmarks: ['Tonk Road'] }
    ]
  },
  {
    id: 'o08', name: 'Durgapura', nameLocal: 'दुर्गापुरा', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Durgapura Railway Station', zone: 5,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Durgapura Railway Station'] },
      { gate: 'B', landmarks: ['Mahavir Nagar direction'] }
    ]
  },
  {
    id: 'o09', name: 'Mahavir Nagar', nameLocal: 'महावीर नगर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Mahavir Nagar', zone: 5,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Mahavir Nagar'] },
      { gate: 'B', landmarks: ['Tonk Road'] }
    ]
  },
  {
    id: 'o10', name: 'Gopalpura', nameLocal: 'गोपालपुरा', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Gopalpura Bypass', zone: 5,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Gopalpura Bypass'] },
      { gate: 'B', landmarks: ['Dev Nagar direction'] }
    ]
  },
  {
    id: 'o11', name: 'Dev Nagar', nameLocal: 'देव नगर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Dev Nagar', zone: 5,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Dev Nagar'] },
      { gate: 'B', landmarks: ['Tonk Road'] }
    ]
  },
  {
    id: 'o12', name: 'Gandhi Nagar Railway Station', nameLocal: 'गांधी नगर रेलवे स्टेशन', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Gandhi Nagar Station', zone: 5,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Gandhi Nagar Station'] },
      { gate: 'B', landmarks: ['Bajaj Nagar'] }
    ]
  },
  {
    id: 'o13', name: 'JP Colony', nameLocal: 'जे पी कॉलोनी', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'JP Colony', zone: 5,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['JP Colony'] },
      { gate: 'B', landmarks: ['JDA direction'] }
    ]
  },
  {
    id: 'o14', name: 'JDA', nameLocal: 'जेडीए', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Jaipur Development Authority', zone: 5,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Jaipur Development Authority'] },
      { gate: 'B', landmarks: ['JLN Marg'] }
    ]
  },
  {
    id: 'o15', name: 'Ram Bagh', nameLocal: 'राम बाग', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Ram Bagh Palace', zone: 5,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Ram Bagh Palace'] },
      { gate: 'B', landmarks: ['Central Park side'] }
    ]
  },
  {
    id: 'o16', name: 'Narayan Singh Circle', nameLocal: 'नारायण सिंह सर्कल', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'City Bus Hub', zone: 5,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['City Bus Hub'] },
      { gate: 'B', landmarks: ['Rambagh Golf Club'] }
    ]
  },
  {
    id: 'o17', name: 'Sawai Man Singh Hospital', nameLocal: 'सवाई मानसिंह अस्पताल', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'SMS Hospital', zone: 6,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['SMS Hospital'] },
      { gate: 'B', landmarks: ['Tonk Road'] }
    ]
  },
  {
    id: 'o18', name: 'Ajmeri Gate', nameLocal: 'अजमेरी गेट', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Entry to Walled City', zone: 6,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Ajmeri Gate'] },
      { gate: 'B', landmarks: ['MI Road'] }
    ]
  },
  {
    id: 'o19', name: 'Government Hostel', nameLocal: 'गवर्नमेंट हॉस्टल', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'MI Road', zone: 6,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Government Hostel'] },
      { gate: 'B', landmarks: ['MI Road West'] }
    ]
  },
  {
    id: 'o20', name: 'Sindhi Camp', nameLocal: 'सिंधी कैंप', type: 'elevated', isInterchange: true, interchangeWith: ['pink'], landmark: 'ISBT', zone: 2,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'C', landmarks: ['ISBT West Entrance'] },
      { gate: 'D', landmarks: ['Metro Interchange'] }
    ]
  },
  {
    id: 'o21', name: 'Subhash Nagar', nameLocal: 'सुभाष नगर', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Subhash Nagar', zone: 6,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Subhash Nagar'] },
      { gate: 'B', landmarks: ['Shastri Nagar direction'] }
    ]
  },
  {
    id: 'o22', name: 'Pani Pech', nameLocal: 'पानी पेच', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Pani Pech Junction', zone: 6,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Ambabari', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Pani Pech Junction'] },
      { gate: 'B', landmarks: ['Jhotwara Road'] }
    ]
  },
  {
    id: 'o23', name: 'Ambabari', nameLocal: 'अम्बाबाड़ी', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Ambabari Area', zone: 6,
    contact: '1800-180-0038',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
      { no: 1, towards: 'Terminal', type: 'Side' },
      { no: 2, towards: 'India Gate', type: 'Side' }
    ],
    gates: [
      { gate: 'A', landmarks: ['Ambabari Area'] },
      { gate: 'B', landmarks: ['Vidhyadhar Nagar direction'] }
    ]
  }
];



const jaipurData = {
  id: 'jaipur',
  name: 'Jaipur Metro',
  nameLocal: 'जयपुर मेट्रो',
  city: 'Jaipur',
  state: 'Rajasthan',
  operator: 'Jaipur Metro Rail Corporation Limited (JMRC)',
  totalStations: 36,
  length: '35+ km',
  totalLines: 2,
  phase: 'Phase 1 & 2',
  established: '2015',
  website: 'https://transport.rajasthan.gov.in/jmrc',
  lines: [
    {
      id: 'pink',
      name: 'Pink Line',
      color: '#E91E63',
      colorLight: '#F8BBD0',
      corridor: 'Mansarovar - Badi Chaupar',
      length: '11.97 km',
      totalStations: 11,
      status: 'operational',
      operationalSince: '2015-06-03',
      stations: pinkLineStations.map((station, i) => ({
        ...station,
        ...getStationCoords('jaipur', 'pink', i)
      }))
    },
    {
      id: 'pink-ext',
      name: 'Pink Line (Ext)',
      color: '#E91E63',
      colorLight: '#F8BBD0',
      corridor: 'Phase 1C & 1D',
      length: '3 km',
      totalStations: 2,
      status: 'under-construction',
      expectedCompletion: '2025',
      stations: pinkExtStations.map((station, i) => ({
        ...station,
        ...getStationCoords('jaipur', 'pink', 11 + i) // Offset by 11 operational stations
      }))
    },
    {
      id: 'orange',
      name: 'Orange Line',
      color: '#FF9800',
      colorLight: '#FFCC80',
      corridor: 'Phase 2: Sitapura - Ambabari',
      length: '23.5 km',
      totalStations: 23,
      status: 'upcoming',
      stations: orangeLineStations.map((station, i) => ({
        ...station,
        ...getStationCoords('jaipur', 'orange', i)
      }))
    }
  ]
};



export default jaipurData;
