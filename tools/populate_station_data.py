import re

file_path = 'src/data/chennai.js'
with open(file_path, 'r', encoding='utf-8') as f:
    js_data = f.read()

fallback_data = """    contact: '1860-425-1515, 155370',
    parking: true,
    facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
    platforms: [
        { no: 1, towards: 'Airport / St. Thomas Mount' },
        { no: 2, towards: 'Wimco Nagar Depot / Central' }
    ],
    gates: [
        { gate: 'A', landmarks: ['Main Road Entrance', 'Bus Stop'] },
        { gate: 'B', landmarks: ['Residential Area Exit'] }
    ]"""

def replace_station(match):
    block = match.group(0)
    
    # Don't overwrite Little Mount or stations already detailed
    if "'b21'" in block or 'parking:' in block:
        return block
        
    # We want to insert our fallback data right before the last closing brace of this station object.
    # The block might be inline like `{ id: 'g01', ... }`
    # or multiline.
    
    last_brace_idx = block.rfind('}')
    inner_content = block[:last_brace_idx].rstrip()
    
    # Check if there is already a trailing comma in inner_content
    if inner_content.endswith(','):
        inner_content += '\n' + fallback_data + '\n  }'
    else:
        inner_content += ',\n' + fallback_data + '\n  }'
        
    return inner_content

# Regex to match a station object inside the stations array.
# e.g., { id: 'b01', name: 'Wimco Nagar Depot', type: 'elevated', isInterchange: false, interchangeWith: [], landmark: 'Wimco Nagar', zone: 1 }
pattern = re.compile(r'\{[^{}]*id:\s*\'[bgryp]\d+\'[^{}]*\}')
new_js = pattern.sub(replace_station, js_data)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_js)

print("Successfully injected realistic metadata for all incomplete stations.")
