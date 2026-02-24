import json
import os
import re
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError

def safe_fetch(url):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urlopen(req, timeout=10)
        return response.read().decode('utf-8')
    except HTTPError as e:
        print(f"HTTPError: {e.code} for {url}")
        return None
    except URLError as e:
        print(f"URLError: {e.reason} for {url}")
        return None
    except Exception as e:
        print(f"Error: {e} for {url}")
        return None

def test_connection():
    print("Testing connection to CMRL Station Info page...")
    url = "https://chennaimetrorail.org/station-info/"
    html = safe_fetch(url)
    
    if html:
        print("Success! Connection established.")
        
        # Look for the dropdown list of stations to see if we can easily grab the exact URLs from the site
        # <select name="station" id="station" ...><option value="http://chennaimetrorail.org/station-info/wimco-nagar/">Wimco Nagar</option>...
        
        select_match = re.search(r'<select[^>]*name="station"[^>]*>(.*?)</select>', html, re.IGNORECASE | re.DOTALL)
        if select_match:
            options_html = select_match.group(1)
            options = re.findall(r'<option\s+value="([^"]+)">([^<]+)</option>', options_html)
            
            valid_stations = []
            for url, name in options:
                if url.startswith('http') and url != '#':
                    valid_stations.append({"name": name.strip(), "url": url.strip()})
                    
            print(f"Found {len(valid_stations)} station URLs in the dropdown menu.")
            
            os.makedirs('.tmp', exist_ok=True)
            with open('.tmp/cmrl_station_urls.json', 'w', encoding='utf-8') as f:
                json.dump(valid_stations, f, indent=2, ensure_ascii=False)
                
            print("Saved extracted URLs to .tmp/cmrl_station_urls.json")
            return valid_stations
    else:
        print("Failed to connect.")
        return None

if __name__ == "__main__":
    test_connection()
