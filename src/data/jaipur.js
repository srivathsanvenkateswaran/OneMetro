/**
 * Jaipur Metro Rail — Complete Station & Line Data
 * Source: Official Data & Upcoming Phase 2
 */
import { getStationCoords } from "./stationCoords.js";

const jaipurMetro = {
  id: "jaipur",
  name: "Jaipur Metro",
  nameLocal: "जयपुर मेट्रो",
  city: "Jaipur",
  state: "Rajasthan",
  operator: "JMRC",
  totalStations: 34,
  totalLength: "36.78 km",
  phase2: true,
  totalLines: 2,
  established: "2015",
  website: "https://transport.rajasthan.gov.in/jmrc",
  lines: [
    {
      id: "pink",
      name: "Pink Line",
      color: "#D11C52",
      colorLight: "#F381A5",
      corridor: "Line 1",
      length: "14.82 km",
      totalStations: 14,
      status: "operational",
      stations: [
        {
          id: "p01",
          name: "Ajmer Road",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Ajmer Road",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "p02",
          name: "Mansarovar",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Mansarovar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p03",
          name: "New Aatish Market",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "New Aatish Market",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p04",
          name: "Vivek Vihar",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Vivek Vihar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p05",
          name: "Shyam Nagar",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Shyam Nagar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p06",
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
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p07",
          name: "Civil Lines",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Civil Lines",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p08",
          name: "Railway Station",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Railway Station",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p09",
          name: "Sindhi Camp",
          nameLocal: "",
          type: "elevated",
          isInterchange: true,
          interchangeWith: ["orange"],
          landmark: "Sindhi Camp",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p10",
          name: "Chandpole",
          nameLocal: "",
          type: "underground",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Chandpole",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p11",
          name: "Chhoti Chaupar",
          nameLocal: "",
          type: "underground",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Chhoti Chaupar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p12",
          name: "Badi Chaupar",
          nameLocal: "",
          type: "underground",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Badi Chaupar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "operational",
        },
        {
          id: "p13",
          name: "Ramganj Chaupar",
          nameLocal: "",
          type: "underground",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Ramganj Chaupar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "p14",
          name: "Transport Nagar",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Transport Nagar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Ajmer Road",
            },
            {
              no: 2,
              towards: "Transport Nagar",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
      ],
    },
    {
      id: "orange",
      name: "Orange Line",
      color: "#F47B20",
      colorLight: "#fbb47b",
      corridor: "Line 2",
      length: "23.5 km",
      totalStations: 20,
      status: "under_construction",
      stations: [
        {
          id: "o01",
          name: "Sitapura Industrial Area",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Sitapura Industrial Area",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o02",
          name: "Pratap Nagar",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Pratap Nagar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o03",
          name: "Haldi Ghati Gate",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Haldi Ghati Gate",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o04",
          name: "Sanganer",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Sanganer",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o05",
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
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o06",
          name: "Durgapura",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Durgapura",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o07",
          name: "Mahavir Nagar",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Mahavir Nagar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o08",
          name: "Gopalpura",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Gopalpura",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o09",
          name: "Dev Nagar",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Dev Nagar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o10",
          name: "Tonk Phatak",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Tonk Phatak",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o11",
          name: "Gandhi Nagar Mode",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Gandhi Nagar Mode",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o12",
          name: "Sawai Mansingh Stadium",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Sawai Mansingh Stadium",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o13",
          name: "Narayan Singh Circle",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Narayan Singh Circle",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o14",
          name: "Sawai Man Singh Hospital",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Sawai Man Singh Hospital",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o15",
          name: "Ajmeri Gate",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Ajmeri Gate",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o16",
          name: "Government Hostel",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Government Hostel",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o17",
          name: "Sindhi Camp",
          nameLocal: "",
          type: "elevated",
          isInterchange: true,
          interchangeWith: ["pink"],
          landmark: "Sindhi Camp",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o18",
          name: "Subhash Nagar",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Subhash Nagar",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o19",
          name: "Pani Pench",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Pani Pench",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
        {
          id: "o20",
          name: "Ambabari",
          nameLocal: "",
          type: "elevated",
          isInterchange: false,
          interchangeWith: [],
          landmark: "Ambabari",
          zone: 1,
          contact: "18002700540",
          parking: true,
          facilities: [
            "First Aid Box",
            "CCTV",
            "Restrooms",
            "Drinking Water",
            "Lifts / Escalators",
          ],
          platforms: [
            {
              no: 1,
              towards: "Sitapura Industrial Area",
            },
            {
              no: 2,
              towards: "Ambabari",
            },
          ],
          gates: [
            {
              gate: "A",
              landmarks: ["Main Road Entrance", "Bus Stop"],
            },
            {
              gate: "B",
              landmarks: ["Residential Area Exit"],
            },
          ],
          status: "under_construction",
        },
      ],
    },
  ],
};

jaipurMetro.lines.forEach((line) => {
  line.stations = line.stations.map((st, i) => ({
    ...st,
    ...getStationCoords("jaipur", line.id, i),
    fareZone: null,
  }));
});

export default jaipurMetro;
