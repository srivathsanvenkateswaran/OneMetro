/**
 * Chennai Metro Rail — Complete Station & Line Data
 * Source: CMRL Official + Wikipedia
 * Includes Phase 1 (operational) + Phase 2 (under construction)
 */
import { getStationCoords } from './stationCoords.js';


const chennaiMetro = {
    id: 'chennai',
    name: 'Chennai Metro',
    nameLocal: 'சென்னை மெட்ரோ',
    city: 'Chennai',
    state: 'Tamil Nadu',
    operator: 'Chennai Metro Rail Limited (CMRL)',
    totalStations: 41,
    totalLength: '54.65 km',
    totalLines: 2,
    phase: 'Phase 1 (Operational) + Phase 2 (Under Construction)',
    established: '2015',
    website: 'https://chennaimetrorail.org',

    // Phase 2 summary
    phase2: {
        totalLines: 3,
        totalStations: 128,
        totalLength: '118.9 km',
        expectedCompletion: '2027–2028',
    },

    lines: [
        // ═══════════════════════════════════════════
        // PHASE 1 — OPERATIONAL
        // ═══════════════════════════════════════════
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#2196F3',
            colorLight: '#64B5F6',
            corridor: 'Corridor 1',
            length: '32.65 km',
            totalStations: 26,
            status: 'operational',
            operationalSince: '2015',
            frequency: '5–7 min (peak), 10 min (off-peak)',
            firstTrain: '5:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Alstom Metropolis',
            stations: [
                {
                    id: 'b01', name: 'Wimco Nagar Depot', nameLocal: 'விம்கோ நகர் டிப்போ', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Wimco Nagar Industrial Area', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Terminal', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'E1', landmarks: ['ITC Company', 'Minjur', 'Ennore'] }
                    ]
                },
                {
                    id: 'b02', name: 'Wimco Nagar', nameLocal: 'விம்கோ நகர்', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Wimco Nagar Residential', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'E1', landmarks: ['Wimco Nagar Railway Station', 'Bus Stop'] },
                        { gate: 'E3', landmarks: ['Fish Market', 'Bus Stop'] }
                    ]
                },
                {
                    id: 'b03', name: 'Tiruvottriyur', nameLocal: 'திருவொற்றியூர்', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Tiruvottriyur Temple', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'E2', landmarks: ['Thiruvotriyur Bus Depot', 'BSNL'] },
                        { gate: 'E3', landmarks: ['TNEB Office', 'Royal Enfield Factory', 'Schools'] }
                    ]
                },
                {
                    id: 'b04', name: 'Tiruvottriyur Theradi', nameLocal: 'திருவொற்றியூர் தெரடி', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Theradi Junction', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'E1', landmarks: ['Vadivudaiamman Temple', 'Bus Stop', 'Post Office'] },
                        { gate: 'E2', landmarks: ['Ellaiyamman Temple', 'Bus Stop', 'The A2B Hotel'] }
                    ]
                },
                {
                    id: 'b05', name: 'Kaladipet', nameLocal: 'காலடிப்பேட்', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Kaladipet Market', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'E1', landmarks: ['Kaladipet Market', 'Revoor School', 'Bus Stop'] },
                        { gate: 'E2', landmarks: ['Rohit Hospital', 'Bus Stop'] },
                        { gate: 'E3', landmarks: ['Metro TURF'] }
                    ]
                },
                {
                    id: 'b06', name: 'Toll Gate', nameLocal: 'டோல் கேட்', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Ennore Toll Gate', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'E1', landmarks: ['Post Office', 'Thangam Mahal', 'UCO Bank'] },
                        { gate: 'E2', landmarks: ['ESI Hospital', 'Thangal Bus Stop'] },
                        { gate: 'E3', landmarks: ['Metro Bus Depot', 'N4 Beach'] }
                    ]
                },
                {
                    id: 'b07', name: 'New Washermanpet', nameLocal: 'புது வண்ணாரப்பேட்டை', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'New Washermanpet Area', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'E1', landmarks: ['Soundarapandi School'] },
                        { gate: 'E2', landmarks: ['Ennore Bus Stop', 'Lakshmi Kovil', 'Police Station'] },
                        { gate: 'E3', landmarks: ['Mint', 'Apollo Hospital'] },
                        { gate: 'E4', landmarks: ['Temple Park School'] }
                    ]
                },
                {
                    id: 'b08', name: 'Tondiarpet', nameLocal: 'தொண்டியார்பேட்டை', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Tondiarpet Market', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'E1', landmarks: ['Akasthya Apartments'] },
                        { gate: 'E3', landmarks: ['Bus Stop', 'Divyang Friendly'] },
                        { gate: 'E4', landmarks: ['Police Station', 'Parking'] }
                    ]
                },
                {
                    id: 'b09', name: 'Sir Theagaraya College', nameLocal: 'சர் தியாகராயா கல்லூரி', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Sir Theagaraya College', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'E2', landmarks: ['Sir Theagaraya College', 'Maharani Theatre', 'Bus Stop'] },
                        { gate: 'E3', landmarks: ['Parking', 'Divyang Friendly'] },
                        { gate: 'E4', landmarks: ['Bombay Hotel'] }
                    ]
                },
                {
                    id: 'b10', name: 'Washermanpet', nameLocal: 'வண்ணாரப்பேட்டை', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Old Washermanpet', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Suburban Railway Station', 'H1 Police Station'] },
                        { gate: 'A2', landmarks: ['Railway Quarters', 'Dakshinamoorthy Kovil'] },
                        { gate: 'B2', landmarks: ['Mint Bus Terminus', 'Stanley Hospital'] }
                    ]
                },
                {
                    id: 'b11', name: 'Mannadi', nameLocal: 'மண்ணடி', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'George Town, Parrys Corner', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Masjid E Muhalla', 'Post Office', 'Sowkarpet'] },
                        { gate: 'B1', landmarks: ['Church', 'Kalikambal Temple'] },
                        { gate: 'B2', landmarks: ['Police Station', 'Sri Kanyaka Parameswari College'] }
                    ]
                },
                {
                    id: 'b12', name: 'High Court', nameLocal: 'உயர் நீதிமன்றம்', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Madras High Court', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Madras High Court', 'Beach Station', 'Divyang Friendly'] },
                        { gate: 'A2', landmarks: ['Broadway Bus Stand', 'Sowcarpet', 'Divyang Friendly'] },
                        { gate: 'A3', landmarks: ['Parrys Corner', 'Sowcarpet'] },
                        { gate: 'A4', landmarks: ['Beach Station', 'Divyang Friendly'] },
                        { gate: 'B1', landmarks: ['Fort Railway Station'] },
                        { gate: 'B2', landmarks: ['IOB Bank', 'LIC'] },
                        { gate: 'B3', landmarks: ['Raja Annamalai Mandram'] }
                    ]
                },
                {
                    id: 'b13', name: 'Chennai Central', nameLocal: 'சென்னை சென்ட்ரல்', type: 'underground', isInterchange: true, interchangeWith: ['green'], landmark: 'MGR Chennai Central Railway Station', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1/A2', landmarks: ['Egmore Railway Station', 'Hospital'] },
                        { gate: 'A3', landmarks: ['Chennai Central Railway Station', 'Southern Railway HQ'] },
                        { gate: 'B1/B2', landmarks: ['Park Railway Station'] },
                        { gate: 'B3/B4', landmarks: ['Allikulam Court Complex'] },
                        { gate: 'B5', landmarks: ['Ripon Building'] }
                    ]
                },
                {
                    id: 'b14', name: 'Government Estate', nameLocal: 'அரசு எஸ்டேட்', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Fort St. George, Secretariat', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Omandurar Hospital', 'Bus Stop'] },
                        { gate: 'A4', landmarks: ['Kalaivanar Arangam'] },
                        { gate: 'B1', landmarks: ['Walajah Road', 'Marina Beach', 'Stadium'] },
                        { gate: 'B2', landmarks: ['Ritchie Street', 'Khadi Craft'] }
                    ]
                },
                {
                    id: 'b15', name: 'LIC', nameLocal: 'எல்.ஐ.சி.', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'LIC Building, Anna Salai', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Lift Access'] },
                        { gate: 'A3', landmarks: ['Passport Office', 'Higginbothams', 'Poompuhar'] },
                        { gate: 'B1/B2', landmarks: ['SBI', 'LIC Office', 'Express Avenue'] },
                        { gate: 'B3/B4', landmarks: ['TNEB', 'IOB Bank', 'Spencer Plaza'] }
                    ]
                },
                {
                    id: 'b16', name: 'Thousand Lights', nameLocal: 'ஆயிரம் விளக்கு', type: 'underground', isInterchange: true, interchangeWith: ['purple'], landmark: 'Thousand Lights Mosque', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Bus Stop'] },
                        { gate: 'A2/A3', landmarks: ['Express Avenue', 'LIC'] },
                        { gate: 'A4', landmarks: ['Spencer Plaza', 'TNEB'] },
                        { gate: 'B1', landmarks: ['CMRL Parking'] },
                        { gate: 'B2/B3', landmarks: ['Apollo Hospital', 'British Council', 'Ibis Hotel'] }
                    ]
                },
                {
                    id: 'b17', name: 'AG-DMS', nameLocal: 'ஏ.ஜி-டி.எம்.எஸ்.', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'AG-DMS Office Complex', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['DMS Office', 'Bus Stop'] },
                        { gate: 'A2', landmarks: ['Stella Maris College', 'Divyang Friendly'] },
                        { gate: 'A3', landmarks: ['Mount Road Bus stop', 'Courtyard Marriott'] },
                        { gate: 'B1', landmarks: ['AG Office', 'Ramee Mall', 'Anna Arivalayam'] },
                        { gate: 'B2/B3', landmarks: ['Century Plaza'] }
                    ]
                },
                {
                    id: 'b18', name: 'Teynampet', nameLocal: 'தேனாம்பேட்டை', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Teynampet Junction', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1/A2', landmarks: ['Eldams Road', 'Food Inspection Unit'] },
                        { gate: 'A3', landmarks: ['Pondy Bazar', 'T. Nagar'] },
                        { gate: 'B1', landmarks: ['Cenotaph Road', 'Alwarpet', 'Apollo Hospital'] },
                        { gate: 'B2/B3', landmarks: ['Metro Parking', 'Bus Stand', 'Raintree'] }
                    ]
                },
                {
                    id: 'b19', name: 'Nandanam', nameLocal: 'நந்தனம்', type: 'underground', isInterchange: true, interchangeWith: ['yellow'], landmark: 'Nandanam Signal', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Apollo'] },
                        { gate: 'A2/B1/B2/B3', landmarks: ['Teynampet Bus Stop', 'Alwarpet'] }
                    ]
                },
                {
                    id: 'b20', name: 'Saidapet', nameLocal: 'சைதாப்பேட்டை', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Saidapet Court', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Island' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Todd Hunter Nagar'] },
                        { gate: 'A2/A3', landmarks: ['Bus Stand'] },
                        { gate: 'B3/B4', landmarks: ['Bazaar Road'] }
                    ]
                },
                {
                    id: 'b21',
                    name: 'Little Mount',
                    nameLocal: 'லிட்டில் மவுண்ட்',
                    type: 'elevated',
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: 'Little Mount Church',
                    zone: 3,
                    contact: '044-23792036',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators', 'Differently abled Parking', 'Customer Care Office'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Ramada Plaza', 'Anna University', 'CMRL Parking'] },
                        { gate: 'B', landmarks: ['Rainbow Childrens Hospital', 'Little Mount Church'] }
                    ]
                },
                {
                    id: 'b22', name: 'Guindy', nameLocal: 'கிண்டி', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Guindy National Park, IIT', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: '1', landmarks: ['Guindy Railway Station', 'Guindy Industrial Estate'] },
                        { gate: '2', landmarks: ['Hotel Hablis', 'Phoenix Mall'] }
                    ]
                },
                {
                    id: 'b23', name: 'Alandur', nameLocal: 'ஆலந்தூர்', type: 'elevated', isInterchange: true, interchangeWith: ['green', 'red'], landmark: 'Alandur Bus Depot', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Urban Square', 'DLF Cyber City'] },
                        { gate: 'B', landmarks: ['Bus Stop'] },
                        { gate: 'C', landmarks: ['REMCO College', 'DLF Cyber City'] },
                        { gate: 'D', landmarks: ['RTO Office'] }
                    ]
                },
                {
                    id: 'b24', name: 'Nanganallur Road', nameLocal: 'நங்கநல்லூர் ரோடு', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Nanganallur Main Road', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Bus Stop', 'Saravana Bhavan', 'Radisson Blu'] },
                        { gate: 'A2', landmarks: ['Alandur Post Office', 'Sankarnethralaya Eye Hospital', 'St. Mount Church'] }
                    ]
                },
                {
                    id: 'b25', name: 'Meenambakkam', nameLocal: 'மீனம்பாக்கம்', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Near Airport', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A1/A2', landmarks: ['Suburban Railway Station', 'A.M. Jain College'] },
                        { gate: 'B1', landmarks: ['Post Office', 'International Air Cargo'] },
                        { gate: 'B2', landmarks: ['Bus Stop Towards Nanganallur'] }
                    ]
                },
                {
                    id: 'b26', name: 'Chennai Airport', nameLocal: 'சென்னை விமான நிலையம்', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Chennai International Airport', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Terminal', type: 'Side' },
                        { no: 2, towards: 'Wimco Nagar Depot', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Aero Hub Mall', 'Tirusulam Railway Station', 'GST Road'] },
                        { gate: 'B', landmarks: ['Chennai Airport Terminals', 'Apollo Pharmacy', 'Aero Hub Fast Food'] }
                    ]
                },
            ],
        },
        {
            id: 'green',
            name: 'Green Line',
            color: '#4CAF50',
            colorLight: '#81C784',
            corridor: 'Corridor 2',
            length: '22.00 km',
            totalStations: 17,
            status: 'operational',
            operationalSince: '2016',
            frequency: '5–7 min (peak), 10 min (off-peak)',
            firstTrain: '5:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'Alstom Metropolis',
            stations: [
                {
                    id: 'g01', name: 'Chennai Central', nameLocal: 'சென்னை சென்ட்ரல்', type: 'underground', isInterchange: true, interchangeWith: ['blue'], landmark: 'MGR Chennai Central Railway Station', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount', type: 'Island' },
                        { no: 2, towards: 'Airport / St. Thomas Mount', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1/A2', landmarks: ['Egmore Railway Station', 'Hospital'] },
                        { gate: 'A3', landmarks: ['Chennai Central Railway Station', 'Southern Railway HQ'] },
                        { gate: 'B1/B2', landmarks: ['Park Railway Station'] },
                        { gate: 'B3/B4', landmarks: ['Allikulam Court Complex'] },
                        { gate: 'B5', landmarks: ['Ripon Building'] }
                    ]
                },
                {
                    id: 'g02', name: 'Egmore', nameLocal: 'எக்மோர்', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Egmore Railway Station, Museum', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Island' },
                        { no: 2, towards: 'Central', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1/A3', landmarks: ['Egmore Railway Station'] },
                        { gate: 'B2', landmarks: ['Dina Thanthi', 'Periyar Book House'] }
                    ]
                },
                {
                    id: 'g03', name: 'Nehru Park', nameLocal: 'நேரு பூங்கா', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Nehru Park', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Island' },
                        { no: 2, towards: 'Central', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Flowers Road', 'EVR Periyar Road', 'Divyang Friendly'] },
                        { gate: 'A2', landmarks: ['Metro Parking', 'Hotel Abu Palace', 'Indusland Bank'] },
                        { gate: 'A3', landmarks: ['Sports Development Authority', 'District Library', 'Gengu Reddy Subway'] }
                    ]
                },
                {
                    id: 'g04', name: 'Kilpauk', nameLocal: 'கீழ்ப்பாக்கம்', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Kilpauk Medical College & Hospital', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Island' },
                        { no: 2, towards: 'Central', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Kilpauk Medical College', 'Fire Station', 'KKR Hospital'] },
                        { gate: 'A2', landmarks: ['Apollo Hospital', 'Divyang Friendly'] },
                        { gate: 'A3', landmarks: ['Apollo Hospital'] },
                        { gate: 'B1', landmarks: ['Kilpauk Hospital', 'ECO Park'] },
                        { gate: 'B2/B3', landmarks: ['VS Hospital', 'New Hope Hospital', 'EGA Theatre'] }
                    ]
                },
                {
                    id: 'g05', name: 'Pachaiyappa\'s College', nameLocal: 'பச்சையப்பா கல்லூரி', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Pachaiyappas College', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Island' },
                        { no: 2, towards: 'Central', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['CMRL Parking'] },
                        { gate: 'B2', landmarks: ['Pachaiyappa\'s College', 'Maharishi School'] },
                        { gate: 'B3', landmarks: ['St. George School', 'St. George Arts & Science College', 'St. George Church'] }
                    ]
                },
                {
                    id: 'g06', name: 'Shenoy Nagar', nameLocal: 'ஷீனாய் நகர்', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Shenoy Nagar Park', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Island' },
                        { no: 2, towards: 'Central', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Aminjikarai Signal', 'Aminjikarai Market', 'Sky Walk', 'Hande Hospital', 'Divyang Friendly'] },
                        { gate: 'A2', landmarks: ['Thiru Vi.Ka. Park', 'Corporation Regional Office', 'Billroth Hospital'] },
                        { gate: 'B1', landmarks: ['Thiru.vi.ka Park', 'K3 Police Station', 'Skating park', 'Sai Baba Temple'] },
                        { gate: 'B2', landmarks: ['Post Office'] }
                    ]
                },
                {
                    id: 'g07', name: 'Anna Nagar East', nameLocal: 'அண்ணா நகர் கிழக்கு', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Anna Nagar Tower Park', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Island' },
                        { no: 2, towards: 'Central', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Apollo Clinic', 'Chinthamani', 'Valliammal College', 'Divyang Friendly'] },
                        { gate: 'A2', landmarks: ['Valliammal College'] },
                        { gate: 'A3', landmarks: ['Angels Shop', 'Amma Arangam'] },
                        { gate: 'B1', landmarks: ['Krishna Sweet Shop', 'McRennett Bakery'] }
                    ]
                },
                {
                    id: 'g08', name: 'Anna Nagar Tower', nameLocal: 'அண்ணா நகர் கோபுரம்', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Anna Nagar Tower', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Island' },
                        { no: 2, towards: 'Central', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1/A2', landmarks: ['Anna Nagar Tower Park', 'Luke Church', 'Iyyappan Kovil'] },
                        { gate: 'A3', landmarks: ['Shanthi Colony', 'Anna Adarsh College'] },
                        { gate: 'B1/B2', landmarks: ['Anna Nagar Post Office', 'Chaya & Kadi'] },
                        { gate: 'B3', landmarks: ['Saravana Bhavan Hotel', 'Kora Food Street'] }
                    ]
                },
                {
                    id: 'g09', name: 'Thirumangalam', nameLocal: 'திருமங்கலம்', type: 'underground', isInterchange: true, interchangeWith: ['red'], landmark: 'Thirumangalam Junction', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Island' },
                        { no: 2, towards: 'Central', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['Thirumangalam Flyover', 'GRT Jewellers'] },
                        { gate: 'A2', landmarks: ['Anna Nagar Roundtana'] },
                        { gate: 'A3/A4', landmarks: ['IAS Academy', 'GST Office'] },
                        { gate: 'B1', landmarks: ['VR Chennai Mall'] },
                        { gate: 'B2', landmarks: ['Koyambedu Market Road'] }
                    ]
                },
                {
                    id: 'g10', name: 'Koyambedu', nameLocal: 'கோயம்பேடு', type: 'elevated', isInterchange: true, interchangeWith: ['red'], landmark: 'Koyambedu Market', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Side' },
                        { no: 2, towards: 'Central', type: 'Island' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Maduravoyal', 'Poonamallee', 'Omni Bus Stand'] },
                        { gate: 'B', landmarks: ['Koyambedu Omni Bus Stand', 'CMDA Building'] },
                        { gate: 'C', landmarks: ['CMRL Depot / Admin Building', 'Koyambedu Market'] },
                        { gate: 'D', landmarks: ['Kurungaleeswarar Temple', 'Post Office'] },
                        { gate: 'E', landmarks: ['Rohini Theatre', 'VR Mall'] }
                    ]
                },
                {
                    id: 'g11', name: 'CMBT', nameLocal: 'சி.எம்.பி.டி.', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'CMBT Bus Terminus', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Side' },
                        { no: 2, towards: 'Central', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Omni Bus Stand', 'Koyambedu Market', 'Divyang Friendly'] }
                    ]
                },
                {
                    id: 'g12', name: 'Arumbakkam', nameLocal: 'அரும்பாக்கம்', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Arumbakkam', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Side' },
                        { no: 2, towards: 'Central', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['HDFC Bank', 'DDGD Vaishnav College', 'Hotel Green Grande Inn'] },
                        { gate: 'B', landmarks: ['Aishwarya Mahal', 'Hotel Radha Regent', 'AR Rahman KM College'] },
                        { gate: 'C', landmarks: ['Annamal Institute Of Hotel Management', 'Hotel Green Grande Inn', 'Divyang Friendly'] },
                        { gate: 'D', landmarks: ['SV High School'] }
                    ]
                },
                {
                    id: 'g13', name: 'Vadapalani', nameLocal: 'வடபழனி', type: 'elevated', isInterchange: true, interchangeWith: ['yellow'], landmark: 'Vadapalani Murugan Temple', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Side' },
                        { no: 2, towards: 'Central', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Vadapalani Market', 'SIMS Hospital', 'Vijaya Hospital'] },
                        { gate: 'B', landmarks: ['NEXUS Mall', 'Vadapalani Bus Depot'] },
                        { gate: 'C', landmarks: ['Murugan Temple', 'Vadapalani Post Office', 'Forum Vijaya Mall'] },
                        { gate: 'D', landmarks: ['Murugan Temple', 'Vadapalani Post Office'] }
                    ]
                },
                {
                    id: 'g14', name: 'Ashok Nagar', nameLocal: 'அசோக் நகர்', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Ashok Nagar', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Side' },
                        { no: 2, towards: 'Central', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'C', landmarks: ['ESI Hospital', 'Ashok Nagar Bus Stop', 'KK Nagar Bus Depot'] },
                        { gate: 'D', landmarks: ['ESI Hospital', 'Post Office', 'KV School', 'The Gokulam Park Hotel'] },
                        { gate: 'E', landmarks: ['ESI Hospital', 'BHEL Staff Quarters'] },
                        { gate: 'F', landmarks: ['Udhayam Theatre'] }
                    ]
                },
                {
                    id: 'g15', name: 'Ekkattuthangal', nameLocal: 'எக்கட்டுத்தாங்கல்', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Ekkattuthangal', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'St. Thomas Mount', type: 'Side' },
                        { no: 2, towards: 'Central', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['BNR', 'SIDCO Industrial Estate'] },
                        { gate: 'B1', landmarks: ['Bus Stop Towards Koyambedu', 'Hilton Hotel', 'Olympia Tech Park'] }
                    ]
                },
                {
                    id: 'g16', name: 'Alandur', nameLocal: 'ஆலந்தூர்', type: 'elevated', isInterchange: true, interchangeWith: ['blue', 'red'], landmark: 'Alandur Bus Depot', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 3, towards: 'St. Thomas Mount', type: 'Side' },
                        { no: 4, towards: 'Central', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Urban Square', 'DLF Cyber City'] },
                        { gate: 'B', landmarks: ['Bus Stop'] },
                        { gate: 'C', landmarks: ['REMCO College', 'DLF Cyber City'] },
                        { gate: 'D', landmarks: ['RTO Office'] }
                    ]
                },
                {
                    id: 'g17', name: 'St. Thomas Mount', nameLocal: 'செயிண்ட் தாமஸ் மவுண்ட்', type: 'elevated', isInterchange: true, interchangeWith: ['red'], landmark: 'St. Thomas Mount Church', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Central', type: 'Side' }
                    ],
                    gates: [
                        { gate: 'A1', landmarks: ['CMRL Parking', 'Guindy Railway Station', 'Hotel Hablis'] }
                    ]
                }
            ],
        },

        // ═══════════════════════════════════════════
        // PHASE 2 — UNDER CONSTRUCTION
        // ═══════════════════════════════════════════
        {
            id: 'purple',
            name: 'Purple Line',
            color: '#9C27B0',
            colorLight: '#CE93D8',
            corridor: 'Corridor 3',
            length: '45.80 km',
            totalStations: 49,
            status: 'under-construction',
            expectedCompletion: '2027–2028',
            gauge: 'Standard Gauge (1435 mm)',
            stations: [
                {
                    id: 'p01', name: 'Madhavaram Milk Colony', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['red'], landmark: 'Madhavaram', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p02', name: 'Thapalpetti', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p03', name: 'Murari Hospital', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p04', name: 'Moolakadai', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p05', name: 'Sembiyam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p06', name: 'Perambur Market', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p07', name: 'Perambur Metro', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p08', name: 'Ayanavaram Otteri', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p09', name: 'Pattalam', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p10', name: 'Perambur Barracks Rd', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p11', name: 'Purasawalkam High Rd', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p12', name: 'Kellys', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p13', name: 'KMC', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Kilpauk Medical College', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p14', name: 'Chetpet Metro', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p15', name: 'Sterling Road Junction', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p16', name: 'Nungambakkam', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p17', name: 'Gemini', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p18', name: 'Thousand Lights', nameLocal: '', type: 'underground', isInterchange: true, interchangeWith: ['blue'], landmark: 'Interchange with Blue Line', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p19', name: 'Royapettah Govt Hospital', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p20', name: 'Radhakrishnan Salai Jn', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p21', name: 'Thirumayilai Metro', nameLocal: '', type: 'underground', isInterchange: true, interchangeWith: ['yellow'], landmark: 'Interchange with Yellow Line', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p22', name: 'Mandaiveli', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p23', name: 'Greenways Road Metro', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p24', name: 'Adyar Junction', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p25', name: 'Adyar Depot', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p26', name: 'Indira Nagar', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p27', name: 'Thiruvanmiyur Metro', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p28', name: 'Taramani Road Junction', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p29', name: 'Nehru Nagar', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p30', name: 'Kandanchavadi', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p31', name: 'Perungudi', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p32', name: 'Thoraipakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p33', name: 'Mettukuppam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p34', name: 'PTC Colony', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p35', name: 'Okkiyampet', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p36', name: 'Karapakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p37', name: 'Okkiyam Thoraipakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p38', name: 'Sholinganallur', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['red'], landmark: 'Interchange with Red Line', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p39', name: 'Sholinganallur Lake 2', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p40', name: 'Ponniamman Temple', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p41', name: 'Sathyabama University', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p42', name: 'St. Joseph College', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p43', name: 'Semmancheri', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p44', name: 'Gandhi Nagar', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p45', name: 'Navallur', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p46', name: 'Siruseri', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p47', name: 'SIPCOT 1', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'p48', name: 'SIPCOT 2', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
            ],
        },
        {
            id: 'yellow',
            name: 'Yellow Line',
            color: '#FF9800',
            colorLight: '#FFB74D',
            corridor: 'Corridor 4',
            length: '26.09 km',
            totalStations: 28,
            status: 'under-construction',
            expectedCompletion: '2027',
            gauge: 'Standard Gauge (1435 mm)',
            stations: [
                {
                    id: 'y01', name: 'Light House', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: 'Marina Beach', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y02', name: 'Kutchery Road', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y03', name: 'Thirumayilai Metro', nameLocal: '', type: 'underground', isInterchange: true, interchangeWith: ['purple'], landmark: 'Interchange with Purple Line', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y04', name: 'Alwarpet', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y05', name: 'Bharathidasan Road', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y06', name: 'Adyar Gate Junction', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y07', name: 'Nandanam', nameLocal: '', type: 'underground', isInterchange: true, interchangeWith: ['blue'], landmark: 'Interchange with Blue Line', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y08', name: 'Panagal Park', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y09', name: 'Kodambakkam Sub Urban', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y10', name: 'Meenakshi College', nameLocal: '', type: 'underground', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y11', name: 'Powerhouse', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y12', name: 'Vadapalani', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['green'], landmark: 'Interchange with Green Line', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y13', name: 'Saligramam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y14', name: 'Avichi School', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y15', name: 'Alwarthirunagar', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y16', name: 'Valasaravakkam', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['red'], landmark: 'Interchange with Red Line', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y17', name: 'Karambakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y18', name: 'Alapakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y19', name: 'Porur Junction', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['red'], landmark: 'Interchange with Red Line', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y20', name: 'Chennai Bypass Crossing', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y21', name: 'Ramachandra Hospital', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y22', name: 'Iyyapanthangal Bus Depot', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y23', name: 'Kattupakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y24', name: 'Kumananchavadi', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y25', name: 'Karayanchavadi', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y26', name: 'Mullai Thottam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y27', name: 'Poonamallee Bus Terminus', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'y28', name: 'Poonamallee Bus Depot', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
            ],
        },
        {
            id: 'red',
            name: 'Red Line',
            color: '#F44336',
            colorLight: '#EF9A9A',
            corridor: 'Corridor 5',
            length: '47.06 km',
            totalStations: 48,
            status: 'under-construction',
            expectedCompletion: '2027–2028',
            gauge: 'Standard Gauge (1435 mm)',
            stations: [
                {
                    id: 'r01', name: 'Madhavaram Milk Colony', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['purple'], landmark: 'Interchange with Purple Line', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r02', name: 'Venugopal Nagar', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r03', name: 'Assissi Nagar', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r04', name: 'Manjambakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r05', name: 'Velmurugan Nagar', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r06', name: 'MMBT', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r07', name: 'Shastri Nagar', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r08', name: 'Retteri Junction', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r09', name: 'Kolathur Junction', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 1,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r10', name: 'Srinivasa Nagar', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r11', name: 'Villivakkam Metro', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r12', name: 'Villivakkam Bus Terminus', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r13', name: 'Nadhamuni', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r14', name: 'Anna Nagar Depot', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r15', name: 'Thirumangalam', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['green'], landmark: 'Interchange with Green Line', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r16', name: 'Kendriya Vidyalaya', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r17', name: 'Grain Market', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 2,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r18', name: 'Sai Nagar Bus Stop', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r19', name: 'Elango Nagar Bus Stop', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r20', name: 'Alwartiru Nagar', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r21', name: 'Valasaravakkam', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['yellow'], landmark: 'Interchange with Yellow Line', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r22', name: 'Karambakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r23', name: 'Alapakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 3,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r24', name: 'Porur Junction', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['yellow'], landmark: 'Interchange with Yellow Line', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r25', name: 'Mugalivakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r26', name: 'DLF IT SEZ', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r27', name: 'Sathya Nagar', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r28', name: 'CTC', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Chennai Trade Centre', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r29', name: 'Butt Road', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r30', name: 'Alandur', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['blue', 'green'], landmark: 'Interchange with Blue & Green', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r31', name: 'St. Thomas Mount', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['green'], landmark: 'Interchange with Green Line', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r32', name: 'Adambakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r33', name: 'Vanuvampet', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r34', name: 'Puzhuthivakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r35', name: 'Madipakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r36', name: 'Kilkattalai', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r37', name: 'Echangadu', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r38', name: 'Kovilabakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 4,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r39', name: 'Vellakkal', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r40', name: 'Medavakkam Koot Road', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r41', name: 'Kamraj Garden Street', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r42', name: 'Medavakkam Junction', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r43', name: 'Perumbakkam', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r44', name: 'Global Hospital', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r45', name: 'Elcot', nameLocal: '', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: '', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
                {
                    id: 'r46', name: 'Sholinganallur', nameLocal: '', type: 'elevated', isInterchange: true, interchangeWith: ['purple'], landmark: 'Interchange with Purple Line', zone: 5,
                    contact: '1860-425-1515, 155370',
                    parking: true,
                    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
                    platforms: [
                        { no: 1, towards: 'Airport / St. Thomas Mount' },
                        { no: 2, towards: 'Wimco Nagar Depot / Central' }
                    ],
                    gates: [
                        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
                        { gate: 'B', landmarks: ['Residential Area Exit'] }
                    ]
                },
            ],
        },
    ],
};

chennaiMetro.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('chennai', line.id, i),
        fareZone: null
    }));
});

export default chennaiMetro;
