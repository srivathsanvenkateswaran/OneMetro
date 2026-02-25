/**
 * City Registry — Single source of truth for all metro city display metadata.
 *
 * Adding a new city is now a two-step process:
 *   1. Add an entry here with display metadata.
 *   2. Add a data file at src/data/<cityId>.js with full station data.
 *      Then register the dynamic import in cityLoaders inside app.js.
 *
 * The heavy station/line data is NOT imported here — it is lazy-loaded
 * on demand in app.js when a user selects a city.
 */

export const cityRegistry = {
    chennai: {
        id: 'chennai',
        displayName: 'Chennai',
        nameLocal: 'சென்னை',
        metroName: 'Chennai Metro Rail',
        tagline: 'Experience the Gateway to South India with its rapidly expanding 5-line network.',
        state: 'Tamil Nadu',
        emoji: '🏛️',
        imageClass: 'lp-img-chennai',
        status: 'available',
        stats: { lines: 5, stations: '110+', length: '170+ km' },
    },
    delhi: {
        id: 'delhi',
        displayName: 'Delhi',
        nameLocal: 'दिल्ली',
        metroName: 'Delhi Metro',
        tagline: "The nation's capital — home to India's largest and most complex metro network.",
        state: 'Delhi (NCT)',
        emoji: '🕌',
        imageClass: 'lp-img-delhi',
        status: 'available',
        stats: { lines: 10, stations: '280+', length: '350+ km' },
    },
    mumbai: {
        id: 'mumbai',
        displayName: 'Mumbai',
        nameLocal: 'मुंबई',
        metroName: 'Mumbai Metro',
        tagline: "Connecting the Maximum City with the speed of tomorrow's integrated transit.",
        state: 'Maharashtra',
        emoji: '🌆',
        imageClass: 'lp-img-mumbai',
        status: 'available',
        stats: { lines: 4, stations: '70+', length: '80+ km' },
    },
    bengaluru: {
        id: 'bengaluru',
        displayName: 'Bengaluru',
        nameLocal: 'ಬೆಂಗಳೂರು',
        metroName: 'Namma Metro',
        tagline: 'Navigate the Silicon Valley of India through the innovative Namma Metro corridors.',
        state: 'Karnataka',
        emoji: '🌳',
        imageClass: 'lp-img-bengaluru',
        status: 'available',
        stats: { lines: 5, stations: '130+', length: '185+ km' },
    },
    kolkata: {
        id: 'kolkata',
        displayName: 'Kolkata',
        nameLocal: 'কলকাতা',
        metroName: 'Kolkata Metro',
        tagline: "India's oldest metro system, modernizing the City of Joy with 5 sprawling lines.",
        state: 'West Bengal',
        emoji: '🌉',
        imageClass: 'lp-img-kolkata',
        status: 'available',
        stats: { lines: 5, stations: '57+', length: '60+ km' },
    },
    hyderabad: {
        id: 'hyderabad',
        displayName: 'Hyderabad',
        nameLocal: 'హైదరాబాద్',
        metroName: 'Hyderabad Metro',
        tagline: "A highly efficient transit system built for India's emerging tech hub.",
        state: 'Telangana',
        emoji: '🏰',
        imageClass: 'lp-img-hyderabad',
        status: 'available',
        stats: { lines: 3, stations: '57', length: '69 km' },
    },
    pune: {
        id: 'pune',
        displayName: 'Pune',
        nameLocal: 'पुणे',
        metroName: 'Pune Metro',
        tagline: 'An expanding modern transit network embracing the cultural capital of Maharashtra.',
        state: 'Maharashtra',
        emoji: '🚊',
        imageClass: 'lp-img-pune',
        status: 'available',
        stats: { lines: 3, stations: '30+', length: '54+ km' },
    },
    nagpur: {
        id: 'nagpur',
        displayName: 'Nagpur',
        nameLocal: 'नागपूर',
        metroName: 'Nagpur Metro',
        tagline: "India's greenest metro system revolutionizing transit in the Orange City.",
        state: 'Maharashtra',
        emoji: '🍊',
        imageClass: 'lp-img-nagpur',
        status: 'available',
        stats: { lines: 2, stations: '37', length: '38 km' },
    },
    ahmedabad: {
        id: 'ahmedabad',
        displayName: 'Ahmedabad',
        nameLocal: 'અમદાવાદ',
        metroName: 'Ahmedabad Metro',
        tagline: 'Rapid transit connecting the sprawling twin cities of Ahmedabad and Gandhinagar.',
        state: 'Gujarat',
        emoji: '🪁',
        imageClass: 'lp-img-ahmedabad',
        status: 'available',
        stats: { lines: 4, stations: '54+', length: '75+ km' },
    },
};

/**
 * The canonical display order for cities.
 * Controls the order on the landing page and in the header dropdown.
 * To add a new city: add its key to cityRegistry above AND append its id here.
 */
export const cityOrder = [
    'chennai',
    'delhi',
    'mumbai',
    'bengaluru',
    'kolkata',
    'hyderabad',
    'pune',
    'nagpur',
    'ahmedabad',
];

/** Returns ordered array of city metadata objects, skipping any unknown keys. */
export function getOrderedCities() {
    return cityOrder.map(id => cityRegistry[id]).filter(Boolean);
}
