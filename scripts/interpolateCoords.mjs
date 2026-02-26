/**
 * scripts/interpolateCoords.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Computes approximate lat/lon for every station in geo-projected cities
 * (Chennai, Pune, Ahmedabad) by running the same smoothstep interpolation
 * that metroMap.js uses to place stations on the canvas.
 *
 * The waypoints come from src/data/mapLayouts.js.
 * The station counts come from the city data files (totalStations per line).
 *
 * Outputs: src/data/stationCoords.js
 *
 * Usage:  node scripts/interpolateCoords.mjs
 */

import { writeFileSync } from "fs";

// ── Smoothstep helper (same algorithm as metroMap.js) ────────────────────────
function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

function interpolateLatLon(waypoints, count) {
  const sorted = [...waypoints].sort((a, b) => a.idx - b.idx);

  // Ensure waypoints cover station 0 and (count-1)
  if (sorted[0].idx !== 0)
    sorted.unshift({ idx: 0, lat: sorted[0].lat, lon: sorted[0].lon });
  if (sorted[sorted.length - 1].idx < count - 1) {
    const last = sorted[sorted.length - 1];
    sorted.push({ idx: count - 1, lat: last.lat, lon: last.lon });
  }

  const result = [];
  for (let i = 0; i < count; i++) {
    let before = sorted[0];
    let after = sorted[sorted.length - 1];
    for (let w = 0; w < sorted.length - 1; w++) {
      if (i >= sorted[w].idx && i <= sorted[w + 1].idx) {
        before = sorted[w];
        after = sorted[w + 1];
        break;
      }
    }
    const segLen = after.idx - before.idx;
    const t = segLen > 0 ? (i - before.idx) / segLen : 0;
    const s = smoothstep(t);
    result.push({
      lat: parseFloat((before.lat + (after.lat - before.lat) * s).toFixed(5)),
      lon: parseFloat((before.lon + (after.lon - before.lon) * s).toFixed(5)),
    });
  }
  return result;
}

// ── City layout definitions ──────────────────────────────────────────────────
// Waypoints from src/data/mapLayouts.js; counts from city data files.

