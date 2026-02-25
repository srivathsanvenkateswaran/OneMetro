/**
 * Bengaluru Namma Metro — Complete Station & Line Data
 * Enriched with gate landmarks, platform directions, and facility data.
 */
import { getStationCoords } from "./stationCoords.js";

const purpleLineStationsData = [
    { name: 'Challaghatta', nameLocal: 'ಚಳ್ಳಘಟ್ಟ', type: 'elevated', landmark: 'Mysuru Road-Challaghatta Crossing', gates: [{ gate: '1', landmarks: ['Mysore Road South'] }, { gate: '2', landmarks: ['Mysore Road North'] }] },
    { name: 'Kengeri Bus Terminal', nameLocal: 'ಕೆಂಗೇರಿ ಬಸ್ ಟರ್ಮಿನಲ್', type: 'elevated', landmark: 'Kengeri TTMC', gates: [{ gate: '1', landmarks: ['Mysuru Road'] }, { gate: '2', landmarks: ['Kengeri Bus Terminal'] }] },
    { name: 'Kengeri', nameLocal: 'ಕೆಂಗೇರಿ', type: 'elevated', landmark: 'Kengeri Satellite Town', gates: [{ gate: '1', landmarks: ['Kengeri Market'] }, { gate: '2', landmarks: ['Satellite Town Entrance'] }] },
    { name: 'Pattanagere', nameLocal: 'ಪಟ್ಟಣಗೆರೆ', type: 'elevated', landmark: 'RV College of Engineering', gates: [{ gate: '1', landmarks: ['RV College Main Gate'] }, { gate: '2', landmarks: ['Pattanagere Village'] }] },
    { name: 'Jnanabharathi', nameLocal: 'ಜ್ಞಾನಭಾರತಿ', type: 'elevated', landmark: 'Bangalore University', gates: [{ gate: '1', landmarks: ['University Main Road'] }, { gate: '2', landmarks: ['Jnanabharathi Railway Station'] }] },
    { name: 'Rajarajeshwari Nagar', nameLocal: 'ರಾಜರಾಜೇಶ್ವರಿ ನಗರ', type: 'elevated', landmark: 'RR Nagar Arch', gates: [{ gate: '1', landmarks: ['RR Nagar Arch'] }, { gate: '2', landmarks: ['Ideal Homes Layout'] }] },
    { name: 'Nayandahalli', nameLocal: 'ನಾಯಂಡಹಳ್ಳಿ', type: 'elevated', landmark: 'Nayandahalli Flyover', gates: [{ gate: '1', landmarks: ['Mysuru Road Flyover'] }, { gate: '2', landmarks: ['Nayandahalli Rly Stn'] }] },
    { name: 'Mysuru Road', nameLocal: 'ಮೈಸೂರು ರಸ್ತೆ', type: 'elevated', landmark: 'Mysuru Road Satellite Bus Stand', gates: [{ gate: '1', landmarks: ['Satellite Bus Station (KSRTC)'] }, { gate: '2', landmarks: ['SCS Hospital'] }] },
    { name: 'Deepanjali Nagar', nameLocal: 'ದೀಪಾಂಜಲಿ ನಗರ', type: 'elevated', landmark: 'Deepanjali Nagar Market', gates: [{ gate: '1', landmarks: ['Mysuru Road Crossing'] }, { gate: '2', landmarks: ['BHEL Layout'] }] },
    { name: 'Attiguppe', nameLocal: 'ಅಟ್ಟಿಗುಪ್ಪೆ', type: 'elevated', landmark: 'Attiguppe Circle', gates: [{ gate: '1', landmarks: ['Maruthi Mandir'] }, { gate: '2', landmarks: ['Attiguppe Circle'] }] },
    { name: 'Vijayanagar', nameLocal: 'ವಿಜಯನಗರ', type: 'elevated', landmark: 'Vijayanagar BDA Complex', gates: [{ gate: '1', landmarks: ['BDA Complex'] }, { gate: '2', landmarks: ['Adichunchanagiri School'] }] },
    { name: 'Hosahalli', nameLocal: 'ಹೊಸಹಳ್ಳಿ', type: 'elevated', landmark: 'Govidaraj Nagar Crossing', gates: [{ gate: '1', landmarks: ['Govindaraj Nagar'] }, { gate: '2', landmarks: ['Hosahalli Cross'] }] },
    { name: 'Magadi Road', nameLocal: 'ಮಾಗಡಿ ರಸ್ತೆ', type: 'elevated', landmark: 'Prasanna Theatre', gates: [{ gate: '1', landmarks: ['Prasanna Theatre'] }, { gate: '2', landmarks: ['KP Agrahara'] }] },
    { name: 'Krantivira Sangolli Rayanna Railway Station', nameLocal: 'ಕ್ರಾಂತಿವೀರ ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣ ರೈಲ್ವೆ ನಿಲ್ದಾಣ', type: 'underground', isIsland: true, landmark: 'KSR Bengaluru City Junction', gates: [{ gate: '1', landmarks: ['Railway Station Main Entry'] }, { gate: '2', landmarks: ['Okalipuram'] }] },
    {
        name: 'Nadaprabhu Kempegowda Station, Majestic',
        nameLocal: 'ನಡಪ್ರಭು ಕೆಂಪೇಗೌಡ ನಿಲ್ದಾಣ, ಮೆಜೆಸ್ಟಿಕ್',
        type: 'underground',
        isIsland: true,
        isInterchange: true,
        interchangeWith: ['green'],
        landmark: 'Majestic Bus Terminus',
        gates: [
            { gate: 'A', landmarks: ['KSR Railway Station Entry'] },
            { gate: 'B', landmarks: ['KSRTC Majestic Bus Stand'] },
            { gate: 'C', landmarks: ['BMTC Bus Stand'] },
            { gate: 'D', landmarks: ['Dhanvanthri Road'] }
        ]
    },
    { name: 'Sir M. Visveshwaraya', nameLocal: 'ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯ', type: 'underground', isIsland: true, landmark: 'Central College', gates: [{ gate: '1', landmarks: ['Central College Entrance'] }, { gate: '2', landmarks: ['Maharani College'] }] },
    { name: 'Dr. B.R. Ambedkar Station, Vidhana Soudha', nameLocal: 'ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ ನಿಲ್ದಾಣ, ವಿಧಾನ ಸೌಧ', type: 'underground', isIsland: true, landmark: 'Karnataka Secretariat', gates: [{ gate: 'A', landmarks: ['Vidhana Soudha Main Gate'] }, { gate: 'B', landmarks: ['High Court / GPO'] }] },
    { name: 'Cubbon Park', nameLocal: 'ಕಬ್ಬನ್ ಪಾರ್ಕ್', type: 'underground', isIsland: true, landmark: 'Cubbon Park Entrance', gates: [{ gate: '1', landmarks: ['Cubbon Park'] }, { gate: '2', landmarks: ['Chinnaswamy Stadium Gate 1'] }] },
    { name: 'MG Road', nameLocal: 'ಎಂ.ಜಿ. ರಸ್ತೆ', type: 'underground', isIsland: true, isInterchange: true, interchangeWith: ['pink'], landmark: 'Brigade Road Junction', gates: [{ gate: 'A', landmarks: ['Brigade Road Entrance', 'MG Road'] }, { gate: 'B', landmarks: ['Church Street'] }] },
    { name: 'Trinity', nameLocal: 'ಟ್ರಿನಿಟಿ', type: 'elevated', landmark: 'Trinity Circle', gates: [{ gate: 'A', landmarks: ['Trinity Circle'] }, { gate: 'B', landmarks: ['Lido Mall / MG Road'] }] },
    { name: 'Halasuru', nameLocal: 'ಹಲಸೂರು', type: 'elevated', landmark: 'Halasuru Lake Crossing', gates: [{ gate: 'A', landmarks: ['Old Madras Road'] }, { gate: 'B', landmarks: ['Halasuru Police Station'] }] },
    { name: 'Indiranagar', nameLocal: 'ಇಂದಿರಾನಗರ', type: 'elevated', landmark: '100 Feet Road', gates: [{ gate: '1', landmarks: ['100 FT Road'] }, { gate: '2', landmarks: ['CMH Road'] }] },
    { name: 'Swami Vivekananda Road', nameLocal: 'ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ರಸ್ತೆ', type: 'elevated', landmark: 'SVR Park', gates: [{ gate: 'A', landmarks: ['SV Road Crossing'] }, { gate: 'B', landmarks: ['Old Madras Road Entrance'] }] },
    { name: 'Baiyappanahalli', nameLocal: 'ಬೈಯಪ್ಪನಹಳ್ಳಿ', type: 'elevated', landmark: 'Baiyappanahalli Yard', gates: [{ gate: 'A', landmarks: ['Railway Station Entry'] }, { gate: 'B', landmarks: ['Old Madras Road'] }] },
    { name: 'Benniganahalli', nameLocal: 'ಬೆಣ್ಣಿಗನಹಳ್ಳಿ', type: 'elevated', landmark: 'Benniganahalli Lake', gates: [{ gate: 'A', landmarks: ['Benniganahalli Flyover'] }, { gate: 'B', landmarks: ['Kasturiba Nagar'] }] },
    { name: 'K.R. Puram', nameLocal: 'ಕೆ.ಆರ್. ಪುರಂ', type: 'elevated', isInterchange: true, interchangeWith: ['blue'], landmark: 'KR Puram Flyover', gates: [{ gate: '1', landmarks: ['Railway Station Entry'] }, { gate: '2', landmarks: ['Tin Factory Exit'] }] },
    { name: 'Singayyanapalya', nameLocal: 'ಸಿಂಗಯ್ಯನಪಾಳ್ಯ', type: 'elevated', landmark: 'Phoenix Market City', gates: [{ gate: 'A', landmarks: ['Phoenix Market City'] }, { gate: 'B', landmarks: ['Mahadevapura'] }] },
    { name: 'Garudacharpalya', nameLocal: 'ಗರುಡಾಚಾರ್ಪಾಳ್ಯ', type: 'elevated', landmark: 'Brigade Metropolis', gates: [{ gate: 'A', landmarks: ['Garudacharpalya Main Road'] }, { gate: 'B', landmarks: ['Brigade Metropolis'] }] },
    { name: 'Hoodi', nameLocal: 'ಹೂಡಿ', type: 'elevated', landmark: 'Hoodi Circle', gates: [{ gate: 'A', landmarks: ['Hoodi Junction'] }, { gate: 'B', landmarks: ['Graphite India Crossing'] }] },
    { name: 'Seetharamapalya', nameLocal: 'ಸೀತಾರಾಮಪಾಳ್ಯ', type: 'elevated', landmark: 'Prestige Shantiniketan', gates: [{ gate: 'A', landmarks: ['Seetharamapalya Road'] }, { gate: 'B', landmarks: ['Prestige Shantiniketan'] }] },
    { name: 'Kundalahalli', nameLocal: 'ಕುಂದಲಹಳ್ಳಿ', type: 'elevated', landmark: 'Kundalahalli Gate', gates: [{ gate: 'A', landmarks: ['Kundalahalli Gate Circle'] }, { gate: 'B', landmarks: ['AECS Layout Crossing'] }] },
    { name: 'Nallurhalli', nameLocal: 'ನಲ್ಲೂರ್‌ಹಳ್ಳಿ', type: 'elevated', landmark: 'Whitefield TTMC Side', gates: [{ gate: 'A', landmarks: ['Nallurhalli Market'] }, { gate: 'B', landmarks: ['TTMC Entrance'] }] },
    { name: 'Sri Sathya Sai Hospital', nameLocal: 'ಶ್ರೀ ಸತ್ಯ ಸಾಯಿ ಆಸ್ಪತ್ರೆ', type: 'elevated', landmark: 'Sathya Sai Ashram', gates: [{ gate: 'A', landmarks: ['Sathya Sai Hospital Gate'] }, { gate: 'B', landmarks: ['Vydehi Institute Side'] }] },
    { name: 'Pattanduru Agrahara', nameLocal: 'ಪಟ್ಟಂದೂರ್ ಅಗ್ರಹಾರ', type: 'elevated', landmark: 'ITPL', gates: [{ gate: 'A', landmarks: ['ITPL Main Gate'] }, { gate: 'B', landmarks: ['Pattanduru Agrahara Village'] }] },
    { name: 'Kadugodi Tree Park', nameLocal: 'ಕಡುಗೋಡಿ ಟ್ರೀ ಪಾರ್ಕ್', type: 'elevated', landmark: 'Kadugodi Plantation', gates: [{ gate: 'A', landmarks: ['Tree Park Entrance'] }, { gate: 'B', landmarks: ['Kadugodi Crossing'] }] },
    { name: 'Hopefarm Channasandra', nameLocal: 'ಹೋಪ್‌ಫಾರ್ಮ್ ಚನ್ನಸಂದ್ರ', type: 'elevated', landmark: 'Hope Farm Circle', gates: [{ gate: 'A', landmarks: ['Hope Farm Junction'] }, { gate: 'B', landmarks: ['Channasandra'] }] },
    { name: 'Whitefield (Kadugodi)', nameLocal: 'ವೈಟ್‌ಫೀಲ್ಡ್ (ಕಡುಗೋಡಿ)', type: 'elevated', landmark: 'Whitefield Railway Crossing', gates: [{ gate: '1', landmarks: ['Railway Station Entry'] }, { gate: '2', landmarks: ['Kadugodi Bus Stand'] }] }
];

