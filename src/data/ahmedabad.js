/**
 * Ahmedabad Metro Rail — Station & Line Data
 * Enriched with precise platform layouts, gate landmarks, and facility information.
 */
import { getStationCoords } from './stationCoords.js';

const blueLineStationsData = [
    { name: 'Thaltej Gam', nameLocal: 'થલતેજ ગામ', type: 'elevated', landmark: 'Thaltej Village', gates: [{ gate: '1', landmarks: ['Thaltej Lake'] }, { gate: '2', landmarks: ['Main Market'] }] },
    { name: 'Thaltej', nameLocal: 'થલતેજ', type: 'elevated', landmark: 'Thaltej Cross Roads', gates: [{ gate: '1', landmarks: ['Acropolis Mall'] }, { gate: '2', landmarks: ['Sarkhej Highway'] }] },
    { name: 'Doordarshan Kendra', nameLocal: 'દૂરદર્શન કેન્દ્ર', type: 'elevated', landmark: 'Doordarshan Kendra Office' },
    { name: 'Gurukul Road', nameLocal: 'ગુરુકુળ રોડ', type: 'elevated', landmark: 'Himalaya Mall', gates: [{ gate: '1', landmarks: ['Himalaya Mall', 'Drive-in Road'] }, { gate: '2', landmarks: ['SGVP Temple'] }] },
    { name: 'Gujarat University', nameLocal: 'ગુજરાત યુનિવર્સિટી', type: 'elevated', landmark: 'University Campus' },
    { name: 'Commerce Six Road', nameLocal: 'કોમર્સ છ રસ્તા', type: 'elevated', landmark: 'Passport Seva Kendra', gates: [{ gate: '1', landmarks: ['Navarangpura Fire Station'] }, { gate: '2', landmarks: ['Passport Seva Kendra'] }] },
    { name: 'SP Stadium', nameLocal: 'એસ. પી. સ્ટેડિયમ', type: 'elevated', landmark: 'Sardar Vallabhbhai Patel Stadium' },
    {
        name: 'Old High Court',
        nameLocal: 'જૂની હાઈકોર્ટ',
        type: 'elevated',
        isInterchange: true,
        interchangeWith: ['red'],
        landmark: 'Income Tax Office',
        platformHint: { p1: 'Vastral Gam', p2: 'Thaltej Gam', type: 'Side' },
        gates: [{ gate: '1', landmarks: ['Family Court'] }, { gate: '2', landmarks: ['Income Tax Office'] }]
    },
    { name: 'Ashram Road', nameLocal: 'આશ્રમ રોડ', type: 'elevated', landmark: 'Ashram Road' },
    { name: 'Ellisbridge', nameLocal: 'એલિસબ્રિજ', type: 'elevated', landmark: 'V.S. Hospital' },
    { name: 'Shahpur', nameLocal: 'શાહપુર', type: 'underground', isIsland: true, landmark: 'Shahpur Gate' },
    { name: 'Gheekanta', nameLocal: 'ઘીકાંટા', type: 'underground', isIsland: true, landmark: 'Metropolitan Courthouse', gates: [{ gate: '1', landmarks: ['Sidi Saiyyed Mosque'] }, { gate: '2', landmarks: ['Metropolitan Court'] }] },
    { name: 'Kalupur Railway Station', nameLocal: 'કાલુપુર રેલ્વે સ્ટેશન', type: 'underground', isIsland: true, landmark: 'Ahmedabad Junction', gates: [{ gate: '1', landmarks: ['Railway Station Main Entry'] }, { gate: '2', landmarks: ['Prem Darwaza'] }] },
    { name: 'Kankaria East', nameLocal: 'કાંકરિયા પૂર્વ', type: 'underground', isIsland: true, landmark: 'Kankaria Lake Gate 3', gates: [{ gate: '1', landmarks: ['Kankaria Lake Gate 3'] }, { gate: '2', landmarks: ['Teen Darwaza Area'] }] },
    { name: 'Apparel Park', nameLocal: 'એપેરલ પાર્ક', type: 'elevated', landmark: 'GMRCL Depot', gates: [{ gate: '1', landmarks: ['Apparel Park GIDC'] }, { gate: '2', landmarks: ['Shri Khandubhai Desai Marg'] }] },
    { name: 'Amraiwadi', nameLocal: 'અમરાઈવાડી', type: 'elevated', landmark: 'Amraiwadi Chokdi', gates: [{ gate: '1', landmarks: ['Metro Pillar 50'] }, { gate: '2', landmarks: ['Reliance Market'] }] },
    { name: 'Rabari Colony', nameLocal: 'રબારી કોલોની', type: 'elevated', landmark: 'Rabari Colony BRTS', gates: [{ gate: '2', landmarks: ['Narol-Naroda Road'] }, { gate: '3', landmarks: ['BRTS Bus Stop'] }] },
    { name: 'Vastral', nameLocal: 'વસ્ત્રાલ', type: 'elevated', landmark: 'Vastral Circle', gates: [{ gate: '2', landmarks: ['Vastral Road'] }, { gate: '3', landmarks: ['Madhav Residency'] }] },
    { name: 'Nirant Cross Road', nameLocal: 'નિરાંત ક્રોસ રોડ', type: 'elevated', landmark: 'Nirant Chokdi', gates: [{ gate: '1', landmarks: ['Nirant Chokdi'] }, { gate: '4', landmarks: ['SP Ring Road Way'] }] },
    { name: 'Vastral Gam', nameLocal: 'વસ્ત્રાલ ગામ', type: 'elevated', landmark: 'SP Ring Road Junction', gates: [{ gate: '1', landmarks: ['SP Ring Road'] }, { gate: '3', landmarks: ['Vastral Village'] }] }
];

