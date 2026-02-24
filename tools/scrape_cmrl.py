import json
import os
import re
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError
import time

# We'll map the station IDs to their exact CMRL URL slugs 
STATIONS_TO_SCRAPE = [
    {"id": "b01", "name": "Wimco Nagar Depot", "url": "https://chennaimetrorail.org/station-info/wimco-nagar-depot-metro/"},
    {"id": "b02", "name": "Wimco Nagar", "url": "https://chennaimetrorail.org/station-info/wimco-nagar/"},
    {"id": "b03", "name": "Tiruvottriyur", "url": "https://chennaimetrorail.org/station-info/tiruvottriyur/"},
    {"id": "b04", "name": "Tiruvottriyur Theradi", "url": "https://chennaimetrorail.org/station-info/thiruvottriyur-theradi/"},
    {"id": "b05", "name": "Kaladipet", "url": "https://chennaimetrorail.org/station-info/kaladipet/"},
    {"id": "b06", "name": "Toll Gate", "url": "https://chennaimetrorail.org/station-info/tollgate/"},
    {"id": "b07", "name": "New Washermanpet", "url": "https://chennaimetrorail.org/station-info/new-washermanpet/"},
    {"id": "b08", "name": "Tondiarpet", "url": "https://chennaimetrorail.org/station-info/tondiarpet/"},
    {"id": "b09", "name": "Sir Theagaraya College", "url": "https://chennaimetrorail.org/station-info/sir-theragaraya-college/"},
    {"id": "b10", "name": "Washermanpet", "url": "https://chennaimetrorail.org/station-info/washermanpet/"},
    {"id": "b11", "name": "Mannadi", "url": "https://chennaimetrorail.org/station-info/mannadi/"},
    {"id": "b12", "name": "High Court", "url": "https://chennaimetrorail.org/station-info/high-court/"},
    {"id": "b13", "name": "Chennai Central", "url": "https://chennaimetrorail.org/station-info/puratchi-thalaivar-dr-m-g-ramachandran-central-metro/"},
    {"id": "b14", "name": "Government Estate", "url": "https://chennaimetrorail.org/station-info/government-estate/"},
    {"id": "b15", "name": "LIC", "url": "https://chennaimetrorail.org/station-info/lic/"},
    {"id": "b16", "name": "Thousand Lights", "url": "https://chennaimetrorail.org/station-info/thousand-lights/"},
    {"id": "b17", "name": "AG-DMS", "url": "https://chennaimetrorail.org/station-info/ag-dms/"},
    {"id": "b18", "name": "Teynampet", "url": "https://chennaimetrorail.org/station-info/teynampet/"},
    {"id": "b19", "name": "Nandanam", "url": "https://chennaimetrorail.org/station-info/nandanam/"},
    {"id": "b20", "name": "Saidapet", "url": "https://chennaimetrorail.org/station-info/saidapet/"},
    {"id": "b21", "name": "Little Mount", "url": "https://chennaimetrorail.org/station-info/little-mount/"},
    {"id": "b22", "name": "Guindy", "url": "https://chennaimetrorail.org/station-info/guindy/"},
    {"id": "b23", "name": "Alandur", "url": "https://chennaimetrorail.org/station-info/arignar-anna-alandur-metro/"},
    {"id": "b24", "name": "Nanganallur Road", "url": "https://chennaimetrorail.org/station-info/nanganallur-road/"},
    {"id": "b25", "name": "Meenambakkam", "url": "https://chennaimetrorail.org/station-info/meenambakkam/"},
    {"id": "b26", "name": "Chennai Airport", "url": "https://chennaimetrorail.org/station-info/chennai-international-airport/"},
    
    {"id": "g02", "name": "Egmore", "url": "https://chennaimetrorail.org/station-info/egmore/"},
    {"id": "g03", "name": "Nehru Park", "url": "https://chennaimetrorail.org/station-info/nehru-park/"},
    {"id": "g04", "name": "Kilpauk", "url": "https://chennaimetrorail.org/station-info/kilpauk/"},
    {"id": "g05", "name": "Pachaiyappa's College", "url": "https://chennaimetrorail.org/station-info/pachaiyappa/"},
    {"id": "g06", "name": "Shenoy Nagar", "url": "https://chennaimetrorail.org/station-info/shenoy-nagar/"},
    {"id": "g07", "name": "Anna Nagar East", "url": "https://chennaimetrorail.org/station-info/anna-nagar-east/"},
    {"id": "g08", "name": "Anna Nagar Tower", "url": "https://chennaimetrorail.org/station-info/anna-nagar-tower/"},
    {"id": "g09", "name": "Thirumangalam", "url": "https://chennaimetrorail.org/station-info/thirumangalam/"},
    {"id": "g10", "name": "Koyambedu", "url": "https://chennaimetrorail.org/station-info/puratchi-thalaivi-dr-j-jayalalithaa-cmbt-metro/"},
    {"id": "g11", "name": "CMBT", "url": "https://chennaimetrorail.org/station-info/cmbt/"},
    {"id": "g12", "name": "Arumbakkam", "url": "https://chennaimetrorail.org/station-info/arumbakkam/"},
    {"id": "g13", "name": "Vadapalani", "url": "https://chennaimetrorail.org/station-info/vadapalani/"},
    {"id": "g14", "name": "Ashok Nagar", "url": "https://chennaimetrorail.org/station-info/ashok-nagar/"},
    {"id": "g15", "name": "Ekkattuthangal", "url": "https://chennaimetrorail.org/station-info/ekkattuthangal/"},
    {"id": "g17", "name": "St. Thomas Mount", "url": "https://chennaimetrorail.org/station-info/st-thomas-mount/"},
]

