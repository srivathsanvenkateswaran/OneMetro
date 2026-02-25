/**
 * Canonical Station & City Data Schema
 * ─────────────────────────────────────────────────────────────────────────────
 * This file is documentation only — no runtime imports needed.
 * It defines the shape every station object and city object should conform to.
 *
 * Enforcement is by convention for now; a runtime validator can be added later.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * STATION SCHEMA
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * @typedef {Object} Station
 *
 * — Identity ──────────────────────────────────────────────────────────────────
 * @property {string}  id           Unique station ID. Convention: <linePrefix><2-digit-index>
 *                                  e.g. 'b01', 'gn15', 'dl-r03'
 * @property {string}  name         Station name in English (official branding).
 * @property {string}  nameLocal    Station name in the local language script.
 *                                  Empty string '' is acceptable if unavailable.
 *
 * — Geography (Phase 1) ───────────────────────────────────────────────────────
 * @property {number|null}  lat     Geographic latitude in decimal degrees (WGS84).
 *                                  null = not yet sourced.
 * @property {number|null}  lon     Geographic longitude in decimal degrees (WGS84).
 *                                  null = not yet sourced.
 *
 * — Physical ──────────────────────────────────────────────────────────────────
 * @property {'elevated'|'underground'|'at-grade'}  type  Platform construction type.
 *
 * — Network ───────────────────────────────────────────────────────────────────
 * @property {boolean}   isInterchange   True if this station serves multiple lines.
 * @property {string[]}  interchangeWith Array of line IDs reachable at this station.
 *                                       Empty array [] for non-interchange stations.
 *
 * — Fare (Phase 5) ────────────────────────────────────────────────────────────
 * @property {number}       zone      Display zone (used for rendering). 1-based integer.
 * @property {number|null}  fareZone  Fare calculation zone. May differ from display zone.
 *                                    null = not yet defined.
 *
 * — Operational info (optional, can be empty/default) ─────────────────────────
 * @property {string}   landmark   Nearby landmark or street address.
 * @property {string}   contact    Metro helpline / IVRS number.
 * @property {boolean}  parking    Whether P+R parking is available.
 * @property {string[]} facilities List of available facilities. Common values:
 *                                 'First Aid Box', 'CCTV', 'Restrooms',
 *                                 'Drinking Water', 'Lifts / Escalators', 'ATM',
 *                                 'Luggage Storage', 'Wi-Fi'
 * @property {Array<{no: number, towards: string}>}       platforms Platform info.
 * @property {Array<{gate: string, landmarks: string[]}>} gates     Entry/exit gate info.
 */

/**
 * EXAMPLE — Minimal compliant station object:
 *
 * {
 *   id: 'b01',
 *   name: 'Wimco Nagar Depot',
 *   nameLocal: 'விம்கோ நகர் டிப்போ',
 *   lat: 13.175,
 *   lon: 80.325,
 *   type: 'elevated',
 *   isInterchange: false,
 *   interchangeWith: [],
 *   zone: 1,
 *   fareZone: null,
 *   landmark: 'Wimco Nagar Industrial Area',
 *   contact: '1860-425-1515',
 *   parking: true,
 *   facilities: ['First Aid Box', 'CCTV', 'Restrooms', 'Drinking Water', 'Lifts / Escalators'],
 *   platforms: [{ no: 1, towards: 'Airport' }, { no: 2, towards: 'Wimco Nagar' }],
 *   gates: [{ gate: 'A', landmarks: ['Main Road Entrance'] }],
 * }
 */

// ─────────────────────────────────────────────────────────────────────────────
// CITY SCHEMA
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} Line
 * @property {string}    id                Unique line ID within the city. e.g. 'blue', 'red'
 * @property {string}    name              Display name. e.g. 'Blue Line'
 * @property {string}    color             Primary hex colour. e.g. '#2196F3'
 * @property {string}    colorLight        Lighter variant for labels/backgrounds.
 * @property {string}    corridor          Corridor description. e.g. 'East-West'
 * @property {string}    length            Route length string. e.g. '21.16 km'
 * @property {number}    totalStations     Total station count for this line.
 * @property {'operational'|'under-construction'|'planned'}  status
 * @property {string}    [operationalSince]  Year opened (operational lines only).
 * @property {string}    [expectedCompletion] Expected opening year (upcoming only).
 * @property {string}    [frequency]       Service frequency string. e.g. '5–8 min'
 * @property {string}    [firstTrain]      First departure time. e.g. '6:00 AM'
 * @property {string}    [lastTrain]       Last departure time. e.g. '11:00 PM'
 * @property {string}    [gauge]           Track gauge. e.g. 'Standard Gauge (1435 mm)'
 * @property {string}    [rollingStock]    Rolling stock manufacturer/model.
 * @property {Station[]} stations          Ordered array of Station objects.
 */

/**
 * @typedef {Object} City
 * @property {string}   id             Unique city ID (lowercase). e.g. 'chennai'
 * @property {string}   name           Metro system brand name. e.g. 'Chennai Metro Rail'
 * @property {string}   nameLocal      System name in local script.
 * @property {string}   city           City name in English.
 * @property {string}   state          State / UT name.
 * @property {string}   operator       Operating authority full name + acronym.
 * @property {number}   totalStations  Total stations (operational lines).
 * @property {string}   totalLength    Total route length (operational). e.g. '96 km'
 * @property {number}   totalLines     Number of lines (operational).
 * @property {string}   phase          Current phase description.
 * @property {string}   established    Year first line opened.
 * @property {string}   website        Official website URL.
 * @property {object}   [phase2]       Upcoming expansion info (optional).
 * @property {Line[]}   lines          All lines — operational first, then upcoming.
 */

/**
 * COORDINATE POPULATION STATUS (Phase 1)
 *
 * City         | lat/lon available | Method
 * ─────────────┼───────────────────┼──────────────────────────────────────────
 * Chennai      | ✅ All lines       | Interpolated from mapLayouts.js waypoints
 * Pune         | ✅ All lines       | Interpolated from mapLayouts.js waypoints
 * Ahmedabad    | ✅ All lines       | Interpolated from mapLayouts.js waypoints
 * Hyderabad    | ✅ All stations    | Known coords — lookup in hyderabad.js
 * Nagpur       | ✅ All stations    | Known coords — lookup in nagpur.js
 * Bengaluru    | ⏳ Pending         | Phase 1 backlog
 * Kolkata      | ⏳ Pending         | Phase 1 backlog
 * Mumbai       | ⏳ Pending         | Phase 1 backlog
 * Delhi        | ⏳ Pending         | Phase 1 backlog
 */

// This file intentionally exports nothing — it is schema documentation only.
