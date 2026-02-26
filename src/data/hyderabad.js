const redLineStations = [
    {
        id: 'r01', name: 'Miyapur', nameLocal: 'మియాపూర్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Miyapur Market', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Terminal', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['IDPL Employee Colony', 'Diamond Hill Colony'] },
            { gate: 'B', landmarks: ['Zenas International School'] },
            { gate: 'C', landmarks: ['Raithu Bazar', 'Bachupally Road'] },
            { gate: 'D', landmarks: ['Hyder Nagar Road'] }
        ]
    },
    {
        id: 'r02', name: 'JNTU College', nameLocal: 'జె.ఎన్.టి.యు. కాలేజీ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'JNTU University', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Sardar Patel Nagar Road', 'Sri Chaitanya School'] },
            { gate: 'B', landmarks: ['Vasanth Nagar', 'Kotak Mahindra Bank'] },
            { gate: 'C', landmarks: ['Landmark Hospital', 'Sri Bhramaramba Theatre'] },
            { gate: 'D', landmarks: ['Nizampet X Road', 'Asian GPR Multiplex'] }
        ]
    },
    {
        id: 'r03', name: 'KPHB Colony', nameLocal: 'కె.పి.హెచ్.బి. కాలనీ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'KPHB Housing Board', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Remedy Hospital', 'TSRTC Bus Stop'] },
            { gate: 'B', landmarks: ['Lulu Mall', 'Forum Mall'] }
        ]
    },
    {
        id: 'r04', name: 'Kukatpally', nameLocal: 'కూకట్‌పల్లి', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Kukatpally Market', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['EPF Office', 'Post Office'] },
            { gate: 'B', landmarks: ['Sri Chaitanya Degree College', 'Omni Hospital'] },
            { gate: 'C', landmarks: ['CMR Shopping Mall', 'Big Bazar'] },
            { gate: 'D', landmarks: ['Kukatpally Bus Stop', 'Ramalayam Temple'] }
        ]
    },
    {
        id: 'r05', name: 'Balanagar', nameLocal: 'బాలానగర్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Balanagar Industrial Area', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Dr. B.R. Ambedkar Y Junction', 'Jai Bharti Apartment'] },
            { gate: 'B', landmarks: ['NKNR Garden', 'Habeeb Nagar'] },
            { gate: 'C', landmarks: ['Metro Cash & Carry', 'Naina Garden'] },
            { gate: 'D', landmarks: ['NRI Institute of Technology'] }
        ]
    },
    {
        id: 'r06', name: 'Moosapet', nameLocal: 'మూసాపేట', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Moosapet Junction', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Patidar Bhavan'] },
            { gate: 'B', landmarks: ['Pragathi Nagar', 'Divyang Friendly'] },
            { gate: 'C', landmarks: ['Kukatpally Bus Depot'] },
            { gate: 'D', landmarks: ['Bhavani Nagar Road'] }
        ]
    },
    {
        id: 'r07', name: 'Bharat Nagar', nameLocal: 'భరత్ నగర్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Bharat Nagar MMTS', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Majestic Garden', 'Bharath Nagar MMTS'] },
            { gate: 'B', landmarks: ['Vegetable Market', 'Divyang Friendly'] },
            { gate: 'C', landmarks: ['Bharath Nagar Market'] },
            { gate: 'D', landmarks: ['Sanath Nagar MMTS', 'Rythu Bazar'] }
        ]
    },
    {
        id: 'r08', name: 'Erragadda', nameLocal: 'ఎర్రగడ్డ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Erragadda Market', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Jamia Masjid', 'Gokul Degree College'] },
            { gate: 'B', landmarks: ['Ashok Marg', 'Borabanda X Road'] },
            { gate: 'C', landmarks: ['FCI Godowns', 'Divyang Friendly'] },
            { gate: 'D', landmarks: ['Sanath Nagar Road', 'St. Theresa Hospital'] }
        ]
    },
    {
        id: 'r09', name: 'ESI Hospital', nameLocal: 'ఈ.ఎస్.ఐ. హాస్పిటల్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'ESI Hospital', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Government Chest Hospital'] },
            { gate: 'B', landmarks: ['Pumega Hospital', 'A.G. Colony Road'] },
            { gate: 'C', landmarks: ['Vijay Nirman Company', 'ESI Hospital'] },
            { gate: 'D', landmarks: ['ESIC Medical College', 'Sri Chaitanya Academy'] }
        ]
    },
    {
        id: 'r10', name: 'S.R. Nagar', nameLocal: 'ఎస్.ఆర్. నగర్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'SR Nagar Market', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Legend CA Junior College', 'HDFC Bank'] },
            { gate: 'B', landmarks: ['Vengal Rao Nagar Road', 'Sri Chaitanya CA Academy'] },
            { gate: 'C', landmarks: ['Umesh Chandra Statue', 'Gauthami Degree College'] },
            { gate: 'D', landmarks: ['SR Nagar Road No. 1', 'ICICI Bank'] }
        ]
    },
    {
        id: 'inter-ameerpet', name: 'Ameerpet', nameLocal: 'అమీర్‌పేట', type: 'elevated', isInterchange: true, interchangeWith: ['blue'], landmark: 'Ameerpet Junction', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Image Hospital', 'Punjagutta Circle'] },
            { gate: 'B', landmarks: ['Sarathi Studios', 'Yousufguda Road'] },
            { gate: 'C', landmarks: ['Maitrivanam', 'Aditya Enclave'] },
            { gate: 'D', landmarks: ['Balkampet Road', 'MCH Market'] }
        ]
    },
    {
        id: 'r12', name: 'Punjagutta', nameLocal: 'పంజాగుట్ట', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Pujagutta Mall', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Next Galleria Mall', 'PVR Mall'] },
            { gate: 'B', landmarks: ['Punjagutta Officers Colony'] },
            { gate: 'C', landmarks: ['Greenland Road'] },
            { gate: 'D', landmarks: ['Nagarjuna Circle Road'] }
        ]
    },
    {
        id: 'r13', name: 'Irrum Manzil', nameLocal: 'ఇరామ్ మంజిల్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Next Galleria Mall', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Next Galleria Mall Skywalk'] },
            { gate: 'B', landmarks: ['Zore Complex', 'Shankar Road'] },
            { gate: 'C', landmarks: ['Shyamrao Bank'] },
            { gate: 'D', landmarks: ['Somajiguda Post Office', 'Pension Office'] }
        ]
    },
    {
        id: 'r14', name: 'Khairtabad', nameLocal: 'ఖైరతాబాద్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Khairtabad RTO', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['SBI', 'Vishweshwarayya Bhavan'] },
            { gate: 'B', landmarks: ['ICICI Bank', 'Canara Bank'] },
            { gate: 'C', landmarks: ['Khairtabad-IMAX Road'] },
            { gate: 'D', landmarks: ['ESI Dispensary', 'Street Number 7'] }
        ]
    },
    {
        id: 'r15', name: 'Lakdi-ka-Pul', nameLocal: 'లక్డీకాపూల్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Global Hospitals', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['CID Office', 'Lakdika Pul Bus Stop'] },
            { gate: 'B', landmarks: ['Collectors Office'] },
            { gate: 'C', landmarks: ['HP Petrol Pump'] },
            { gate: 'D', landmarks: ['Global Hospitals'] }
        ]
    },
    {
        id: 'r16', name: 'Assembly', nameLocal: 'అసెంబ్లీ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Telangana Assembly', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Public Gardens', 'State Museum'] },
            { gate: 'B', landmarks: ['Indian Oil', 'Nava Sakthi Pyramid'] },
            { gate: 'C', landmarks: ['Hajj House Masjid'] },
            { gate: 'D', landmarks: ['Nampally Public Garden'] }
        ]
    },
    {
        id: 'r17', name: 'Nampally', nameLocal: 'నాంపల్లి', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Nampally Railway Station', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: '1', landmarks: ['Nampally Railway Station'] },
            { gate: '2', landmarks: ['Exit towards Abids Road'] }
        ]
    },
    {
        id: 'r18', name: 'Gandhi Bhavan', nameLocal: 'గాంధీ భవన్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Care Hospital', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['TSPSC', 'Commercial Tax Office'] },
            { gate: 'B', landmarks: ['Labour Court'] },
            { gate: 'C', landmarks: ['Care Hospital'] },
            { gate: 'D', landmarks: ['Abids Road'] }
        ]
    },
    {
        id: 'r19', name: 'Osmania Medical College', nameLocal: 'ఒస్మానియా మెడికల్ కాలేజీ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Osmania Medical College', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Osmania Medical College'] },
            { gate: 'B', landmarks: ['Hyderabad Flower Mart'] },
            { gate: 'C', landmarks: ['Turrebaz Khan Road'] },
            { gate: 'D', landmarks: ['Masjid E Sang'] }
        ]
    },
    {
        id: 'inter-mg-bus', name: 'MG Bus Station', nameLocal: 'ఎం.జి. బస్ స్టేషన్', type: 'elevated', isInterchange: true, interchangeWith: ['green'], landmark: 'MGBS Central Bus Stand', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['MGBS Musi Bridge', 'India ATM'] }
        ]
    },
    {
        id: 'r21', name: 'Malakpet', nameLocal: 'మలక్‌పేట', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Malakpet Gunj', zone: 5,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Savera Hotel Bus Stand', 'Sahifa Masjid Road'] },
            { gate: 'B', landmarks: ['Muslim Graveyard and Masjid'] },
            { gate: 'C', landmarks: ['SBI ATM'] },
            { gate: 'D', landmarks: ['Malakpet Train Station', 'Dargah'] }
        ]
    },
    {
        id: 'r22', name: 'New Market', nameLocal: 'న్యూ మార్కెట్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'New Market', zone: 5,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['SBI ATM'] },
            { gate: 'B', landmarks: ['Malakpet Train Station', 'Dargah'] },
            { gate: 'C', landmarks: ['Essar Petrol Pump'] },
            { gate: 'D', landmarks: ['Bank Of Baroda'] }
        ]
    },
    {
        id: 'r23', name: 'Musarambagh', nameLocal: 'మూసారాంబాగ్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'PVR Musarambagh Mall', zone: 5,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'B', landmarks: ['Road towards Malakpet'] },
            { gate: 'D', landmarks: ['Road towards Dilsukhnagar'] }
        ]
    },
    {
        id: 'r24', name: 'Dilsukhnagar', nameLocal: 'దిల్‌సుఖ్‌నగర్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Dilsukhnagar Bus Depot', zone: 5,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Dilsukhnagar Bus Depot Side'] },
            { gate: 'B', landmarks: ['Rajadhani Theatre Side'] }
        ]
    },
    {
        id: 'r25', name: 'Chaitanya Puri', nameLocal: 'చైతన్యపురి', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Omni Hospitals', zone: 5,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Prerna Degree College', 'Towards Dilsukhnagar'] },
            { gate: 'B', landmarks: ['Omni Hospital Road'] },
            { gate: 'C', landmarks: ['Police Station', 'Towards LB Nagar'] },
            { gate: 'D', landmarks: ['Kothapet Bus Stop'] }
        ]
    },
    {
        id: 'r26', name: 'Victoria Memorial', nameLocal: 'విక్టోరియా మెమోరియల్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Victoria Memorial Home', zone: 6,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'LB Nagar', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Dwaraka Nagar', 'Ashtalakshmi Temple'] },
            { gate: 'B', landmarks: ['Vasavu Hospital'] },
            { gate: 'C', landmarks: ['LB Nagar Service Road'] },
            { gate: 'D', landmarks: ['Sai Sanjeevini Hospital'] }
        ]
    },
    {
        id: 'r27', name: 'LB Nagar', nameLocal: 'ఎల్.బి. నగర్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'LB Nagar Circle', zone: 6,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Terminal', type: 'Side' },
            { no: 2, towards: 'Miyapur', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['LB Nagar Circle', 'D-Mart'] },
            { gate: 'B', landmarks: ['Kamineni Hospitals', 'Inner Ring Road'] },
            { gate: 'C', landmarks: ['Maedicare Hospital'] },
            { gate: 'D', landmarks: ['LB Nagar Hospital'] }
        ]
    }
];
const blueLineStations = [
    {
        id: 'b01', name: 'Nagole', nameLocal: 'నాగోల్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Mini Shilparamam', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Terminal', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Mini Shilparamam', 'Subham Convention'] },
            { gate: 'B', landmarks: ['Metro Cash & Carry'] }
        ]
    },
    {
        id: 'b02', name: 'Uppal', nameLocal: 'ఉప్పల్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Uppal Junction', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Little Flower School'] },
            { gate: 'B', landmarks: ['Uppal Bus Stop'] }
        ]
    },
    {
        id: 'b03', name: 'Stadium', nameLocal: 'స్టేడియం', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'RGIA Cricket Stadium', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Rajiv Gandhi International Cricket Stadium'] },
            { gate: 'B', landmarks: ['Sindoori Hotel'] }
        ]
    },
    {
        id: 'b04', name: 'NGRI', nameLocal: 'ఎన్.జి.ఆర్.ఐ.', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'CSIR-NGRI', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['CSIR – National Geophysical Research Institute'] },
            { gate: 'B', landmarks: ['NGRI Market'] }
        ]
    },
    {
        id: 'b05', name: 'Habsiguda', nameLocal: 'హబ్సిగూడ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Habsiguda Junction', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['St. Pious X College for Women'] },
            { gate: 'B', landmarks: ['Habsiguda Market'] }
        ]
    },
    {
        id: 'b06', name: 'Tarnaka', nameLocal: 'తార్నాక', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Osmania University', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Osmania University Entrance'] },
            { gate: 'B', landmarks: ['Tarnaka Market'] }
        ]
    },
    {
        id: 'b07', name: 'Mettuguda', nameLocal: 'మెట్టుగూడ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Railway Central Hospital', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Railway Central Hospital'] },
            { gate: 'B', landmarks: ['Mettuguda Market'] }
        ]
    },
    {
        id: 'b08', name: 'Secunderabad East', nameLocal: 'సికింద్రాబాద్ ఈస్ట్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Secunderabad Junction', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Secunderabad Railway Station'] },
            { gate: 'B', landmarks: ['Keyes High School for Girls'] }
        ]
    },
    {
        id: 'inter-parade-ground', name: 'Parade Ground', nameLocal: 'పరేడ్ గ్రౌండ్', type: 'elevated', isInterchange: true, interchangeWith: ['green'], landmark: 'Parade Ground', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Parade Ground'] },
            { gate: 'B', landmarks: ['YMCA Secunderabad'] }
        ]
    },
    {
        id: 'b10', name: 'Paradise', nameLocal: 'పారడైజ్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Paradise Circle', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Paradise Circle'] },
            { gate: 'B', landmarks: ['Sunshine Hospital'] }
        ]
    },
    {
        id: 'b11', name: 'Rasoolpura', nameLocal: 'రసూల్‌పురా', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Prakash Nagar side', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['CTO Colony side'] },
            { gate: 'B', landmarks: ['Police Quarters side'] }
        ]
    },
    {
        id: 'b12', name: 'Prakash Nagar', nameLocal: 'ప్రకాష్ నగర్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Begumpet Airport', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Lifestyle Building side'] },
            { gate: 'B', landmarks: ['Begumpet Airport side'] }
        ]
    },
    {
        id: 'b13', name: 'Begumpet', nameLocal: 'బేగంపేట', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Begumpet Railway Station', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Begumpet Railway Station'] },
            { gate: 'B', landmarks: ['Green Park Hotel', 'Shoppers Stop'] }
        ]
    },
    {
        id: 'inter-ameerpet', name: 'Ameerpet', nameLocal: 'అమీర్‌పేట', type: 'elevated', isInterchange: true, interchangeWith: ['red'], landmark: 'Ameerpet Junction', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 3, towards: 'Raidurg', type: 'Side' },
            { no: 4, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Sarathi Studios side'] },
            { gate: 'B', landmarks: ['Maitrivanam side'] }
        ]
    },
    {
        id: 'b15', name: 'Madhura Nagar', nameLocal: 'మధుర నగర్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Taruni Market', zone: 3,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Taruni Market'] },
            { gate: 'B', landmarks: ['Kalyan Nagar'] }
        ]
    },
    {
        id: 'b16', name: 'Yusufguda', nameLocal: 'యూసఫ్ గూడ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Yousufguda Check Post', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Check Post side'] },
            { gate: 'B', landmarks: ['Madhura Nagar side'] }
        ]
    },
    {
        id: 'b17', name: 'Road No.5 Jubilee Hills', nameLocal: 'రోడ్ నంబర్ 5 జూబ్లీహిల్స్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Venkatagiri', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Venkatagiri side'] },
            { gate: 'B', landmarks: ['Jubilee Hills side'] }
        ]
    },
    {
        id: 'b18', name: 'Jubilee Hills Check Post', nameLocal: 'జూబ్లీహిల్స్ చెక్ పోస్ట్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Jubilee Hills Check Post', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Check Post Circle'] },
            { gate: 'B', landmarks: ['Road No. 36'] }
        ]
    },
    {
        id: 'b19', name: 'Peddamma Gudi', nameLocal: 'పెద్దమ్మ గుడి', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Peddamma Temple', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Peddamma Temple Entrance'] },
            { gate: 'B', landmarks: ['Road No. 36'] }
        ]
    },
    {
        id: 'b20', name: 'Madhapur', nameLocal: 'మాదాపూర్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Shilparamam side', zone: 4,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Inorbit Mall side'] },
            { gate: 'B', landmarks: ['Shilparamam side'] }
        ]
    },
    {
        id: 'b21', name: 'Durgam Cheruvu', nameLocal: 'దుర్గం చెరువు', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Durgam Cheruvu Lake', zone: 5,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Durgam Cheruvu Lake side'] },
            { gate: 'B', landmarks: ['My Home Abhra'] }
        ]
    },
    {
        id: 'b22', name: 'HITEC City', nameLocal: 'హైటెక్ సిటీ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Shilparamam', zone: 5,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Raidurg', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Shilparamam side'] },
            { gate: 'B', landmarks: ['L&T Next Galleria Mall'] }
        ]
    },
    {
        id: 'b23', name: 'Raidurg', nameLocal: 'రాయదుర్గం', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Mindspace IT Park', zone: 5,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'Terminal', type: 'Side' },
            { no: 2, towards: 'Nagole', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Mindspace IT Park Entrance'] },
            { gate: 'B', landmarks: ['The Westin Hotel side'] }
        ]
    }
];
const greenLineStations = [
    {
        id: 'inter-parade-ground', name: 'Parade Ground', nameLocal: 'పరేడ్ గ్రౌండ్', type: 'elevated', isInterchange: true, interchangeWith: ['blue'], landmark: 'JBS Bus Stand', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'MG Bus Station', type: 'Side' },
            { no: 2, towards: 'Terminal', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['JBS Bus Stand', 'Railway Station side'] },
            { gate: 'B', landmarks: ['Shankar Mandal Road'] }
        ]
    },
    {
        id: 'g02', name: 'Secunderabad West', nameLocal: 'సికింద్రాబాద్ వెస్ట్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Secunderabad Junction', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'MG Bus Station', type: 'Side' },
            { no: 2, towards: 'JBS Parade Ground', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Secunderabad Railway Station', 'Bhoiguda side'] },
            { gate: 'B', landmarks: ['Alpha Hotel side'] }
        ]
    },
    {
        id: 'g03', name: 'Gandhi Hospital', nameLocal: 'గాంధీ హాస్పిటల్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Gandhi Hospital', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'MG Bus Station', type: 'Side' },
            { no: 2, towards: 'JBS Parade Ground', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Netaji Subhash Ground'] },
            { gate: 'B', landmarks: ['Boiguda Petrol Pump'] },
            { gate: 'C', landmarks: ['Little Sister of the Poor Charity'] },
            { gate: 'D', landmarks: ['Gandhi Hospital Entrance'] }
        ]
    },
    {
        id: 'g04', name: 'Musheerabad', nameLocal: 'ముషీరాబాద్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Musheerabad Police Station', zone: 1,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'MG Bus Station', type: 'Side' },
            { no: 2, towards: 'JBS Parade Ground', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Krishna Colony'] },
            { gate: 'B', landmarks: ['Urban Primary Health Centre'] },
            { gate: 'C', landmarks: ['Post Office side'] },
            { gate: 'D', landmarks: ['Azizia Masjid'] }
        ]
    },
    {
        id: 'g05', name: 'RTC X Roads', nameLocal: 'ఆర్.టి.సి. క్రాస్ రోడ్స్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'TSRTC Bus Bhavan', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'MG Bus Station', type: 'Side' },
            { no: 2, towards: 'JBS Parade Ground', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['RTC X Road Junction', 'Cinema Theatres'] },
            { gate: 'B', landmarks: ['Bus Bhavan side'] },
            { gate: 'C', landmarks: ['Dangoria Hospital'] },
            { gate: 'D', landmarks: ['Nivedhitha Hospital'] }
        ]
    },
    {
        id: 'g06', name: 'Chikkadpally', nameLocal: 'చిక్కడ్‌పల్లి', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Sundarayya Park', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'MG Bus Station', type: 'Side' },
            { no: 2, towards: 'JBS Parade Ground', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Chikkadpally Road'] },
            { gate: 'B', landmarks: ['Kotak Mahindra Bank'] },
            { gate: 'C', landmarks: ['Sundarayya Park side'] },
            { gate: 'D', landmarks: ['Indian Overseas Bank'] }
        ]
    },
    {
        id: 'g07', name: 'Narayanguda', nameLocal: 'నారాయణగూడ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Narayanguda Junction', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'MG Bus Station', type: 'Side' },
            { no: 2, towards: 'JBS Parade Ground', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Narayanguda Junction'] },
            { gate: 'B', landmarks: ['Melkote Park side'] }
        ]
    },
    {
        id: 'g08', name: 'Sultan Bazar', nameLocal: 'సుల్తాన్ బజార్', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Koti Market', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 1, towards: 'MG Bus Station', type: 'Side' },
            { no: 2, towards: 'JBS Parade Ground', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Koti Market side'] },
            { gate: 'B', landmarks: ['Telangana Mahila Vishwavidyalayam'] },
            { gate: 'C', landmarks: ['MeeSeva Center side'] },
            { gate: 'D', landmarks: ['Post Office side'] }
        ]
    },
    {
        id: 'inter-mg-bus', name: 'MG Bus Station', nameLocal: 'ఎం.జి. బస్ స్టేషన్', type: 'elevated', isInterchange: true, interchangeWith: ['red'], landmark: 'MGBS Bus Stand', zone: 2,
        contact: '1860-258-2580',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Smart Card Vending'],
        platforms: [
            { no: 3, towards: 'Terminal', type: 'Side' },
            { no: 4, towards: 'JBS Parade Ground', type: 'Side' }
        ],
        gates: [
            { gate: 'A', landmarks: ['MGBS Musi Bridge side'] },
            { gate: 'B', landmarks: ['TSRTC MG Bus Stand'] }
        ]
    }
];

