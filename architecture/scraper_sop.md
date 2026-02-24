# Architecture: CMRL Station Data Scraper

## Goal
Extract detailed station information (Contact, Parking, Facilities, Platforms, Gates) for all Phase 1 stations of the Chennai Metro from `chennaimetrorail.org/station-info/`.

## Inputs
- Station Names / Line IDs
- Base URL: `https://chennaimetrorail.org/station-info/`

## Tool Logic
1. Iterate over the list of operational stations from `src/data/chennai.js`.
2. For each station, query the CMRL website.
3. Extract:
    - **Contact:** From the HelpLine/Station Number box.
    - **Parking:** Boolean if Parking is listed in facilities or gates.
    - **Facilities:** List of items in the Facilities section.
    - **Platforms:** List of Platform No and Direction.
    - **Gates:** List of Accessibilities/Entrances and corresponding landmarks.
4. Output the raw extracted data to `.tmp/cmrl_station_data.json`.
5. Once verified, parse and merge this data into `src/data/chennai.js`.

## Edge Cases
- Station name mismatches (e.g., "MGR Chennai Central" vs "Chennai Central").
- Missing pages or 404s for certain stations.
- Varied HTML structures on different station pages.
- Rate limiting by the CMRL server.

## Revisions
- *v1.0* - Initial Blueprint
