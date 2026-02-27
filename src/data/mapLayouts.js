/**
 * Map Layout Registry
 * ───────────────────────────────────────────────────────────────────────────
 * Stores all city-specific layout data: canvas config + per-line waypoints.
 * metroMap.js reads from this file so it contains ZERO city-specific logic.
 *
 * Adding a new city map:
 *   1. Add an entry to `mapLayouts` here — nothing else in metroMap.js needs
 *      to change.
 *
 * Two layout types:
 *   • 'geo'       — Waypoints carry { idx, lat, lon }. The renderer projects
 *                   them onto the canvas using the supplied geoBounds.
 *                   `scale` controls pixels-per-degree.
 *                   `pad` is the canvas edge padding in pixels.
 *                   `boundsExpanded` is used when Phase-2 lines are visible
 *                   (wider area needed to fit more stations).
 *
 *   • 'schematic' — Waypoints carry { idx, x, y } in pre-defined pixel space.
 *                   `width` / `height` define the canvas size.
 *
 * Waypoints for algorithmic cities (Bengaluru) — whose lines are computed
 * relative to each other — are handled by `generateBengaluruCoords()` in
 * metroMap.js and intentionally omitted here.
 */

export const mapLayouts = {
  // ═══════════════════════════════════════════════════════════════
  // CHENNAI — Geographic projection
  // ═══════════════════════════════════════════════════════════════
  chennai: {
    type: "geo",
    scale: 2600,
    pad: 50,
    bounds: { latMin: 12.96, latMax: 13.19, lonMin: 80.15, lonMax: 80.34 },
    boundsExpanded: {
      latMin: 12.82,
      latMax: 13.19,
      lonMin: 80.08,
      lonMax: 80.34,
    },
    lines: {
      blue: [
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
      green: [
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
      purple: [
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
        { idx: 48, lat: 12.82, lon: 80.22 },
      ],
      yellow: [
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
      red: [
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
        { idx: 46, lat: 12.9, lon: 80.23 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // DELHI — Schematic pixel layout
  // ═══════════════════════════════════════════════════════════════
  delhi: {
    type: "schematic",
    width: 1400,
    height: 1000,
    lines: {
      red: [
        { idx: 0, x: 1200, y: 250 },
        { idx: 12, x: 900, y: 250 },
        { idx: 15, x: 700, y: 250 },
        { idx: 23, x: 500, y: 250 },
        { idx: 28, x: 200, y: 200 },
      ],
      yellow: [
        { idx: 0, x: 600, y: 0 },
        { idx: 2, x: 600, y: 50 },
        { idx: 5, x: 600, y: 150 },
        { idx: 11, x: 700, y: 250 },
        { idx: 15, x: 700, y: 450 },
        { idx: 17, x: 700, y: 600 },
        { idx: 24, x: 700, y: 800 },
        { idx: 36, x: 550, y: 950 },
      ],
      blue: [
        { idx: 0, x: 200, y: 800 },
        { idx: 8, x: 200, y: 600 },
        { idx: 13, x: 300, y: 450 },
        { idx: 18, x: 400, y: 450 },
        { idx: 21, x: 450, y: 450 },
        { idx: 28, x: 700, y: 450 },
        { idx: 30, x: 750, y: 450 },
        { idx: 33, x: 900, y: 450 },
        { idx: 34, x: 950, y: 500 },
        { idx: 35, x: 1000, y: 550 },
        { idx: 41, x: 1100, y: 700 },
        { idx: 49, x: 1250, y: 750 },
      ],
      "blue-branch": [
        { idx: 0, x: 900, y: 450 },
        { idx: 4, x: 1100, y: 450 },
        { idx: 5, x: 1160, y: 450 },
        { idx: 7, x: 1250, y: 400 },
      ],
      pink: [
        { idx: 0, x: 650, y: 100 },
        { idx: 1, x: 600, y: 150 },
        { idx: 3, x: 500, y: 250 },
        { idx: 5, x: 400, y: 350 },
        { idx: 7, x: 400, y: 450 },
        { idx: 11, x: 600, y: 650 },
        { idx: 15, x: 700, y: 700 },
        { idx: 17, x: 750, y: 700 },
        { idx: 21, x: 1000, y: 550 },
        { idx: 23, x: 1100, y: 550 },
        { idx: 25, x: 1160, y: 500 },
        { idx: 27, x: 1160, y: 450 },
        { idx: 28, x: 1100, y: 450 },
        { idx: 33, x: 900, y: 250 },
        { idx: 35, x: 950, y: 200 },
        { idx: 37, x: 1000, y: 150 },
      ],
      orange: [
        { idx: 0, x: 700, y: 419 },
        { idx: 1, x: 650, y: 550 },
        { idx: 2, x: 600, y: 650 },
        { idx: 3, x: 500, y: 750 },
        { idx: 4, x: 400, y: 800 },
        { idx: 5, x: 200, y: 800 },
        { idx: 6, x: 150, y: 800 },
      ],
      magenta: [
        { idx: 0, x: 300, y: 450 },
        { idx: 1, x: 320, y: 500 },
        { idx: 5, x: 400, y: 700 },
        { idx: 8, x: 500, y: 770 },
        { idx: 11, x: 700, y: 800 },
        { idx: 16, x: 800, y: 800 },
        { idx: 24, x: 1100, y: 700 },
      ],
      violet: [
        { idx: 0, x: 700, y: 250 },
        { idx: 5, x: 750, y: 450 },
        { idx: 7, x: 700, y: 600 },
        { idx: 11, x: 750, y: 700 },
        { idx: 15, x: 800, y: 800 },
        { idx: 33, x: 850, y: 1100 },
      ],
      green: [
        { idx: 0, x: 563, y: 250 },
        { idx: 1, x: 525, y: 300 },
        { idx: 2, x: 462, y: 325 },
        { idx: 3, x: 400, y: 350 },
        { idx: 8, x: 292, y: 350 },
        { idx: 13, x: 184, y: 350 },
        { idx: 21, x: 5, y: 350 },
      ],
      "green-branch": [
        { idx: 0, x: 450, y: 450 },
        { idx: 1, x: 487, y: 375 },
        { idx: 2, x: 525, y: 300 },
      ],
      grey: [
        { idx: 0, x: 200, y: 600 },
        { idx: 3, x: 50, y: 600 },
      ],
      golden: [
        { idx: 0, x: 500, y: 750 },
        { idx: 4, x: 550, y: 850 },
        { idx: 8, x: 650, y: 850 },
        { idx: 14, x: 800, y: 800 },
      ],
      "magenta-ext": [
        { idx: 0, x: 300, y: 450 },
        { idx: 4, x: 300, y: 350 },
        { idx: 12, x: 600, y: 50 },
        { idx: 14, x: 650, y: 100 },
        { idx: 15, x: 600, y: 150 },
        { idx: 19, x: 650, y: 250 },
        { idx: 22, x: 700, y: 450 },
      ],
      "pink-ext": [
        { idx: 0, x: 650, y: 100 },
        { idx: 5, x: 800, y: 150 },
        { idx: 9, x: 950, y: 200 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // MUMBAI — Schematic pixel layout
  // ═══════════════════════════════════════════════════════════════
  mumbai: {
    type: "schematic",
    width: 1300,
    height: 1700,
    lines: {
      yellow: [
        { idx: 0, x: 400, y: 100 },
        { idx: 2, x: 300, y: 200 },
        { idx: 14, x: 300, y: 570 },
        { idx: 16, x: 300, y: 600 },
      ],
      red: [
        { idx: 0, x: 400, y: 100 },
        { idx: 2, x: 500, y: 200 },
        { idx: 11, x: 500, y: 570 },
        { idx: 13, x: 500, y: 600 },
      ],
      blue: [
        { idx: 0, x: 230, y: 600 },
        { idx: 1, x: 300, y: 600 },
        { idx: 4, x: 500, y: 600 },
        { idx: 7, x: 600, y: 600 },
        { idx: 11, x: 800, y: 600 },
      ],
      aqua: [
        { idx: 0, x: 600, y: 350 },
        { idx: 1, x: 600, y: 570 },
        { idx: 3, x: 600, y: 600 },
        { idx: 4, x: 550, y: 700 },
        { idx: 9, x: 500, y: 950 },
        { idx: 12, x: 400, y: 1100 },
        { idx: 17, x: 350, y: 1250 },
        { idx: 22, x: 400, y: 1400 },
        { idx: 24, x: 320, y: 1450 },
        { idx: 26, x: 320, y: 1550 },
      ],
      "yellow-b": [
        { idx: 0, x: 300, y: 620 },
        { idx: 7, x: 300, y: 850 },
        { idx: 8, x: 500, y: 950 },
        { idx: 12, x: 700, y: 950 },
        { idx: 14, x: 800, y: 1000 },
        { idx: 19, x: 900, y: 1050 },
      ],
      green: [
        { idx: 0, x: 800, y: 50 },
        { idx: 10, x: 800, y: 250 },
        { idx: 18, x: 800, y: 570 },
        { idx: 24, x: 750, y: 700 },
        { idx: 29, x: 700, y: 1100 },
      ],
      pink: [
        { idx: 0, x: 200, y: 570 },
        { idx: 1, x: 300, y: 570 },
        { idx: 3, x: 500, y: 570 },
        { idx: 6, x: 600, y: 570 },
        { idx: 11, x: 800, y: 570 },
        { idx: 12, x: 900, y: 570 },
      ],
      orange: [
        { idx: 0, x: 800, y: 150 },
        { idx: 7, x: 950, y: 50 },
        { idx: 15, x: 1100, y: 150 },
        { idx: 16, x: 1120, y: 150 },
      ],
      gold: [
        { idx: 0, x: 700, y: 1100 },
        { idx: 9, x: 500, y: 1300 },
        { idx: 13, x: 400, y: 1400 },
        { idx: 15, x: 450, y: 1450 },
      ],
      "red-9": [
        { idx: 0, x: 400, y: 100 },
        { idx: 4, x: 400, y: 0 },
        { idx: 7, x: 300, y: -50 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // HYDERABAD — Schematic pixel layout
  // ═══════════════════════════════════════════════════════════════
  hyderabad: {
    type: "schematic",
    width: 1400,
    height: 1000,
    lines: {
      red: [
        { idx: 0, x: 200, y: 150 },
        { idx: 10, x: 600, y: 450 },
        { idx: 19, x: 800, y: 700 },
        { idx: 26, x: 1200, y: 850 },
      ],
      blue: [
        { idx: 0, x: 1200, y: 700 },
        { idx: 8, x: 800, y: 420 },
        { idx: 13, x: 600, y: 450 },
        { idx: 22, x: 250, y: 480 },
      ],
      green: [
        { idx: 0, x: 800, y: 420 },
        { idx: 8, x: 800, y: 700 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // KOLKATA — Schematic pixel layout
  // ═══════════════════════════════════════════════════════════════
  kolkata: {
    type: "schematic",
    width: 1200,
    height: 1400,
    lines: {
      blue: [
        { idx: 0, x: 450, y: 150 },
        { idx: 2, x: 500, y: 250 },
        { idx: 6, x: 520, y: 350 },
        { idx: 11, x: 500, y: 550 },
        { idx: 12, x: 500, y: 600 },
        { idx: 17, x: 450, y: 800 },
        { idx: 21, x: 550, y: 950 },
        { idx: 25, x: 600, y: 1100 },
      ],
      green: [
        { idx: 0, x: 200, y: 550 },
        { idx: 3, x: 500, y: 550 },
        { idx: 6, x: 700, y: 500 },
        { idx: 10, x: 950, y: 500 },
        { idx: 11, x: 1050, y: 500 },
      ],
      purple: [
        { idx: 0, x: 200, y: 1050 },
        { idx: 4, x: 250, y: 950 },
        { idx: 6, x: 300, y: 850 },
      ],
      orange: [
        { idx: 0, x: 600, y: 1100 },
        { idx: 3, x: 800, y: 950 },
        { idx: 8, x: 850, y: 700 },
      ],
      yellow: [
        { idx: 0, x: 500, y: 250 },
        { idx: 1, x: 650, y: 180 },
        { idx: 3, x: 800, y: 150 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // NAGPUR — Schematic pixel layout
  // ═══════════════════════════════════════════════════════════════
  nagpur: {
    type: "schematic",
    widthPhase1: 1200,
    heightPhase1: 1200,
    widthExpanded: 1400,
    heightExpanded: 1400,
    lines: {
      orange: [
        { idx: 0, x: 650, y: 150 },
        { idx: 4, x: 650, y: 400 },
        { idx: 5, x: 620, y: 480 },
        { idx: 6, x: 600, y: 530 },
        { idx: 7, x: 600, y: 600 },
        { idx: 12, x: 580, y: 800 },
        { idx: 15, x: 550, y: 950 },
        { idx: 17, x: 550, y: 1050 },
      ],
      aqua: [
        { idx: 0, x: 1050, y: 500 },
        { idx: 4, x: 850, y: 500 },
        { idx: 6, x: 750, y: 520 },
        { idx: 7, x: 700, y: 550 },
        { idx: 8, x: 650, y: 580 },
        { idx: 9, x: 600, y: 600 },
        { idx: 13, x: 400, y: 650 },
        { idx: 16, x: 250, y: 700 },
        { idx: 19, x: 150, y: 750 },
      ],
      "orange-north": [
        { idx: 0, x: 650, y: 150 },
        { idx: 6, x: 650, y: 50 },
        { idx: 12, x: 850, y: 50 },
      ],
      "orange-south": [
        { idx: 0, x: 550, y: 1050 },
        { idx: 10, x: 500, y: 1350 },
      ],
      "aqua-east": [
        { idx: 0, x: 1050, y: 500 },
        { idx: 3, x: 1250, y: 500 },
      ],
      "aqua-west": [
        { idx: 0, x: 150, y: 750 },
        { idx: 7, x: 50, y: 850 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // KOCHI — Schematic pixel layout
  // ═══════════════════════════════════════════════════════════════
  kochi: {
    type: "schematic",
    width: 1400,
    height: 1300,
    lines: {
      blue: [
        { idx: 0, x: 1000, y: 150 },
        { idx: 6, x: 800, y: 350 },
        { idx: 11, x: 700, y: 500 },
        { idx: 14, x: 600, y: 650 },
        { idx: 16, x: 600, y: 750 },
        { idx: 19, x: 800, y: 950 },
        { idx: 24, x: 1100, y: 1100 },
      ],
      pink: [
        { idx: 0, x: 700, y: 500 },
        { idx: 3, x: 900, y: 550 },
        { idx: 6, x: 1100, y: 650 },
        { idx: 10, x: 1300, y: 800 },
      ],
      water_1: [
        { idx: 0, x: 450, y: 650 },
        { idx: 1, x: 250, y: 600 },
      ],
      water_2: [
        { idx: 0, x: 800, y: 950 },
        { idx: 1, x: 1100, y: 650 },
      ],
      water_3: [
        { idx: 0, x: 450, y: 650 },
        { idx: 1, x: 200, y: 800 },
      ],
      water_4: [
        { idx: 0, x: 450, y: 650 },
        { idx: 1, x: 400, y: 550 },
        { idx: 2, x: 350, y: 400 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // INDORE — Geographic projection
  // ═══════════════════════════════════════════════════════════════
  indore: {
    type: "geo",
    scale: 6000,
    pad: 100,
    bounds: { latMin: 22.71, latMax: 22.8, lonMin: 75.78, lonMax: 75.92 },
    lines: {
      yellow: [
        { idx: 0, lat: 22.7389, lon: 75.7975 },
        { idx: 2, lat: 22.755, lon: 75.808 },
        { idx: 4, lat: 22.778, lon: 75.823 },
      ],
      "yellow-ext": [
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

  // ═══════════════════════════════════════════════════════════════
  // PUNE — Geographic projection
  // ═══════════════════════════════════════════════════════════════
  pune: {
    type: "geo",
    scale: 7500,
    pad: 100,
    bounds: { latMin: 18.48, latMax: 18.65, lonMin: 73.66, lonMax: 73.95 },
    lines: {
      purple: [
        { idx: 0, lat: 18.612, lon: 73.815 },
        { idx: 3, lat: 18.595, lon: 73.825 },
        { idx: 6, lat: 18.562, lon: 73.837 },
        { idx: 9, lat: 18.532, lon: 73.847 },
        { idx: 10, lat: 18.528, lon: 73.855 },
        { idx: 13, lat: 18.501, lon: 73.858 },
      ],
      aqua: [
        { idx: 0, lat: 18.506, lon: 73.811 },
        { idx: 3, lat: 18.508, lon: 73.834 },
        { idx: 6, lat: 18.515, lon: 73.844 },
        { idx: 8, lat: 18.528, lon: 73.855 },
        { idx: 10, lat: 18.528, lon: 73.874 },
        { idx: 12, lat: 18.536, lon: 73.884 },
        { idx: 15, lat: 18.561, lon: 73.926 },
      ],
      pink: [
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

  // ═══════════════════════════════════════════════════════════════
  // AHMEDABAD — Geographic projection
  // ═══════════════════════════════════════════════════════════════
  ahmedabad: {
    type: "geo",
    scale: 5000,
    pad: 80,
    bounds: { latMin: 22.98, latMax: 23.23, lonMin: 72.49, lonMax: 72.7 },
    lines: {
      blue: [
        { idx: 0, lat: 23.051, lon: 72.502 },
        { idx: 4, lat: 23.04, lon: 72.545 },
        { idx: 7, lat: 23.033, lon: 72.568 },
        { idx: 10, lat: 23.018, lon: 72.605 },
        { idx: 11, lat: 23.007, lon: 72.618 },
        { idx: 16, lat: 23.003, lon: 72.665 },
      ],
      red: [
        { idx: 0, lat: 23.109, lon: 72.597 },
        { idx: 2, lat: 23.065, lon: 72.575 },
        { idx: 5, lat: 23.06, lon: 72.57 },
        { idx: 8, lat: 23.033, lon: 72.568 },
        { idx: 10, lat: 23.012, lon: 72.562 },
        { idx: 14, lat: 22.992, lon: 72.54 },
      ],
      yellow: [
        { idx: 0, lat: 23.109, lon: 72.597 },
        { idx: 3, lat: 23.148, lon: 72.625 },
        { idx: 7, lat: 23.167, lon: 72.633 },
        { idx: 13, lat: 23.197, lon: 72.633 },
        { idx: 15, lat: 23.21, lon: 72.595 },
        { idx: 19, lat: 23.225, lon: 72.565 },
      ],
      purple: [
        { idx: 0, lat: 23.167, lon: 72.633 },
        { idx: 1, lat: 23.166, lon: 72.66 },
        { idx: 2, lat: 23.165, lon: 72.685 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // JAIPUR — Geographic projection
  // ═══════════════════════════════════════════════════════════════
  jaipur: {
    type: "geo",
    scale: 7000,
    pad: 100,
    bounds: { latMin: 26.86, latMax: 26.96, lonMin: 75.72, lonMax: 75.85 },
    lines: {
      pink: [
        { idx: 0, lat: 26.8795, lon: 75.7499 },
        { idx: 2, lat: 26.8803, lon: 75.7646 },
        { idx: 6, lat: 26.9095, lon: 75.7812 },
        { idx: 7, lat: 26.9226, lon: 75.7998 },
        { idx: 8, lat: 26.9263, lon: 75.8074 },
        { idx: 10, lat: 26.9229, lon: 75.8268 },
      ],
      orange: [
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

  // ═══════════════════════════════════════════════════════════════
  // LUCKNOW — Geographic projection
  // ═══════════════════════════════════════════════════════════════
  lucknow: {
    type: "geo",
    scale: 6000,
    pad: 100,
    bounds: { latMin: 26.75, latMax: 26.9, lonMin: 80.85, lonMax: 81.01 },
    lines: {
      red: [
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
      blue: [
        { idx: 0, lat: 26.8324, lon: 80.9231 },
        { idx: 2, lat: 26.8487, lon: 80.927 },
        { idx: 4, lat: 26.8593, lon: 80.9181 },
        { idx: 7, lat: 26.8794, lon: 80.8905 },
        { idx: 11, lat: 26.895, lon: 80.86 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // AGRA — Geographic projection (Realistic Slant & Turns)
  // ═══════════════════════════════════════════════════════════════
  agra: {
    type: "geo",
    scale: 17000,
    pad: 120,
    bounds: { latMin: 27.15, latMax: 27.22, lonMin: 77.94, lonMax: 78.07 },
    lines: {
      yellow: [
        { idx: 0, lat: 27.1593, lon: 78.0558 },
        { idx: 1, lat: 27.1622, lon: 78.0494 },
        { idx: 2, lat: 27.1633, lon: 78.0425 },
        { idx: 3, lat: 27.1706, lon: 78.0337 },
        { idx: 4, lat: 27.1784, lon: 78.0205 },
        { idx: 5, lat: 27.1853, lon: 78.0163 },
      ],
      "yellow-uc": [
        { idx: 0, lat: 27.1853, lon: 78.0163 }, // Match Mankameshwar anchor
        { idx: 1, lat: 27.1852, lon: 78.0135 }, // Medical College
        { idx: 2, lat: 27.1848, lon: 78.0084 }, // Agra College (Interchange)
        { idx: 3, lat: 27.1951, lon: 77.9944 }, // Raja Ki Mandi
        { idx: 6, lat: 27.2077, lon: 77.9775 },
        { idx: 8, lat: 27.2185, lon: 77.9501 },
      ],
      blue: [
        { idx: 0, lat: 27.1593, lon: 78.0022 }, // Agra Cantt
        { idx: 3, lat: 27.170, lon: 78.007 },   // Pratap Pura
        { idx: 6, lat: 27.1848, lon: 78.0084 }, // Agra College (Interchange)
        { idx: 10, lat: 27.208, lon: 78.025 },  // Sultanganj
        { idx: 12, lat: 27.206, lon: 78.042 },  // Ram Bagh
        { idx: 15, lat: 27.218, lon: 78.065 },  // Kalindi Vihar
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // BHOPAL — Geographic projection
  // ═══════════════════════════════════════════════════════════════
  bhopal: {
    type: "geo",
    scale: 12000,
    pad: 80,
    bounds: { latMin: 23.18, latMax: 23.33, lonMin: 77.35, lonMax: 77.52 },
    lines: {
      orange: [
        { idx: 0, lat: 23.21, lon: 77.456 },   // AIIMS
        { idx: 3, lat: 23.221, lon: 77.438 },  // DRM Office / RKMP
        { idx: 7, lat: 23.243, lon: 77.425 },  // Subhash Nagar
      ],
      "orange-ext": [
        { idx: 0, lat: 23.243, lon: 77.425 },  // Subhash Nagar Connection
        { idx: 1, lat: 23.25, lon: 77.42 },     // Pul Bogda (Interchange)
        { idx: 4, lat: 23.266, lon: 77.413 },  // Mid-strip
        { idx: 8, lat: 23.305, lon: 77.404 },  // Karond Square
      ],
      blue: [
        { idx: 0, lat: 23.224, lon: 77.382 },
        { idx: 3, lat: 23.242, lon: 77.402 },
        { idx: 6, lat: 23.25, lon: 77.42 },    // Pul Bogda (Interchange)
        { idx: 9, lat: 23.257, lon: 77.455 },
        { idx: 12, lat: 23.26, lon: 77.491 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // BENGALURU — Handled by generateBengaluruCoords() in metroMap.js
  // (Lines are algorithmically positioned relative to each other)
  // No waypoint data needed here.
  // ═══════════════════════════════════════════════════════════════

  // ═══════════════════════════════════════════════════════════════
  // PATNA — Geographic projection
  // ═══════════════════════════════════════════════════════════════
  patna: {
    type: "geo",
    scale: 17000,
    pad: 80,
    bounds: { latMin: 25.57, latMax: 25.66, lonMin: 85.03, lonMax: 85.22 },
    lines: {
      red: [
        { idx: 0, lat: 25.6143, lon: 85.0452 }, // Danapur Cantonment
        { idx: 3, lat: 25.6128, lon: 85.0855 }, // Patliputra
        { idx: 6, lat: 25.6110, lon: 85.1168 }, // Patna Zoo
        { idx: 9, lat: 25.6115, lon: 85.1386 }, // Patna Junction
        { idx: 13, lat: 25.5952, lon: 85.1705 }, // Khemnichak
      ],
      blue: [
        { idx: 0, lat: 25.6115, lon: 85.1386 }, // Patna Junction
        { idx: 2, lat: 25.6175, lon: 85.1432 }, // Gandhi Maidan
        { idx: 3, lat: 25.6212, lon: 85.1520 }, // PMCH
        { idx: 4, lat: 25.6190, lon: 85.1620 }, // Patna University
        { idx: 5, lat: 25.6047, lon: 85.1673 }, // Moin Ul Haq Stadium (FIXED)
        { idx: 6, lat: 25.6000, lon: 85.1610 }, // Rajendra Nagar
        { idx: 8, lat: 25.5952, lon: 85.1705 }, // Khemnichak (Blue)
        { idx: 11, lat: 25.5841, lon: 85.1950 }, // New ISBT
      ],
    },
  },
  noida: {
    type: "schematic",
    width: 1400,
    height: 1000,
    lines: {
      aqua: [
        { idx: 0, x: 600, y: 150 },
        { idx: 8, x: 600, y: 550 },
        { idx: 14, x: 750, y: 700 },
        { idx: 20, x: 1050, y: 700 },
      ],
      "aqua-ext-gnw": [
        { idx: 0, x: 600, y: 150 },
        { idx: 3, x: 750, y: 100 },
        { idx: 9, x: 950, y: 100 },
      ],
      "aqua-ext-bg": [
        { idx: 0, x: 600, y: 550 },
        { idx: 3, x: 450, y: 400 },
        { idx: 7, x: 450, y: 200 },
      ],
      "aqua-ext-bodaki": [
        { idx: 0, x: 1050, y: 700 },
        { idx: 2, x: 1200, y: 750 },
      ],
    },
  },
  gurgaon: {
    type: "schematic",
    width: 1200,
    height: 1000,
    lines: {
      rapid: [
        { idx: 0, x: 600, y: 900 },
        { idx: 5, x: 600, y: 500 },
        { idx: 6, x: 600, y: 350 },
        { idx: 7, x: 500, y: 250 },
        { idx: 8, x: 600, y: 150 },
        { idx: 9, x: 700, y: 250 },
        { idx: 10, x: 600, y: 350 },
      ],
      "gur-ext": [
        { idx: 0, x: 500, y: 800 },
        { idx: 7, x: 200, y: 700 },
        { idx: 13, x: 100, y: 400 },
        { idx: 21, x: 300, y: 200 },
        { idx: 27, x: 600, y: 150 },
      ],
    },
  },
  rrts: {
    type: "schematic",
    width: 1400,
    height: 1100,
    lines: {
      "namo-bharat": [
        { idx: 0, x: 550, y: 550 }, // Jangpura (Slightly SW of Hub)
        { idx: 1, x: 600, y: 500 }, // Sarai Kale Khan (Hub)
        { idx: 2, x: 700, y: 500 }, // New Ashok Nagar (East)
        { idx: 3, x: 800, y: 400 }, // Anand Vihar (NE)
        { idx: 7, x: 1000, y: 250 }, // Duhai
        { idx: 16, x: 1300, y: 100 }, // Modipuram
      ],
      "rrts-alwar": [
        { idx: 0, x: 600, y: 500 }, // SKK Hub
        { idx: 1, x: 500, y: 600 }, // INA
        { idx: 4, x: 350, y: 750 }, // Cyber City
        { idx: 8, x: 250, y: 850 }, // Kherki Daula
        { idx: 18, x: 100, y: 1000 }, // Alwar (Deep SW)
      ],
      "rrts-panipat": [
        { idx: 0, x: 600, y: 500 }, // SKK Hub
        { idx: 2, x: 600, y: 400 }, // Kashmere Gate
        { idx: 6, x: 550, y: 300 }, // Kundli
        { idx: 15, x: 500, y: 50 },  // Panipat Depot (North)
      ],
    },
  },
  meerut: {
    type: "schematic",
    width: 1000, // Expanded for diagonals
    height: 1000,
    lines: {
      m1: [
        { idx: 0, x: 250, y: 850 }, // Meerut South (SW)
        { idx: 7, x: 500, y: 450 }, // Begumpul (Central Hub)
        { idx: 11, x: 650, y: 100 }, // Modipuram (NE)
      ],
      m2: [
        { idx: 0, x: 150, y: 150 }, // Shradhapuri (NW)
        { idx: 3, x: 500, y: 450 }, // Begumpul Interchange
        { idx: 5, x: 800, y: 750 }, // Jagriti Vihar (SE)
      ],
    },
  },
};

