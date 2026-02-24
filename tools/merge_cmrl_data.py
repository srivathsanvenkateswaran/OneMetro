import json
import re

def merge_data():
    try:
        with open('.tmp/cmrl_scraped_data.json', 'r', encoding='utf-8') as f:
            scraped = json.load(f)
    except FileNotFoundError:
        print("Scraped data not found.")
        return

    # Convert to dictionary for easy lookup
    scraped_dict = {s['id']: s for s in scraped}

    with open('src/data/chennai.js', 'r', encoding='utf-8') as f:
        js_data = f.read()

    # We need to find each station block: { id: '...', name: '...', ... }
    # A simple way goes line by line and looks for `id: 'xxx'`
    
    modified_lines = []
    lines = js_data.split('\n')
    i = 0
    
    merged_count = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Look for station start
        id_match = re.search(r"id:\s*'([bgryp]\d+)'", line)
        if id_match and '{' in line:
            stat_id = id_match.group(1)
            
            # Note: Little Mount (b21) is already fully detailed, skip it
            if stat_id == 'b21':
                modified_lines.append(line)
                i += 1
                continue
                
            if stat_id in scraped_dict:
                data = scraped_dict[stat_id]
                
                # Check if it's a single line station definition or multiline
                if '}' in line and not 'platforms:' in line:
                    # Single line format. Let's expand it.
                    # We only expand if we have meaningful new data.
                    contact = data.get('contact', '').strip()
                    # Filter out generic or broken contacts
                    if contact and len(contact) > 5 and 'Chennai Metro' not in contact and 'Towards' not in contact:
                        # Meaningful data found
                        merged_count += 1
                        
                        # Find the end of the object
                        end_idx = line.rfind('}')
                        before_end = line[:end_idx].rstrip()
                        after_end = line[end_idx:]
                        
                        # Format the insertions
                        insertions = []
                        if contact:
                            # Try to clean up the contact further if it has HTML remnants
                            contact_num = re.search(r'\b(1860[\d\-\s]+|044[\d\-\s]+)\b', contact)
                            if contact_num:
                                contact = contact_num.group(1).strip()
                            elif re.search(r'\d{6,}', contact):
                                contact = re.search(r'\d{6,}', contact).group(0)
                                
                            if len(contact) <= 30: # reasonable length for a phone number or short text
                                insertions.append(f"contact: '{contact}'")
                        
                        if data.get('parking'):
                            insertions.append("parking: true")
                            
                        # CMRL website has standard facilities that we'll add if parking is true (as a baseline)
                        if data.get('parking'):
                            insertions.append("facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water']")
                        
                        if insertions:
                            new_line = before_end + ", " + ", ".join(insertions) + " " + after_end
                            modified_lines.append(new_line)
                        else:
                            modified_lines.append(line)
                    else:
                        modified_lines.append(line)
                else:
                    modified_lines.append(line)
            else:
                modified_lines.append(line)
        else:
            modified_lines.append(line)
            
        i += 1

    with open('src/data/chennai.js', 'w', encoding='utf-8') as f:
        f.write('\n'.join(modified_lines))
        
    print(f"Successfully evaluated merging for scraped data. Updated {merged_count} stations.")

if __name__ == "__main__":
    merge_data()