const GEO_CITIES = {
  ahmedabad: {
    blue: {
      count: 17,
      waypoints: [
        { idx: 0, lat: 23.051, lon: 72.502 },
        { idx: 4, lat: 23.04, lon: 72.545 },
        { idx: 7, lat: 23.033, lon: 72.568 },
        { idx: 10, lat: 23.018, lon: 72.605 },
        { idx: 11, lat: 23.007, lon: 72.618 },
        { idx: 16, lat: 23.003, lon: 72.665 },
      ],
    },
    red: {
      count: 15,
      waypoints: [
        { idx: 0, lat: 23.109, lon: 72.597 },
        { idx: 2, lat: 23.065, lon: 72.575 },
        { idx: 5, lat: 23.06, lon: 72.57 },
        { idx: 8, lat: 23.033, lon: 72.568 },
        { idx: 10, lat: 23.012, lon: 72.562 },
        { idx: 14, lat: 22.992, lon: 72.54 },
      ],
    },
    yellow: {
      count: 20,
      waypoints: [
        { idx: 0, lat: 23.109, lon: 72.597 },
        { idx: 3, lat: 23.148, lon: 72.625 },
        { idx: 7, lat: 23.167, lon: 72.633 },
        { idx: 13, lat: 23.197, lon: 72.633 },
        { idx: 15, lat: 23.21, lon: 72.595 },
        { idx: 19, lat: 23.225, lon: 72.565 },
      ],
    },
    purple: {
      count: 3,
      waypoints: [
        { idx: 0, lat: 23.167, lon: 72.633 },
        { idx: 1, lat: 23.166, lon: 72.66 },
        { idx: 2, lat: 23.165, lon: 72.685 },
      ],
    },
  },

  pune: {
    purple: {
      count: 14,
      waypoints: [
        { idx: 0, lat: 18.612, lon: 73.815 },
        { idx: 3, lat: 18.595, lon: 73.825 },
        { idx: 6, lat: 18.562, lon: 73.837 },
        { idx: 9, lat: 18.532, lon: 73.847 },
        { idx: 10, lat: 18.528, lon: 73.855 },
        { idx: 13, lat: 18.501, lon: 73.858 },
      ],
    },
    aqua: {
      count: 16,
      waypoints: [
        { idx: 0, lat: 18.506, lon: 73.811 },
        { idx: 3, lat: 18.508, lon: 73.834 },
        { idx: 6, lat: 18.515, lon: 73.844 },
        { idx: 8, lat: 18.528, lon: 73.855 },
        { idx: 10, lat: 18.528, lon: 73.874 },
        { idx: 12, lat: 18.536, lon: 73.884 },
        { idx: 15, lat: 18.561, lon: 73.926 },
      ],
    },
    pink: {
      count: 23,
      waypoints: [
        { idx: 0, lat: 18.576, lon: 73.684 },
        { idx: 2, lat: 18.583, lon: 73.714 },
        { idx: 4, lat: 18.585, lon: 73.725 },
        { idx: 6, lat: 18.591, lon: 73.740 },
        { idx: 8, lat: 18.581, lon: 73.755 },
        { idx: 10, lat: 18.568, lon: 73.773 },
        { idx: 15, lat: 18.558, lon: 73.784 },
        { idx: 18, lat: 18.553, lon: 73.824 },
        { idx: 21, lat: 18.532, lon: 73.847 },
        { idx: 22, lat: 18.528, lon: 73.855 },
      ],
    },
  },

  chennai: {
    blue: {
      count: 26,
      waypoints: [
        { idx: 0, lat: 13.175, lon: 80.325 },
        { idx: 2, lat: 13.155, lon: 80.305 },
        { idx: 6, lat: 13.125, lon: 80.285 },
        { idx: 9, lat: 13.105, lon: 80.275 },
        { idx: 12, lat: 13.08, lon: 80.275 },
        { idx: 14, lat: 13.06, lon: 80.255 },
        { idx: 16, lat: 13.05, lon: 80.255 },
        { idx: 19, lat: 13.03, lon: 80.235 },
        { idx: 22, lat: 12.995, lon: 80.198 },
        { idx: 23, lat: 12.985, lon: 80.185 },
        { idx: 25, lat: 12.98, lon: 80.17 },
      ],
    },
    green: {
      count: 17,
      waypoints: [
        { idx: 0, lat: 13.08, lon: 80.275 },
        { idx: 2, lat: 13.075, lon: 80.255 },
        { idx: 4, lat: 13.078, lon: 80.235 },
        { idx: 6, lat: 13.085, lon: 80.215 },
        { idx: 8, lat: 13.085, lon: 80.195 },
        { idx: 9, lat: 13.075, lon: 80.185 },
        { idx: 10, lat: 13.07, lon: 80.185 },
        { idx: 12, lat: 13.04, lon: 80.195 },
        { idx: 14, lat: 13.01, lon: 80.21 },
        { idx: 15, lat: 12.995, lon: 80.198 },
        { idx: 16, lat: 12.995, lon: 80.21 },
      ],
    },
    purple: {
      count: 49,
      waypoints: [
        { idx: 0, lat: 13.15, lon: 80.23 },
        { idx: 4, lat: 13.13, lon: 80.245 },
        { idx: 7, lat: 13.11, lon: 80.255 },
        { idx: 11, lat: 13.085, lon: 80.255 },
        { idx: 14, lat: 13.065, lon: 80.255 },
        { idx: 17, lat: 13.05, lon: 80.255 },
        { idx: 20, lat: 13.035, lon: 80.27 },
        { idx: 24, lat: 13.0, lon: 80.255 },
        { idx: 28, lat: 12.97, lon: 80.245 },
        { idx: 31, lat: 12.95, lon: 80.245 },
        { idx: 37, lat: 12.9, lon: 80.23 },
        { idx: 42, lat: 12.87, lon: 80.225 },
        { idx: 48, lat: 12.83, lon: 80.22 },
      ],
    },
    yellow: {
      count: 28,
      waypoints: [
        { idx: 0, lat: 13.04, lon: 80.28 },
        { idx: 2, lat: 13.035, lon: 80.27 },
        { idx: 4, lat: 13.035, lon: 80.255 },
        { idx: 6, lat: 13.03, lon: 80.24 },
        { idx: 8, lat: 13.04, lon: 80.22 },
        { idx: 11, lat: 13.04, lon: 80.195 },
        { idx: 14, lat: 13.04, lon: 80.17 },
        { idx: 18, lat: 13.04, lon: 80.145 },
        { idx: 22, lat: 13.045, lon: 80.12 },
        { idx: 27, lat: 13.05, lon: 80.1 },
      ],
    },
    red: {
      count: 48,
      waypoints: [
        { idx: 0, lat: 13.15, lon: 80.23 },
        { idx: 4, lat: 13.13, lon: 80.22 },
        { idx: 8, lat: 13.11, lon: 80.21 },
        { idx: 14, lat: 13.085, lon: 80.195 },
        { idx: 17, lat: 13.06, lon: 80.175 },
        { idx: 20, lat: 13.045, lon: 80.16 },
        { idx: 23, lat: 13.04, lon: 80.145 },
        { idx: 26, lat: 13.02, lon: 80.17 },
        { idx: 29, lat: 12.995, lon: 80.198 },
        { idx: 30, lat: 12.995, lon: 80.21 },
        { idx: 33, lat: 12.975, lon: 80.215 },
        { idx: 38, lat: 12.95, lon: 80.22 },
        { idx: 42, lat: 12.93, lon: 80.225 },
        { idx: 47, lat: 12.9, lon: 80.23 },
      ],
    },
  },

  jaipur: {
    pink: {
      count: 11,
      waypoints: [
        { idx: 0, lat: 26.8795, lon: 75.7499 },
        { idx: 2, lat: 26.8803, lon: 75.7646 },
        { idx: 6, lat: 26.9095, lon: 75.7812 },
        { idx: 7, lat: 26.9226, lon: 75.7998 },
        { idx: 8, lat: 26.9263, lon: 75.8074 },
        { idx: 10, lat: 26.9229, lon: 75.8268 },
      ],
    },
    orange: {
      count: 23,
      waypoints: [
        { idx: 0, lat: 26.78, lon: 75.82 },
        { idx: 5, lat: 26.84, lon: 75.8 },
        { idx: 10, lat: 26.886, lon: 75.805 },
        { idx: 13, lat: 26.9056, lon: 75.8155 },
        { idx: 14, lat: 26.915, lon: 75.816 },
        { idx: 15, lat: 26.918, lon: 75.802 },
        { idx: 19, lat: 26.9226, lon: 75.7998 },
        { idx: 22, lat: 26.9441, lon: 75.7763 },
      ],
    },
  },

  indore: {
    yellow: {
      count: 5,
      waypoints: [
        { idx: 0, lat: 22.7389, lon: 75.7975 },
        { idx: 2, lat: 22.755, lon: 75.808 },
        { idx: 4, lat: 22.778, lon: 75.823 },
      ],
    },
    "yellow-ext": {
      count: 26,
      waypoints: [
        { idx: 0, lat: 22.778, lon: 75.823 },
        { idx: 2, lat: 22.7899, lon: 75.8461 },
        { idx: 9, lat: 22.751, lon: 75.8954 },
        { idx: 10, lat: 22.7493, lon: 75.9035 },
        { idx: 12, lat: 22.7198, lon: 75.9061 },
        { idx: 16, lat: 22.7198, lon: 75.8676 },
        { idx: 17, lat: 22.7184, lon: 75.8547 },
        { idx: 22, lat: 22.726, lon: 75.81 },
        { idx: 24, lat: 22.73, lon: 75.8 },
        { idx: 25, lat: 22.7389, lon: 75.7975 },
      ],
    },
  },

  lucknow: {
    red: {
      count: 21,
      waypoints: [
        { idx: 0, lat: 26.7663, lon: 80.8836 },
        { idx: 1, lat: 26.7714, lon: 80.8787 },
        { idx: 2, lat: 26.7779, lon: 80.8827 },
        { idx: 7, lat: 26.8253, lon: 80.9099 },
        { idx: 8, lat: 26.832, lon: 80.9154 },
        { idx: 9, lat: 26.8324, lon: 80.9231 },
        { idx: 11, lat: 26.8416, lon: 80.9399 },
        { idx: 12, lat: 26.85, lon: 80.9416 },
        { idx: 13, lat: 26.8539, lon: 80.9368 },
        { idx: 14, lat: 26.8655, lon: 80.9395 },
        { idx: 15, lat: 26.871, lon: 80.9456 },
        { idx: 16, lat: 26.8707, lon: 80.961 },
        { idx: 20, lat: 26.888, lon: 80.996 },
      ],
    },
    blue: {
      count: 12,
      waypoints: [
        { idx: 0, lat: 26.8324, lon: 80.9231 },
        { idx: 2, lat: 26.8487, lon: 80.927 },
        { idx: 4, lat: 26.8593, lon: 80.9181 },
        { idx: 7, lat: 26.8794, lon: 80.8905 },
        { idx: 11, lat: 26.895, lon: 80.86 },
      ],
    },
  },

  agra: {
    yellow: {
      count: 6,
      waypoints: [
        { idx: 0, lat: 27.1593, lon: 78.0558 },
        { idx: 1, lat: 27.1622, lon: 78.0494 },
        { idx: 2, lat: 27.1633, lon: 78.0425 },
        { idx: 3, lat: 27.1706, lon: 78.0337 },
        { idx: 4, lat: 27.1784, lon: 78.0205 },
        { idx: 5, lat: 27.1853, lon: 78.0163 },
      ],
    },
    "yellow-uc": {
      count: 9,
      waypoints: [
        { idx: 0, lat: 27.1853, lon: 78.0163 },
        { idx: 2, lat: 27.1855, lon: 78.0027 },
        { idx: 6, lat: 27.2077, lon: 77.9775 },
        { idx: 8, lat: 27.2127, lon: 77.9501 },
      ],
    },
    blue: {
      count: 16,
      waypoints: [
        { idx: 0, lat: 27.155, lon: 78.0 },
        { idx: 3, lat: 27.17, lon: 78.007 },
        { idx: 6, lat: 27.1855, lon: 78.0027 },
        { idx: 10, lat: 27.212, lon: 78.015 },
        { idx: 12, lat: 27.206, lon: 78.026 },
        { idx: 15, lat: 27.2096, lon: 78.06 },
      ],
    },
  },

  bhopal: {
    orange: {
      count: 8,
      waypoints: [
        { idx: 0, lat: 23.21, lon: 77.456 },
        { idx: 3, lat: 23.221, lon: 77.438 },
        { idx: 7, lat: 23.243, lon: 77.425 },
      ],
    },
    "orange-ext": {
      count: 9,
      waypoints: [
        { idx: 0, lat: 23.243, lon: 77.425 },
        { idx: 1, lat: 23.25, lon: 77.42 },
        { idx: 4, lat: 23.266, lon: 77.413 },
        { idx: 8, lat: 23.305, lon: 77.404 },
      ],
    },
    blue: {
      count: 13,
      waypoints: [
        { idx: 0, lat: 23.224, lon: 77.382 },
        { idx: 3, lat: 23.242, lon: 77.402 },
        { idx: 6, lat: 23.25, lon: 77.42 },
        { idx: 9, lat: 23.257, lon: 77.455 },
        { idx: 12, lat: 23.26, lon: 77.491 },
      ],
    },
  },
  patna: {
    red: {
      count: 14,
      waypoints: [
        { idx: 0, lat: 25.6143, lon: 85.0452 },
        { idx: 3, lat: 25.6128, lon: 85.0855 },
        { idx: 6, lat: 25.6110, lon: 85.1168 },
        { idx: 9, lat: 25.6115, lon: 85.1386 },
        { idx: 13, lat: 25.5952, lon: 85.1705 },
      ],
    },
    blue: {
      count: 12,
      waypoints: [
        { idx: 0, lat: 25.6115, lon: 85.1386 },
        { idx: 2, lat: 25.6175, lon: 85.1432 },
        { idx: 3, lat: 25.6212, lon: 85.1520 },
        { idx: 4, lat: 25.6190, lon: 85.1620 },
        { idx: 5, lat: 25.6047, lon: 85.1673 },
        { idx: 6, lat: 25.6000, lon: 85.1610 },
        { idx: 8, lat: 25.5952, lon: 85.1705 },
        { idx: 11, lat: 25.5841, lon: 85.1950 },
      ],
    },
  },
};

