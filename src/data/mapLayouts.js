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
        type: 'geo',
        scale: 2600,
        pad: 50,
        bounds: { latMin: 12.96, latMax: 13.19, lonMin: 80.15, lonMax: 80.34 },
        boundsExpanded: { latMin: 12.82, latMax: 13.19, lonMin: 80.08, lonMax: 80.34 },
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
                { idx: 24, lat: 13.00, lon: 80.255 },
                { idx: 28, lat: 12.97, lon: 80.245 },
                { idx: 31, lat: 12.95, lon: 80.245 },
                { idx: 37, lat: 12.90, lon: 80.23 },
                { idx: 42, lat: 12.87, lon: 80.225 },
                { idx: 47, lat: 12.83, lon: 80.22 },
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
                { idx: 27, lat: 13.05, lon: 80.10 },
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
                { idx: 45, lat: 12.90, lon: 80.23 },
            ],
        },
    },

    // ═══════════════════════════════════════════════════════════════
    // DELHI — Schematic pixel layout
    // ═══════════════════════════════════════════════════════════════
    delhi: {
        type: 'schematic',
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
                { idx: 0, x: 600, y: 50 },
                { idx: 5, x: 600, y: 150 },
                { idx: 11, x: 700, y: 250 },
                { idx: 15, x: 700, y: 450 },
                { idx: 17, x: 700, y: 600 },
                { idx: 21, x: 700, y: 700 },
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
            'blue-branch': [
                { idx: 0, x: 900, y: 450 },
                { idx: 4, x: 1100, y: 450 },
                { idx: 5, x: 1160, y: 450 },
                { idx: 7, x: 1250, y: 400 },
            ],
            pink: [
                { idx: 0, x: 700, y: 100 },
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
                { idx: 32, x: 900, y: 250 },
                { idx: 37, x: 1000, y: 50 },
            ],
            orange: [
                { idx: 0, x: 700, y: 450 },
                { idx: 1, x: 650, y: 550 },
                { idx: 2, x: 600, y: 650 },
                { idx: 3, x: 500, y: 750 },
                { idx: 4, x: 400, y: 800 },
                { idx: 5, x: 200, y: 800 },
                { idx: 6, x: 150, y: 800 },
            ],
            magenta: [
                { idx: 0, x: 300, y: 450 },
                { idx: 5, x: 400, y: 700 },
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
                { idx: 0, x: 625, y: 250 },
                { idx: 1, x: 525, y: 300 },
                { idx: 2, x: 462, y: 325 },
                { idx: 3, x: 400, y: 350 },
                { idx: 8, x: 292, y: 350 },
                { idx: 13, x: 184, y: 350 },
                { idx: 21, x: 5, y: 350 },
            ],
            'green-branch': [
                { idx: 0, x: 450, y: 450 },
                { idx: 1, x: 487, y: 375 },
                { idx: 2, x: 525, y: 300 },
            ],
            grey: [
                { idx: 0, x: 200, y: 600 },
                { idx: 3, x: 50, y: 600 },
            ],
        },
    },

    // ═══════════════════════════════════════════════════════════════
    // MUMBAI — Schematic pixel layout
    // ═══════════════════════════════════════════════════════════════
    mumbai: {
        type: 'schematic',
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
            'yellow-b': [
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
            'red-9': [
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
        type: 'schematic',
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
        type: 'schematic',
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
        type: 'schematic',
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
            'orange-north': [
                { idx: 0, x: 650, y: 150 },
                { idx: 6, x: 650, y: 50 },
                { idx: 12, x: 850, y: 50 },
            ],
            'orange-south': [
                { idx: 0, x: 550, y: 1050 },
                { idx: 10, x: 500, y: 1350 },
            ],
            'aqua-east': [
                { idx: 0, x: 1050, y: 500 },
                { idx: 3, x: 1250, y: 500 },
            ],
            'aqua-west': [
                { idx: 0, x: 150, y: 750 },
                { idx: 7, x: 50, y: 850 },
            ],
        },
    },

    // ═══════════════════════════════════════════════════════════════
    // PUNE — Geographic projection
    // ═══════════════════════════════════════════════════════════════
    pune: {
        type: 'geo',
        scale: 7500,
        pad: 100,
        bounds: { latMin: 18.480, latMax: 18.650, lonMin: 73.660, lonMax: 73.950 },
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
            line3: [
                { idx: 0, lat: 18.576, lon: 73.684 },
                { idx: 4, lat: 18.585, lon: 73.725 },
                { idx: 7, lat: 18.595, lon: 73.740 },
                { idx: 10, lat: 18.582, lon: 73.765 },
                { idx: 15, lat: 18.558, lon: 73.784 },
                { idx: 18, lat: 18.541, lon: 73.826 },
                { idx: 21, lat: 18.532, lon: 73.847 },
                { idx: 22, lat: 18.528, lon: 73.855 },
            ],
        },
    },

    // ═══════════════════════════════════════════════════════════════
    // AHMEDABAD — Geographic projection
    // ═══════════════════════════════════════════════════════════════
    ahmedabad: {
        type: 'geo',
        scale: 5000,
        pad: 80,
        bounds: { latMin: 22.980, latMax: 23.230, lonMin: 72.490, lonMax: 72.700 },
        lines: {
            blue: [
                { idx: 0, lat: 23.051, lon: 72.502 },
                { idx: 4, lat: 23.040, lon: 72.545 },
                { idx: 7, lat: 23.033, lon: 72.568 },
                { idx: 10, lat: 23.018, lon: 72.605 },
                { idx: 11, lat: 23.007, lon: 72.618 },
                { idx: 16, lat: 23.003, lon: 72.665 },
            ],
            red: [
                { idx: 0, lat: 23.109, lon: 72.597 },
                { idx: 2, lat: 23.065, lon: 72.575 },
                { idx: 5, lat: 23.060, lon: 72.570 },
                { idx: 8, lat: 23.033, lon: 72.568 },
                { idx: 10, lat: 23.012, lon: 72.562 },
                { idx: 14, lat: 22.992, lon: 72.540 },
            ],
            yellow: [
                { idx: 0, lat: 23.109, lon: 72.597 },
                { idx: 3, lat: 23.148, lon: 72.625 },
                { idx: 7, lat: 23.167, lon: 72.633 },
                { idx: 13, lat: 23.197, lon: 72.633 },
                { idx: 15, lat: 23.210, lon: 72.595 },
                { idx: 19, lat: 23.225, lon: 72.565 },
            ],
            purple: [
                { idx: 0, lat: 23.167, lon: 72.633 },
                { idx: 1, lat: 23.166, lon: 72.660 },
                { idx: 2, lat: 23.165, lon: 72.685 },
            ],
        },
    },

    // ═══════════════════════════════════════════════════════════════
    // BENGALURU — Handled by generateBengaluruCoords() in metroMap.js
    // (Lines are algorithmically positioned relative to each other)
    // No waypoint data needed here.
    // ═══════════════════════════════════════════════════════════════
};
