import { getStationCoords } from "./stationCoords.js";

const orangeLineStations = [
  "Subhash Nagar",
  "Kendriya Vidyalaya",
  "Board Office Chauraha",
  "MP Nagar",
  "Rani Kamalapati Station",
  "DRM Office",
  "Alkapuri",
  "AIIMS",
];

const orangeExtStations = [
  "Karond Square",
  "Krishi Upaj Mandi",
  "DIG Bungalow",
  "Sindhi Colony",
  "Nandra Bus Stand",
  "Bhopal Junction",
  "Aish Bagh Crossing",
  "Bogda Pul",
  "Subhash Nagar",
];

const blueLineStations = [
  "Bhadbhada Chauraha",
  "Depot Chauraha",
  "Jawahar Chowk",
  "Roshanpura Chauraha",
  "Minto Hall",
  "Lily Talkies",
  "Bogda Pul",
  "Prabhat Chauraha",
  "Govindpura",
  "J.K. Road",
  "Indrapuri",
  "Piplani",
  "Ratnagiri Tiraha",
];

function buildStation(name, idPrefix, idx, lineColor) {
  let isInterchange = false;
  let interchangeWith = [];

  if (name === "Bogda Pul") {
    isInterchange = true;
    interchangeWith = lineColor === "orange-ext" ? ["blue"] : ["orange-ext"];
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
    contact: "1800-270-0557",
    parking: true,
    facilities: [
      "First Aid Box",
      "CCTV",
      "Restrooms",
      "Drinking Water",
      "Lifts / Escalators",
    ],
    platforms: [
      { no: 1, towards: "Terminal 1" },
      { no: 2, towards: "Terminal 2" },
    ],
    gates: [
      { gate: "A", landmarks: ["Main Road Entrance"] },
      { gate: "B", landmarks: ["Residential Area Exit"] },
    ],
  };
}

const data = {
  id: "bhopal",
  name: "Bhopal Metro",
  nameLocal: "भोपाल मेट्रो",
  city: "Bhopal",
  state: "Madhya Pradesh",
  operator: "Madhya Pradesh Metro Rail Corporation Limited (MPMRCL)",
  totalStations: 8,
  totalLength: "6.22 km",
  totalLines: 1,
  phase: "Phase 1 (Operational)",
  established: "2023",
  website: "https://www.mpmetrorail.com/",
  phase2: {
    totalLines: 2,
    totalStations: 28,
    totalLength: "27.9 km",
    expectedCompletion: "2027",
  },
  lines: [
    {
      id: "orange",
      name: "Orange Line",
      color: "#FF9800",
      colorLight: "#FFCC80",
      corridor: "Priority Corridor",
      length: "6.22 km",
      totalStations: 8,
      status: "operational",
      operationalSince: "2023",
      frequency: "10 min",
      firstTrain: "6:00 AM",
      lastTrain: "10:00 PM",
      gauge: "Standard Gauge (1435 mm)",
      rollingStock: "Alstom",
      stations: orangeLineStations.map((name, i) =>
        buildStation(name, "o", i, "orange"),
      ),
    },
    {
      id: "orange-ext",
      name: "Orange Line (North Ext)",
      color: "#FF9800",
      colorLight: "#FFCC80",
      corridor: "North Ext",
      length: "8.77 km",
      totalStations: 9,
      status: "under-construction",
      expectedCompletion: "2027",
      gauge: "Standard Gauge (1435 mm)",
      stations: orangeExtStations.map((name, i) =>
        buildStation(name, "ox", i, "orange-ext"),
      ),
    },
    {
      id: "blue",
      name: "Blue Line",
      color: "#2196F3",
      colorLight: "#BBDEFB",
      corridor: "E-W Corridor",
      length: "12.91 km",
      totalStations: 13,
      status: "under-construction",
      expectedCompletion: "2027",
      gauge: "Standard Gauge (1435 mm)",
      stations: blueLineStations.map((name, i) =>
        buildStation(name, "b", i, "blue"),
      ),
    },
  ],
};

data.lines.forEach((line) => {
  line.stations = line.stations.map((st, i) => ({
    ...st,
    ...getStationCoords("bhopal", line.id, i),
  }));
});

export default data;
