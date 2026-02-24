const fs = require('fs');

const line3Stations = [
    "Megapolis Circle", "Embassy Quadron Business Park", "Dohler", "Infosys Phase II",
    "Wipro Phase II", "Pall India", "Shivaji Chowk", "Hinjawadi", "Wakad Chowk",
    "Balewadi Stadium", "NICMAR", "Ram Nagar", "Laxmi Nagar", "Balewadi Phata",
    "Baner Gaon", "Baner", "Krushi Anusadhan", "Sakal Nagar", "University",
    "R.B.I.", "Agriculture College", "Shivaji Nagar", "Civil Court"
];

const intermap = {
    'Shivaji Nagar': ['purple'],
    'Civil Court': ['purple', 'aqua']
};

const createStation = (idPrefix, index, name) => {
    const isInterchange = intermap[name] !== undefined;
    const interchangeWith = intermap[name] || [];
    return {
        id: `${idPrefix}${String(index + 1).padStart(2, '0')}`,
        name: name,
        nameLocal: '',
        type: 'elevated',
        isInterchange,
        interchangeWith,
        landmark: name,
        zone: 1,
        contact: '18002700540',
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

const line3Data = line3Stations.map((s, i) => createStation('r', i, s));

const content = fs.readFileSync('c:\\Users\\sriva\\Documents\\Work\\Coding\\BharatOne\\src\\data\\pune.js', 'utf8');

// Also update colors in content for Purple and Aqua
let newContent = content.replace(/"color": "#5F259F"/g, '"color": "#903373"'); // Purple
newContent = newContent.replace(/"colorLight": "#A07ED0"/g, '"colorLight": "#C774A8"');

newContent = newContent.replace(/"color": "#00A3E0"/g, '"color": "#007CB0"'); // Aqua
newContent = newContent.replace(/"colorLight": "#7BD8F8"/g, '"colorLight": "#4DAAE0"');

// Update line 3 interconnections
newContent = newContent.replace(/'aqua'/g, '"aqua", "pune-line3"');
newContent = newContent.replace(/"aqua"/g, '"aqua"'); // just fixing format 

// Wait, doing simple replacement for interchange is risky, better modify via JSON parsing.
// Actually, `pune.js` is an export. Let's parse it using substring or regex, or just append the line object.
