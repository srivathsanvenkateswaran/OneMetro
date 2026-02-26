import { getStationCoords } from "./stationCoords.js";

// ──────────────────────────────────────────────────────────────────────────────
// RED LINE — Corridor I (East-West) — Danapur Cantonment ↔ Khemnichak
// 16.86 km | 14 stations | 7 elevated + 7 underground
// ──────────────────────────────────────────────────────────────────────────────
const redLineStationsData = [
    {
        name: 'Danapur Cantonment',
        nameLocal: 'दानापुर कैंटोनमेंट',
        type: 'elevated',
        landmark: 'Danapur Cantonment Military Area',
        gates: [
            { gate: '1', landmarks: ['Danapur Cantonment Gate', 'NH 30'] },
            { gate: '2', landmarks: ['Danapur Railway Station', 'Old GT Road'] }
        ]
    },
    {
        name: 'Saguna More',
        nameLocal: 'सगुना मोड़',
        type: 'elevated',
        landmark: 'Saguna More Chowk',
        gates: [
            { gate: '1', landmarks: ['Saguna More Bus Stop', 'Saguna More Market'] },
            { gate: '2', landmarks: ['Patliputra Colony', 'Bank of India'] }
        ]
    },
    {
        name: 'RPS More',
        nameLocal: 'आरपीएस मोड़',
        type: 'elevated',
        landmark: 'RPS More Roundabout',
        gates: [
            { gate: '1', landmarks: ['Rajendra Path', 'Boring Road'] },
            { gate: '2', landmarks: ['Hanuman Mandir', 'State Bank of India'] }
        ]
    },
    {
        name: 'Patliputra',
        nameLocal: 'पाटलिपुत्र',
        type: 'elevated',
        landmark: 'Patliputra Colony (formerly IAS Colony)',
        gates: [
            { gate: '1', landmarks: ['Patliputra Colony Chowk', 'BSSC Patna'] },
            { gate: '2', landmarks: ['Patliputra Industrial Area', 'Rajiv Nagar'] }
        ]
    },
    {
        name: 'Rukanpura',
        nameLocal: 'रुकनपुरा',
        type: 'elevated',
        landmark: 'Rukanpura Market Area',
        gates: [
            { gate: '1', landmarks: ['Rukanpura Market', 'Boring Canal Road'] },
            { gate: '2', landmarks: ['Indira Gandhi Eye Hospital', 'Rukanpura Crossing'] }
        ]
    },
    {
        name: 'Raja Bazar',
        nameLocal: 'राजा बाज़ार',
        type: 'elevated',
        landmark: 'Raja Bazar Commercial Hub',
        gates: [
            { gate: '1', landmarks: ['Raja Bazar Main Market', 'Sinha Library'] },
            { gate: '2', landmarks: ['IGIMS Hospital', 'Anisabad Chowk'] }
        ]
    },
    {
        name: 'Patna Zoo',
        nameLocal: 'पटना चिड़ियाघर',
        type: 'elevated',
        landmark: 'Sanjay Gandhi Jaivik Udyan (Patna Zoo)',
        gates: [
            { gate: '1', landmarks: ['Patna Zoo Main Gate', 'Bailey Road'] },
            { gate: '2', landmarks: ['JD Women\'s College', 'Buddha Smriti Park'] }
        ]
    },
    {
        name: 'Vikas Bhawan',
        nameLocal: 'विकास भवन',
        type: 'underground',
        isIsland: true,
        landmark: 'Vikas Bhawan Government Complex',
        gates: [
            { gate: '1', landmarks: ['Vikas Bhawan Main Gate', 'Raj Bhavan Area'] },
            { gate: '2', landmarks: ['Bihar Legislative Assembly', 'NR Colony'] }
        ]
    },
    {
        name: 'Vidyut Bhawan',
        nameLocal: 'विद्युत भवन',
        type: 'underground',
        isIsland: true,
        landmark: 'Bihar State Electricity Board HQ',
        gates: [
            { gate: '1', landmarks: ['Vidyut Bhawan Office Complex', 'Dakbungalow Road'] },
            { gate: '2', landmarks: ['Gandhi Maidan East Gate', 'Patna Women\'s College'] }
        ]
    },
    {
        id: 'inter-patna-jn',
        name: 'Patna Junction',
        nameLocal: 'पटना जंक्शन',
        type: 'underground',
        isIsland: true,
        isInterchange: true,
        interchangeWith: ['blue'],
        landmark: 'Patna Junction Railway Station',
        gates: [
            { gate: '1', landmarks: ['Patna Junction Main Exit', 'Mahavir Mandir'] },
            { gate: '2', landmarks: ['Frazer Road', 'Patna City Bus Stand'] },
            { gate: '3', landmarks: ['Station Road Market', 'Hotel Chanakya Area'] },
            { gate: '4', landmarks: ['Patna GPO', 'Ashok Rajpath'] }
        ]
    },
    {
        name: 'Mithapur',
        nameLocal: 'मीठापुर',
        type: 'underground',
        isIsland: true,
        landmark: 'Mithapur Bus Terminal Area',
        gates: [
            { gate: '1', landmarks: ['Mithapur Bus Stand', 'Punaichak Area'] },
            { gate: '2', landmarks: ['Patna Museum Road', 'Gulzarbagh Area'] }
        ]
    },
    {
        name: 'Ramkrishna Nagar',
        nameLocal: 'रामकृष्ण नगर',
        type: 'underground',
        isIsland: true,
        landmark: 'Ramkrishna Nagar Residential Colony',
        gates: [
            { gate: '1', landmarks: ['Ramkrishna Nagar Colony', 'Kankarbagh Road'] },
            { gate: '2', landmarks: ['Jawahar Lal Nehru Market', 'Shastri Nagar Area'] }
        ]
    },
    {
        name: 'Jaganpura',
        nameLocal: 'जगनपुरा',
        type: 'underground',
        isIsland: true,
        landmark: 'Jaganpura Residential Area',
        gates: [
            { gate: '1', landmarks: ['Jaganpura Market', 'SP Verma Road'] },
            { gate: '2', landmarks: ['Boring Road Extension', 'Kankarbagh Main Road'] }
        ]
    },
    {
        id: 'inter-khemnichak',
        name: 'Khemnichak',
        nameLocal: 'खेमनीचक',
        type: 'underground',
        isIsland: true,
        isInterchange: true,
        interchangeWith: ['blue'],
        landmark: 'Khemnichak Junction (Kankarbagh Area)',
        gates: [
            { gate: '1', landmarks: ['Khemnichak Crossing', 'Kankarbagh Market'] },
            { gate: '2', landmarks: ['Dak Bungalow Road South', 'SP Verma Road Junction'] },
            { gate: '3', landmarks: ['Anisabad Metro Depot Road', 'Rajiv Nagar Colony'] }
        ]
    }
];

