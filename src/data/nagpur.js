import { getStationCoords } from "./stationCoords.js";

const orangeLineStations = [
    { name: 'Automotive Square', nameLocal: 'ऑटोमोटिव्ह चौक', type: 'elevated', landmark: 'Kamptee Road' },
    { name: 'Nari Road', nameLocal: 'नारी रोड', type: 'elevated', landmark: 'Nari Road' },
    { name: 'Indora Square', nameLocal: 'इंदोरा चौक', type: 'elevated', landmark: 'Indora Square' },
    { name: 'Kadbi Chowk', nameLocal: 'कडबी चौक', type: 'elevated', landmark: 'Kadbi Chowk' },
    { name: 'Gaddi Godam Square', nameLocal: 'गड्डी गोदाम चौक', type: 'elevated', landmark: 'Gaddi Godam' },
    { name: 'Kasturchand Park', nameLocal: 'कस्तૂરचंद पार्क', type: 'elevated', landmark: 'Kasturchand Park Ground' },
    { name: 'Zero Mile Freedom Park', nameLocal: 'झिरो माईल फ्रीडम पार्क', type: 'elevated', landmark: 'Zero Mile Stone' },
    { name: 'Sitabuldi', nameLocal: 'सीताबर्डी', type: 'elevated', isInterchange: true, interchangeWith: ['aqua'], landmark: 'Sitabuldi Market' },
    { name: 'Congress Nagar', nameLocal: 'काँग्रेस नगर', type: 'elevated', landmark: 'Ajni Railway Station Area' },
    { name: 'Rahate Colony', nameLocal: 'रहाटे कॉलनी', type: 'elevated', landmark: 'Rahate Colony' },
    { name: 'Ajni Square', nameLocal: 'अजनी चौक', type: 'elevated', landmark: 'Ajni Square' },
    { name: 'Chhatrapati Square', nameLocal: 'छत्रपती चौक', type: 'elevated', landmark: 'Chhatrapati Square' },
    { name: 'Jaiprakash Nagar', nameLocal: 'जयप्रकाश नगर', type: 'elevated', landmark: 'Jaiprakash Nagar' },
    { name: 'Ujjwal Nagar', nameLocal: 'उज्ज्वल नगर', type: 'elevated', landmark: 'Ujjwal Nagar' },
    { name: 'Airport', nameLocal: 'एअरपोर्ट', type: 'elevated', landmark: 'Dr. Babasaheb Ambedkar International Airport' },
    { name: 'Airport South', nameLocal: 'एअरपोर्ट साउथ', type: 'elevated', landmark: 'Airport South' },
    { name: 'New Airport', nameLocal: 'न्यू एअरपोर्ट', type: 'at-grade', landmark: 'MIHAN' },
    { name: 'Khapri', nameLocal: 'खापरी', type: 'at-grade', landmark: 'Khapri' }
];

const aquaLineStations = [
    { name: 'Prajapati Nagar', nameLocal: 'प्रજાपती नगर', type: 'elevated', landmark: 'Prajapati Nagar' },
    { name: 'Vaishno Devi Square', nameLocal: 'वैष्णोदेवी चौक', type: 'elevated', landmark: 'Vaishno Devi Temple' },
    { name: 'Ambedkar Square', nameLocal: 'आंबेडकर चौक', type: 'elevated', landmark: 'Ambedkar Square' },
    { name: 'Telephone Exchange', nameLocal: 'टेलीफोन एक्सचेंज', type: 'elevated', landmark: 'Telephone Exchange' },
    { name: 'Chittaroli Square', nameLocal: 'चितारओळी चौक', type: 'elevated', landmark: 'Art District' },
    { name: 'Agrasen Square', nameLocal: 'अग्रसेन चौक', type: 'elevated', landmark: 'Agrasen Square' },
    { name: 'Dosar Vaisya Square', nameLocal: 'दोसर वैश्य चौक', type: 'elevated', landmark: 'Dosar Vaisya Square' },
    { name: 'Nagpur Railway Station', nameLocal: 'नागपूर रेल्वे स्टेशन', type: 'elevated', landmark: 'Nagpur Junction' },
    { name: 'Sitabuldi', nameLocal: 'सीताबर्ડી', type: 'elevated', isInterchange: true, interchangeWith: ['orange'], landmark: 'Sitabuldi Interchange' },
    { name: 'Jhansi Rani Square', nameLocal: 'झांसी राणी चौक', type: 'elevated', landmark: 'Jhansi Rani Square' },
    { name: 'Institute of Engineers', nameLocal: 'इन्स्टिट्यूशन ऑफ इंजिनियर्स', type: 'elevated', landmark: 'Institution of Engineers' },
    { name: 'Shankar Nagar Square', nameLocal: 'शंकर नगर चौक', type: 'elevated', landmark: 'Shankar Nagar' },
    { name: 'LAD Square', nameLocal: 'एलएडी चौक', type: 'elevated', landmark: 'LAD College' },
    { name: 'Dharampeth College', nameLocal: 'धरमपेठ महाविद्यालय', type: 'elevated', landmark: 'Dharampeth College' },
    { name: 'Subhash Nagar', nameLocal: 'सुभाष नगर', type: 'elevated', landmark: 'Subhash Nagar' },
    { name: 'Rachana Ring Road', nameLocal: 'रचना रिंग रोड जंक्शन', type: 'elevated', landmark: 'Ring Road' },
    { name: 'Vasudev Nagar', nameLocal: 'वासुदेव नगर', type: 'elevated', landmark: 'Vasudev Nagar' },
    { name: 'Bansi Nagar', nameLocal: 'बंसी नगर', type: 'elevated', landmark: 'Bansi Nagar' },
    { name: 'Lokmanya Nagar', nameLocal: 'लोकમાન્યા नगर', type: 'elevated', landmark: 'Hingna Road' }
];