const redLineStationsData = [
    { name: 'Motera Stadium', nameLocal: 'મોટેરા સ્ટેડિયમ', type: 'elevated', isInterchange: true, interchangeWith: ['yellow'], landmark: 'Narendra Modi Stadium' },
    { name: 'Sabarmati', nameLocal: 'સાબરમતી', type: 'elevated', landmark: 'Sabarmati Railway Station' },
    { name: 'AEC', nameLocal: 'એ. ઈ. સી.', type: 'elevated', landmark: 'Torrent Power AEC' },
    { name: 'Sabarmati Railway Station', nameLocal: 'સાબરમતી રેલ્વે સ્ટેશન', type: 'elevated', landmark: 'Sabarmati Central HSR' },
    { name: 'Ranip', nameLocal: 'રાણીપ', type: 'elevated', landmark: 'Ranip GSRTC Bus Stand', gates: [{ gate: '1', landmarks: ['Ranip Bus Terminus'] }, { gate: '2', landmarks: ['Local Market'] }] },
    { name: 'Vadaj', nameLocal: 'વાડજ', type: 'elevated', landmark: 'Vadaj Terminals' },
    { name: 'Vijay Nagar', nameLocal: 'વિજય નगर', type: 'elevated', landmark: 'Vijay Nagar' },
    { name: 'Usmanpura', nameLocal: 'ઉસ્માનપુરા', type: 'elevated', landmark: 'Swaminarayan Temple' },
    {
        name: 'Old High Court',
        nameLocal: 'જૂની હાઈકોર્ટ',
        type: 'elevated',
        isInterchange: true,
        interchangeWith: ['blue'],
        landmark: 'Income Tax Circle',
        isIsland: true,
        platformHint: { p1: 'Mahatma Mandir / GIFT City', p2: 'APMC', type: 'Island' }
    },
    { name: 'Gandhigram', nameLocal: 'ગાંધીગ્રામ', type: 'elevated', landmark: 'Gandhigram Railway Station' },
    { name: 'Paldi', nameLocal: 'पાલડી', type: 'elevated', landmark: 'Sanskar Kendra', gates: [{ gate: '1', landmarks: ['Sanskar Kendra Museum'] }, { gate: '2', landmarks: ['Paldi Market'] }] },
    { name: 'Shreyas', nameLocal: 'શ્રેયસ', type: 'elevated', landmark: 'Shreyas Foundation' },
    { name: 'Rajiv Nagar', nameLocal: 'રાજીવ નગર', type: 'elevated', landmark: 'Rajiv Nagar' },
    { name: 'Jivraj Park', nameLocal: 'જીવરાજ પાર્ક', type: 'elevated', landmark: 'Jivraj Park Hospital' },
    { name: 'APMC', nameLocal: 'એપીએમસી', type: 'elevated', landmark: 'Agricultural Produce Market' }
];