// Real-world coordinates for all Hyderabad Metro stations (WGS84)
const stationCoords = {
    // Red Line — Miyapur → LB Nagar
    'Miyapur': { lat: 17.4944, lon: 78.3574 },
    'JNTU College': { lat: 17.4958, lon: 78.3660 },
    'KPHB Colony': { lat: 17.4952, lon: 78.3747 },
    'Kukatpally': { lat: 17.4895, lon: 78.3820 },
    'Balanagar': { lat: 17.4710, lon: 78.4025 },
    'Moosapet': { lat: 17.4575, lon: 78.4112 },
    'Bharat Nagar': { lat: 17.4483, lon: 78.4288 },
    'Erragadda': { lat: 17.4430, lon: 78.4385 },
    'ESI Hospital': { lat: 17.4390, lon: 78.4470 },
    'S.R. Nagar': { lat: 17.4360, lon: 78.4540 },
    'Ameerpet': { lat: 17.4374, lon: 78.4483 }, // interchange Red–Blue
    'Punjagutta': { lat: 17.4274, lon: 78.4510 },
    'Irrum Manzil': { lat: 17.4228, lon: 78.4545 },
    'Khairtabad': { lat: 17.4144, lon: 78.4540 },
    'Lakdi-ka-Pul': { lat: 17.4046, lon: 78.4560 },
    'Assembly': { lat: 17.3972, lon: 78.4576 },
    'Nampally': { lat: 17.3887, lon: 78.4597 },
    'Gandhi Bhavan': { lat: 17.3834, lon: 78.4595 },
    'Osmania Medical College': { lat: 17.3802, lon: 78.4650 },
    'MG Bus Station': { lat: 17.3753, lon: 78.4773 }, // interchange Red–Green
    'Malakpet': { lat: 17.3731, lon: 78.4897 },
    'New Market': { lat: 17.3718, lon: 78.4994 },
    'Musarambagh': { lat: 17.3695, lon: 78.5085 },
    'Dilsukhnagar': { lat: 17.3676, lon: 78.5226 },
    'Chaitanya Puri': { lat: 17.3620, lon: 78.5340 },
    'Victoria Memorial': { lat: 17.3548, lon: 78.5414 },
    'LB Nagar': { lat: 17.3508, lon: 78.5537 },
    // Blue Line — Nagole → Raidurg
    'Nagole': { lat: 17.3934, lon: 78.5653 },
    'Uppal': { lat: 17.4048, lon: 78.5574 },
    'Stadium': { lat: 17.4108, lon: 78.5455 },
    'NGRI': { lat: 17.4170, lon: 78.5423 },
    'Habsiguda': { lat: 17.4214, lon: 78.5413 },
    'Tarnaka': { lat: 17.4275, lon: 78.5282 },
    'Mettuguda': { lat: 17.4305, lon: 78.5197 },
    'Secunderabad East': { lat: 17.4375, lon: 78.5113 },
    'Parade Ground': { lat: 17.4393, lon: 78.4976 }, // interchange Blue–Green
    'Paradise': { lat: 17.4413, lon: 78.4870 },
    'Rasoolpura': { lat: 17.4428, lon: 78.4737 },
    'Prakash Nagar': { lat: 17.4377, lon: 78.4653 },
    'Begumpet': { lat: 17.4374, lon: 78.4595 },
    'Madhura Nagar': { lat: 17.4361, lon: 78.4399 },
    'Yusufguda': { lat: 17.4363, lon: 78.4316 },
    'Road No.5 Jubilee Hills': { lat: 17.4376, lon: 78.4206 },
    'Jubilee Hills Check Post': { lat: 17.4337, lon: 78.4128 },
    'Peddamma Gudi': { lat: 17.4256, lon: 78.4058 },
    'Madhapur': { lat: 17.4290, lon: 78.3912 },
    'Durgam Cheruvu': { lat: 17.4294, lon: 78.3838 },
    'HITEC City': { lat: 17.4465, lon: 78.3808 },
    'Raidurg': { lat: 17.4290, lon: 78.3295 },
    // Green Line — JBS Parade Ground → MG Bus Station
    'JBS Parade Ground': { lat: 17.4393, lon: 78.4972 }, // interchange Green–Blue
    'Secunderabad West': { lat: 17.4322, lon: 78.4870 },
    'Gandhi Hospital': { lat: 17.4240, lon: 78.4781 },
    'Musheerabad': { lat: 17.4144, lon: 78.4768 },
    'RTC X Roads': { lat: 17.4046, lon: 78.4788 },
    'Chikkadpally': { lat: 17.3967, lon: 78.4842 },
    'Narayanguda': { lat: 17.3872, lon: 78.4841 },
    'Sultan Bazar': { lat: 17.3800, lon: 78.4800 },
};



