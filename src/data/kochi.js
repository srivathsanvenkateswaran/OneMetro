import { getStationCoords } from './stationCoords.js';

// ─────────────────────────────────────────────────────────────────────────────
// BLUE LINE  –  Aluva → Tripunithura  (all elevated, Side platforms)
// Exception: Muttom has both Side + Island; Chhoti/Badi Chaupar style doesn't apply
// ─────────────────────────────────────────────────────────────────────────────
const blueLineStations = [
    {
        id: 'b01', name: 'Aluva', nameLocal: 'ആലുവ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Aluva Railway Station', zone: 1,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending', 'Airport Shuttle'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Terminal', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Aluva Railway Station'] },
            { gate: 'B', landmarks: ['Aluva KSRTC Bus Stand', 'Airport Feeder Shuttle Bay'] }
        ]
    },
    {
        id: 'b02', name: 'Pulinchodu', nameLocal: 'പുളിഞ്ഞോട്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Aluva KSRTC', zone: 1,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Pulinchodu Junction'] },
            { gate: 'B', landmarks: ['Chavar Paadam View Point'] }
        ]
    },
    {
        id: 'b03', name: 'Companypady', nameLocal: 'കമ്പനിപ്പടി', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Companypady', zone: 1,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Companypady Junction'] },
            { gate: 'B', landmarks: ['Kochi Metro Solar Plant'] }
        ]
    },
    {
        id: 'b04', name: 'Ambattukavu', nameLocal: 'അമ്പാട്ടുകാവ്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Ambattukavu', zone: 1,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Ambattukavu Junction'] },
            { gate: 'B', landmarks: ['Muttom Sri Maha Vishnu Temple'] }
        ]
    },
    {
        id: 'b05', name: 'Muttom', nameLocal: 'മുട്ടം', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Metro Depot / Muttom Sri Maha Vishnu Temple', zone: 1,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Island' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Metro Depot Gate', 'Muttom Sri Maha Vishnu Temple'] },
            { gate: 'B', landmarks: ['Thrikkakara Temple Road'] }
        ]
    },
    {
        id: 'b06', name: 'Kalamassery', nameLocal: 'കളമശ്ശേരി', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Kalamassery Municipal Office', zone: 1,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Kalamassery Municipal Office'] },
            { gate: 'B', landmarks: ['Kalamassery Market'] }
        ]
    },
    {
        id: 'b07', name: 'Cochin University', nameLocal: 'കൊച്ചിൻ യൂണിവേഴ്സിറ്റി', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'CUSAT Campus', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['CUSAT Main Gate'] },
            { gate: 'B', landmarks: ['Thrikkakara Panchayath Office'] }
        ]
    },
    {
        id: 'b08', name: 'Pathadipalam', nameLocal: 'പത്തടിപ്പാലം', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Pathadipalam', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Pathadipalam Junction'] },
            { gate: 'B', landmarks: ['Museum of Kerala History Road'] }
        ]
    },
    {
        id: 'b09', name: 'Edapally', nameLocal: 'ഇടപ്പള്ളി', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Lulu Mall Edappally', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['LuLu Mall Main Entrance'] },
            { gate: 'B', landmarks: ['Edappally Junction', 'NH 66 side'] }
        ]
    },
    {
        id: 'b10', name: 'Changampuzha Park', nameLocal: 'ചങ്ങമ്പുഴ പാർക്ക്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Changampuzha Park', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Changampuzha Park Entrance'] },
            { gate: 'B', landmarks: ['Edappally Church Road'] }
        ]
    },
    {
        id: 'b11', name: 'Palarivattom', nameLocal: 'പാലാരിവട്ടം', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Palarivattom Market', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Palarivattom Flyover', 'Prestige TMS Square'] },
            { gate: 'B', landmarks: ['Palarivattom Market'] }
        ]
    },
    {
        id: 'b12', name: 'JLN Stadium', nameLocal: 'ജെ.എൽ.എൻ സ്റ്റേഡിയം', type: 'elevated', isInterchange: true, interchangeWith: ['pink'], landmark: 'Jawaharlal Nehru Stadium', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['JLN Stadium Main Gate'] },
            { gate: 'B', landmarks: ['Sports Hub', 'Pink Line Interchange'] }
        ]
    },
    {
        id: 'b13', name: 'Kaloor', nameLocal: 'കലൂർ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Kaloor Private Bus Stand', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Kaloor Bus Stand'] },
            { gate: 'B', landmarks: ['Kaloor Market'] }
        ]
    },
    {
        id: 'b14', name: 'Town Hall', nameLocal: 'ടൗൺ ഹാൾ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Ernakulam Town (North) Railway Station', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Ernakulam Town Railway Station (North)'] },
            { gate: 'B', landmarks: ['Town Hall Road'] }
        ]
    },
    {
        id: 'b15', name: 'M.G Road', nameLocal: 'എം.ജി റോഡ്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'MG Road Shopping Area', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['MG Road (North)'] },
            { gate: 'B', landmarks: ['MG Road (South)', 'Banerjee Road'] }
        ]
    },
    {
        id: 'b16', name: "Maharaja's College", nameLocal: 'മഹാരാജാസ് കോളേജ്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: "Maharaja's College", zone: 3,
        contact: '1800-425-2116',
        parking: false,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ["Maharaja's College Gate"] },
            { gate: 'B', landmarks: ['Durbar Hall Ground'] }
        ]
    },
    {
        id: 'b17', name: 'Ernakulam South', nameLocal: 'എറണാകുളം സൗത്ത്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Ernakulam Junction (South) Railway Station', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Ernakulam Junction Railway Station (South)'] },
            { gate: 'B', landmarks: ['Hospital Road', 'General Hospital'] }
        ]
    },
    {
        id: 'b18', name: 'Kadavanthra', nameLocal: 'കടവന്ത്ര', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Kadavanthra Market', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Kadavanthra Market', 'Panampilly Nagar'] },
            { gate: 'B', landmarks: ['Little Flower Church'] }
        ]
    },
    {
        id: 'b19', name: 'Elamkulam', nameLocal: 'എളംകുളം', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Elamkulam', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Elamkulam Junction'] },
            { gate: 'B', landmarks: ['Marine Drive Road'] }
        ]
    },
    {
        id: 'b20', name: 'Vyttila', nameLocal: 'വൈറ്റില', type: 'elevated', isInterchange: true, interchangeWith: ['water_2'], landmark: 'Vyttila Mobility Hub', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Vyttila Mobility Hub', 'Water Metro Jetty'] },
            { gate: 'B', landmarks: ['Vyttila Junction'] }
        ]
    },
    {
        id: 'b21', name: 'Thaikoodam', nameLocal: 'തൈക്കൂടം', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Thaikoodam', zone: 4,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Thaikoodam Junction'] },
            { gate: 'B', landmarks: ['Exit towards Pettah Road'] }
        ]
    },
    {
        id: 'b22', name: 'Petta', nameLocal: 'പേട്ട', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Petta', zone: 4,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Petta Road'] },
            { gate: 'B', landmarks: ['NH 966B side'] }
        ]
    },
    {
        id: 'b23', name: 'SN Junction', nameLocal: 'എസ്.എൻ ജംഗ്ഷൻ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'SN Junction', zone: 4,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['SN Junction'] },
            { gate: 'B', landmarks: ['Tripunithura Road'] }
        ]
    },
    {
        id: 'b24', name: 'Vadakkekotta', nameLocal: 'വടക്കേക്കോട്ട', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Vadakkekotta', zone: 4,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Tripunithura', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Vadakkekotta Market', 'Vadakkekotta Park'] },
            { gate: 'B', landmarks: ['Freedom Struggle Heritage Wall'] }
        ]
    },
    {
        id: 'b25', name: 'Tripunithura Terminal', nameLocal: 'തൃപ്പൂണിത്തുറ ടെർമിനൽ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Tripunithura Railway Station', zone: 4,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Terminal', type: 'Side' },
            { no: 2, towards: 'Aluva', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Tripunithura Railway Station'] },
            { gate: 'B', landmarks: ['Ernakulam District – Thrippunithura town', 'Dance Museum (upcoming)'] }
        ]
    }
];