const yellowLineStationsData = [
    { name: 'Motera Stadium', nameLocal: 'મોટેરા સ્ટેડિયમ', type: 'elevated', isInterchange: true, interchangeWith: ['red'], landmark: 'Narendra Modi Stadium' },
    { name: 'Koteshwar Road', nameLocal: 'કોટેશ્વર રોડ', type: 'elevated', landmark: 'Koteshwar Temple' },
    { name: 'Vishwakarma College', nameLocal: 'વિશ્વકર્મા કોલેજ', type: 'elevated', landmark: 'GTU Headquarters' },
    { name: 'Tapovan Circle', nameLocal: 'તપોવન સર્કલ', type: 'elevated', landmark: 'Tapovan Circle' },
    { name: 'Narmada Canal', nameLocal: 'નર્મદા કેનાલ', type: 'elevated', landmark: 'Narmada Canal Sughad' },
    { name: 'Koba Circle', nameLocal: 'કોબા સર્કલ', type: 'elevated', landmark: 'Koba Highway Circle' },
    { name: 'Koba Gam', nameLocal: 'કોબા ગામ', type: 'elevated', landmark: 'Koba Village' },
    {
        name: 'GNLU',
        nameLocal: 'જીએનએલયુ',
        type: 'elevated',
        isInterchange: true,
        interchangeWith: ['purple'],
        landmark: 'GNLU University',
        platformHint: { p1: 'Mahatma Mandir', p2: 'Motera Stadium', type: 'Side' }
    },
    { name: 'Raysan', nameLocal: 'રાયસણ', type: 'elevated', landmark: 'Raysan Village' },
    { name: 'Randesan', nameLocal: 'રાંદેસણ', type: 'elevated', landmark: 'Randesan Village' },
    { name: 'Dholakuva Circle', nameLocal: 'ધોળાકુવા સર્કલ', type: 'elevated', landmark: 'Dholakuva' },
    { name: 'Infocity', nameLocal: 'ઇન્ફોસિટી', type: 'elevated', landmark: 'Gandhinagar IT Hub', gates: [{ gate: '1', landmarks: ['Infocity Campus'] }, { gate: '2', landmarks: ['DA-IICT Route'] }] },
    { name: 'Sector-1', nameLocal: 'સેક્ટર-1', type: 'elevated', landmark: 'Sector 1 Market' },
    { name: 'Sector-10A', nameLocal: 'સેક્ટર-10એ', type: 'elevated', landmark: 'Civil Hospital' },
    { name: 'Sachivalaya', nameLocal: 'સચિવાલય', type: 'elevated', landmark: 'New Secretariat' },
    { name: 'Akshardham', nameLocal: 'અક્ષરધામ', type: 'elevated', landmark: 'Akshardham Temple', gates: [{ gate: '1', landmarks: ['Temple Entry'] }, { gate: '2', landmarks: ['Vidya Samiksha Kendra'] }] },
    { name: 'Juna Sachivalaya', nameLocal: 'જૂના સચિવાલય', type: 'elevated', landmark: 'Old Secretariat' },
    { name: 'Sector-16', nameLocal: 'સેક્ટર-16', type: 'elevated', landmark: 'Sector 16 Market' },
    { name: 'Sector-24', nameLocal: 'સેક્ટર-24', type: 'elevated', landmark: 'Sector 24' },
    { name: 'Mahatma Mandir', nameLocal: 'મહાત્મા મંદિર', type: 'elevated', landmark: 'Convention Center', gates: [{ gate: '1', landmarks: ['Convention Center'] }, { gate: '2', landmarks: ['Gandhinagar Capital Station'] }] }
];

const purpleLineStationsData = [
    {
        name: 'GNLU',
        nameLocal: 'જીએનએલયુ',
        type: 'elevated',
        isInterchange: true,
        interchangeWith: ['yellow'],
        landmark: 'Interchange Junction',
        platformHint: { p1: 'GIFT City', p2: 'Motera Stadium', type: 'Side' }
    },
    { name: 'PDPU', nameLocal: 'પીડીપીયુ', type: 'elevated', landmark: 'PDEU University' },
    { name: 'GIFT City', nameLocal: 'ગિફ્ટ સિટી', type: 'elevated', landmark: 'Smart City IT Zone', gates: [{ gate: '1', landmarks: ['GIFT One Towers'] }, { gate: '2', landmarks: ['GIFT Club'] }] }
];

