# OneMetro: Technical Architecture & Contribution Guide

Welcome to the internal engine of OneMetro. This document is a deep-dive designed for developers, students, and "VibeCoders" who want to master the architecture of a high-performance, framework-less web application.

---

## 🏗️ 1. The "No-Framework" Philosophy

OneMetro is built intentionally with **Vanilla JavaScript (ES6+)**. In an era of massive frameworks, we returned to first principles to achieve a sub-1-second load time.

### The Component Lifecycle
Instead of a Virtual DOM (like React), we use **Functional Templates**. 

**Example: The Station Header**
```javascript
// src/components/stationDetail.js
export const renderStationHeader = (station, line) => `
  <div class="station-header" style="border-left: 4px solid ${line.color}">
    <span class="station-id">${station.id}</span>
    <h1>${station.name}</h1>
    <div class="station-meta">
      <span class="type-badge">${station.type}</span>
      <span class="zone-badge">Zone ${station.zone}</span>
    </div>
  </div>
`;
```

### State Management via URL
We treat the **Browser URL Hash** as our application's state. There is no `Redux` or `Vuex`.
1. **Change**: User clicks a station.
2. **Update**: The app updates the URL to `#/chennai/blue/chennai-central`.
3. **Reactive Render**: The `hashchange` event listener in `app.js` detects this, identifies the city/line/station from the string, and calls the appropriate render functions.

---

## �️ 1.5 The SVG Rendering Pipeline

OneMetro uses a highly optimized, single-pass SVG rendering engine. Unlike Canvas, SVG allows us to maintain **vector-perfect sharpness** at any zoom level and attach event listeners directly to the elements.

### The Rendering Order (Z-Index)
To ensure maximum legibility, our engine renders elements in a strict bottom-up layer stack:
1. **The Rail Base**: Thick, semi-transparent paths that form the "halo" or glow of the metro line.
2. **The Active Line**: A thinner, solid-colored path representing the actual track.
3. **The Connection Layer**: Small bridge lines that connect stations in complex interchanges.
4. **The Station Dots**: Procedural circles (smaller for normal stops, larger for interchanges).
5. **The Label Layer**: Anti-aliased text labels with high-contrast shadows.

### The "Double-Path" Technique
For a premium aesthetic, every metro line is actually rendered as **two SVG paths** on top of each other:
```javascript
// A conceptual snippet from the engine
const railGlow = `<path d="${pathData}" stroke="${color}" stroke-width="8" opacity="0.3" />`;
const railTrack = `<path d="${pathData}" stroke="${color}" stroke-width="4" />`;
```
This creates a subtle "neon" effect that makes the lines pop against the dark mode background.

### Coordinate Transformation
The engine uses a linear projection to map geographic coordinates to the SVG canvas:
- **X-axis**: $x = \text{pad} + \frac{(\text{lon} - \text{lonMin})}{(\text{lonMax} - \text{lonMin})} \times (\text{width} - 2 \times \text{pad})$
- **Y-axis**: $y = \text{pad} + \frac{(\text{latMax} - \text{lat})}{(\text{latMax} - \text{latMin})} \times (\text{height} - 2 \times \text{pad})$

*Note: In Y-axis transformation, we subtract from `latMax` because SVG coordinates (0,0) start at the top-left, while geographic latitudes increase as you move north (up).*

---

## �🗺️ 2. The Abstract SVG Mapping Engine

OneMetro does **not** map the physical geography of India (rivers, roads, or boundaries). We map the **Network Topology**. The "map" you see is a mathematical projection of the metro lines onto a clean, abstract canvas.

### 🗺️ Why Two Modes? (The Design Trade-off)

*Why not just use real-world coordinates for everything?* 

The answer lies in the difference between **Cartography** (drawing the world) and **Wayfinding** (helping people navigate).

