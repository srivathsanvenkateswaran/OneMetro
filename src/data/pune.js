import { getStationCoords } from "./stationCoords.js";

const purpleLineStations = [
    { name: 'PCMC', nameLocal: 'पिंपरी चिंचवड महानगरपालिका', type: 'elevated', landmark: 'PCMC Bhavan' },
    { name: 'Sant Tukaram Nagar', nameLocal: 'संत तुकाराम नगर', type: 'elevated', landmark: 'Vallabh Nagar ST Stand' },
    { name: 'Bhosari (Nashik Phata)', nameLocal: 'भोसरी (नाशिक फाटा)', type: 'elevated', landmark: 'Nashik Phata Flyover' },
    { name: 'Kasarwadi', nameLocal: 'कासारवाडी', type: 'elevated', landmark: 'Kasarwadi Railway Station' },
    { name: 'Phugewadi', nameLocal: 'फुगेवाडी', type: 'elevated', landmark: 'Phugewadi' },
    { name: 'Dapodi', nameLocal: 'दापोडी', type: 'elevated', landmark: 'Dapodi Railway Station' },
    { name: 'Bopodi', nameLocal: 'बोपोडी', type: 'elevated', landmark: 'Bopodi' },
    { name: 'Khadki', nameLocal: 'खडकी', type: 'elevated', landmark: 'Khadki Cantonment / Railway Station' },
    { name: 'Range Hill', nameLocal: 'रेंज हिल', type: 'elevated', landmark: 'Range Hill Metro Depot' },
    { name: 'Shivajinagar', nameLocal: 'शिवाजीनगर', type: 'underground', landmark: 'Shivajinagar Railway Station / ST Stand' },
    { name: 'Civil Court', nameLocal: 'दिवाणी न्यायालय', type: 'underground', isInterchange: true, interchangeWith: ['aqua', 'pink'], landmark: 'District Court Pune' },
    { name: 'Budhwar Peth', nameLocal: 'बुधवार पेठ', type: 'underground', landmark: 'Dagadusheth Halwai Ganapati (Nearby)' },
    { name: 'Mandai', nameLocal: 'मंडई', type: 'underground', landmark: 'Mahatma Phule Mandai Market' },
    { name: 'Swargate', nameLocal: 'स्वारगेट', type: 'underground', landmark: 'Swargate ST Stand / Ganesh Kala Krida' }
];

const aquaLineStations = [
    { name: 'Vanaz', nameLocal: 'वनाज', type: 'elevated', landmark: 'Vanaz Corner' },
    { name: 'Anand Nagar', nameLocal: 'आनंद नगर', type: 'elevated', landmark: 'Anand Nagar' },
    { name: 'Ideal Colony', nameLocal: 'आइडियल कॉलनी', type: 'elevated', landmark: 'MIT College Area' },
    { name: 'Nal Stop', nameLocal: 'नल स्टॉप', type: 'elevated', landmark: 'Nal Stop Flyover' },
    { name: 'Garware College', nameLocal: 'गरवारे महाविद्यालय', type: 'elevated', landmark: 'Abasaheb Garware College' },
    { name: 'Deccan Gymkhana', nameLocal: 'डेक्कन जिमखाना', type: 'elevated', landmark: 'Deccan Gymkhana / Sambhaji Park' },
    { name: 'Chhatrapati Sambhaji Udyan', nameLocal: 'छत्रपती संभाजी उद्यान', type: 'elevated', landmark: 'Bal Gandharva Rang Mandir' },
    { name: 'PMC', nameLocal: 'पुणे महानगरपालिका', type: 'elevated', landmark: 'PMC Main Building' },
    { name: 'Civil Court', nameLocal: 'दिवाणी न्यायालय', type: 'underground', isInterchange: true, interchangeWith: ['purple', 'pink'], landmark: 'District Court' },
    { name: 'Mangalwar Peth', nameLocal: 'मंगळवार पेठ', type: 'elevated', landmark: 'Juna Bazaar' },
    { name: 'Pune Railway Station', nameLocal: 'पुणे रेल्वे स्टेशन', type: 'elevated', landmark: 'Pune Junction Railway Station' },
    { name: 'Ruby Hall Clinic', nameLocal: 'रुबी हॉल क्लिनिक', type: 'elevated', landmark: 'Ruby Hall Clinic / Jehangir Hospital' },
    { name: 'Bund Garden', nameLocal: 'बंड गार्डन', type: 'elevated', landmark: 'Bund Garden / Council Hall' },
    { name: 'Yerawada', nameLocal: 'येरवडा', type: 'elevated', landmark: 'Yerawada Jail / Mental Hospital' },
    { name: 'Kalyani Nagar', nameLocal: 'कल्याणी नगर', type: 'elevated', landmark: 'Kalyani Nagar' },
    { name: 'Ramwadi', nameLocal: 'रामवाडी', type: 'elevated', landmark: 'Ramwadi / Viman Nagar' }
];

