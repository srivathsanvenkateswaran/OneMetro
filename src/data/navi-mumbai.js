export default {
    id: 'navi-mumbai',
    name: 'Navi Mumbai Metro',
    nameLocal: 'नवी मुंबई मेट्रो',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    operator: 'CIDCO (operations managed by Maha Metro)',
    totalStations: 20,
    totalLength: '24.7 km',
    totalLines: 3,
    phase: 'Phase 1',
    established: '2023',
    website: 'https://cidco.maharashtra.gov.in/',
    lines: [
        {
            id: 'nmm-1',
            name: 'Line 1',
            color: '#800000', // Maroon
            colorLight: '#D7BDE2',
            corridor: 'Belapur – Pendhar',
            length: '11.1 km',
            totalStations: 11,
            status: 'operational',
            operationalSince: '2023',
            frequency: '15 min',
            firstTrain: '6:00 AM',
            lastTrain: '10:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'CRRC Zhuzhou',
            stations: [
                { id: 'nm1_01', name: 'CBD Belapur', nameLocal: 'सीबीडी बेलापूर', type: 'elevated', isInterchange: true, interchangeWith: ['rail'], landmark: 'Belapur Railway Station', zone: 1 },
                { id: 'nm1_02', name: 'Sector 7 (Belapur)', nameLocal: 'सेक्टर ७ (बेलापूर)', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'nm1_03', name: 'CIDCO Science Park', nameLocal: 'सिडको सायन्स पार्क', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'nm1_04', name: 'Utsav Chowk', nameLocal: 'उत्सव चौक', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Kharghar Landmark', zone: 1 },
                { id: 'nm1_05', name: 'Sector 11 (Kharghar)', nameLocal: 'सेक्टर ११ (खारघर)', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'nm1_06', name: 'Sector 14 (Kharghar)', nameLocal: 'सेक्टर १४ (खारघर)', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'nm1_07', name: 'Central Park', nameLocal: 'सेंट्रल पार्क', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'nm1_08', name: 'Pethpada', nameLocal: 'पेठपाडा', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'nm1_09', name: 'Sector 34 (Kharghar)', nameLocal: 'सेक्टर ३४ (खारघर)', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'nm1_10', name: 'Panchanand', nameLocal: 'पंचनंद', type: 'elevated', isInterchange: true, interchangeWith: ['mum-12'], landmark: 'Taloja Connect', zone: 1 },
                { id: 'nm1_11', name: 'Pendhar', nameLocal: 'पेेंढर', type: 'elevated', isInterchange: true, interchangeWith: ['nmm-3'], zone: 1 }
            ]
        },
        {
            id: 'nmm-2',
            name: 'Line 2 (Upcoming)',
            color: '#800000',
            colorLight: '#D7BDE2',
            corridor: 'MIDC Taloja – Khandeshwar',
            length: '10.3 km',
            totalStations: 8,
            status: 'under-construction',
            expectedCompletion: '2027',
            stations: [
                { id: 'nm2_01', name: 'MIDC Taloja', nameLocal: 'एमआयडीसी तळोजा', type: 'elevated', isInterchange: true, interchangeWith: ['nmm-3'], zone: 2 },
                { id: 'nm2_02', name: 'Pethali', nameLocal: 'पेठली', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 },
                { id: 'nm2_03', name: 'Amandoot', nameLocal: 'आमणदूत', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 },
                { id: 'nm2_04', name: 'Petali-Amandoot', nameLocal: 'पेटली-आमणदूत', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 },
                { id: 'nm2_05', name: 'Kamothe', nameLocal: 'कामोठे', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 },
                { id: 'nm2_06', name: 'Sector 10 (Kamothe)', nameLocal: 'सेक्टर १० (कामोठे)', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 },
                { id: 'nm2_07', name: 'Khandeshwar', nameLocal: 'खांदेश्वर', type: 'elevated', isInterchange: true, interchangeWith: ['rail'], landmark: 'Khandeshwar Railway Station', zone: 2 },
                { id: 'nm2_08', name: 'Khandeshwar East', nameLocal: 'खांदेश्वर पूर्व', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 2 }
            ]
        },
        {
            id: 'nmm-3',
            name: 'Line 3 (Upcoming)',
            color: '#800000',
            colorLight: '#D7BDE2',
            corridor: 'Pendhar – MIDC Taloja',
            length: '3.3 km',
            totalStations: 3,
            status: 'under-construction',
            expectedCompletion: '2027',
            stations: [
                { id: 'nm1_11', name: 'Pendhar', nameLocal: 'पेेंढर', type: 'elevated', isInterchange: true, interchangeWith: ['nmm-1'], zone: 1 },
                { id: 'nm3_02', name: 'Sector 34 (MIDC)', nameLocal: 'सेक्टर ३४ (एमआयडीसी)', type: 'elevated', isInterchange: false, interchangeWith: [], zone: 1 },
                { id: 'nm2_01', name: 'MIDC Taloja', nameLocal: 'एमआयडीसी तळोजा', type: 'elevated', isInterchange: true, interchangeWith: ['nmm-2'], zone: 2 }
            ]
        },
        {
            id: 'nmm-4',
            name: 'Line 4 (Planned)',
            color: '#800000',
            colorLight: '#D7BDE2',
            corridor: 'Khandeshwar – NMIA',
            length: '4.5 km',
            totalStations: 3,
            status: 'planned',
            stations: [
                { id: 'nm2_07', name: 'Khandeshwar', nameLocal: 'खांदेश्वर', type: 'elevated', isInterchange: true, interchangeWith: ['rail'], zone: 2 },
                { id: 'nm4_02', name: 'Sector 34 (Panvel)', nameLocal: 'सेक्टर ३४ (पनवेल)', type: 'elevated', isInterchange: false, zone: 2 },
                { id: 'nm4_03', name: 'NMIA', nameLocal: 'नवी मुंबई आंतरराष्ट्रीय विमानतळ', type: 'elevated', isInterchange: true, interchangeWith: ['mum-8'], landmark: 'Navi Mumbai Airport', zone: 2 }
            ]
        }
    ]
};