const greenLineStationsData = [
    { name: 'Madavara (BIEC)', nameLocal: 'ಮಾದಾವರ (BIEC)', type: 'elevated', landmark: 'BIEC Exhibition Hall', gates: [{ gate: 'A', landmarks: ['BIEC Entrance'] }, { gate: 'B', landmarks: ['Tumkur Road'] }] },
    { name: 'Chikkabidarakallu', nameLocal: 'ಚಿಕ್ಕಬಿದರಕಲ್ಲು', type: 'elevated', landmark: 'Jindal Naturecure', gates: [{ gate: 'A', landmarks: ['Chikkabidarakallu Crossing'] }, { gate: 'B', landmarks: ['Jindal Side'] }] },
    { name: 'Manjunathanagar', nameLocal: 'ಮಂಜುನಾಥನಗರ', type: 'elevated', landmark: 'Industrial Suburb', gates: [{ gate: 'A', landmarks: ['Manjunathanagar Road'] }, { gate: 'B', landmarks: ['Tumkur Road Crossing'] }] },
    { name: 'Nagasandra', nameLocal: 'ನಾಗಸಂದ್ರ', type: 'elevated', landmark: 'IKEA Bengaluru', gates: [{ gate: 'A', landmarks: ['IKEA Entrance'] }, { gate: 'B', landmarks: ['Parle-G Factory Side'] }] },
    { name: 'Dasarahalli', nameLocal: 'ದಾಸರಹಳ್ಳಿ', type: 'elevated', landmark: 'T. Dasarahalli', gates: [{ gate: 'A', landmarks: ['Dasarahalli Cross'] }, { gate: 'B', landmarks: ['Hesaraghatta Road'] }] },
    { name: 'Jalahalli', nameLocal: 'ಜಲಹಳ್ಳಿ', type: 'elevated', landmark: 'Jalahalli Cross', gates: [{ gate: 'A', landmarks: ['Jalahalli Cross'] }, { gate: 'B', landmarks: ['Air Force Colony'] }] },
    { name: 'Peenya Industry', nameLocal: 'ಪೀಣ್ಯ ಇಂಡಸ್ಟ್ರಿ', type: 'elevated', landmark: 'Peenya 1st Stage', gates: [{ gate: 'A', landmarks: ['Industrial Estate'] }, { gate: 'B', landmarks: ['SRS Road'] }] },
    { name: 'Peenya', nameLocal: 'ಪೀಣ್ಯ', type: 'elevated', landmark: 'Peenya Village Entrance', gates: [{ gate: 'A', landmarks: ['Peenya Village'] }, { gate: 'B', landmarks: ['Tumkur Road Way'] }] },
    { name: 'Goraguntepalya', nameLocal: 'ಗೊರಗುಂಟೆಪಾಳ್ಯ', type: 'elevated', landmark: 'Taj Yeshwantpur', gates: [{ gate: 'A', landmarks: ['Taj Yeshwantpur'] }, { gate: 'B', landmarks: ['People Tree Hospital'] }] },
    { name: 'Yeshwanthpur', nameLocal: 'ಯಶವಂತಪುರ', type: 'elevated', landmark: 'Yeshwanthpur Junction', gates: [{ gate: '1', landmarks: ['Railway Station Platform 6 Entry'] }, { gate: '2', landmarks: ['Govardhan Theatre Side'] }] },
    { name: 'Sandal Soap Factory', nameLocal: 'ಶ್ರೀಗಂಧ ಸೋಪ್ ಕಾರ್ಖಾನೆ', type: 'elevated', landmark: 'ISKCON Temple', gates: [{ gate: 'A', landmarks: ['Sandal Soap Factory'] }, { gate: 'B', landmarks: ['ISKCON Temple Entrance'] }] },
    { name: 'Mahalakshmi', nameLocal: 'ಮಹಾಲಕ್ಷ್ಮಿ', type: 'elevated', landmark: 'Mahalakshmi Layout Entrance', gates: [{ gate: 'A', landmarks: ['Mahalakshmi Layout'] }, { gate: 'B', landmarks: ['West of Chord Road'] }] },
    { name: 'Rajajinagar', nameLocal: 'ರಾಜಾಜಿನಗರ', type: 'elevated', landmark: 'Rajajinagar 1st Block', gates: [{ gate: 'A', landmarks: ['Rajajinagar Entrance'] }, { gate: 'B', landmarks: ['Dr. Rajkumar Road'] }] },
    { name: 'Mahakavi Kuvempu Road', nameLocal: 'ಮಹಾಕವಿ ಕುವೆಂಪು ರಸ್ತೆ', type: 'elevated', landmark: 'Kuvempu Road Crossing', gates: [{ gate: 'A', landmarks: ['Kuvempu Road'] }, { gate: 'B', landmarks: ['Malleshwara Link Road'] }] },
    { name: 'Srirampura', nameLocal: 'ಶ್ರೀರಾಂಪುರ', type: 'elevated', landmark: 'Srirampura Market', gates: [{ gate: 'A', landmarks: ['Srirampura Police Station'] }, { gate: 'B', landmarks: ['Devaiah Park'] }] },
    { name: 'Mantri Square Sampige Road', nameLocal: 'ಮಂತ್ರಿ ಸ್ಕ್ವೇರ್ ಸಂಪಿಗೆ ರಸ್ತೆ', type: 'elevated', landmark: 'Sampige Road Mall', gates: [{ gate: 'A', landmarks: ['Mantri Square Mall Entry'] }, { gate: 'B', landmarks: ['Sampige Road Walkway'] }] },
    {
        name: 'Nadaprabhu Kempegowda Station, Majestic',
        nameLocal: 'ನಡಪ್ರಭು ಕೆಂಪೇಗೌಡ ನಿಲ್ದಾಣ, ಮೆಜೆಸ್ಟಿಕ್',
        type: 'underground',
        isIsland: true,
        isInterchange: true,
        interchangeWith: ['purple'],
        landmark: 'Central Majestic Hub',
        gates: [{ gate: 'A', landmarks: ['Railway Station Entry'] }, { gate: 'B', landmarks: ['KSRTC Bus Stand'] }]
    },
    { name: 'Chickpete', nameLocal: 'ಚಿಕ್ಕಪೇಟೆ', type: 'underground', isIsland: true, landmark: 'BVK Iyengar Road crossing', gates: [{ gate: '1', landmarks: ['Chickpete Market'] }, { gate: '2', landmarks: ['BVK Iyengar Road'] }] },
    { name: 'Krishna Rajendra Market', nameLocal: 'ಕೃಷ್ಣ ರಾಜೇಂದ್ರ ಮಾರುಕಟ್ಟೆ', type: 'underground', isIsland: true, landmark: 'Victoria Hospital', gates: [{ gate: '1', landmarks: ['Victoria Hospital Gate'] }, { gate: '2', landmarks: ['KR Market Flower Market'] }] },
    { name: 'National College', nameLocal: 'ನ್ಯಾಷನಲ್ ಕಾಲೇಜ್', type: 'elevated', landmark: 'Basavanagudi Market Side', gates: [{ gate: 'A', landmarks: ['National College'] }, { gate: 'B', landmarks: ['Vanivilas Road'] }] },
    { name: 'Lalbagh', nameLocal: 'ಲಾಲ್‌ಬಾಗ್', type: 'elevated', landmark: 'Lalbagh Botanical Garden', gates: [{ gate: 'A', landmarks: ['Lalbagh West Gate'] }, { gate: 'B', landmarks: ['RV Road Entrance'] }] },
    { name: 'South End Circle', nameLocal: 'ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್', type: 'elevated', landmark: 'South End Circle Link', gates: [{ gate: 'A', landmarks: ['South End Circle'] }, { gate: 'B', landmarks: ['NMKRV College'] }] },
    { name: 'Jayanagar', nameLocal: 'ಜಯನಗರ', type: 'elevated', landmark: 'Jayanagar 4th Block', gates: [{ gate: 'A', landmarks: ['Jayanagar 4th Block Complex'] }, { gate: 'B', landmarks: ['Cool Joint Junction'] }] },
    { name: 'Rashtreeya Vidyalaya Road', nameLocal: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾಲಯ ರಸ್ತೆ', type: 'elevated', isInterchange: true, interchangeWith: ['yellow'], landmark: 'RV Road Park', gates: [{ gate: 'A', landmarks: ['RV Road Crossing'] }, { gate: 'B', landmarks: ['Laxman Rao Boulevard'] }] },
    { name: 'Banashankari', nameLocal: 'ಬನಶಂಕರಿ', type: 'elevated', landmark: 'Banashankari Temple', gates: [{ gate: 'A', landmarks: ['Banashankari Temple Gate'] }, { gate: 'B', landmarks: ['BMTC Bus Stand Entrance'] }] },
    { name: 'J.P. Nagar', nameLocal: 'ಜೆ.ಪಿ. ನಗರ', type: 'elevated', landmark: 'Sarakki Signal', gates: [{ gate: 'A', landmarks: ['Sarakki Circle'] }, { gate: 'B', landmarks: ['24th Main Road'] }] },
    { name: 'Yelachenahalli', nameLocal: 'ಯಲೆಚೇನಹಳ್ಳಿ', type: 'elevated', landmark: 'Kanakapura Road Junction', gates: [{ gate: 'A', landmarks: ['Sushruthi Hospital'] }, { gate: 'B', landmarks: ['Kanakapura Road Way'] }] },
    { name: 'Konanakunte Cross', nameLocal: 'ಕೊಣನಕುಂಟೆ ಕ್ರಾಸ್', type: 'elevated', landmark: 'Forum South Mall', gates: [{ gate: 'A', landmarks: ['Forum South Mall Entrance'] }, { gate: 'B', landmarks: ['Konanakunte Cross'] }] },
    { name: 'Doddakallasandra', nameLocal: 'ದೊಡ್ಡಕಲ್ಲಸಂದ್ರ', type: 'elevated', landmark: 'Kanakapura Road Side', gates: [{ gate: 'A', landmarks: ['Doddakallasandra Village'] }, { gate: 'B', landmarks: ['Main Road Entrance'] }] },
    { name: 'Vajrahalli', nameLocal: 'ವಜ್ರಹಳ್ಳಿ', type: 'elevated', landmark: 'Vajrahalli Link', gates: [{ gate: 'A', landmarks: ['Vajrahalli Village Way'] }, { gate: 'B', landmarks: ['Kanakapura Road Crossing'] }] },
    { name: 'Thalaghattapura', nameLocal: 'ತಲಘಟ್ಟಪುರ', type: 'elevated', landmark: 'NICE Road Junction', gates: [{ gate: 'A', landmarks: ['Thalaghattapura Market'] }, { gate: 'B', landmarks: ['NICE Road Entrance'] }] },
    { name: 'Silk Institute', nameLocal: 'ಸಿಲ್ಕ್ ಇನ್‌ಸ್ಟಿಟ್ಯೂಟ್', type: 'elevated', landmark: 'Kanakapura Silk Institute', gates: [{ gate: 'A', landmarks: ['Art of Living Side'] }, { gate: 'B', landmarks: ['Silk Institute Main Gate'] }] }
];

const yellowLineStationsData = [
    { name: 'Rashtreeya Vidyalaya Road', nameLocal: 'ರಾಷ್ಟ್ರೀಯ ವಿದ್ಯಾಲಯ ರಸ್ತೆ', type: 'elevated', isInterchange: true, interchangeWith: ['green'], landmark: 'RV Road Interchange' },
    { name: 'Ragigudda', nameLocal: 'ರಾಗಿಗುಡ್ಡ', type: 'elevated', landmark: 'Ragigudda Anjaneya Temple' },
    { name: 'Jayadeva Hospital', nameLocal: 'ಜಯದೇವ ಆಸ್ಪತ್ರೆ', type: 'elevated', isInterchange: true, interchangeWith: ['pink'], landmark: 'Jayadeva Interchange' },
    { name: 'BTM Layout', nameLocal: 'ಬಿಟಿಎಂ ಲೇಔಟ್', type: 'elevated', landmark: 'BTM 2nd Stage' },
    { name: 'Central Silk Board', nameLocal: 'ಸೆಂಟ್ರಲ್ ಸಿಲ್ಕ್ ಬೋರ್ಡ್', type: 'elevated', isInterchange: true, interchangeWith: ['blue'], landmark: 'Silk Board Junction' },
    { name: 'Bommanahalli', nameLocal: 'ಬೊಮ್ಮನಹಳ್ಳಿ', type: 'elevated', landmark: 'Bommanahalli' },
    { name: 'Hongasandra', nameLocal: 'ಹೊಂಗಸಂದ್ರ', type: 'elevated', landmark: 'Hongasandra' },
    { name: 'Kudlu Gate', nameLocal: 'ಕುಡ್ಲು ಗೇಟ್', type: 'elevated', landmark: 'Kudlu Gate' },
    { name: 'Singasandra', nameLocal: 'ಸಿಂಗಸಂದ್ರ', type: 'elevated', landmark: 'Singasandra' },
    { name: 'Hosa Road', nameLocal: 'ಹೊಸ ರಸ್ತೆ', type: 'elevated', landmark: 'Hosa Road' },
    { name: 'Beratena Agrahara', nameLocal: 'ಬೆರಟೇನ ಅಗ್ರಹಾರ', type: 'elevated', landmark: 'Beratena Agrahara' },
    { name: 'Electronic City', nameLocal: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ', type: 'elevated', landmark: 'ECity Phase 1' },
    { name: 'Konappana Agrahara', nameLocal: 'ಕೊಣಪ್ಪನ ಅಗ್ರಹಾರ', type: 'elevated', landmark: 'Infosys Foundation', gates: [{ gate: '1', landmarks: ['Infosys Campus'] }, { gate: '2', landmarks: ['Electronic City Phase 2'] }] },
    { name: 'Huskur Road', nameLocal: 'ಹುಸ್ಕೂರ್ ರಸ್ತೆ', type: 'elevated', landmark: 'Huskur Road' },
    { name: 'Hebbagodi', nameLocal: 'ಹೆಬ್ಬಗೋಡಿ', type: 'elevated', landmark: 'Hebbagodi' },
    { name: 'Bommasandra', nameLocal: 'ಬೊಮ್ಮಸಂದ್ರ', type: 'elevated', landmark: 'Bommasandra Industrial Area' }
];

function buildStation(st, idPrefix, idx, lineId) {
    let towards1 = 'Terminal 1';
    let towards2 = 'Terminal 2';

    if (lineId === 'purple') {
        towards1 = 'Whitefield (Kadugodi)';
        towards2 = 'Challaghatta';
    } else if (lineId === 'green') {
        towards1 = 'Silk Institute';
        towards2 = 'Madavara (BIEC)';
    } else if (lineId === 'yellow') {
        towards1 = 'Bommasandra';
        towards2 = 'Rashtreeya Vidyalaya Road';
    } else if (lineId === 'pink') {
        towards1 = 'Nagawara';
        towards2 = 'Kalena Agrahara';
    } else if (lineId === 'blue') {
        towards1 = 'KIA Terminals';
        towards2 = 'Central Silk Board';
    }

    const baseFacilities = [
        'Lifts',
        'Escalators',
        'CCTV',
        'Restrooms',
        'Drinking Water',
        'First Aid',
        'Customer Care',
        'Smart Card Top-up'
    ];

    if (lineId === 'pink' && st.type === 'underground') {
        baseFacilities.push('Full-height Platform Screen Doors (PSDs)');
    } else if (lineId === 'yellow') {
        baseFacilities.push('Half-height Platform Screen Doors (PSDs)');
    }

    return {
        id: `${idPrefix}${String(idx + 1).padStart(2, '0')}`,
        name: st.name,
        nameLocal: st.nameLocal,
        type: st.type,
        isInterchange: st.isInterchange || false,
        interchangeWith: st.interchangeWith || [],
        landmark: st.landmark,
        zone: 1,
        parking: true,
        facilities: baseFacilities,
        platforms: [
            { no: 1, towards: towards1, type: st.isIsland ? 'Island' : 'Side' },
            { no: 2, towards: towards2, type: st.isIsland ? 'Island' : 'Side' }
        ],
        gates: st.gates || [
            { gate: 'A', landmarks: [st.landmark || 'Main Entrance'] },
            { gate: 'B', landmarks: ['Secondary Exit'] }
        ]
    };
}

const bengaluruMetro = {
    id: 'bengaluru',
    name: 'Namma Metro',
    nameLocal: 'ನಮ್ಮ ಮೆಟ್ರೋ',
    city: 'Bengaluru',
    state: 'Karnataka',
    operator: 'Bangalore Metro Rail Corporation Limited (BMRCL)',
    totalStations: 85,
    totalLength: '85 km',
    totalLines: 3,
    phase: 'Phase 1 + 2 (Operational)',
    established: '2011',
    website: 'https://english.bmrc.co.in',

    lines: [
        {
            id: 'purple',
            name: 'Purple Line',
            color: '#9C27B0',
            colorLight: '#CE93D8',
            corridor: 'East-West',
            length: '43.49 km',
            totalStations: 37,
            status: 'operational',
            operationalSince: '2011-10-20',
            frequency: '5–10 min',
            firstTrain: '5:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'BEML',
            stations: purpleLineStationsData.map((st, i) => buildStation(st, 'pp', i, 'purple'))
        },
        {
            id: 'green',
            name: 'Green Line',
            color: '#4CAF50',
            colorLight: '#81C784',
            corridor: 'North-South',
            length: '33.46 km',
            totalStations: 32,
            status: 'operational',
            operationalSince: '2014-03-01',
            frequency: '5–10 min',
            firstTrain: '5:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'BEML',
            stations: greenLineStationsData.map((st, i) => buildStation(st, 'gn', i, 'green'))
        },
        {
            id: 'yellow',
            name: 'Yellow Line',
            color: '#FFD700',
            colorLight: '#FFF176',
            corridor: 'South (RV Road - Bommasandra)',
            length: '19.15 km',
            totalStations: 16,
            status: 'operational',
            operationalSince: '2025',
            frequency: '8–12 min',
            firstTrain: '5:00 AM',
            lastTrain: '11:00 PM',
            gauge: 'Standard Gauge (1435 mm)',
            rollingStock: 'BEML / CRRC',
            stations: yellowLineStationsData.map((st, i) => buildStation(st, 'yl', i, 'yellow'))
        },
        {
            id: 'pink',
            name: 'Pink Line',
            color: '#E91E63',
            colorLight: '#F48FB1',
            corridor: 'South-North (UC)',
            length: '21.25 km',
            totalStations: 18,
            status: 'under-construction',
            expectedCompletion: '2026',
            stations: [
                { id: 'pk01', name: 'Kalena Agrahara', type: 'elevated', landmark: 'Bannerghatta Road' },
                { id: 'pk11', name: 'MG Road', type: 'underground', isIsland: true, landmark: 'Interchange Junction' },
                { id: 'pk18', name: 'Nagawara', type: 'underground', isIsland: true, landmark: 'Nagawara Terminal' }
            ].map((st, i) => buildStation(st, 'pk', i, 'pink'))
        }
    ]
};

bengaluruMetro.lines.forEach(line => {
    line.stations = line.stations.map((st, i) => ({
        ...st,
        ...getStationCoords('bengaluru', line.id, i)
    }));
});

export default bengaluruMetro;
