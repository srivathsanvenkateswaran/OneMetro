/**
 * Kolkata Metro Rail — Complete Station & Line Data
 * Sources: Wikipedia, YoMetro, official data
 * Platform types:
 *   Blue Line — Island for all underground stations (b05–b18), Side for elevated
 *   Green Line — Island for underground (g02–g06), Side for elevated (g01, g07–g11)
 *   Purple/Orange/Yellow — all elevated, all Side
 */

const kolkataMetro = {
    id: "kolkata",
    name: "Kolkata Metro",
    nameLocal: "কলকাতা মেট্রো",
    city: "Kolkata",
    state: "West Bengal",
    operator: "Metro Railway, Kolkata",
    totalStations: 54,
    totalLength: "66.8 km",
    totalLines: 5,
    established: "1984",
    website: "https://mtp.indianrailways.gov.in",
    lines: [
        {
            id: "blue",
            name: "Blue Line",
            color: "#1976D2",
            colorLight: "#64B5F6",
            corridor: "Line 1 – Dakshineswar ↔ Kavi Subhash",
            length: "32.13 km",
            totalStations: 26,
            status: "operational",
            operationalSince: "1984-10-24",
            stations: [
                {
                    id: "b01", name: "Dakshineswar", nameLocal: "দক্ষিণেশ্বর", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Dakshineswar Kali Temple", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Terminal", type: "Side" }],
                    gates: [{ gate: "1", landmarks: ["Dakshineswar Kali Temple Gate"] }, { gate: "2", landmarks: ["Riverside Road / Belur direction"] }]
                },
                {
                    id: "b02", name: "Baranagar", nameLocal: "বরানগর", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Baranagar Suburban Railway", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [{ gate: "1", landmarks: ["Baranagar Station Road"] }, { gate: "2", landmarks: ["Suburban Railway side"] }]
                },
                {
                    id: "kol_inter_noapara", name: "Noapara", nameLocal: "নোয়াপাড়া", type: "elevated",
                    isInterchange: true, interchangeWith: ["yellow"], landmark: "Noapara (Yellow Line Interchange)", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [{ gate: "1", landmarks: ["Noapara Junction"] }, { gate: "2", landmarks: ["Yellow Line Interchange"] }]
                },
                {
                    id: "b04", name: "Dum Dum", nameLocal: "দমদম", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Dum Dum Suburban Railway", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Dum Dum North Side Gate"] },
                        { gate: "4", landmarks: ["Dum Dum South Side Gate"] }
                    ]
                },
                {
                    id: "b05", name: "Belgachia", nameLocal: "বেলগাছিয়া", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Belgachia Market", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Milk Colony Gate"] },
                        { gate: "3", landmarks: ["Rajbari Gate"] }
                    ]
                },
                {
                    id: "b06", name: "Shyambazar", nameLocal: "শ্যামবাজার", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Shyambazar Five Point Crossing", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Five Point Crossing"] },
                        { gate: "4", landmarks: ["Bhupen Bose Avenue", "Shobhabajar Rajbari"] }
                    ]
                },
                {
                    id: "b07", name: "Shobhabazar Sutanuti", nameLocal: "শোভাবাজার সুতানুটি", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Shobhabazar Rajbari", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Grey Street Gate", "Shobhabazar Rajbari"] },
                        { gate: "3", landmarks: ["Lal Mandir Gate"] }
                    ]
                },
                {
                    id: "b08", name: "Girish Park", nameLocal: "গিরিশ পার্ক", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Jorasanko Thakur Bari", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Girish Park"] },
                        { gate: "3", landmarks: ["Jorasanko Thakur Bari"] }
                    ]
                },
                {
                    id: "b09", name: "Mahatma Gandhi Road", nameLocal: "মহাত্মা গান্ধী রোড", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Marble Palace", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Mahajati Sadan Gate", "Marble Palace direction"] },
                        { gate: "2", landmarks: ["Mechua Gate"] }
                    ]
                },
                {
                    id: "b10", name: "Central", nameLocal: "সেন্ট্রাল", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "College Street / Presidency University", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "2", landmarks: ["Lal Bazaar Gate"] },
                        { gate: "4", landmarks: ["Loreto School Gate", "College Street"] },
                        { gate: "6", landmarks: ["Medical College Gate", "Presidency University"] }
                    ]
                },
                {
                    id: "b11", name: "Chandni Chowk", nameLocal: "চাঁদনি চক", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Shaheed Minar", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Hindustan Building Gate"] },
                        { gate: "4", landmarks: ["Yogayog Bhavan Gate"] },
                        { gate: "5", landmarks: ["Airlines Gate", "Shaheed Minar"] }
                    ]
                },
                {
                    id: "kol_inter_esplanade", name: "Esplanade", nameLocal: "এসপ্ল্যানেড", type: "underground",
                    isInterchange: true, interchangeWith: ["green"], landmark: "Indian Museum / Shaheed Minar", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Rani Rashmoni Gate, Curzon Park"] },
                        { gate: "2", landmarks: ["Jawaharlal Nehru Road, New Market area"] },
                        { gate: "5", landmarks: ["Green Line Interchange", "Elliot Park"] }
                    ]
                },
                {
                    id: "b13", name: "Park Street", nameLocal: "পার্ক স্ট্রিট", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Park Street (Food & Culture Hub)", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Indian Museum Gate"] },
                        { gate: "2", landmarks: ["Park Street main strip"] },
                        { gate: "3", landmarks: ["Elliot Park", "Elliot Road"] }
                    ]
                },
                {
                    id: "b14", name: "Maidan", nameLocal: "ময়দান", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Kolkata Maidan / Brigade Parade Ground", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Elliot Park Gate", "Brigade Ground direction"] },
                        { gate: "2", landmarks: ["Jeevan Deep Gate"] }
                    ]
                },
                {
                    id: "b15", name: "Rabindra Sadan", nameLocal: "রবীন্দ্র সদন", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Rabindra Sadan Cultural Centre", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "2", landmarks: ["Nandan Gate", "Rabindra Sadan Auditorium"] },
                        { gate: "3", landmarks: ["Reservation Gate", "Nehru Children's Museum"] }
                    ]
                },
                {
                    id: "b16", name: "Netaji Bhavan", nameLocal: "নেতাজি ভবন", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Netaji's House / Chowringhee", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "2", landmarks: ["Ashutosh Mukherjee Road Gate"] },
                        { gate: "4", landmarks: ["Jagubabu's Bazar", "Netaji Bhawan Museum"] }
                    ]
                },
                {
                    id: "b17", name: "Jatin Das Park", nameLocal: "যতীন দাস পার্ক", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Kalighat Mandir / Hazra", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Kalighat Mandir direction"] },
                        { gate: "2", landmarks: ["Hazra Road crossing"] }
                    ]
                },
                {
                    id: "b18", name: "Kalighat", nameLocal: "কালীঘাট", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Kalighat Mandir / Rashbehari", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Island" }, { no: 2, towards: "Dakshineswar", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Kalighat Kali Mandir Entrance"] },
                        { gate: "2", landmarks: ["Rashbehari Avenue"] }
                    ]
                },
                {
                    id: "b19", name: "Rabindra Sarobar", nameLocal: "রবীন্দ্র সরোবর", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Rabindra Sarobar Lake / Railway Station", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Rabindra Sarobar Lake Gate"] },
                        { gate: "2", landmarks: ["Suburban Railway side"] }
                    ]
                },
                {
                    id: "b20", name: "Mahanayak Uttam Kumar", nameLocal: "মহানায়ক উত্তম কুমার", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Royal Kolkata Golf Club / Tollygunge", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Royal Kolkata Golf Club"] },
                        { gate: "2", landmarks: ["Tollygunge Tram Terminus"] }
                    ]
                },
                {
                    id: "b21", name: "Netaji", nameLocal: "নেতাজি", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Netaji Nagar", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Netaji Nagar North"] },
                        { gate: "2", landmarks: ["Netaji Nagar South"] }
                    ]
                },
                {
                    id: "b22", name: "Masterda Surya Sen", nameLocal: "মাস্টারদা সূর্য সেন", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Bansdroni", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Bansdroni Main Road"] },
                        { gate: "2", landmarks: ["Netaji Colony side"] }
                    ]
                },
                {
                    id: "b23", name: "Gitanjali", nameLocal: "গীতাঞ্জলি", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Naktala / Gitanjali Park", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Naktala Junction"] },
                        { gate: "2", landmarks: ["Gitanjali Park Road"] }
                    ]
                },
                {
                    id: "b24", name: "Kavi Nazrul", nameLocal: "কবি নজরুল", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Garia Bazar", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Garia Bazar Main Road"] },
                        { gate: "2", landmarks: ["NSC Bose Road side"] }
                    ]
                },
                {
                    id: "b25", name: "Shahid Khudiram", nameLocal: "শহীদ ক্ষুদিরাম", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Briji / Dhalai Bridge", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Kavi Subhash", type: "Side" }, { no: 2, towards: "Dakshineswar", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Dhalai Bridge side", "EM Bypass access"] },
                        { gate: "2", landmarks: ["Briji Dhani Road"] }
                    ]
                },
                {
                    id: "kol_inter_kavi_subhash", name: "Kavi Subhash", nameLocal: "কবি সুভাষ", type: "elevated",
                    isInterchange: true, interchangeWith: ["orange"], landmark: "New Garia / EM Bypass", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [
                        { no: 1, towards: "Terminal", type: "Side" },
                        { no: 2, towards: "Dakshineswar", type: "Side" },
                        { no: 3, towards: "Beleghata (Orange)", type: "Island" }
                    ],
                    gates: [
                        { gate: "1", landmarks: ["New Garia Bus Terminus"] },
                        { gate: "2", landmarks: ["EM Bypass side", "Orange Line Interchange"] }
                    ]
                }
            ]
        },
        {
            id: "green",
            name: "Green Line",
            color: "#388E3C",
            colorLight: "#81C784",
            corridor: "Line 2 – Howrah Maidan ↔ Salt Lake Sector V",
            length: "16.5 km",
            totalStations: 12,
            status: "operational",
            operationalSince: "2019-02-13",
            stations: [
                {
                    id: "g01", name: "Howrah Maidan", nameLocal: "হাওড়া ময়দান", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Howrah Municipal Stadium / Howrah Bridge", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Island" }, { no: 2, towards: "Terminal", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Howrah Municipal Corporation Stadium"] },
                        { gate: "2", landmarks: ["Howrah Bridge direction", "Ramkrishnapur Ghat"] }
                    ]
                },
                {
                    id: "g02", name: "Howrah", nameLocal: "হাওড়া", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Howrah Railway Station", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Island" }, { no: 2, towards: "Howrah Maidan", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Howrah Railway Station (Main Gate)"] },
                        { gate: "2", landmarks: ["Howrah Station Bus Terminus"] }
                    ]
                },
                {
                    id: "g03", name: "Mahakaran", nameLocal: "মহাকরণ", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Writers' Building / State Secretariat", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Island" }, { no: 2, towards: "Howrah Maidan", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Writers' Building (State Secretariat)"] },
                        { gate: "2", landmarks: ["Calcutta High Court side"] }
                    ]
                },
                {
                    id: "kol_inter_esplanade", name: "Esplanade", nameLocal: "এসপ্ল্যানেড", type: "underground",
                    isInterchange: true, interchangeWith: ["blue", "purple"], landmark: "New Market / Indian Museum", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Island" }, { no: 2, towards: "Howrah Maidan", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Rani Rashmoni Gate, Curzon Park"] },
                        { gate: "2", landmarks: ["New Market, Dharmatala"] },
                        { gate: "3", landmarks: ["Blue / Purple Line Interchange"] }
                    ]
                },
                {
                    id: "g05", name: "Sealdah", nameLocal: "শিয়ালদহ", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Sealdah Railway Station", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Island" }, { no: 2, towards: "Howrah Maidan", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Sealdah Railway Station (pedestrian link)"] },
                        { gate: "2", landmarks: ["Sealdah Court", "Sealdah Flyover"] }
                    ]
                },
                {
                    id: "g06", name: "Phoolbagan", nameLocal: "ফুলবাগান", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Phoolbagan Market", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Island" }, { no: 2, towards: "Howrah Maidan", type: "Island" }],
                    gates: [
                        { gate: "1", landmarks: ["Phoolbagan Market Main Entrance"] },
                        { gate: "2", landmarks: ["Gurudas College side"] }
                    ]
                },
                {
                    id: "g07", name: "Salt Lake Stadium", nameLocal: "সল্টলেক স্টেডিয়াম", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Vivekananda Yuba Bharati Krirangan (Salt Lake Stadium)", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Side" }, { no: 2, towards: "Howrah Maidan", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Salt Lake Stadium Gate 1", "Kadapara area"] },
                        { gate: "2", landmarks: ["Stadium Exit"] }
                    ]
                },
                {
                    id: "g08", name: "Bengal Chemical", nameLocal: "বেঙ্গল কেমিক্যাল", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Mani Square / Kankurgachi", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Side" }, { no: 2, towards: "Howrah Maidan", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Mani Square Mall"] },
                        { gate: "2", landmarks: ["Bengal Chemical Post Office side"] }
                    ]
                },
                {
                    id: "g09", name: "City Centre", nameLocal: "সিটি সেন্টার", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "City Centre Mall / Salt Lake", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Side" }, { no: 2, towards: "Howrah Maidan", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["City Centre Mall Entrance"] },
                        { gate: "2", landmarks: ["Labony Estate, Salt Lake"] }
                    ]
                },
                {
                    id: "g10", name: "Central Park", nameLocal: "সেন্ট্রাল পার্ক", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Central Park / Bikash Bhawan", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Side" }, { no: 2, towards: "Howrah Maidan", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Central Park Gate"] },
                        { gate: "2", landmarks: ["Bikash Bhawan (Government Offices)"] }
                    ]
                },
                {
                    id: "g11", name: "Karunamoyee", nameLocal: "করুণাময়ী", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Karunamoyee Bus Terminal", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Salt Lake Sector V", type: "Side" }, { no: 2, towards: "Howrah Maidan", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Karunamoyee Bus Terminus"] },
                        { gate: "2", landmarks: ["Sector II side"] }
                    ]
                },
                {
                    id: "g12", name: "Salt Lake Sector V", nameLocal: "সল্টলেক সেক্টর ৫", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "IT Hub, Salt Lake Sector V", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Terminal", type: "Side" }, { no: 2, towards: "Howrah Maidan", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["TCS Gitobitan", "Techno India University"] },
                        { gate: "2", landmarks: ["Wipro / Nasscom offices", "Nabadiganta Industrial Township"] }
                    ]
                }
            ]
        },
        {
            id: "purple",
            name: "Purple Line",
            color: "#7B1FA2",
            colorLight: "#BA68C8",
            corridor: "Line 3 – Joka ↔ Majerhat",
            length: "7.75 km",
            totalStations: 7,
            status: "operational",
            operationalSince: "2022-12-30",
            stations: [
                {
                    id: "p01", name: "Joka", nameLocal: "জোকা", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Joka IIM Calcutta", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Majerhat", type: "Side" }, { no: 2, towards: "Terminal", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["IIM Calcutta Gate"] },
                        { gate: "2", landmarks: ["Joka Bus Stand"] }
                    ]
                },
                {
                    id: "p02", name: "Thakurpukur", nameLocal: "ঠাকুরপুকুর", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Thakurpukur Bazaar", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Majerhat", type: "Side" }, { no: 2, towards: "Joka", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Thakurpukur Bazaar"] },
                        { gate: "2", landmarks: ["NSC Bose Road side"] }
                    ]
                },
                {
                    id: "p03", name: "Sakher Bazar", nameLocal: "সাখের বাজার", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Sakher Bazar", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Majerhat", type: "Side" }, { no: 2, towards: "Joka", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Sakher Bazar Main Road"] },
                        { gate: "2", landmarks: ["Makardah side"] }
                    ]
                },
                {
                    id: "p04", name: "Behala Chowrasta", nameLocal: "বেহালা চৌরাস্তা", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Behala Chowrasta Crossing", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Majerhat", type: "Side" }, { no: 2, towards: "Joka", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Behala Chowrasta Crossing"] },
                        { gate: "2", landmarks: ["Diamond Park side"] }
                    ]
                },
                {
                    id: "p05", name: "Behala Bazar", nameLocal: "বেহালা বাজার", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Behala Bazar", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Majerhat", type: "Side" }, { no: 2, towards: "Joka", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Behala Bazar Main Road"] },
                        { gate: "2", landmarks: ["Taratala Road side"] }
                    ]
                },
                {
                    id: "p06", name: "Taratala", nameLocal: "তারাতলা", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Taratala Industrial Area", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Majerhat", type: "Side" }, { no: 2, towards: "Joka", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Taratala Industrial Area Gate"] },
                        { gate: "2", landmarks: ["Garden Reach Road side"] }
                    ]
                },
                {
                    id: "p07", name: "Majerhat", nameLocal: "মাজেরহাট", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Majerhat Bridge / Diamond Harbour Road", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Terminal", type: "Side" }, { no: 2, towards: "Joka", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Majerhat Bridge side"] },
                        { gate: "2", landmarks: ["Diamond Harbour Road"] }
                    ]
                }
            ]
        },
        {
            id: "orange",
            name: "Orange Line",
            color: "#F57C00",
            colorLight: "#FFB74D",
            corridor: "Line 6 – Kavi Subhash ↔ Beleghata",
            length: "5.4 km",
            totalStations: 9,
            status: "operational",
            operationalSince: "2024-10-01",
            stations: [
                {
                    id: "kol_inter_kavi_subhash", name: "Kavi Subhash", nameLocal: "কবি সুভাষ", type: "elevated",
                    isInterchange: true, interchangeWith: ["blue"], landmark: "New Garia / EM Bypass", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Beleghata", type: "Side" }, { no: 2, towards: "Terminal", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["New Garia Bus Terminus"] },
                        { gate: "2", landmarks: ["Blue Line Interchange"] }
                    ]
                },
                {
                    id: "o02", name: "Satyajit Ray", nameLocal: "সত্যজিৎ রায়", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Satyajit Ray / Subhasgram", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Beleghata", type: "Side" }, { no: 2, towards: "Kavi Subhash", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Subhasgram Road"] },
                        { gate: "2", landmarks: ["EM Bypass side"] }
                    ]
                },
                {
                    id: "o03", name: "Jyotirindra Nandi", nameLocal: "জ্যোতিরিন্দ্র নন্দী", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Kalikapur", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Beleghata", type: "Side" }, { no: 2, towards: "Kavi Subhash", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Kalikapur Crossing"] },
                        { gate: "2", landmarks: ["NSC Bose Road side"] }
                    ]
                },
                {
                    id: "o04", name: "Kavi Sukanta", nameLocal: "কবি সুকান্ত", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Regent Park", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Beleghata", type: "Side" }, { no: 2, towards: "Kavi Subhash", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Regent Park"] },
                        { gate: "2", landmarks: ["Bypass side"] }
                    ]
                },
                {
                    id: "o05", name: "Hemanta Mukhopadhyay", nameLocal: "হেমন্ত মুখোপাধ্যায়", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Kasba / Gariahat", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Beleghata", type: "Side" }, { no: 2, towards: "Kavi Subhash", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Kasba Industrial Estate side"] },
                        { gate: "2", landmarks: ["Gariahat crossing"] }
                    ]
                },
                {
                    id: "o06", name: "VIP Bazar", nameLocal: "ভিআইপি বাজার", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "VIP Bazar, Kasba", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Beleghata", type: "Side" }, { no: 2, towards: "Kavi Subhash", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["VIP Bazar"] },
                        { gate: "2", landmarks: ["Bangur Avenue side"] }
                    ]
                },
                {
                    id: "o07", name: "Ritwik Ghatak", nameLocal: "ঋত্বিক ঘটক", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Ultadanga", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Beleghata", type: "Side" }, { no: 2, towards: "Kavi Subhash", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Ultadanga Main Road"] },
                        { gate: "2", landmarks: ["Ultadanga Flyover side"] }
                    ]
                },
                {
                    id: "o08", name: "Barun Sengupta", nameLocal: "বরুণ সেনগুপ্ত", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Maniktala", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Beleghata", type: "Side" }, { no: 2, towards: "Kavi Subhash", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Maniktala Market"] },
                        { gate: "2", landmarks: ["APC Road side"] }
                    ]
                },
                {
                    id: "o09", name: "Beleghata", nameLocal: "বেলেঘাটা", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Beleghata / ID Hospital", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Terminal", type: "Side" }, { no: 2, towards: "Kavi Subhash", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Beleghata Main Road", "ID Hospital"] },
                        { gate: "2", landmarks: ["EM Bypass North side"] }
                    ]
                }
            ]
        },
        {
            id: "yellow",
            name: "Yellow Line",
            color: "#FBC02D",
            colorLight: "#FFF59D",
            corridor: "Line 4 – Noapara ↔ Biman Bandar (Airport)",
            length: "6.8 km",
            totalStations: 4,
            status: "operational",
            operationalSince: "2024-03-15",
            stations: [
                {
                    id: "kol_inter_noapara", name: "Noapara", nameLocal: "নোয়াপাড়া", type: "elevated",
                    isInterchange: true, interchangeWith: ["blue"], landmark: "Noapara (Blue Line Interchange)", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [
                        { no: 1, towards: "Biman Bandar", type: "Side" },
                        { no: 2, towards: "Terminal", type: "Side" },
                        { no: 3, towards: "Blue Line – Kavi Subhash", type: "Island" }
                    ],
                    gates: [
                        { gate: "1", landmarks: ["Noapara Junction"] },
                        { gate: "2", landmarks: ["Blue Line Interchange"] }
                    ]
                },
                {
                    id: "y02", name: "Dum Dum Cantonment", nameLocal: "দমদম ছাউনি", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Dum Dum Cantonment", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Biman Bandar", type: "Side" }, { no: 2, towards: "Noapara", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Cantonment Gate"] },
                        { gate: "2", landmarks: ["Jessore Road side"] }
                    ]
                },
                {
                    id: "y03", name: "Jessore Road", nameLocal: "যশোর রোড", type: "elevated",
                    isInterchange: false, interchangeWith: [], landmark: "Jessore Road / Airport Gate 4", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [{ no: 1, towards: "Biman Bandar", type: "Side" }, { no: 2, towards: "Noapara", type: "Side" }],
                    gates: [
                        { gate: "1", landmarks: ["Jessore Road"] },
                        { gate: "2", landmarks: ["Airport Gate 4 direction"] }
                    ]
                },
                {
                    id: "y04", name: "Biman Bandar", nameLocal: "বিমান বন্দর", type: "underground",
                    isInterchange: false, interchangeWith: [], landmark: "Netaji Subhas Chandra Bose International Airport", zone: 1,
                    contact: "139", parking: true,
                    facilities: ["First Aid Box", "CCTV", "Restrooms", "Drinking Water", "Lifts / Escalators"],
                    platforms: [
                        { no: 1, towards: "Terminal", type: "Island" },
                        { no: 2, towards: "Noapara", type: "Island" }
                    ],
                    gates: [
                        { gate: "1", landmarks: ["NSCBI Airport Terminal 1"] },
                        { gate: "2", landmarks: ["NSCBI Airport Terminal 2", "International Arrivals"] }
                    ]
                }
            ]
        }
    ]
};

export default kolkataMetro;
