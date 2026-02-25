/**
 * Bengaluru Namma Metro — Complete Station & Line Data
 * Enriched with gate landmarks, platform directions, and facility data.
 */
import { getStationCoords } from "./stationCoords.js";

const purpleLineStationsData = [
    { name: 'Challaghatta', nameLocal: 'ಚಳ್ಳಘಟ್ಟ', type: 'elevated', landmark: 'Challaghatta Junction' },
    { name: 'Kengeri Bus Terminal', nameLocal: 'ಕೆಂಗೇರಿ ಬಸ್ ಟರ್ಮಿನಲ್', type: 'elevated', landmark: 'Kengeri Bus Stand', gates: [{ gate: '1', landmarks: ['Mysuru Road'] }, { gate: '2', landmarks: ['Kengeri Bus Terminal'] }] },
    { name: 'Kengeri', nameLocal: 'ಕೆಂಗೇರಿ', type: 'elevated', landmark: 'Kengeri Town' },
    { name: 'Pattanagere', nameLocal: 'ಪಟ್ಟಣಗೆರೆ', type: 'elevated', landmark: 'Global Village Tech Park' },
    { name: 'Jnanabharathi', nameLocal: 'ಜ್ಞಾನಭಾರತಿ', type: 'elevated', landmark: 'Bangalore University Main Gate' },
    { name: 'Rajarajeshwari Nagar', nameLocal: 'ರಾಜರಾಜೇಶ್ವರಿ ನಗರ', type: 'elevated', landmark: 'RR Nagar Arch' },
    { name: 'Mysuru Road', nameLocal: 'ಮೈಸೂರು ರಸ್ತೆ', type: 'elevated', landmark: 'Mysuru Road Satellite Bus Station' },
    { name: 'Deepanjali Nagar', nameLocal: 'ದೀಪಾಂಜಲಿ ನಗರ', type: 'elevated', landmark: 'Deepanjali Nagar' },
    { name: 'Attiguppe', nameLocal: 'ಅಟ್ಟಿಗುಪ್ಪೆ', type: 'elevated', landmark: 'Attiguppe' },
    { name: 'Vijayanagar', nameLocal: 'ವಿಜಯನಗರ', type: 'elevated', landmark: 'Vijayanagar BDA Complex' },
    { name: 'Hosahalli', nameLocal: 'ಹೊಸಹಳ್ಳಿ', type: 'elevated', landmark: 'Hosahalli' },
    { name: 'Magadi Road', nameLocal: 'ಮಾಗಡಿ ರಸ್ತೆ', type: 'elevated', landmark: 'Magadi Road Crossing' },
    { name: 'Krantivira Sangolli Rayanna Railway Station', nameLocal: 'ಕ್ರಾಂತಿವೀರ ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ ರೈಲ್ವೆ ನಿಲ್ದಾಣ', type: 'underground', isIsland: true, landmark: 'KSR Bengaluru City Railway Station', gates: [{ gate: '1', landmarks: ['Railway Station Main Entry'] }, { gate: '2', landmarks: ['Okalipuram'] }] },
    {
        name: 'Nadaprabhu Kempegowda Station, Majestic',
        nameLocal: 'ನಡಪ್ರಭು ಕೆಂಪೇಗೌಡ ನಿಲ್ದಾಣ, ಮೆಜೆಸ್ಟಿಕ್',
        type: 'underground',
        isIsland: true,
        isInterchange: true,
        interchangeWith: ['green'],
        landmark: 'Kempegowda Bus Station (Majestic)',
        gates: [
            { gate: 'A', landmarks: ['KSR Railway Station Entry'] },
            { gate: 'B', landmarks: ['Majestic Bus Stand (KSRTC)'] },
            { gate: 'C', landmarks: ['BMTC Bus Stand'] },
            { gate: 'D', landmarks: ['Dhanvanthri Road'] }
        ]
    },
    { name: 'Sir M. Visveshwaraya', nameLocal: 'ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯ', type: 'underground', isIsland: true, landmark: 'Central College', gates: [{ gate: '1', landmarks: ['Central College'] }, { gate: '2', landmarks: ['Maharani College'] }] },
    { name: 'Vidhana Soudha', nameLocal: 'ವಿಧಾನ ಸೌಧ', type: 'underground', isIsland: true, landmark: 'Karnataka High Court', gates: [{ gate: 'A', landmarks: ['Vidhana Soudha'] }, { gate: 'B', landmarks: ['High Court / GPO'] }] },
    { name: 'Cubbon Park', nameLocal: 'ಕಬ್ಬನ್ ಪಾರ್ಕ್', type: 'underground', isIsland: true, landmark: 'Cubbon Park Entrance', gates: [{ gate: '1', landmarks: ['Cubbon Park'] }, { gate: '2', landmarks: ['Chinnaswamy Stadium'] }] },
    { name: 'Dr. B.R. Ambedkar Station, Vidhana Soudha', nameLocal: 'ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ ನಿಲ್ದಾಣ, ವಿಧಾನ ಸೌಧ', type: 'underground', isIsland: true, landmark: 'Vikasa Soudha' },
    { name: 'MG Road', nameLocal: 'ಎಂ.ಜಿ. ರಸ್ತೆ', type: 'underground', isIsland: true, isInterchange: true, interchangeWith: ['pink'], landmark: 'Brigade Road Junction', gates: [{ gate: 'A', landmarks: ['Brigade Road', 'MG Road'] }, { gate: 'B', landmarks: ['Church Street'] }] },
    { name: 'Trinity', nameLocal: 'ಟ್ರಿನಿಟಿ', type: 'elevated', landmark: 'Trinity Circle' },
    { name: 'Halasuru', nameLocal: 'ಹಲಸೂರು', type: 'elevated', landmark: 'Halasuru Lake' },
    { name: 'Indiranagar', nameLocal: 'ಇಂದಿರಾನಗರ', type: 'elevated', landmark: '100 Feet Road', gates: [{ gate: '1', landmarks: ['100 FT Road'] }, { gate: '2', landmarks: ['CMH Road'] }] },
    { name: 'Swami Vivekananda Road', nameLocal: 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ರಸ್ತೆ', type: 'elevated', landmark: 'Old Madras Road' },
    { name: 'Baiyappanahalli', nameLocal: 'ಬೈಯಪ್ಪನಹಳ್ಳಿ', type: 'elevated', landmark: 'Namma Metro Depot' },
    { name: 'Benniganahalli', nameLocal: 'ಬೆಣ್ಣಿಗನಹಳ್ಳಿ', type: 'elevated', landmark: 'Benniganahalli Flyover' },
    { name: 'K.R. Puram', nameLocal: 'ಕೆ.ಆರ್. ಪುರಂ', type: 'elevated', isInterchange: true, interchangeWith: ['blue'], landmark: 'KR Puram Railway Station', gates: [{ gate: '1', landmarks: ['Railway Station'] }, { gate: '2', landmarks: ['Tin Factory Side'] }] },
    { name: 'Garudacharpalya', nameLocal: 'ಗರುಡಾಚಾರ್ಪಾಳ್ಯ', type: 'elevated', landmark: 'Garudacharpalya' },
    { name: 'Hoodi', nameLocal: 'ಹೂಡಿ', type: 'elevated', landmark: 'Hoodi Junction' },
    { name: 'Seetharamapalya', nameLocal: 'ಸೀತಾರಾಮಪಾಳ್ಯ', type: 'elevated', landmark: 'Seetharamapalya' },
    { name: 'Kundalahalli', nameLocal: 'ಕುಂದಲಹಳ್ಳಿ', type: 'elevated', landmark: 'Kundalahalli Gate' },
    { name: 'Nallurhalli', nameLocal: 'ನಲ್ಲೂರ್‌ಹಳ್ಳಿ', type: 'elevated', landmark: 'Nallurhalli' },
    { name: 'Sri Sathya Sai Hospital', nameLocal: 'ಶ್ರೀ ಸತ್ಯ ಸಾಯಿ ಆಸ್ಪತ್ರೆ', type: 'elevated', landmark: 'Sathya Sai Ashram/Hospital' },
    { name: 'Pattanduru Agrahara', nameLocal: 'ಪಟ್ಟಂದೂರ್ ಅಗ್ರಹಾರ', type: 'elevated', landmark: 'ITPL Back Gate' },
    { name: 'Kadugodi Tree Park', nameLocal: 'ಕಡುಗೋಡಿ ಟ್ರೀ ಪಾರ್ಕ್', type: 'elevated', landmark: 'Kadugodi' },
    { name: 'Hopefarm Channasandra', nameLocal: 'ಹೋಪ್‌ಫಾರ್ಮ್ ಚನ್ನಸಂದ್ರ', type: 'elevated', landmark: 'Hope Farm Circle' },
    { name: 'Whitefield (Kadugodi)', nameLocal: 'ವೈಟ್‌ಫೀಲ್ಡ್ (ಕಡುಗೋಡಿ)', type: 'elevated', landmark: 'Whitefield Railway Station', gates: [{ gate: '1', landmarks: ['Railway Station Entry'] }, { gate: '2', landmarks: ['Kadugodi Bus Stand'] }] }
];

const greenLineStationsData = [
    { name: 'Madavara (BIEC)', nameLocal: 'ಮಾದಾವರ (BIEC)', type: 'elevated', landmark: 'Bangalore International Exhibition Centre' },
    { name: 'Chikkabidarakallu', nameLocal: 'ಚಿಕ್ಕಬಿದರಕಲ್ಲು', type: 'elevated', landmark: 'Jindal Naturecure' },
    { name: 'Manjunathanagar', nameLocal: 'ಮಂಜುನಾಥನಗರ', type: 'elevated', landmark: 'Manjunathanagar' },
    { name: 'Nagasandra', nameLocal: 'ನಾಗಸಂದ್ರ', type: 'elevated', landmark: 'Nagasandra' },
    { name: 'Dasarahalli', nameLocal: 'ದಾಸರಹಳ್ಳಿ', type: 'elevated', landmark: 'Dasarahalli' },
    { name: 'Jalahalli', nameLocal: 'ಜಲಹಳ್ಳಿ', type: 'elevated', landmark: 'Jalahalli Cross' },
    { name: 'Peenya Industry', nameLocal: 'ಪೀಣ್ಯ ಇಂಡಸ್ಟ್ರಿ', type: 'elevated', landmark: 'Peenya Industrial Area' },
    { name: 'Peenya', nameLocal: 'ಪೀಣ್ಯ', type: 'elevated', landmark: 'Peenya Village' },
    { name: 'Goraguntepalya', nameLocal: 'ಗೊರಗುಂಟೆಪಾಳ್ಯ', type: 'elevated', landmark: 'Taj Yeshwantpur' },
    { name: 'Yeshwanthpur', nameLocal: 'ಯಶವಂತಪುರ', type: 'elevated', landmark: 'Yeshwanthpur Railway Station', gates: [{ gate: '1', landmarks: ['Railway Station Entry'] }, { gate: '2', landmarks: ['Tumkur Road'] }] },
    { name: 'Sandal Soap Factory', nameLocal: 'ಶ್ರೀಗಂಧ ಸೋಪ್ ಕಾರ್ಖಾನೆ', type: 'elevated', landmark: 'ISKCON Temple' },
    { name: 'Mahalakshmi', nameLocal: 'ಮಹಾಲಕ್ಷ್ಮಿ', type: 'elevated', landmark: 'Mahalakshmi Layout' },
    { name: 'Rajajinagar', nameLocal: 'ರಾಜಾಜಿನಗರ', type: 'elevated', landmark: 'Rajajinagar' },
    { name: 'Mahakavi Kuvempu Road', nameLocal: 'ಮಹಾಕವಿ ಕುವೆಂಪು ರಸ್ತೆ', type: 'elevated', landmark: 'Kuvempu Road' },
    { name: 'Srirampura', nameLocal: 'ಶ್ರೀರಾಂಪುರ', type: 'elevated', landmark: 'Srirampura' },
    { name: 'Mantri Square Sampige Road', nameLocal: 'ಮಂತ್ರಿ ಸ್ಕ್ವೇರ್ ಸಂಪಿಗೆ ರಸ್ತೆ', type: 'elevated', landmark: 'Mantri Square Mall' },
    {
        name: 'Nadaprabhu Kempegowda Station, Majestic',
        nameLocal: 'ನಡಪ್ರಭು ಕೆಂಪೇಗೌಡ ನಿಲ್ದಾಣ, ಮೆಜೆಸ್ಟಿಕ್',
        type: 'underground',
        isIsland: true,
        isInterchange: true,
        interchangeWith: ['purple'],
        landmark: 'Interchange Junction',
        gates: [{ gate: 'A', landmarks: ['Railway Station'] }, { gate: 'B', landmarks: ['Bus Stand'] }]
    },
    { name: 'Chickpete', nameLocal: 'ಚಿಕ್ಕಪೇಟೆ', type: 'underground', isIsland: true, landmark: 'Chickpete Market' },
    { name: 'Krishna Rajendra Market', nameLocal: 'ಕೃಷ್ಣ ರಾಜೇಂದ್ರ ಮಾರುಕಟ್ಟೆ', type: 'underground', isIsland: true, landmark: 'K.R. Market' },
    { name: 'National College', nameLocal: 'ನ್ಯಾಷನಲ್ ಕಾಲೇಜ್', type: 'elevated', landmark: 'National College Basavanagudi' },
    { name: 'Lalbagh', nameLocal: 'ಲಾಲ್‌ಬಾಗ್', type: 'elevated', landmark: 'Lalbagh West Gate' },
    { name: 'South End Circle', nameLocal: 'ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್', type: 'elevated', landmark: 'South End Circle' },
    { name: 'Jayanagar', nameLocal: 'ಜಯನಗರ', type: 'elevated', landmark: 'Jayanagar 4th Block' },
    { name: 'Rashtreeya Vidyalaya Road', nameLocal: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾಲಯ ರಸ್ತೆ', type: 'elevated', isInterchange: true, interchangeWith: ['yellow'], landmark: 'RV Road' },
    { name: 'Banashankari', nameLocal: 'ಬನಶಂಕರಿ', type: 'elevated', landmark: 'Banashankari Temple' },
    { name: 'J.P. Nagar', nameLocal: 'ಜೆ.ಪಿ. ನಗರ', type: 'elevated', landmark: 'JP Nagar 1st Phase' },
    { name: 'Yelachenahalli', nameLocal: 'ಯಲೆಚೇನಹಳ್ಳಿ', type: 'elevated', landmark: 'Yelachenahalli' },
    { name: 'Konanakunte Cross', nameLocal: 'ಕೊಣನಕುಂಟೆ ಕ್ರಾಸ್', type: 'elevated', landmark: 'Forum Mall South' },
    { name: 'Doddakallasandra', nameLocal: 'ದೊಡ್ಡಕಲ್ಲಸಂದ್ರ', type: 'elevated', landmark: 'Doddakallasandra' },
    { name: 'Vajrahalli', nameLocal: 'ವಜ್ರಹಳ್ಳಿ', type: 'elevated', landmark: 'Vajrahalli' },
    { name: 'Thalaghattapura', nameLocal: 'ತಲಘಟ್ಟಪುರ', type: 'elevated', landmark: 'Thalaghattapura' },
    { name: 'Silk Institute', nameLocal: 'ಸಿಲ್ಕ್ ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್', type: 'elevated', landmark: 'Silk Institute Terminus' }
];

const yellowLineStationsData = [
    { name: 'Rashtreeya Vidyalaya Road', nameLocal: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾಲಯ ರಸ್ತೆ', type: 'elevated', isInterchange: true, interchangeWith: ['green'], landmark: 'RV Road Interchange' },
    { name: 'Ragigudda', nameLocal: 'ರಾಗಿಗುಡ್ಡ', type: 'elevated', landmark: 'Ragigudda Anjaneya Temple' },
    { name: 'Jayadeva Hospital', nameLocal: 'ಜಯದೇವ ಆಸ್ಪತ್ರೆ', type: 'elevated', isInterchange: true, interchangeWith: ['pink'], landmark: 'Jayadeva Interchange' },
    { name: 'BTM Layout', nameLocal: 'ಬಿಟಿಎಂ ಲೇಔಟ್', type: 'elevated', landmark: 'BTM 2nd Stage' },
    { name: 'Central Silk Board', nameLocal: 'ಸೆಂಟ್ರಲ್ ಸಿಲ್ಕ್ ಬೋರ್ಡ್', type: 'elevated', isInterchange: true, interchangeWith: ['blue'], landmark: 'Silk Board Junction' },
    { name: 'Bommanahalli', nameLocal: 'ಬೊಮ್ಮನಹಳ್ಳಿ', type: 'elevated', landmark: 'Bommanahalli' },
    { name: 'Hongasandra', nameLocal: 'ಹೊಂಗಸಂದ್ರ', type: 'elevated', landmark: 'Hongasandra' },
    { name: 'Kudlu Gate', nameLocal: 'ಕುಡ್ಲು ಗೇಟ್', type: 'elevated', landmark: 'Kudlu Gate' },
    { name: 'Singasandra', nameLocal: 'ಸಿಂಗಸಂದ್ರ', type: 'elevated', landmark: 'Singasandra' },
    { name: 'Hosa Road', nameLocal: 'ಹೊಸ ರಸ್ತೆ', type: 'elevated', landmark: 'Hosa Road' },
    { name: 'Beratena Agrahara', nameLocal: 'ಬೆರಟೇನ ಅಗ್ರಹಾರ', type: 'elevated', landmark: 'Beratena Agrahara' },
    { name: 'Electronic City', nameLocal: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ', type: 'elevated', landmark: 'ECity Phase 1' },
    { name: 'Konappana Agrahara', nameLocal: 'ಕೊಣಪ್ಪನ ಅಗ್ರಹಾರ', type: 'elevated', landmark: 'Infosys Foundation', gates: [{ gate: '1', landmarks: ['Infosys Campus'] }, { gate: '2', landmarks: ['Electronic City Phase 2'] }] },
    { name: 'Huskur Road', nameLocal: 'ಹುಸ್ಕೂರ್ ರಸ್ತೆ', type: 'elevated', landmark: 'Huskur Road' },
    { name: 'Hebbagodi', nameLocal: 'ಹೆಬ್ಬಗೋಡಿ', type: 'elevated', landmark: 'Hebbagodi' },
    { name: 'Bommasandra', nameLocal: 'ಬೊಮ್ಮಸಂದ್ರ', type: 'elevated', landmark: 'Bommasandra Industrial Area' }
];

function buildStation(st, idPrefix, idx, lineId) {
    let towards1 = 'Terminal 1';
    let towards2 = 'Terminal 2';

    if (lineId === 'purple') {
        towards1 = 'Whitefield (Kadugodi)';
        towards2 = 'Challaghatta';
    } else if (lineId === 'green') {
        towards1 = 'Silk Institute';
        towards2 = 'Madavara (BIEC)';
    } else if (lineId === 'yellow') {
        towards1 = 'Bommasandra';
        towards2 = 'Rashtreeya Vidyalaya Road';
    } else if (lineId === 'pink') {
        towards1 = 'Nagawara';
        towards2 = 'Kalena Agrahara';
    } else if (lineId === 'blue') {
        towards1 = 'KIA Terminals';
        towards2 = 'Central Silk Board';
    }

    const baseFacilities = [
        'Lifts',
        'Escalators',
        'CCTV',
        'Restrooms',
        'Drinking Water',
        'First Aid',
        'Customer Care',
        'Smart Card Top-up'
    ];

    if (lineId === 'pink' && st.type === 'underground') {
        baseFacilities.push('Full-height Platform Screen Doors (PSDs)');
    } else if (lineId === 'yellow') {
        baseFacilities.push('Half-height Platform Screen Doors (PSDs)');
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

const bengaluruMetro = {
    id: 'bengaluru',
    name: 'Namma Metro',
    nameLocal: 'ನಮ್ಮ ಮೆಟ್ರೋ',
    city: 'Bengaluru',
    state: 'Karnataka',
    operator: 'Bangalore Metro Rail Corporation Limited (BMRCL)',
    totalStations: 83,
    totalLength: '85 km',
    totalLines: 3,
    phase: 'Phase 1 + 2 (Operational)',
    established: '2011',
    website: 'https://english.bmrc.co.in',

    lines: [
        {
            id: 'purple',
            name: 'Purple Line',
            color: '#9C27B0',
            colorLight: '#CE93D8',
            corridor: 'East-West',
            length: '43.49 km',
            totalStations: 37,
            status: 'operational',
            operationalSince: '2011-10-20',
            frequency: '5–10 min',
            firstTrain: '5:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'BEML',
            stations: purpleLineStationsData.map((st, i) => buildStation(st, 'pp', i, 'purple'))
        },
        {
            id: 'green',
            name: 'Green Line',
            color: '#4CAF50',
            colorLight: '#81C784',
            corridor: 'North-South',
            length: '33.46 km',
            totalStations: 32,
            status: 'operational',
            operationalSince: '2014-03-01',
            frequency: '5–10 min',
            firstTrain: '5:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'BEML',
            stations: greenLineStationsData.map((st, i) => buildStation(st, 'gn', i, 'green'))
        },
        {
            id: 'yellow',
            name: 'Yellow Line',
            color: '#FFD700',
            colorLight: '#FFF176',
            corridor: 'South (RV Road - Bommasandra)',
            length: '19.15 km',
            totalStations: 16,
            status: 'operational',
            operationalSince: '2025',
            frequency: '8–12 min',
            firstTrain: '5:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'BEML / CRRC',
            stations: yellowLineStationsData.map((st, i) => buildStation(st, 'yl', i, 'yellow'))
        },
        {
            id: 'pink',
            name: 'Pink Line',
            color: '#E91E63',
            colorLight: '#F48FB1',
            corridor: 'South-North (UC)',
            length: '21.25 km',
            totalStations: 18,
            status: 'under-construction',
            expectedCompletion: '2026',
            stations: [
                { id: 'pk01', name: 'Kalena Agrahara', type: 'elevated', landmark: 'Bannerghatta Road' },
                { id: 'pk11', name: 'MG Road', type: 'underground', isIsland: true, landmark: 'Interchange Junction' },
                { id: 'pk18', name: 'Nagawara', type: 'underground', isIsland: true, landmark: 'Nagawara Terminal' }
            ].map((st, i) => buildStation(st, 'pk', i, 'pink'))
        }
    ]
};

bengaluruMetro.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('bengaluru', line.id, i)
    }));
});

export default bengaluruMetro;
