const kochiData = {
    id: 'kochi',
    name: 'Kochi',
    nameLocal: 'കൊച്ചി',
    metroName: 'Kochi Metro',
    state: 'Kerala',
    totalStations: 39,
    totalLength: '45.3 km',
    totalLines: 4,
    phase1: true,
    phase2: true,
    lines: [
        {
            id: 'blue',
            name: 'Blue Line',
            color: '#0070bb',
            colorLight: '#0070bb40',
            corridor: 'Aluva - Tripunithura Terminal',
            length: '28.1 km',
            totalStations: 25,
            operationalSince: '2017-06-17',
            status: 'operational',
            stations: [
                { id: 'aluva', name: 'Aluva', nameLocal: 'ആലുവ', type: 'elevated', isInterchange: false },
                { id: 'pulinchodu', name: 'Pulinchodu', nameLocal: 'പുളിഞ്ചോട്', type: 'elevated', isInterchange: false },
                { id: 'companypady', name: 'Companypady', nameLocal: 'കമ്പനിപ്പടി', type: 'elevated', isInterchange: false },
                { id: 'ambattukavu', name: 'Ambattukavu', nameLocal: 'അമ്പാട്ടുകാവ്', type: 'elevated', isInterchange: false },
                { id: 'muttom', name: 'Muttom', nameLocal: 'മുട്ടം', type: 'elevated', isInterchange: false },
                { id: 'kalamassery', name: 'Kalamassery', nameLocal: 'കളമശ്ശേരി', type: 'elevated', isInterchange: false },
                { id: 'cusat', name: 'Cochin University', nameLocal: 'കൊച്ചിൻ യൂണിവേഴ്സിറ്റി', type: 'elevated', isInterchange: false },
                { id: 'pathadipalam', name: 'Pathadipalam', nameLocal: 'പത്തടിപ്പാലം', type: 'elevated', isInterchange: false },
                { id: 'edapally', name: 'Edapally', nameLocal: 'ഇടപ്പള്ളി', type: 'elevated', isInterchange: false },
                { id: 'changampuzha_park', name: 'Changampuzha Park', nameLocal: 'ചങ്ങമ്പുഴ പാർക്ക്', type: 'elevated', isInterchange: false },
                { id: 'palarivattom', name: 'Palarivattom', nameLocal: 'പാലാരിവട്ടം', type: 'elevated', isInterchange: false },
                { id: 'jln_stadium', name: 'JLN Stadium', nameLocal: 'ജെ.എൽ.എൻ സ്റ്റേഡിയം', type: 'elevated', isInterchange: true, interchangeWith: ['pink'] },
                { id: 'kaloor', name: 'Kaloor', nameLocal: 'കലൂർ', type: 'elevated', isInterchange: false },
                { id: 'town_hall', name: 'Town Hall', nameLocal: 'ടൗൺ ഹാൾ', type: 'elevated', isInterchange: false },
                { id: 'mg_road', name: 'M.G Road', nameLocal: 'എം.ജി റോഡ്', type: 'elevated', isInterchange: false },
                { id: 'maharajas_college', name: 'Maharaja\'s College', nameLocal: 'മഹാരാജാസ് കോളേജ്', type: 'elevated', isInterchange: false },
                { id: 'ernakulam_south', name: 'Ernakulam South', nameLocal: 'എറണാകുളം സൗത്ത്', type: 'elevated', isInterchange: false },
                { id: 'kadavanthra', name: 'Kadavanthra', nameLocal: 'കടവന്ത്ര', type: 'elevated', isInterchange: false },
                { id: 'elamkulam', name: 'Elamkulam', nameLocal: 'എളംകുളം', type: 'elevated', isInterchange: false },
                { id: 'vyttila', name: 'Vyttila', nameLocal: 'വൈറ്റില', type: 'elevated', isInterchange: true, interchangeWith: ['water_2'] },
                { id: 'thaikoodam', name: 'Thaikoodam', nameLocal: 'തൈക്കൂടം', type: 'elevated', isInterchange: false },
                { id: 'petta', name: 'Petta', nameLocal: 'പേട്ട', type: 'elevated', isInterchange: false },
                { id: 'sn_junction', name: 'SN Junction', nameLocal: 'എസ്.എൻ ജംഗ്ഷൻ', type: 'elevated', isInterchange: false },
                { id: 'vadakkekotta', name: 'Vadakkekotta', nameLocal: 'വടക്കേക്കോട്ട', type: 'elevated', isInterchange: false },
                { id: 'tripunithura', name: 'Tripunithura Terminal', nameLocal: 'തൃപ്പൂണിത്തുറ ടെർമിനൽ', type: 'elevated', isInterchange: false }
            ]
        },
        {
            id: 'pink',
            name: 'Pink Line (Phase 2)',
            color: '#e91e63',
            colorLight: '#e91e6340',
            corridor: 'JLN Stadium - Infopark',
            length: '11.2 km',
            totalStations: 11,
            status: 'upcoming',
            stations: [
                { id: 'jln_stadium', name: 'JLN Stadium', nameLocal: 'ജെ.എൽ.എൻ സ്റ്റേഡിയം', type: 'elevated', isInterchange: true, interchangeWith: ['blue'] },
                { id: 'palarivattom_junction', name: 'Palarivattom Junction', nameLocal: 'പാലാരിവട്ടം ജംഗ്ഷൻ', type: 'elevated', isInterchange: false },
                { id: 'palarivattom_bypass', name: 'Palarivattom Bypass', nameLocal: 'പാലാരിവട്ടം ബൈപാസ്', type: 'elevated', isInterchange: false },
                { id: 'chembumukku', name: 'Chembumukku', nameLocal: 'ചെമ്പുമുക്ക്', type: 'elevated', isInterchange: false },
                { id: 'vazhakkala', name: 'Vazhakkala', nameLocal: 'വാഴക്കാല', type: 'elevated', isInterchange: false },
                { id: 'padamughal', name: 'Padamughal', nameLocal: 'പടമുകൾ', type: 'elevated', isInterchange: false },
                { id: 'kakkanad_junction', name: 'Kakkanad Junction', nameLocal: 'കാക്കനാട് ജംഗ്ഷൻ', type: 'elevated', isInterchange: true, interchangeWith: ['water_2'] },
                { id: 'cochin_sez', name: 'Cochin SEZ', nameLocal: 'കൊച്ചിൻ സെസ്', type: 'elevated', isInterchange: false },
                { id: 'chittethukara', name: 'Chittethukara', nameLocal: 'ചിറ്റേത്തുകര', type: 'elevated', isInterchange: false },
                { id: 'kinfra', name: 'KINFRA', nameLocal: 'കിൻഫ്ര', type: 'elevated', isInterchange: false },
                { id: 'infopark', name: 'Infopark', nameLocal: 'ഇൻഫോപാർക്ക്', type: 'elevated', isInterchange: false }
            ]
        },
        {
            id: 'water_1',
            name: 'Water Metro: High Court - Vypin',
            color: '#00bcd4',
            colorLight: '#00bcd440',
            corridor: 'High Court - Vypin',
            length: '4.8 km',
            totalStations: 2,
            status: 'operational',
            stations: [
                { id: 'wm_highcourt', name: 'High Court Terminal', nameLocal: 'ഹൈക്കോടതി', type: 'water', isInterchange: false },
                { id: 'wm_vypin', name: 'Vypin', nameLocal: 'വൈപ്പിൻ', type: 'water', isInterchange: false }
            ]
        },
        {
            id: 'water_2',
            name: 'Water Metro: Vyttila - Kakkanad',
            color: '#00bcd4',
            colorLight: '#00bcd440',
            corridor: 'Vyttila - Kakkanad',
            length: '7.5 km',
            totalStations: 2,
            status: 'operational',
            stations: [
                { id: 'vyttila', name: 'Vyttila', nameLocal: 'വൈറ്റില', type: 'elevated', isInterchange: true, interchangeWith: ['blue'] },
                { id: 'kakkanad_junction', name: 'Kakkanad Junction', nameLocal: 'കാക്കനാട് ജംഗ്ഷൻ', type: 'elevated', isInterchange: true, interchangeWith: ['pink'] }
            ]
        },
        {
            id: 'water_3',
            name: 'Water Metro: High Court - Fort Kochi',
            color: '#00bcd4',
            colorLight: '#00bcd440',
            corridor: 'High Court - Fort Kochi',
            length: '6.2 km',
            totalStations: 2,
            status: 'operational',
            stations: [
                { id: 'wm_highcourt', name: 'High Court Terminal', nameLocal: 'ഹൈക്കോടതി', type: 'water', isInterchange: false },
                { id: 'wm_fortkochi', name: 'Fort Kochi', nameLocal: 'ഫോർട്ട് കൊച്ചി', type: 'water', isInterchange: false }
            ]
        },
        {
            id: 'water_4',
            name: 'Water Metro: High Court - South Chittoor',
            color: '#00bcd4',
            colorLight: '#00bcd440',
            corridor: 'High Court - South Chittoor',
            length: '8.4 km',
            totalStations: 3,
            status: 'operational',
            stations: [
                { id: 'wm_highcourt', name: 'High Court Terminal', nameLocal: 'ഹൈക്കോടതി', type: 'water', isInterchange: false },
                { id: 'wm_bolgatty', name: 'Bolgatty', nameLocal: 'ബോൾഗാട്ടി', type: 'water', isInterchange: false },
                { id: 'wm_south_chittoor', name: 'South Chittoor', nameLocal: 'സൗത്ത് ചിറ്റൂർ', type: 'water', isInterchange: false }
            ]
        }
    ]
};

export default kochiData;
