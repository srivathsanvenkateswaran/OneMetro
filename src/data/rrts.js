export default {
    id: 'rrts',
    name: 'RRTS Corridor',
    nameLocal: 'नमो भारत',
    city: 'NCR (Regional)',
    state: 'Delhi / Uttar Pradesh',
    operator: 'NCRTC',
    totalStations: 25,
    totalLength: '82.15 km',
    totalLines: 1,
    phase: 'Phase 1',
    established: '2023',
    website: 'https://ncrtc.in/',
    lines: [
        {
            id: 'namo-bharat',
            name: 'Namo Bharat (Delhi-Meerut)',
            color: '#303F9F',
            colorLight: '#C5CAE9',
            corridor: 'Regional Corridor 1',
            length: '82.15 km',
            totalStations: 16,
            status: 'operational',
            operationalSince: '2026',
            frequency: '10–15 min',
            firstTrain: '6:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Alstom Adessia',
            stations: [
                { id: 'rr01', name: 'Sarai Kale Khan', nameLocal: 'सराय काले खां', type: 'elevated', isInterchange: true, interchangeWith: ['del-pink'], zone: 1 },
                { id: 'rr02', name: 'New Ashok Nagar', nameLocal: 'न्यू अशोक नगर', type: 'elevated', isInterchange: true, interchangeWith: ['del-blue'], zone: 1 },
                { id: 'rr03', name: 'Anand Vihar', nameLocal: 'आनंद विहार', type: 'underground', isInterchange: true, interchangeWith: ['del-blue', 'del-pink'], zone: 1 },
                { id: 'rr04', name: 'Sahibabad', nameLocal: 'साहिबाबाद', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 },
                { id: 'rr05', name: 'Ghaziabad', nameLocal: 'गाजियाबाद', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 },
                { id: 'rr06', name: 'Guldhar', nameLocal: 'गुलधर', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 },
                { id: 'rr07', name: 'Duhai', nameLocal: 'दुहाई', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 },
                { id: 'rr08', name: 'Murad Nagar', nameLocal: 'मुराद नगर', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 3 },
                { id: 'rr09', name: 'Modi Nagar South', nameLocal: 'मोदी नगर दक्षिण', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 3 },
                { id: 'rr10', name: 'Modi Nagar North', nameLocal: 'मोदी नगर उत्तर', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 3 },
                { id: 'rr11', name: 'Meerut South', nameLocal: 'मेरठ दक्षिण', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 4 },
                { id: 'rr12', name: 'Shatabdi Nagar', nameLocal: 'शताब्दी नगर', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 4 },
                { id: 'rr13', name: 'Begumpul', nameLocal: 'बेगमपुल', type: 'underground', isInterchange: false, interchangeWith: [], zone: 4 },
                { id: 'rr14', name: 'Modipuram', nameLocal: 'मोदीपुरम', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 4 }
            ]
        }
    ]
};
