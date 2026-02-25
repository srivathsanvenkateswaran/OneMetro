/**
 * Pune Metro Rail — Complete Station & Line Data
 * Source: Official Data & Upcoming Phase
 */
import { getStationCoords } from './stationCoords.js';


const puneMetro = {
    id: "pune",
    name: "Pune Metro",
    nameLocal: "पुणे मेट्रो",
    city: "Pune",
    state: "Maharashtra",
    operator: "Maha Metro",
    totalStations: 53,
    totalLength: "56.5 km",
    totalLines: 3,
    established: "2022",
    website: "https://www.punemetrorail.org",
    lines: [
        {
            id: "purple",
            name: "Purple Line",
            color: "#802c89",
            colorLight: "#c774c4",
            corridor: "Line 1",
            length: "17.4 km",
            totalStations: 14,
            status: "operational",
            stations: [
                {
                    id: "p01",
                    name: "PCMC",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "PCMC",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p02",
                    name: "Sant Tukaram Nagar",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Sant Tukaram Nagar",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p03",
                    name: "Bhosari",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Bhosari",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p04",
                    name: "Kasarwadi",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Kasarwadi",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p05",
                    name: "Phugewadi",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Phugewadi",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p06",
                    name: "Dapodi",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Dapodi",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p07",
                    name: "Bopodi",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Bopodi",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p08",
                    name: "Khadki",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Khadki",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p09",
                    name: "Range Hill",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Range Hill",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p10",
                    name: "Shivaji Nagar",
                    nameLocal: "",
                    type: "underground",
                    isInterchange: true,
                    interchangeWith: [
                        "line3"
                    ],
                    landmark: "Shivaji Nagar",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p11",
                    name: "Civil Court",
                    nameLocal: "",
                    type: "underground",
                    isInterchange: true,
                    interchangeWith: [
                        "aqua",
                        "line3"
                    ],
                    landmark: "Civil Court",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p12",
                    name: "Budhwar Peth",
                    nameLocal: "",
                    type: "underground",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Budhwar Peth",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p13",
                    name: "Mandai",
                    nameLocal: "",
                    type: "underground",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Mandai",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "p14",
                    name: "Swargate",
                    nameLocal: "",
                    type: "underground",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Swargate",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "aqua",
            name: "Aqua Line",
            color: "#00a2e2",
            colorLight: "#6bdaf6",
            corridor: "Line 2",
            length: "15.7 km",
            totalStations: 16,
            status: "operational",
            stations: [
                {
                    id: "a01",
                    name: "Vanaz",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Vanaz",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a02",
                    name: "Anand Nagar",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Anand Nagar",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a03",
                    name: "Ideal Colony",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Ideal Colony",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a04",
                    name: "Nal Stop",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Nal Stop",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a05",
                    name: "Garware College",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Garware College",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a06",
                    name: "Deccan Gymkhana",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Deccan Gymkhana",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a07",
                    name: "Chhatrapati Sambhaji Udyan",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Chhatrapati Sambhaji Udyan",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a08",
                    name: "PMC",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "PMC",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a09",
                    name: "Civil Court",
                    nameLocal: "",
                    type: "underground",
                    isInterchange: true,
                    interchangeWith: [
                        "purple",
                        "line3"
                    ],
                    landmark: "Civil Court",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a10",
                    name: "Mangalwar Peth",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Mangalwar Peth",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a11",
                    name: "Pune Railway Station",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Pune Railway Station",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a12",
                    name: "Ruby Hall Clinic",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Ruby Hall Clinic",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a13",
                    name: "Bund Garden",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Bund Garden",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a14",
                    name: "Yerawada",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Yerawada",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a15",
                    name: "Kalyani Nagar",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Kalyani Nagar",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "a16",
                    name: "Ramwadi",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Ramwadi",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "line3",
            name: "Line 3 (Hinjewadi)",
            color: "#f3161e",
            colorLight: "#fa8a8e",
            corridor: "Line 3",
            length: "23.3 km",
            totalStations: 23,
            status: "construction",
            stations: [
                {
                    id: "r01",
                    name: "Megapolis Circle",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Megapolis Circle",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r02",
                    name: "Embassy Quadron Business Park",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Embassy Quadron Business Park",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r03",
                    name: "Dohler",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Dohler",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r04",
                    name: "Infosys Phase II",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Infosys Phase II",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r05",
                    name: "Wipro Phase II",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Wipro Phase II",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r06",
                    name: "Pall India",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Pall India",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r07",
                    name: "Shivaji Chowk",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Shivaji Chowk",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r08",
                    name: "Hinjawadi",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Hinjawadi",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r09",
                    name: "Wakad Chowk",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Wakad Chowk",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r10",
                    name: "Balewadi Stadium",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Balewadi Stadium",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r11",
                    name: "NICMAR",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "NICMAR",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r12",
                    name: "Ram Nagar",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Ram Nagar",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r13",
                    name: "Laxmi Nagar",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Laxmi Nagar",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r14",
                    name: "Balewadi Phata",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Balewadi Phata",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r15",
                    name: "Baner Gaon",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Baner Gaon",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r16",
                    name: "Baner",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Baner",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r17",
                    name: "Krushi Anusadhan",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Krushi Anusadhan",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r18",
                    name: "Sakal Nagar",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Sakal Nagar",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r19",
                    name: "University",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "University",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r20",
                    name: "R.B.I.",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "R.B.I.",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r21",
                    name: "Agriculture College",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: false,
                    interchangeWith: [],
                    landmark: "Agriculture College",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r22",
                    name: "Shivaji Nagar",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: true,
                    interchangeWith: [
                        "purple"
                    ],
                    landmark: "Shivaji Nagar",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                },
                {
                    id: "r23",
                    name: "Civil Court",
                    nameLocal: "",
                    type: "elevated",
                    isInterchange: true,
                    interchangeWith: [
                        "purple",
                        "aqua"
                    ],
                    landmark: "Civil Court",
                    zone: 1,
                    contact: "18002700540",
                    parking: true,
                    facilities: [
                        "First Aid Box",
                        "CCTV",
                        "Restrooms",
                        "Drinking Water",
                        "Lifts / Escalators"
                    ],
                    platforms: [
                        {
                            no: 1,
                            towards: "Terminal 1"
                        },
                        {
                            no: 2,
                            towards: "Terminal 2"
                        }
                    ],
                    gates: [
                        {
                            gate: "A",
                            landmarks: [
                                "Main Road Entrance",
                                "Bus Stop"
                            ]
                        },
                        {
                            gate: "B",
                            landmarks: [
                                "Residential Area Exit"
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

puneMetro.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('pune', line.id, i),
        fareZone: null
    }));
});

export default puneMetro;