// ──────────────────────────────────────────────────────────────────────────────
// BLUE LINE — Corridor II (North-South) — Patna Junction ↔ New ISBT
// 14.06 km | 12 stations | 6 underground + 6 elevated
// Priority corridor (Bhoothnath–New ISBT) operational Oct 2025
// ──────────────────────────────────────────────────────────────────────────────
const blueLineStationsData = [
    {
        id: 'inter-patna-jn',
        name: 'Patna Junction',
        nameLocal: 'पटना जंक्शन',
        type: 'underground',
        isIsland: true,
        isInterchange: true,
        interchangeWith: ['red'],
        landmark: 'Patna Junction Railway Station',
        gates: [
            { gate: '1', landmarks: ['Patna Junction Main Exit', 'Mahavir Mandir'] },
            { gate: '2', landmarks: ['Frazer Road', 'Patna City Bus Stand'] },
            { gate: '3', landmarks: ['Station Road Market', 'Hotel Chanakya Area'] },
            { gate: '4', landmarks: ['Patna GPO', 'Ashok Rajpath'] }
        ]
    },
    {
        name: 'Akashvani',
        nameLocal: 'आकाशवाणी',
        type: 'underground',
        isIsland: true,
        landmark: 'All India Radio (Akashvani) Patna',
        gates: [
            { gate: '1', landmarks: ['Dak Bungalow Crossing', 'Akashvani Bhawan'] },
            { gate: '2', landmarks: ['BN College Area', 'Exhibition Road'] }
        ]
    },
    {
        name: 'Gandhi Maidan',
        nameLocal: 'गांधी मैदान',
        type: 'underground',
        isIsland: true,
        landmark: 'Gandhi Maidan Ground',
        gates: [
            { gate: '1', landmarks: ['Gandhi Maidan North Gate', 'Collectorate'] },
            { gate: '2', landmarks: ['Gandhi Maidan South Gate', 'Bihar Khadi Gramodyog'] },
            { gate: '3', landmarks: ['GPO Side Entrance', 'Income Tax Office'] }
        ]
    },
    {
        name: 'PMCH',
        nameLocal: 'पीएमसीएच',
        type: 'underground',
        isIsland: true,
        landmark: 'Patna Medical College & Hospital',
        gates: [
            { gate: '1', landmarks: ['PMCH Main Gate', 'Ashok Rajpath'] },
            { gate: '2', landmarks: ['PMCH Emergency Ward', 'Bihar Veterinary College'] }
        ]
    },
    {
        name: 'Patna University',
        nameLocal: 'पटना विश्वविद्यालय',
        type: 'underground',
        isIsland: true,
        landmark: 'Patna University Campus',
        gates: [
            { gate: '1', landmarks: ['Patna University Main Gate', 'Bihar Museum Road'] },
            { gate: '2', landmarks: ['Patna Science College', 'Golghar'] }
        ]
    },
    {
        name: 'Moin Ul Haq Stadium',
        nameLocal: 'मोइन उल हक स्टेडियम',
        type: 'underground',
        isIsland: true,
        landmark: 'Moin-ul-Haq Stadium (Patna Cricket)',
        gates: [
            { gate: '1', landmarks: ['Stadium Main Gate', 'Polo Ground'] },
            { gate: '2', landmarks: ['Gardanibagh Area', 'Rajendra Nagar Road'] }
        ]
    },
    {
        name: 'Rajendra Nagar',
        nameLocal: 'राजेंद्र नगर',
        type: 'elevated',
        landmark: 'Rajendra Nagar Residential Colony',
        gates: [
            { gate: '1', landmarks: ['Rajendra Nagar Main Road', 'Bank Road'] },
            { gate: '2', landmarks: ['Rajendra Nagar Hospital', 'Boring Link Road'] }
        ]
    },
    {
        name: 'Malahi Pakri',
        nameLocal: 'मलाही पकरी',
        type: 'elevated',
        landmark: 'Malahi Pakri Area (Kankarbagh)',
        gates: [
            { gate: '1', landmarks: ['Malahi Pakri Crossing', 'Anisabad Road'] },
            { gate: '2', landmarks: ['Kankarbagh Main Road', 'Indira Gandhi Stadium'] }
        ]
    },
    {
        id: 'inter-khemnichak',
        name: 'Khemnichak',
        nameLocal: 'खेमनीचक',
        type: 'elevated',
        isInterchange: true,
        interchangeWith: ['red'],
        landmark: 'Khemnichak Junction (Kankarbagh Area)',
        gates: [
            { gate: '1', landmarks: ['Khemnichak Crossing', 'Kankarbagh Market'] },
            { gate: '2', landmarks: ['SP Verma Road Junction', 'Anisabad Chowk'] },
            { gate: '3', landmarks: ['Rajiv Nagar Colony', 'Vidyapati Marg'] }
        ]
    },
    {
        name: 'Bhoothnath',
        nameLocal: 'भूतनाथ',
        type: 'elevated',
        landmark: 'Bhoothnath Road (Patliputra Area)',
        operationalSince: '2025-10-06',
        gates: [
            { gate: '1', landmarks: ['Bhoothnath Road', 'Ramjaipal Nagar'] },
            { gate: '2', landmarks: ['Patliputra Colony Chowk', 'Bairiya Chak Road'] }
        ]
    },
    {
        name: 'Zero Mile',
        nameLocal: 'ज़ीरो माइल',
        type: 'elevated',
        landmark: 'Zero Mile Chowk (Patliputra Area)',
        operationalSince: '2025-10-06',
        gates: [
            { gate: '1', landmarks: ['Sangam Cinema Hall', 'SCM Market'] },
            { gate: '2', landmarks: ['Zero Mile Polling Booth Road', 'National Highway 83'] }
        ]
    },
    {
        name: 'New ISBT',
        nameLocal: 'नयी बस टर्मिनल',
        type: 'elevated',
        landmark: 'New ISBT — Patliputra Bus Terminal',
        operationalSince: '2025-10-06',
        gates: [
            { gate: '1', landmarks: ['Patliputra Bus Terminal Main Gate', 'Auto Stand'] },
            { gate: '2', landmarks: ['NH 30 Access Road', 'Metro Depot Entry'] }
        ]
    }
];

