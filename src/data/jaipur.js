import { getStationCoords } from "./stationCoords.js";

const pinkLineStations = [
  { name: 'Mansarovar', nameLocal: 'मानसरोवर', type: 'elevated', landmark: 'Mansarovar Colony' },
  { name: 'New Aatish Market', nameLocal: 'नया आतिश मार्केट', type: 'elevated', landmark: 'Aatish Market' },
  { name: 'Vivek Vihar', nameLocal: 'विवेक विहार', type: 'elevated', landmark: 'Vivek Vihar' },
  { name: 'Shyam Nagar', nameLocal: 'श्याम नगर', type: 'elevated', landmark: 'Shyam Nagar Market' },
  { name: 'Ram Nagar', nameLocal: 'राम नगर', type: 'elevated', landmark: 'Ram Nagar Gurudwara' },
  { name: 'Civil Lines', nameLocal: 'सिविल लाइन्स', type: 'elevated', landmark: 'Government Offices, Civil Lines' },
  { name: 'Railway Station', nameLocal: 'रेलवे स्टेशन', type: 'elevated', landmark: 'Jaipur Junction Railway Station' },
  { name: 'Sindhi Camp', nameLocal: 'सिंधी कैंप', type: 'elevated', isInterchange: true, interchangeWith: ['orange'], landmark: 'Jaipur Central Bus Stand (ISBT)' },
  { name: 'Chandpole', nameLocal: 'चांदपोल', type: 'underground', landmark: 'Historic Chandpole Gate' },
  { name: 'Chhoti Chaupar', nameLocal: 'छोटी चौपड़', type: 'underground', landmark: 'Hawa Mahal West, City Market' },
  { name: 'Badi Chaupar', nameLocal: 'बड़ी चौपड़', type: 'underground', landmark: 'Hawa Mahal, City Palace, Jantar Mantar' }
];

const pinkExtStations = [
  { name: 'Ramganj Chaupar', nameLocal: 'रामगंज चौपड़', type: 'underground', landmark: 'Ramganj Market' },
  { name: 'Transport Nagar', nameLocal: 'ट्रांसपोर्ट नगर', type: 'underground', landmark: 'Agra Road, Transport Nagar' }
];

const orangeLineStations = [
  { name: 'India Gate', nameLocal: 'इंडिया गेट', type: 'elevated', landmark: 'India Gate Jaipur, Sitapura' },
  { name: 'Sitapura Industrial Area', nameLocal: 'सीतापुरा औद्योगिक क्षेत्र', type: 'elevated', landmark: 'Sitapura Industrial Hub' },
  { name: 'Pratap Nagar', nameLocal: 'प्रताप नगर', type: 'elevated', landmark: 'Pratap Nagar Housing' },
  { name: 'Haldi Ghati Gate', nameLocal: 'हल्दी घाटी गेट', type: 'elevated', landmark: 'Haldi Ghati Gate' },
  { name: 'Sanganer', nameLocal: 'सांगानेर', type: 'elevated', landmark: 'Sanganer Town' },
  { name: 'Tonk Phatak', nameLocal: 'टोंक फाटक', type: 'elevated', landmark: 'Tonk Phatak' },
  { name: 'Laxmi Nagar', nameLocal: 'लक्ष्मी नगर', type: 'elevated', landmark: 'Laxmi Nagar' },
  { name: 'Durgapura', nameLocal: 'दुर्गापुरा', type: 'elevated', landmark: 'Durgapura Railway Station' },
  { name: 'Mahavir Nagar', nameLocal: 'महावीर नगर', type: 'elevated', landmark: 'Mahavir Nagar' },
  { name: 'Gopalpura', nameLocal: 'गोपालपुरा', type: 'elevated', landmark: 'Gopalpura Bypass' },
  { name: 'Dev Nagar', nameLocal: 'देव नगर', type: 'elevated', landmark: 'Dev Nagar' },
  { name: 'Gandhi Nagar Railway Station', nameLocal: 'गांधी नगर रेलवे स्टेशन', type: 'elevated', landmark: 'Gandhi Nagar Station' },
  { name: 'JP Colony', nameLocal: 'जे पी कॉलोनी', type: 'elevated', landmark: 'JP Colony' },
  { name: 'JDA', nameLocal: 'जेडीए', type: 'elevated', landmark: 'Jaipur Development Authority' },
  { name: 'Ram Bagh', nameLocal: 'राम बाग', type: 'elevated', landmark: 'Ram Bagh Palace' },
  { name: 'Narayan Singh Circle', nameLocal: 'नारायण सिंह सर्कल', type: 'elevated', landmark: 'City Bus Hub' },
  { name: 'Sawai Man Singh Hospital', nameLocal: 'सवाई मानसिंह अस्पताल', type: 'elevated', landmark: 'SMS Hospital' },
  { name: 'Ajmeri Gate', nameLocal: 'अजमेरी गेट', type: 'elevated', landmark: 'Entry to Walled City' },
  { name: 'Government Hostel', nameLocal: 'गवर्नमेंट हॉस्टल', type: 'elevated', landmark: 'MI Road' },
  { name: 'Sindhi Camp', nameLocal: 'सिंधी कैंप', type: 'elevated', isInterchange: true, interchangeWith: ['pink'], landmark: 'ISBT' },
  { name: 'Subhash Nagar', nameLocal: 'सुभाष नगर', type: 'elevated', landmark: 'Subhash Nagar' },
  { name: 'Pani Pech', nameLocal: 'पानी पेच', type: 'elevated', landmark: 'Pani Pech Junction' },
  { name: 'Ambabari', nameLocal: 'अम्बाबाड़ी', type: 'elevated', landmark: 'Ambabari Area' }
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
    facilities: ['Lifts', 'Escalators', 'CCTV', 'Restrooms', 'Drinking Water', 'WiFi'],
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
      stations: pinkLineStations.map((st, i) => buildStation(st, 'p', i))
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
      stations: pinkExtStations.map((st, i) => buildStation(st, 'pe', i))
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
      stations: orangeLineStations.map((st, i) => buildStation(st, 'o', i))
    }
  ]
};

jaipurData.lines.forEach(line => {
  line.stations = line.stations.map((st, i) => ({
    ...st,
    ...getStationCoords('jaipur', line.id, i)
  }));
});

export default jaipurData;