| Feature | **Geographic Mode** (`geo`) | **Schematic Mode** (`schematic`) |
| :--- | :--- | :--- |
| **Philosophy** | "Show me exactly where it is." | "Show me how to get there." |
| **Best For** | Smaller networks or coastal cities (Chennai, Kochi). | Dense, complex hubs (Delhi, Mumbai). |
| **Readability** | Can get messy in city centers where stations are 200m apart. | High. Stations simplified to a consistent grid. |
| **Canvas** | Scaled to Latitude/Longitude degrees. | Scaled to a fixed pixel grid (e.g., 1400x1000). |
| **Angles** | Any (organic curves). | Primarily 45° and 90° (The "Beck" standard). |
 
If we used Geographic mode for Delhi, the city center (Rajiv Chowk area) would be a tiny cluster of overlapping dots, while the outskirts (Gurugram/Noida) would require the user to pan for miles. Schematic mode allows us to "inflate" the busy center and "contract" the long suburban stretches so the entire network fits on one screen.

### 💡 When to choose Schematic over Geo?
Beyond the "Delhi Problem," we choose Schematic mode for:
1. **Aspect Ratio Optimization**: Real cities like **Kolkata** are very "tall and thin." Schematic mode allows us to "stretch" the width so the map fills the screen instead of looking like a vertical needle.
2. **Dense Multi-Modal Networks**: In **Kochi**, the Water Metro has many small jetties close together. Schematic mode allows us to "zoom in" and space these out so they are easily clickable on mobile devices.
3. **Visual Symmetry**: For cities with simple geometric crosses like **Nagpur** or **Hyderabad**, Schematic mode removes "geographic jitter" (real-world road wobbles) to create a clean, premium dashboard aesthetic.

### 🏙️ City Classification
As of 2026, the cities in OneMetro are divided as follows:

| Mode | Cities |
| :--- | :--- |
| **Schematic** | Delhi, Mumbai, Hyderabad, Kolkata, Nagpur, Kochi |
| **Geographic** | Chennai, Ahmedabad, Pune, Jaipur, Lucknow, Agra, Bhopal, Indore, Patna |
| **Algorithmic** | Bengaluru (relative positioning) |

---

### Geographic Projection Mode (`type: "geo"`)
Used for Chennai, Pune, and Ahmedabad. We use real-world Lat/Lon coordinates to determine the *relative* positions of stations.

**The Math of the Curve**:
We don't want jagged, straight lines between stations. We use a **Smoothstep (Hermite)** interpolation algorithm.
- **Problem**: Storing every curve point for 1000 stations is data-heavy.
- **Solution**: We store only 4-5 "Waypoints" for an entire 30km line. The engine calculates the rest.

**Interpolation Example**:
If Station A is at $(10, 10)$ and Station B is at $(20, 20)$, and we are 50% through the segment ($t=0.5$):
- **Linear**: $15, 15$
- **Smoothstep**: $x = x_1 + (x_2 - x_1) * (3t^2 - 2t^3)$
This creates the "organic" feel of the lines without requiring extra data.

---

### Schematic Mode (`type: "schematic"`)
Used for **Delhi**, **Mumbai**, **Hyderabad**, **Kolkata**, **Nagpur**, and **Kochi**. 

In this mode, we ignore real-world Latitude and Longitude. Instead, we use a custom `{ x, y }` grid defined in `mapLayouts.js`. This follows the industry standard set by the London Underground map, prioritizing topological clarity over geographic accuracy. It ensures that lines remain perfectly straight or at 45-degree angles, making the map readable even when dozens of lines intersect in a small city center.

---

### Algorithmic Projection (`type: "algorithmic"`)
Used exclusively for **Bengaluru**. This is the highest level of abstraction in the OneMetro engine.

> [!WARNING]
> **Legacy Status**: Algorithmic projection is considered a **Legacy/Special Case**. While it provides mathematical perfection, it is difficult for newcomers to maintain because it requires modifying core engine code. For all new cities, please use **Schematic** or **Geographic** modes.