// ── Run interpolation ────────────────────────────────────────────────────────
const result = {};
for (const [cityId, lines] of Object.entries(GEO_CITIES)) {
  result[cityId] = {};
  for (const [lineId, { count, waypoints }] of Object.entries(lines)) {
    result[cityId][lineId] = interpolateLatLon(waypoints, count);
    console.log(`  ${cityId}.${lineId}: ${count} stations → computed`);
  }
}

// ── Emit stationCoords.js ────────────────────────────────────────────────────
const lines = [
  "/**",
  " * Station Coordinate Store",
  " * ──────────────────────────────────────────────────────────────────────────",
  " * External lookup table for station geographic coordinates (WGS84).",
  " *",
  " * Geo cities (Chennai, Pune, Ahmedabad):",
  " *   Coordinates generated by scripts/interpolateCoords.mjs using smoothstep",
  " *   interpolation over the waypoints in src/data/mapLayouts.js.",
  " *   Accuracy: within ~300 m of real station positions.",
  " *",
  " * Schematic cities (Delhi, Mumbai, Bengaluru, Hyderabad, Kolkata, Nagpur):",
  " *   Coordinates to be added incrementally. Currently null.",
  " *",
  " * Usage:",
  " *   import { getStationCoords } from './stationCoords.js';",
  " *   const { lat, lon } = getStationCoords('chennai', 'blue', 3);",
  " *",
  " * Key format: cityId → lineId → stationIndex (0-based)",
  " */",
  "",
  "/** @type {Record<string, Record<string, Array<{lat:number, lon:number}>>>} */",
  "const _coords = ",
  JSON.stringify(result, null, 4) + ";",
  "",
  "/**",
  " * Returns {lat, lon} for a station, or {lat: null, lon: null} if not available.",
  " * @param {string} cityId",
  " * @param {string} lineId",
  " * @param {number} stationIndex  0-based position in the line's station array",
  " */",
  "export function getStationCoords(cityId, lineId, stationIndex) {",
  "    return _coords[cityId]?.[lineId]?.[stationIndex] ?? { lat: null, lon: null };",
  "}",
  "",
  "/** Returns true if coordinates are available for (cityId, lineId). */",
  "export function hasCoords(cityId, lineId) {",
  "    return !!(_coords[cityId]?.[lineId]?.length);",
  "}",
];

writeFileSync("src/data/stationCoords.js", lines.join("\n"), "utf8");
console.log("\n✅  src/data/stationCoords.js written.");
console.log(`    Cities: ${Object.keys(result).join(", ")}`);
const total = Object.values(result)
  .flatMap((c) => Object.values(c))
  .reduce((s, a) => s + a.length, 0);
console.log(`    Total computed: ${total} station coordinates`);