// ─────────────────────────────────────────────────────────────────────────────
// PINK LINE  –  JLN Stadium → Infopark  (upcoming, all elevated)
// ─────────────────────────────────────────────────────────────────────────────
const pinkLineStations = [
    {
        id: 'pk01', name: 'JLN Stadium', nameLocal: 'ജെ.എൽ.എൻ സ്റ്റേഡിയം', type: 'elevated', isInterchange: true, interchangeWith: ['blue'], landmark: 'JLN Stadium', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'Terminal', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['JLN Stadium'] },
            { gate: 'B', landmarks: ['Blue Line Interchange'] }
        ]
    },
    {
        id: 'pk02', name: 'Palarivattom Junction', nameLocal: 'പാലാരിവട്ടം ജംഗ്ഷൻ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Palarivattom Junction', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Palarivattom Junction'] },
            { gate: 'B', landmarks: ['Exit'] }
        ]
    },
    {
        id: 'pk03', name: 'Palarivattom Bypass', nameLocal: 'പാലാരിവട്ടം ബൈപ്പാസ്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Bye-pass Junction', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Bypass Junction'] },
            { gate: 'B', landmarks: ['Exit'] }
        ]
    },
    {
        id: 'pk04', name: 'Chembumukku', nameLocal: 'ചെമ്പുമുക്ക്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Chembumukku', zone: 2,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Chembumukku Road'] },
            { gate: 'B', landmarks: ['Exit'] }
        ]
    },
    {
        id: 'pk05', name: 'Vazhakkala', nameLocal: 'വാഴക്കാല', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Vazhakkala', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Vazhakkala Junction'] },
            { gate: 'B', landmarks: ['Exit'] }
        ]
    },
    {
        id: 'pk06', name: 'Padamughal', nameLocal: 'പടമുകൾ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Padamughal', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Padamughal Junction'] },
            { gate: 'B', landmarks: ['Kakkanad direction'] }
        ]
    },
    {
        id: 'pk07', name: 'Kakkanad Junction', nameLocal: 'കാക്കനാട് ജംഗ്ഷൻ', type: 'elevated', isInterchange: true, interchangeWith: ['water_2'], landmark: 'Kakkanad City', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Kakkanad Junction', 'Water Metro Terminal'] },
            { gate: 'B', landmarks: ['Exit'] }
        ]
    },
    {
        id: 'pk08', name: 'Cochin SEZ', nameLocal: 'കൊച്ചിൻ സെസ്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'SEZ Ernakulam', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Cochin SEZ Main Gate'] },
            { gate: 'B', landmarks: ['Exit'] }
        ]
    },
    {
        id: 'pk09', name: 'Chittethukara', nameLocal: 'ചിറ്റേത്തുകര', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Chittethukara', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Chittethukara Road'] },
            { gate: 'B', landmarks: ['Exit'] }
        ]
    },
    {
        id: 'pk10', name: 'KINFRA', nameLocal: 'കിൻഫ്ര', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'KINFRA Park', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Infopark', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['KINFRA Park Gate'] },
            { gate: 'B', landmarks: ['Infopark direction'] }
        ]
    },
    {
        id: 'pk11', name: 'Infopark', nameLocal: 'ഇൻഫോപാർക്ക്', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'IT Hub Infopark', zone: 3,
        contact: '1800-425-2116',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Terminal', type: 'Side' },
            { no: 2, towards: 'JLN Stadium', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Infopark Phase 1 Gate'] },
            { gate: 'B', landmarks: ['Infopark Phase 2'] }
        ]
    }
];