const pinkLineStations = [
    { name: 'Megapolis Circle', nameLocal: 'मेगापोलिस सर्कल', type: 'elevated', landmark: 'Hinjewadi Phase 3' },
    { name: 'Embassy Quadron Business Park', nameLocal: 'एम्बसी क्वाड्रॉन बिझनेस पार्क', type: 'elevated', landmark: 'Quadron IT Park' },
    { name: 'Döhler', nameLocal: 'डोहलर', type: 'elevated', landmark: 'Döhler Hinjewadi' },
    { name: 'Infosys Phase II', nameLocal: 'इन्फोसिस फेज २', type: 'elevated', landmark: 'Infosys Campus' },
    { name: 'Wipro Technologies', nameLocal: 'विप्रो टेक्नॉलॉजीज', type: 'elevated', landmark: 'Wipro Hinjewadi' },
    { name: 'Pall India', nameLocal: 'पाल इंडिया', type: 'elevated', landmark: 'Pall India Hinjewadi' },
    { name: 'Shivaji Chowk', nameLocal: 'शिवाजी चौक', type: 'elevated', landmark: 'Hinjewadi Phase 1' },
    { name: 'Hinjawadi', nameLocal: 'हिंजवडी', type: 'elevated', landmark: 'Hinjewadi' },
    { name: 'Wakad Chowk', nameLocal: 'वाकड चौक', type: 'elevated', landmark: 'Wakad' },
    { name: 'Balewadi Stadium', nameLocal: 'बालेवाडी स्टेडियम', type: 'elevated', landmark: 'Shree Shiv Chhatrapati Sports Complex' },
    { name: 'NICMAR', nameLocal: 'निकमार', type: 'elevated', landmark: 'NICMAR' },
    { name: 'Ramnagar', nameLocal: 'रामनगर', type: 'elevated', landmark: 'Ramnagar' },
    { name: 'Laxmi Nagar', nameLocal: 'लक्ष्मी नगर', type: 'elevated', landmark: 'Laxmi Nagar' },
    { name: 'Balewadi Phata', nameLocal: 'बालेवाडी फाटा', type: 'elevated', landmark: 'Balewadi Phata' },
    { name: 'Baner Gaon', nameLocal: 'बाणेर गाव', type: 'elevated', landmark: 'Baner' },
    { name: 'Baner', nameLocal: 'बाणेर', type: 'elevated', landmark: 'Baner Road' },
    { name: 'Krushi Anusandhan', nameLocal: 'कृषी संशोधन', type: 'elevated', landmark: 'ICAR-IARI' },
    { name: 'Sakal Nagar', nameLocal: 'सकाळ नगर', type: 'elevated', landmark: 'Sakal Nagar' },
    { name: 'Savitribai Phule Pune University', nameLocal: 'सावित्रीबाई फुले पुणे विद्यापीठ', type: 'elevated', landmark: 'Pune University Main Gate' },
    { name: 'Reserve Bank of India', nameLocal: 'भारतीय रिझर्व्ह बँक', type: 'elevated', landmark: 'RBI Pune' },
    { name: 'Agriculture College', nameLocal: 'कृषी महाविद्यालय', type: 'elevated', landmark: 'COEP / Agriculture College' },
    { name: 'Shivaji Nagar', nameLocal: 'शिवाजीनगर', type: 'elevated', landmark: 'Shivajinagar' },
    { name: 'Civil Court', nameLocal: 'दिवाणी न्यायालय', type: 'elevated', isInterchange: true, interchangeWith: ['purple', 'aqua'], landmark: 'District Court' }
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
        facilities: ['Lifts', 'Escalators', 'CCTV', 'Restrooms', 'Drinking Water', 'Solar Powered'],
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

const puneData = {
    id: 'pune',
    name: 'Pune Metro',
    nameLocal: 'पुणे मेट्रो',
    city: 'Pune',
    state: 'Maharashtra',
    operator: 'Maharashtra Metro Rail Corporation Limited (Maha Metro)',
    totalStations: 54,
    length: '54.5 km',
    totalLines: 3,
    phase: 'Phase 1 & 2',
    established: '2022',
    website: 'https://www.punemetrorail.org/',
    lines: [
        {
            id: 'purple',
            name: 'Purple Line (Line 1)',
            color: '#7E57C2',
            colorLight: '#B39DDB',
            corridor: 'PCMC - Swargate',
            length: '16.58 km',
            totalStations: 14,
            status: 'operational',
            operationalSince: '2022-03-06',
            stations: purpleLineStations.map((st, i) => buildStation(st, 'p', i))
        },
        {
            id: 'aqua',
            name: 'Aqua Line (Line 2)',
            color: '#00BCD4',
            colorLight: '#B2EBF2',
            corridor: 'Vanaz - Ramwadi',
            length: '14.66 km',
            totalStations: 16,
            status: 'operational',
            operationalSince: '2022-03-06',
            stations: aquaLineStations.map((st, i) => buildStation(st, 'a', i))
        },
        {
            id: 'pink',
            name: 'Pink Line (Line 3)',
            color: '#FF4081',
            colorLight: '#F8BBD0',
            corridor: 'Hinjewadi - Civil Court',
            length: '23.3 km',
            totalStations: 23,
            status: 'under-construction',
            expectedCompletion: '2026',
            stations: pinkLineStations.map((st, i) => buildStation(st, 'pi', i))
        }
    ]
};

puneData.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('pune', line.id, i)
    }));
});

export default puneData;
