export default {
    id: 'meerut',
    name: 'Meerut Metro',
    nameLocal: 'मेरठ मेट्रो',
    city: 'Meerut',
    state: 'Uttar Pradesh',
    operator: 'Uttar Pradesh Metro Rail Corporation (UPMRC)',
    totalStations: 23,
    totalLength: '23.6 km',
    totalLines: 1,
    phase: 'Phase 1',
    established: '2026',
    website: 'https://ncrtc.in/meerut-metro/',
    lines: [
        {
            id: 'm1',
            name: 'Line 1',
            color: '#E91E63',
            colorLight: '#F8BBD0',
            corridor: 'Main City Corridor (Shared with RRTS)',
            length: '23.6 km',
            totalStations: 13,
            status: 'operational',
            operationalSince: '2026',
            frequency: '5–8 min',
            stations: [
                { id: 'rr11', name: 'Meerut South', nameLocal: 'मेरठ दक्षिण', type: 'elevated', isInterchange: true, interchangeWith: ['namo-bharat'], zone: 1 },
                { id: 'mm01', name: 'Partapur', nameLocal: 'परतापुर', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'mm02', name: 'Rithani', nameLocal: 'रिठानी', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'rr12', name: 'Shatabdi Nagar', nameLocal: 'शताब्दी नगर', type: 'elevated', isInterchange: true, interchangeWith: ['namo-bharat'], zone: 1 },
                { id: 'mm03', name: 'Brahmapuri', nameLocal: 'ब्रह्मपुरी', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'mm04', name: 'Meerut Central', nameLocal: 'मेरठ सेंट्रल', type: 'underground', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'mm05', name: 'Bhaisali', nameLocal: 'भैसाली', type: 'underground', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'rr13', name: 'Begumpul', nameLocal: 'बेगमपुल', type: 'underground', isInterchange: true, interchangeWith: ['namo-bharat'], zone: 1 },
                { id: 'mm06', name: 'MES Colony', nameLocal: 'एमईएस कॉलोनी', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'mm07', name: 'Daurli', nameLocal: 'दौरली', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'mm08', name: 'Meerut North', nameLocal: 'मेरठ उत्तर', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'rr14', name: 'Modipuram', nameLocal: 'मोदीपुरम', type: 'elevated', isInterchange: true, interchangeWith: ['namo-bharat'], zone: 1 }
            ]
        },
        {
            id: 'm2',
            name: 'Line 2',
            color: '#FFD600',
            colorLight: '#FFF9C4',
            corridor: 'East-West Corridor',
            length: '15 km',
            totalStations: 10,
            status: 'planned',
            expectedCompletion: '2030',
            stations: [
                { id: 'm2-01', name: 'Shradhapuri Phase II', nameLocal: 'श्रद्धापुरी फेस II', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'm2-02', name: 'Kanker Khera', nameLocal: 'कंकर खेड़ा', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'm2-03', name: 'Meerut Cantt', nameLocal: 'मेरठ छावनी', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'rr13', name: 'Begumpul', nameLocal: 'बेगमपुल', type: 'underground', isInterchange: true, interchangeWith: ['m1'], zone: 1 },
                { id: 'm2-05', name: 'Baccha Park', nameLocal: 'बच्चा पार्क', type: 'underground', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'm2-10', name: 'Jagriti Vihar Extension', nameLocal: 'जाग्रति विहार एक्सटेंशन', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 }
            ]
        }
    ]
};