const kochiData = {
    id: 'kochi',
    name: 'Kochi Metro',
    nameLocal: 'കൊച്ചി മെട്രോ',
    city: 'Kochi',
    metroName: 'Kochi Metro',
    state: 'Kerala',
    operator: 'Kochi Metro Rail Limited (KMRL)',
    totalStations: 39,
    totalLength: '45.3 km',
    totalLines: 4,
    phase: 'Phase 1 & 2',
    established: '2017',
    website: 'https://kochimetro.org/',
    lines: [
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#0070bb',
            colorLight: '#0070bb40',
            corridor: 'Aluva - Tripunithura Terminal',
            length: '28.1 km',
            totalStations: 25,
            operationalSince: '2017-06-17',
            status: 'operational',
            stations: blueLineStations.map((station, i) => ({
                ...station,
                ...getStationCoords('kochi', 'blue', i)
            }))
        },
        {
            id: 'pink',
            name: 'Pink Line (Phase 2)',
            color: '#e91e63',
            colorLight: '#e91e6340',
            corridor: 'JLN Stadium - Infopark',
            length: '11.2 km',
            totalStations: 11,
            status: 'upcoming',
            stations: pinkLineStations.map((station, i) => ({
                ...station,
                ...getStationCoords('kochi', 'pink', i)
            }))
        },
        {
            id: 'water_1',
            name: 'Water Metro: High Court - Vypin',
            color: '#00bcd4',
            colorLight: '#00bcd440',
            corridor: 'High Court - Vypin',
            length: '4.8 km',
            totalStations: 2,
            status: 'operational',
            stations: [
                {
                    id: 'wm_highcourt', name: 'High Court Terminal', nameLocal: 'ഹൈക്കോടതി', type: 'water', isInterchange: false, interchangeWith: [], landmark: 'Kerala High Court',
                    facilities: ['Restrooms', 'Ticketing Counter', 'Waiting Lounge'],
                    gates: [{ gate: 'A', landmarks: ['Kerala High Court Jetty'] }]
                },
                {
                    id: 'wm_vypin', name: 'Vypin', nameLocal: 'വൈപ്പിൻ', type: 'water', isInterchange: false, interchangeWith: [], landmark: 'Vypin Island',
                    facilities: ['Restrooms', 'Ticketing Counter', 'Waiting Lounge'],
                    gates: [{ gate: 'A', landmarks: ['Vypin Jetty'] }]
                }
            ]
        },
        {
            id: 'water_2',
            name: 'Water Metro: Vyttila - Kakkanad',
            color: '#00bcd4',
            colorLight: '#00bcd440',
            corridor: 'Vyttila - Kakkanad',
            length: '7.5 km',
            totalStations: 2,
            status: 'operational',
            stations: [
                {
                    id: 'wm_vyttila', name: 'Vyttila Hub', nameLocal: 'വൈറ്റില', type: 'water', isInterchange: true, interchangeWith: ['blue'], landmark: 'Vyttila Mobility Hub',
                    facilities: ['Restrooms', 'Ticketing Counter', 'Waiting Lounge'],
                    gates: [{ gate: 'A', landmarks: ['Vyttila Mobility Hub Jetty'] }]
                },
                {
                    id: 'wm_kakkanad', name: 'Kakkanad Terminal', nameLocal: 'കാക്കനാട് ജംഗ്ഷൻ', type: 'water', isInterchange: true, interchangeWith: ['pink'], landmark: 'Kakkanad City',
                    facilities: ['Restrooms', 'Ticketing Counter', 'Waiting Lounge'],
                    gates: [{ gate: 'A', landmarks: ['Kakkanad Jetty'] }]
                }
            ]
        },
        {
            id: 'water_3',
            name: 'Water Metro: High Court - Fort Kochi',
            color: '#00bcd4',
            colorLight: '#00bcd440',
            corridor: 'High Court - Fort Kochi',
            length: '6.2 km',
            totalStations: 2,
            status: 'operational',
            stations: [
                {
                    id: 'wm_highcourt_3', name: 'High Court Terminal', nameLocal: 'ഹൈക്കോടതി', type: 'water', isInterchange: false, interchangeWith: [], landmark: 'Kerala High Court',
                    facilities: ['Restrooms', 'Ticketing Counter', 'Waiting Lounge'],
                    gates: [{ gate: 'A', landmarks: ['Kerala High Court Jetty'] }]
                },
                {
                    id: 'wm_fortkochi', name: 'Fort Kochi', nameLocal: 'ഫോർട്ട് കൊച്ചി', type: 'water', isInterchange: false, interchangeWith: [], landmark: 'Fort Kochi Beach / Heritage Area',
                    facilities: ['Restrooms', 'Ticketing Counter', 'Waiting Lounge'],
                    gates: [{ gate: 'A', landmarks: ['Fort Kochi Chinese Fishing Nets', 'Fort Kochi Beach'] }]
                }
            ]
        },
        {
            id: 'water_4',
            name: 'Water Metro: High Court - South Chittoor',
            color: '#00bcd4',
            colorLight: '#00bcd440',
            corridor: 'High Court - South Chittoor',
            length: '8.4 km',
            totalStations: 3,
            status: 'operational',
            stations: [
                {
                    id: 'wm_highcourt_4', name: 'High Court Terminal', nameLocal: 'ഹൈക്കോടതി', type: 'water', isInterchange: false, interchangeWith: [], landmark: 'Kerala High Court',
                    facilities: ['Restrooms', 'Ticketing Counter', 'Waiting Lounge'],
                    gates: [{ gate: 'A', landmarks: ['Kerala High Court Jetty'] }]
                },
                {
                    id: 'wm_bolgatty', name: 'Bolgatty', nameLocal: 'ബോൾഗാട്ടി', type: 'water', isInterchange: false, interchangeWith: [], landmark: 'Bolgatty Palace',
                    facilities: ['Restrooms', 'Ticketing Counter', 'Waiting Lounge'],
                    gates: [{ gate: 'A', landmarks: ['Bolgatty Palace Jetty'] }]
                },
                {
                    id: 'wm_south_chittoor', name: 'South Chittoor', nameLocal: 'സൗത്ത് ചിറ്റൂർ', type: 'water', isInterchange: false, interchangeWith: [], landmark: 'South Chittoor',
                    facilities: ['Restrooms', 'Ticketing Counter', 'Waiting Lounge'],
                    gates: [{ gate: 'A', landmarks: ['South Chittoor Jetty'] }]
                }
            ]
        }
    ]
};

export default kochiData;