const orangeNorthStations = [
    { name: 'Automotive Square', nameLocal: 'ऑटोमोटिव्ह चौक', type: 'elevated', landmark: 'Kamptee Road' },
    { name: 'Pili Nadi', nameLocal: 'पिली नदी', type: 'elevated', landmark: 'Pili Nadi' },
    { name: 'Khasara Fata', nameLocal: 'खसरा फाटा', type: 'elevated', landmark: 'Khasara Fata' },
    { name: 'All India Radio', nameLocal: 'आकाशवाणी', type: 'elevated', landmark: 'AIR Nagpur' },
    { name: 'Kheri Fata', nameLocal: 'खेरी फाटा', type: 'elevated', landmark: 'Kheri Fata' },
    { name: 'Lok Vihar', nameLocal: 'लोक विहार', type: 'elevated', landmark: 'Lok Vihar' },
    { name: 'Lekha Nagar', nameLocal: 'लेखा नगर', type: 'elevated', landmark: 'Lekha Nagar' },
    { name: 'Cantonment', nameLocal: 'कॅन्टोन्मेंट', type: 'elevated', landmark: 'Kamptee Cantonment' },
    { name: 'Kamptee Police Station', nameLocal: 'कामठी पोलीस स्टेशन', type: 'elevated', landmark: 'Kamptee PS' },
    { name: 'Kamptee Municipal Council', nameLocal: 'कामठी नगर परिषद', type: 'elevated', landmark: 'Kamptee MC' },
    { name: 'Dragon Palace', nameLocal: 'ड्रॅगन पॅलेस', type: 'elevated', landmark: 'Dragon Palace Temple' },
    { name: 'Golf Club', nameLocal: 'गोल्फ क्लब', type: 'elevated', landmark: 'Kamptee Golf Club' },
    { name: 'Kanhan', nameLocal: 'कान्हान', type: 'elevated', landmark: 'Kanhan River' }
];

const orangeSouthStations = [
    { name: 'Khapri', nameLocal: 'खापरी', type: 'at-grade', landmark: 'Khapri' },
    { name: 'Eco Park', nameLocal: 'इको पार्क', type: 'elevated', landmark: 'Eco Park' },
    { name: 'Metro City', nameLocal: 'मेट्रो सिटी', type: 'elevated', landmark: 'Metro City' },
    { name: 'Ashokvan', nameLocal: 'अशोकवन', type: 'elevated', landmark: 'Ashokvan' },
    { name: 'Dongargaon', nameLocal: 'डोंगरगाव', type: 'elevated', landmark: 'Dongargaon' },
    { name: 'Mohgaon', nameLocal: 'मोहगाव', type: 'elevated', landmark: 'Mohgaon' },
    { name: 'Meghdoot CIDCO', nameLocal: 'मेघदूत सिडको', type: 'elevated', landmark: 'CIDCO Colony' },
    { name: 'Butibori Police Station', nameLocal: 'बुटीबोरी पोलीस स्टेशन', type: 'elevated', landmark: 'Butibori PS' },
    { name: 'Mhada Colony', nameLocal: 'म्हाडा कॉलनी', type: 'elevated', landmark: 'Mhada Colony' },
    { name: 'MIDC KEC', nameLocal: 'एमआयडीसी केईसी', type: 'elevated', landmark: 'MIDC' },
    { name: 'MIDC-ESR', nameLocal: 'एमआयडीसी-ईएसआर', type: 'elevated', landmark: 'MIDC ESR' }
];

const aquaWestStations = [
    { name: 'Lokmanya Nagar', nameLocal: 'लोकमान्या नगर', type: 'elevated', landmark: 'Hingna Road' },
    { name: 'Mount View', nameLocal: 'माऊंट व्ह्यू', type: 'elevated', landmark: 'Mount View' },
    { name: 'Rajiv Nagar', nameLocal: 'राजीव नगर', type: 'elevated', landmark: 'Rajiv Nagar' },
    { name: 'Wanadongri', nameLocal: 'वानाडोंगरी', type: 'elevated', landmark: 'Wanadongri' },
    { name: 'APMC', nameLocal: 'एपीएमसी', type: 'elevated', landmark: 'APMC Hingna' },
    { name: 'Raipur', nameLocal: 'रायपूर', type: 'elevated', landmark: 'Raipur' },
    { name: 'Hingna Bus Station', nameLocal: 'हिंगणा बस स्थानक', type: 'elevated', landmark: 'Hingna Bus Stand' },
    { name: 'Hingna', nameLocal: 'हिंगणा', type: 'elevated', landmark: 'Hingna' }
];