const data = {
    id: 'hyderabad',
    name: 'Hyderabad Metro',
    nameLocal: 'హైదరాబాద్ మెટ્રો',
    city: 'Hyderabad',
    state: 'Telangana',
    operator: 'Hyderabad Metro Rail Limited (HMRL) / L&T Metro',
    totalStations: 56,
    totalLength: '69 km',
    totalLines: 3,
    phase: 'Phase 1',
    established: '2017',
    website: 'https://www.ltmetro.com/',
    lines: [
        {
            id: 'red',
            name: 'Red Line',
            color: '#F44336',
            colorLight: '#EF9A9A',
            corridor: 'Miyapur - LB Nagar',
            length: '29.21 km',
            totalStations: 27,
            status: 'operational',
            operationalSince: '2017-11-29',
            frequency: '5–8 min',
            firstTrain: '6:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: redLineStations.map((station) => ({
                ...station,
                lat: stationCoords[station.name]?.lat ?? null,
                lon: stationCoords[station.name]?.lon ?? null
            }))
        },
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#2196F3',
            colorLight: '#64B5F6',
            corridor: 'Nagole - Raidurg',
            length: '27.00 km',
            totalStations: 23,
            status: 'operational',
            operationalSince: '2017-11-29',
            frequency: '5–8 min',
            firstTrain: '6:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: blueLineStations.map((station) => ({
                ...station,
                lat: stationCoords[station.name]?.lat ?? null,
                lon: stationCoords[station.name]?.lon ?? null
            }))
        },
        {
            id: 'green',
            name: 'Green Line',
            color: '#4CAF50',
            colorLight: '#81C784',
            corridor: 'JBS - MGBS',
            length: '11.00 km',
            totalStations: 9,
            status: 'operational',
            operationalSince: '2020-02-07',
            frequency: '5–8 min',
            firstTrain: '6:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Hyundai Rotem',
            stations: greenLineStations.map((station) => ({
                ...station,
                lat: stationCoords[station.name]?.lat ?? null,
                lon: stationCoords[station.name]?.lon ?? null
            }))
        }
    ]
};

export default data;
