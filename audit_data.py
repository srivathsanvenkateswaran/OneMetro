
import re

with open(r'c:\Users\sriva\Documents\Work\Coding\BharatOne\src\data\chennai.js', 'r', encoding='utf-8') as f:
    content = f.read()

def get_line_stations(line_id):
    match = re.search(f"id: '{line_id}',.*?stations: \\[(.*?)\\]", content, re.DOTALL)
    if not match: return []
    # Split specifically by station objects using a more reliable lookahead/behind
    # We look for { id: '...' and then find the corresponding }
    stations_str = match.group(1)
    # Finding blocks
    blocks = []
    # Simplified regex for sid and name to start blocks
    matches = list(re.finditer(r"id: '([bg]\d{2})', name: '(.*?)'", stations_str))
    for i in range(len(matches)):
        start = matches[i].start()
        end = matches[i+1].start() if i+1 < len(matches) else len(stations_str)
        blocks.append((matches[i].group(1), matches[i].group(2), stations_str[start:end]))
    return blocks

print("Operational Stations Audit:")
for color in ['blue', 'green']:
    print(f"\n--- {color.upper()} LINE ---")
    stations = get_line_stations(color)
    for sid, name, block in stations:
        # Check for missing fields
        missing = []
        if 'contact:' not in block: missing.append('contact')
        if 'gates:' not in block: missing.append('gates')
        if 'platforms:' not in block: missing.append('platforms')
        if 'facilities:' not in block: missing.append('facilities')
        
        # Check for placeholder values
        fillers = []
        if '1860-425-1515' in block: fillers.append('filler_contact')
        if 'Main Road Entrance' in block: fillers.append('filler_gates')
        if 'Wimco Nagar Depot / Central' in block: fillers.append('filler_platforms')
        
        # Check for empty strings
        empty = []
        if "nameLocal: ''" in block or 'nameLocal: ""' in block: empty.append('nameLocal')
        if "landmark: ''" in block or 'landmark: ""' in block: empty.append('landmark')

        if missing or fillers or empty:
            status = []
            if missing: status.append(f"MISSING: {missing}")
            if fillers: status.append(f"FILLERS: {fillers}")
            if empty: status.append(f"EMPTY: {empty}")
            print(f"{sid} {name: <25} | {' | '.join(status)}")
