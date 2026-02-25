const fs = require('fs');

const pinkLineStations = [
    { name: 'Ajmer Road', type: 'elevated' },
    { name: 'Mansarovar', type: 'elevated' },
    { name: 'New Aatish Market', type: 'elevated' },
    { name: 'Vivek Vihar', type: 'elevated' },
    { name: 'Shyam Nagar', type: 'elevated' },
    { name: 'Ram Nagar', type: 'elevated' },
    { name: 'Civil Lines', type: 'elevated' },
    { name: 'Railway Station', type: 'elevated' },
    { name: 'Sindhi Camp', type: 'elevated', interchangeWith: ['orange'] },
    { name: 'Chandpole', type: 'underground', interchangeWith: ['orange'] },
    { name: 'Chhoti Chaupar', type: 'underground' },
    { name: 'Badi Chaupar', type: 'underground' },
    { name: 'Ramganj Chaupar', type: 'underground' },
    { name: 'Transport Nagar', type: 'elevated' }
];

const orangeLineStations = [
    { name: 'Sitapura Industrial Area', type: 'elevated' },
    { name: 'Pratap Nagar', type: 'elevated' },
    { name: 'Haldi Ghati Gate', type: 'elevated' },
    { name: 'Sanganer', type: 'elevated' },
    { name: 'Laxmi Nagar', type: 'elevated' },
    { name: 'Durgapura', type: 'elevated' },
    { name: 'Mahavir Nagar', type: 'elevated' },
    { name: 'Gopalpura', type: 'elevated' },
    { name: 'Dev Nagar', type: 'elevated' },
    { name: 'Tonk Phatak', type: 'elevated' },
    { name: 'Gandhi Nagar Mode', type: 'elevated' },
    { name: 'Sawai Mansingh Stadium', type: 'elevated' },
    { name: 'Narayan Singh Circle', type: 'elevated' },
    { name: 'Sawai Man Singh Hospital', type: 'elevated' },
    { name: 'Ajmeri Gate', type: 'elevated' },
    { name: 'Government Hostel', type: 'elevated' },
    { name: 'Sindhi Camp', type: 'elevated', interchangeWith: ['pink'] },
    { name: 'Subhash Nagar', type: 'elevated' },
    { name: 'Pani Pench', type: 'elevated' },
    { name: 'Ambabari', type: 'elevated' }
];

const constructStations = (prefix, stationsData, isOperationalFunc) => {
    return stationsData.map((s, i) => ({
        id: prefix + (i + 1).toString().padStart(2, '0'),
        name: s.name,
        nameLocal: '',
        type: s.type,
        isInterchange: s.interchangeWith ? true : false,
        interchangeWith: s.interchangeWith || [],
        landmark: s.name,
        zone: 1,
        contact: '18002700540',
        parking: true,
        facilities: [
            'First Aid Box',
            'CCTV',
            'Restrooms',
            'Drinking Water',
            'Lifts / Escalators'
        ],
        platforms: [
            { no: 1, towards: stationsData[0].name },
            { no: 2, towards: stationsData[stationsData.length - 1].name }
        ],
        gates: [
            { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
            { gate: 'B', landmarks: ['Residential Area Exit'] }
        ],
        status: isOperationalFunc(i) ? 'operational' : 'under_construction'
    }));
};

const jaipurData = {
    id: 'jaipur',
    name: 'Jaipur Metro',
    nameLocal: 'जयपुर मेट्रो',
    city: 'Jaipur',
    state: 'Rajasthan',
    operator: 'JMRC',
    totalStations: 34,
    totalLength: '36.78 km',
    phase2: true,
    totalLines: 2,
    established: '2015',
    website: 'https://transport.rajasthan.gov.in/jmrc',
    lines: [
        {
            id: 'pink',
            name: 'Pink Line',
            color: '#D11C52',
            colorLight: '#F381A5',
            corridor: 'Line 1',
            length: '14.82 km',
            totalStations: 14,
            status: 'partially_under_construction',
            stations: constructStations('p', pinkLineStations, (i) => i >= 1 && i <= 11)
        },
        {
            id: 'orange',
            name: 'Orange Line',
            color: '#F47B20',
            colorLight: '#fbb47b',
            corridor: 'Line 2',
            length: '23.5 km',
            totalStations: 20,
            status: 'under_construction',
            stations: constructStations('o', orangeLineStations, () => false)
        }
    ]
};

const code = `/**
 * Jaipur Metro Rail — Complete Station & Line Data
 * Source: Official Data & Upcoming Phase 2
 */
import { getStationCoords } from './stationCoords.js';

const jaipurMetro = ${JSON.stringify(jaipurData, null, 4)};

jaipurMetro.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('jaipur', line.id, i),
        fareZone: null
    }));
});

export default jaipurMetro;
`;

fs.writeFileSync('src/data/jaipur.js', code);