**The Rationale**:
Bengaluru's Phase 1 network is shaped like a "Plus" sign (+), with the Purple and Green lines crossing at a central hub (Majestic). If we used `geo` or `schematic` modes, we would need to manually update dozens of coordinates every time we adjusted the map's center. 

**How it works**:
Instead of reading from `mapLayouts.js`, the engine calls `generateBengaluruCoords()`. 
- **Relative Snapping**: The engine first calculates the path for Phase 1. When it renders Phase 2 (Pink/Yellow lines), it literally **searches** for the parent station (e.g., MG Road) in the calculated coordinates of the Purple line and starts the new line from that exact pixel.
- **Mathematical Curves**: Lines are rendered as sinusoidal waves ($y = \text{center} + \sin(t) \times \text{amplitude}$) to give them a premium, consistent curve that is impossible to maintain manually with static waypoints.

---

## 🔗 3. Interchange Mechanics: Snapping & Clustering

How do we make sure different lines "meet" perfectly at a single dot?

### Stage 1: The Clustering Algorithm
During render, the `metroMap.js` engine loops through every station in the visible network.
```javascript
const CLUSTER_RADIUS = 8; // Pixels
// If distance(Station_A, Station_B) < CLUSTER_RADIUS
//   Then Merge into a single Cluster
```
If a cluster contains stations from **different lines**, the engine automatically switches from a small "Station Dot" to a large "Interchange Circle."

### Stage 2: Snapping
The `snapInterchanges()` function runs before the SVG is drawn. It looks for stations with the same name or ID and "snaps" their coordinates to be exactly identical. This prevents the "vibration" effect where two lines are slightly offset at a junction.

---

## 🛰️ 4. Data Schemas: The OneMetro Standard

To make OneMetro "AI-friendly" and "VibeCoder-friendly," we use a strict schema. Every city is a static JS module—**not a JSON file**. This allows Vite to tree-shake the data and only load Chennai if the user actually visits Chennai.

**The Station "Atom":**
```javascript
{
  id: 'cm-01',
  name: 'Central',
  nameLocal: 'மத்திய நிலையம்',
  type: 'underground',
  isInterchange: true,
  interchangeWith: ['green-line'],
  gates: [
    { gate: 'A', landmarks: ['Central Railway Station'] }
  ]
}
```

---

## 🚀 5. Mastering the Workflow: A VibeCoder Tutorial

### Task: Add a missing landmark to a station.
1. Find the city file: `src/data/chennai.js`.
2. Locate the station object (use `Ctrl+F` for the station name).
3. Update the `landmark` or `gates` array.
4. Save. Vite's Hot Module Replacement (HMR) will update your browser instantly.

### Task: Add a new waypoint to fix a map curve.
1. Open `src/data/mapLayouts.js`.
2. Find your city.
3. Add an object to the line's array: `{ idx: 15, lat: 13.01, lon: 80.20 }`. 
   - `idx`: The 0-based index of the station in the data file.
   - `lat/lon`: The real-world coordinates.
4. The engine will now "pull" the curve through this new point.

---

## 🎨 6. The Aesthetics Pillar

OneMetro follows a **Premium Dark UI** standard:
- **Glassmorphism**: Use `backdrop-filter: blur(10px)` with semi-transparent backgrounds.
- **Dynamic Glow**: Each line's path has a subtle CSS filter glow using its specific data color.
- **Micro-Animations**: We use CSS Keyframes for staggered entry. Note how the station list "flows" in rather than just appearing.

---

## 🎓 7. Glossary for Newcomers
- **WGS84**: The standard coordinate system used by GPS.
- **Tree-Shaking**: A build process that removes unused code (like other cities) to keep your load fast.
- **HMR (Hot Module Replacement)**: Updating the app in real-time as you type code.
- **W3C Semantic HTML**: Using `<article>`, `<nav>`, and `<header>` tags instead of just `<div>` for better SEO and accessibility.

*OneMetro is designed to be the "cleanest" codebase you'll ever work on. No complex state hooks, no obscured logic—just pure, fast, beautiful code.*