const aquaEastStations = [
    { name: 'Prajapati Nagar', nameLocal: 'प्रजापती नगर', type: 'elevated', landmark: 'Prajapati Nagar' },
    { name: 'Pardi', nameLocal: 'पारडी', type: 'elevated', landmark: 'Pardi' },
    { name: 'Kapsi Khurd', nameLocal: 'कापसी खुर्द', type: 'elevated', landmark: 'Kapsi' },
    { name: 'Transport Nagar', nameLocal: 'ट्रान्सपोर्ट नगर', type: 'elevated', landmark: 'Transport Nagar' }
];

function buildStation(st, idPrefix, idx, lineId) {
    let towards1 = 'Terminal 1';
    let towards2 = 'Terminal 2';

    if (lineId.includes('orange')) {
        towards1 = 'Butibori / Khapri';
        towards2 = 'Kanhan / Automotive Square';
    } else if (lineId.includes('aqua')) {
        towards1 = 'Hingna / Lokmanya Nagar';
        towards2 = 'Transport Nagar / Prajapati Nagar';
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
        facilities: ['Lifts', 'Escalators', 'CCTV', 'Restrooms', 'Drinking Water', 'WiFi', 'Digital Payment System', 'First Aid'],
        platforms: [
            { no: 1, towards: towards1 },
            { no: 2, towards: towards2 }
        ],
        gates: [
            { gate: 'A', landmarks: ['Main Entrance/Road Side'] },
            { gate: 'B', landmarks: ['Exit/Auto Stand'] }
        ]
    };
}

const nagpurData = {
    id: 'nagpur',
    name: 'Nagpur Metro',
    nameLocal: 'नागपूर मेट्रो',
    city: 'Nagpur',
    state: 'Maharashtra',
    operator: 'Maharashtra Metro Rail Corporation Limited (Maha Metro)',
    totalStations: 69,
    length: '82.0 km',
    totalLines: 2,
    phase: 'Phase 1 (Operational) + Phase 2 (Under Construction)',
    established: '2019',
    website: 'https://www.metrorailnagpur.com/',
    lines: [
        {
            id: 'orange',
            name: 'Orange Line',
            color: '#FF9800',
            colorLight: '#FFCC80',
            corridor: 'Automotive Square - Khapri',
            length: '19.65 km',
            totalStations: 18,
            status: 'operational',
            operationalSince: '2019-03-08',
            stations: orangeLineStations.map((st, i) => buildStation(st, 'o', i, 'orange'))
        },
        {
            id: 'aqua',
            name: 'Aqua Line',
            color: '#00BCD4',
            colorLight: '#B2EBF2',
            corridor: 'Prajapati Nagar - Lokmanya Nagar',
            length: '18.55 km',
            totalStations: 19,
            status: 'operational',
            operationalSince: '2020-01-28',
            stations: aquaLineStations.map((st, i) => buildStation(st, 'a', i, 'aqua'))
        },
        {
            id: 'orange-north',
            name: 'Orange Line North Ext.',
            color: '#FF9800',
            colorLight: '#FFCC80',
            corridor: 'Automotive Square - Kanhan',
            length: '13.0 km',
            totalStations: 13,
            status: 'under-construction',
            expectedCompletion: '2026',
            stations: orangeNorthStations.map((st, i) => buildStation(st, 'on', i, 'orange-north'))
        },
        {
            id: 'orange-south',
            name: 'Orange Line South Ext.',
            color: '#FF9800',
            colorLight: '#FFCC80',
            corridor: 'Khapri - Butibori',
            length: '18.7 km',
            totalStations: 11,
            status: 'under-construction',
            expectedCompletion: '2026',
            stations: orangeSouthStations.map((st, i) => buildStation(st, 'os', i, 'orange-south'))
        },
        {
            id: 'aqua-east',
            name: 'Aqua Line East Ext.',
            color: '#00BCD4',
            colorLight: '#B2EBF2',
            corridor: 'Prajapati Nagar - Transport Nagar',
            length: '5.5 km',
            totalStations: 4,
            status: 'under-construction',
            expectedCompletion: '2026',
            stations: aquaEastStations.map((st, i) => buildStation(st, 'ae', i, 'aqua-east'))
        },
        {
            id: 'aqua-west',
            name: 'Aqua Line West Ext.',
            color: '#00BCD4',
            colorLight: '#B2EBF2',
            corridor: 'Lokmanya Nagar - Hingna',
            length: '6.6 km',
            totalStations: 8,
            status: 'under-construction',
            expectedCompletion: '2026',
            stations: aquaWestStations.map((st, i) => buildStation(st, 'aw', i, 'aqua-west'))
        }
    ]
};

nagpurData.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('nagpur', line.id, i)
    }));
});

export default nagpurData;