// ──────────────────────────────────────────────────────────────────────────────
// Builder
// ──────────────────────────────────────────────────────────────────────────────
function buildStation(st, idPrefix, idx, lineId) {
    // Determine terminal station names per line for platform board display
    let towards1, towards2;
    if (lineId === 'red') {
        towards1 = 'Khemnichak';
        towards2 = 'Danapur Cantonment';
    } else {
        towards1 = 'New ISBT';
        towards2 = 'Patna Junction';
    }

    const baseFacilities = [
        'Lifts & Escalators',
        'CCTV & AI Surveillance',
        'Restrooms',
        'Drinking Water',
        'First Aid Box',
        'Tactile Paths (Divyangjan)',
        'Token / Smart Card Vending',
        'AFC Gates',
    ];

    if (st.type === 'elevated') {
        baseFacilities.push('Parking');
    }

    // Coaches have phone & laptop charging points (operational section feature)
    if (['bm11', 'bm12', 'bm10'].includes(`${idPrefix}${String(idx + 1).padStart(2, '0')}`)) {
        baseFacilities.push('Mobile & Laptop Charging Points');
        baseFacilities.push('Madhubani Art Display');
    }

    if (st.isInterchange) {
        baseFacilities.push('Interchange (Multi-level)');
    }

    return {
        id: st.id || `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: st.name,
        nameLocal: st.nameLocal,
        type: st.type,
        isInterchange: st.isInterchange || false,
        interchangeWith: st.interchangeWith || [],
        landmark: st.landmark,
        zone: 1,
        parking: st.type === 'elevated',
        facilities: baseFacilities,
        platforms: [
            { no: 1, towards: towards1, type: st.isIsland ? 'Island' : 'Side' },
            { no: 2, towards: towards2, type: st.isIsland ? 'Island' : 'Side' }
        ],
        gates: st.gates || [
            { gate: '1', landmarks: ['Main Entrance'] },
            { gate: '2', landmarks: ['Secondary Exit'] }
        ]
    };
}

// ──────────────────────────────────────────────────────────────────────────────
// Data Export
// ──────────────────────────────────────────────────────────────────────────────
const data = {
    id: 'patna',
    name: 'Patna Metro',
    nameLocal: 'पटना मेट्रो',
    city: 'Patna',
    state: 'Bihar',
    operator: 'Patna Metro Rail Corporation (PMRC)',
    totalStations: 24,
    totalLength: '30.92 km',
    totalLines: 2,
    phase: 'Phase 1 (Partial Operations)',
    established: '2025',
    website: 'https://pmrc.co.in/',
    phase2: {
        totalLines: 2,
        totalStations: 14,
        totalLength: '30.92 km',
        expectedCompletion: '2030',
    },
    lines: [
        {
            id: 'red',
            name: 'Red Line',
            color: '#E53935',
            colorLight: '#EF9A9A',
            corridor: 'Corridor I (East–West)',
            length: '16.86 km',
            totalStations: 14,
            status: 'under-construction',
            expectedCompletion: '2030',
            frequency: 'Not yet operational',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Bombardier (Mitsubishi)',
            stations: redLineStationsData.map((st, i) => buildStation(st, 'rm', i, 'red'))
        },
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#1E88E5',
            colorLight: '#90CAF9',
            corridor: 'Corridor II (North–South)',
            length: '14.06 km',
            totalStations: 12,
            status: 'operational',
            operationalSince: '2025-10-06',
            frequency: '20 min (priority section)',
            firstTrain: '8:00 AM',
            lastTrain: '10:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Bombardier (Mitsubishi)',
            stations: blueLineStationsData.map((st, i) => buildStation(st, 'bm', i, 'blue'))
        }
    ]
};

// ── Attach coordinates ────────────────────────────────────────────────────────
data.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('patna', line.id, i)
    }));
});

export default data;