function buildStation(st, idPrefix, idx, lineId) {
    let towards1 = 'Terminal 1';
    let towards2 = 'Terminal 2';

    if (lineId === 'blue') {
        towards1 = 'Vastral Gam';
        towards2 = 'Thaltej Gam';
    } else if (lineId === 'red') {
        towards1 = 'Motera Stadium';
        towards2 = 'APMC';
    } else if (lineId === 'yellow') {
        towards1 = 'Mahatma Mandir';
        towards2 = 'Motera Stadium';
    } else if (lineId === 'purple') {
        towards1 = 'GIFT City';
        towards2 = 'GNLU';
    }

    const baseFacilities = [
        'Lifts',
        'Escalators',
        'CCTV',
        'Restrooms',
        'Drinking Water',
        'First Aid Box',
        'Smart Card Vending',
        'Tactile Path'
    ];

    if (st.type === 'underground') {
        baseFacilities.push('Full-height Platform Screen Doors (PSDs)');
    } else {
        baseFacilities.push('Half-height Platform Screen Doors (PSDs)');
    }

    const platforms = st.platformHint ? [
        { no: 1, towards: st.platformHint.p1, type: st.platformHint.type },
        { no: 2, towards: st.platformHint.p2, type: st.platformHint.type }
    ] : [
        { no: 1, towards: towards1, type: st.isIsland ? 'Island' : 'Side' },
        { no: 2, towards: towards2, type: st.isIsland ? 'Island' : 'Side' }
    ];

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
        platforms: platforms,
        gates: st.gates || [
            { gate: '1', landmarks: [st.landmark || 'Main Entrance'] },
            { gate: '2', landmarks: ['Secondary Exit'] }
        ]
    };
}

const ahmedabadMetro = {
    id: 'ahmedabad',
    name: 'Ahmedabad Metro',
    nameLocal: 'અમદાવાદ મેટ્રો',
    city: 'Ahmedabad',
    state: 'Gujarat',
    operator: 'Gujarat Metro Rail Corporation (GMRC)',
    totalStations: 58,
    totalLength: '68.23 km',
    totalLines: 4,
    phase: 'Phase 1 & Phase 2',
    established: '2022',
    website: 'https://gujaratmetrorail.com',

    lines: [
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#2196F3',
            colorLight: '#64B5F6',
            corridor: 'East-West Corridor',
            length: '21.16 km',
            totalStations: 20,
            status: 'operational',
            operationalSince: '2022',
            frequency: '12-15 min',
            firstTrain: '6:20 AM',
            lastTrain: '10:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: blueLineStationsData.map((st, i) => buildStation(st, 'b', i, 'blue'))
        },
        {
            id: 'red',
            name: 'Red Line',
            color: '#F44336',
            colorLight: '#EF5350',
            corridor: 'North-South Corridor',
            length: '18.87 km',
            totalStations: 15,
            status: 'operational',
            operationalSince: '2022',
            frequency: '12-15 min',
            firstTrain: '6:20 AM',
            lastTrain: '10:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: redLineStationsData.map((st, i) => buildStation(st, 'r', i, 'red'))
        },
        {
            id: 'yellow',
            name: 'Yellow Line (Gandhinagar)',
            color: '#FFEB3B',
            colorLight: '#FFF59D',
            corridor: 'N-S Extension (Phase 2)',
            length: '22.8 km',
            totalStations: 20,
            status: 'operational',
            operationalSince: '2024-09-17',
            frequency: '20 min',
            firstTrain: '6:30 AM',
            lastTrain: '9:30 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: yellowLineStationsData.map((st, i) => buildStation(st, 'y', i, 'yellow'))
        },
        {
            id: 'purple',
            name: 'Purple Line (GIFT City)',
            color: '#9C27B0',
            colorLight: '#CE93D8',
            corridor: 'GIFT City Branch',
            length: '5.4 km',
            totalStations: 3,
            status: 'operational',
            operationalSince: '2024-09-17',
            frequency: '20 min',
            firstTrain: '6:30 AM',
            lastTrain: '9:30 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: purpleLineStationsData.map((st, i) => buildStation(st, 'g', i, 'purple'))
        }
    ]
};

ahmedabadMetro.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('ahmedabad', line.id, i)
    }));
});

export default ahmedabadMetro;