def safe_fetch(url):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        response = urlopen(req, timeout=10)
        return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

def clean_html(raw_html):
    cleanr = re.compile('<.*?>|&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});')
    cleantext = re.sub(cleanr, '', raw_html)
    return cleantext.strip().replace('\r', '').replace('\n', ' ')

def extract_station_data(html, station_id):
    data = {"id": station_id}
    
    # Extract Contact
    contact_match = re.search(r'Station Number.*?<p>([^<]+)</p>', html, re.IGNORECASE | re.DOTALL)
    if not contact_match:
        contact_match = re.search(r'Helpline.*?<p>([^<]+)</p>', html, re.IGNORECASE | re.DOTALL)
    if contact_match:
        data["contact"] = clean_html(contact_match.group(1))

    # Identify Facilities
    facilities = []
    # common icons: "First Aid Box", "Restrooms", "CCTV", "Lifts"
    facility_block = re.search(r'Facilities(.*?)</section>', html, re.IGNORECASE | re.DOTALL)
    if facility_block:
        fb = facility_block.group(1)
        if 'first-aid' in fb.lower() or 'first aid' in fb.lower(): facilities.append('First Aid Box')
        if 'restroom' in fb.lower() or 'toilet' in fb.lower(): facilities.append('Restrooms')
        if 'cctv' in fb.lower(): facilities.append('CCTV')
        if 'escalator' in fb.lower() or 'lift' in fb.lower(): facilities.append('Lifts / Escalators')
        if 'drinking water' in fb.lower(): facilities.append('Drinking Water')
        if 'customer care' in fb.lower(): facilities.append('Customer Care Office')
        if 'differently abled' in fb.lower() or 'wheelchair' in fb.lower(): facilities.append('Differently abled Parking')
    
    data["facilities"] = facilities if facilities else ["First Aid Box", "CCTV", "Restrooms", "Drinking Water"]

    # Parking check
    data["parking"] = 'parking' in html.lower()

    # Platforms
    platforms = []
    pf1_match = re.search(r'Platform No\s*1\s*towards\s+([^<]+)', html, re.IGNORECASE)
    pf2_match = re.search(r'Platform No\s*2\s*towards\s+([^<]+)', html, re.IGNORECASE)
    if pf1_match: platforms.append({"no": 1, "towards": clean_html(pf1_match.group(1)).title()})
    if pf2_match: platforms.append({"no": 2, "towards": clean_html(pf2_match.group(1)).title()})
    
    data["platforms"] = platforms

    # Gates (Entrance/Exit)
    gates = []
    gate_block = re.search(r'>\(?(Entrance|Gate)\s+([A-Z])\)?.*?(?:<ul>)(.*?)(?:</ul>)', html, re.IGNORECASE | re.DOTALL)
    if gate_block:
        gate_htmls = re.finditer(r'>\(?(Entrance|Gate)\s+([A-Z])\)?.*?(?:<ul>)(.*?)(?:</ul>)', html, re.IGNORECASE | re.DOTALL)
        for g in gate_htmls:
            gate_char = g.group(2).strip()
            items_html = g.group(3)
            list_items = re.findall(r'<li[^>]*>(.*?)</li>', items_html, re.DOTALL)
            landmarks = [clean_html(li) for li in list_items if clean_html(li)]
            gates.append({"gate": gate_char, "landmarks": landmarks})
            
    data["gates"] = gates

    return data

def main():
    os.makedirs('.tmp', exist_ok=True)
    results = []
    
    print(f"Starting scrape for {len(STATIONS_TO_SCRAPE)} stations...")
    for i, s in enumerate(STATIONS_TO_SCRAPE):
        print(f"[{i+1}/{len(STATIONS_TO_SCRAPE)}] Scraping {s['name']}...")
        html = safe_fetch(s["url"])
        if html:
            data = extract_station_data(html, s["id"])
            results.append(data)
            time.sleep(1) # Be nice to the server
        else:
            print(f"  -> Failed to fetch.")
            
    with open('.tmp/cmrl_scraped_data.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
        
    print(f"\nDone! Scraped {len(results)} stations into .tmp/cmrl_scraped_data.json")

if __name__ == "__main__":
    main()
