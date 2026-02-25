import { getStationCoords } from "./stationCoords.js";

const yellowLineStations = [
  "Gandhi Nagar",
  "Super Corridor 6",
  "Super Corridor 5",
  "Super Corridor 4",
  "Super Corridor 3",
  "Super Corridor 2",
];

const yellowExtStations = [
  "Super Corridor 2",
  "Super Corridor 1",
  "Bhawarsala Square",
  "MR 10 Road",
  "ISBT / MR 10 Flyover",
  "Chandragupta Square",
  "Hira Nagar",
  "Bapat Square",
  "Meghdoot Garden",
  "Vijay Nagar Square",
  "Radisson Square",
  "Mumtaj Bag Colony",
  "Bengali Square",
  "Patrakar Colony",
  "Palasia Square",
  "High Court / Residency",
  "Indore Railway Station",
  "Rajwada Palace",
  "Maulana Azad Marg",
  "Bada Ganpati",
  "Ramchandra Nagar Square",
  "Kalani Nagar",
  "BSF",
  "Airport",
];

function buildStation(name, idPrefix, idx, lineColor) {
  let isInterchange = false;
  let interchangeWith = [];
  if (name === "Super Corridor 2") {
    isInterchange = true;
    interchangeWith = lineColor === "yellow" ? ["yellow-ext"] : ["yellow"];
  }

  return {
    id: `${idPrefix}${String(idx + 1).padStart(2, "0")}`,
    name: name,
    nameLocal: "",
    lat: null,
    lon: null,
    type: "elevated",
    isInterchange,
    interchangeWith,
    landmark: name,
    zone: Math.floor(idx / 5) + 1,
    fareZone: null,
    contact: "1860-258-2580",
    parking: true,
    facilities: [
      "First Aid Box",
      "CCTV",
      "Restrooms",
      "Drinking Water",
      "Lifts / Escalators",
    ],
    platforms: [
      { no: 1, towards: "Clockwise" },
      { no: 2, towards: "Anti-clockwise" },
    ],
    gates: [
      { gate: "A", landmarks: ["Main Road Entrance"] },
      { gate: "B", landmarks: ["Exit"] },
    ],
  };
}

const data = {
  id: "indore",
  name: "Indore Metro",
  nameLocal: "इंदौर मेट्रो",
  city: "Indore",
  state: "Madhya Pradesh",
  operator: "Madhya Pradesh Metro Rail Corporation (MPMRCL)",
  totalStations: 29,
  totalLength: "31.5 km",
  totalLines: 1,
  phase: "Phase 1 (Operational)",
  established: "2025",
  website: "https://www.mpmetro.in/",
  phase2: {
    totalLines: 1,
    totalStations: 24,
    totalLength: "25.6 km",
    expectedCompletion: "2026",
  },
  lines: [
    {
      id: "yellow",
      name: "Yellow Line",
      color: "#FFEB3B",
      colorLight: "#FFF59D",
      corridor: "Ring Line",
      length: "5.9 km",
      totalStations: 6,
      status: "operational",
      operationalSince: "May 2025",
      frequency: "5–8 min",
      firstTrain: "6:00 AM",
      lastTrain: "11:00 PM",
      gauge: "Standard Gauge (1435 mm)",
      rollingStock: "Alstom",
      stations: yellowLineStations.map((name, i) =>
        buildStation(name, "y", i, "yellow"),
      ),
    },
    {
      id: "yellow-ext",
      name: "Yellow Line (Ext)",
      color: "#FFEB3B",
      colorLight: "#FFF59D",
      corridor: "Ring Line",
      length: "25.6 km",
      totalStations: 24,
      status: "under-construction",
      expectedCompletion: "2026",
      gauge: "Standard Gauge (1435 mm)",
      rollingStock: "Alstom",
      stations: yellowExtStations.map((name, i) =>
        buildStation(name, "ye", i, "yellow-ext"),
      ),
    },
  ],
};

data.lines.forEach((line) => {
  line.stations = line.stations.map((st, i) => ({
    ...st,
    ...getStationCoords("indore", line.id, i),
  }));
});

export default data;
