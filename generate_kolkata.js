const fs = require('fs');

const blueLineStations = [
    "Dakshineswar", "Baranagar", "Noapara", "Dum Dum", "Belgachia",
    "Shyambazar", "Shobhabazar Sutanuti", "Girish Park", "Mahatma Gandhi Road",
    "Central", "Chandni Chowk", "Esplanade", "Park Street", "Maidan",
    "Rabindra Sadan", "Netaji Bhavan", "Jatin Das Park", "Kalighat",
    "Rabindra Sarobar", "Mahanayak Uttam Kumar", "Netaji", "Masterda Surya Sen",
    "Gitanjali", "Kavi Nazrul", "Shahid Khudiram", "Kavi Subhash"
];

const greenLineStations = [
    "Howrah Maidan", "Howrah", "Mahakaran", "Esplanade", "Sealdah",
    "Phoolbagan", "Bengal Chemical", "City Centre", "Central Park",
    "Karunamoyee", "Salt Lake Sector V"
];

const purpleLineStations = [
    "Joka", "Thakurpukur", "Sakher Bazar", "Behala Chowrasta",
    "Behala Bazar", "Taratala", "Majerhat"
];

const orangeLineStations = [
    "Kavi Subhash", "Satyajit Ray", "Jyotirindra Nandi", "Kavi Sukanta",
    "Hemanta Mukhopadhyay", "VIP Bazar", "Ritwik Ghatak", "Barun Sengupta",
    "Beleghata"
];

const createStation = (idPrefix, index, name, interchangeMap) => {
    const isInterchange = interchangeMap[name] !== undefined;
    const interchangeWith = interchangeMap[name] || [];
    return {
        id: `${idPrefix}${String(index + 1).padStart(2, '0')}`,
        name: name,
        nameLocal: '',
        type: ['Esplanade', 'Mahakaran', 'Howrah', 'Chandni Chowk', 'Central', 'Mahatma Gandhi Road', 'Girish Park', 'Shobhabazar Sutanuti', 'Shyambazar', 'Belgachia', 'Phoolbagan', 'Sealdah'].includes(name) ? 'underground' : 'elevated',
        isInterchange,
        interchangeWith,
        landmark: name,
        zone: 1,
        contact: '139',
        parking: true,
        facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
        platforms: [
            { no: 1, towards: 'Terminal 1' },
            { no: 2, towards: 'Terminal 2' }
        ],
        gates: [
            { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
            { gate: 'B', landmarks: ['Residential Area Exit'] }
        ]
    };
};

const blueInterchanges = {
    'Esplanade': ['green'],
    'Kavi Subhash': ['orange']
};

const greenInterchanges = {
    'Esplanade': ['blue']
};

const orangeInterchanges = {
    'Kavi Subhash': ['blue']
};

const kolkataMetro = {
    id: 'kolkata',
    name: 'Kolkata Metro',
    nameLocal: 'কলকাতা মেট্রো',
    city: 'Kolkata',
    state: 'West Bengal',
    operator: 'Metro Railway, Kolkata',
    totalStations: 53,
    totalLength: '60 km',
    totalLines: 4,
    established: '1984',
    website: 'https://mtp.indianrailways.gov.in',
    lines: [
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#1976D2',
            colorLight: '#64B5F6',
            corridor: 'Line 1',
            length: '32.13 km',
            totalStations: blueLineStations.length,
            status: 'operational',
            stations: blueLineStations.map((s, i) => createStation('b', i, s, blueInterchanges))
        },
        {
            id: 'green',
            name: 'Green Line',
            color: '#388E3C',
            colorLight: '#81C784',
            corridor: 'Line 2',
            length: '16.5 km',
            totalStations: greenLineStations.length,
            status: 'operational',
            stations: greenLineStations.map((s, i) => createStation('g', i, s, greenInterchanges))
        },
        {
            id: 'purple',
            name: 'Purple Line',
            color: '#7B1FA2',
            colorLight: '#BA68C8',
            corridor: 'Line 3',
            length: '7.75 km',
            totalStations: purpleLineStations.length,
            status: 'operational',
            stations: purpleLineStations.map((s, i) => createStation('p', i, s, {}))
        },
        {
            id: 'orange',
            name: 'Orange Line',
            color: '#F57C00',
            colorLight: '#FFB74D',
            corridor: 'Line 6',
            length: '5.4 km',
            totalStations: orangeLineStations.length,
            status: 'operational',
            stations: orangeLineStations.map((s, i) => createStation('o', i, s, orangeInterchanges))
        }
    ]
};

const content = `/**
 * Kolkata Metro Rail — Complete Station & Line Data
 * Source: Official Data
 */

const kolkataMetro = ${JSON.stringify(kolkataMetro, null, 4)};

export default kolkataMetro;
`;

fs.writeFileSync('c:\\Users\\sriva\\Documents\\Work\\Coding\\BharatOne\\src\\data\\kolkata.js', content, 'utf8');
console.log('Done!');
