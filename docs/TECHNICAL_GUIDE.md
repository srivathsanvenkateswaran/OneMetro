# OneMetro: Technical Architecture & Contribution Guide

Welcome to the internal engine of OneMetro. This document is designed for developers, students, and transit enthusiasts who want to understand how a high-performance, framework-less web application is built from the ground up.

---

## 🏗️ 1. The "No-Framework" Philosophy

Most modern web apps use React, Vue, or Angular. OneMetro intentionally uses **Vanilla JavaScript (ES6+)**.

### Why?
1. **Performance**: No virtual DOM overhead, no library initialization delay.
2. **Longevity**: Frameworks change every few years. Vanilla JS is the standard of the web and will work exactly the same in 10 years.
3. **The 1-Second Rule**: To load a map of India on a 3G connection in under 1 second, every kilobyte of JavaScript matters.

### How it works:
- **Components** are pure functions that take data and return an HTML string:
  ```javascript
  const StationCard = (station) => `
    <div class="station-card">
      <h3>${station.name}</h3>
      <p>${station.landmark}</p>
    </div>
  `;
  ```
- **State Management**: We use the URL hash (`#/city/line`) as our "Single Source of Truth." When the URL changes, `app.js` detects it and re-renders the necessary components.

---

## 🗺️ 2. The SVG Mapping Engine (`metroMap.js`)

OneMetro doesn't use static images for maps. It renders them dynamically using **Scalable Vector Graphics (SVG)**.

### Geographic Projection (`type: "geo"`)
For cities like Chennai or Pune, we use real-world Lat/Lon coordinates.
- **The Problem**: Real metro lines have hundreds of small curves. Storing every single point would make the data files massive.
- **The Solution**: **Hermite Interpolation (Smoothstep)**. We define a few "Waypoints" in `mapLayouts.js`, and the engine mathematically draws smooth curves between them.
- **Algorithm**: `x = x1 + (x2 - x1) * (t * t * (3 - 2 * t))`. This is the same math used in video game animations to make movement feel natural.

### Clustering Algorithm
To handle "Interchanges" (where two lines meet), the map uses a proximity check:
1. It looks at every station's calculated X/Y position.
2. If two stations are within a `CLUSTER_RADIUS` (currently 8 pixels), it merges them into a single dot.
3. If those stations belong to different lines, it renders the "Interchange" marker.

---

## 🛰️ 3. Data Science: Coordinate Interpolation

How do we know where the "15th station" is if we only have waypoints for the 1st and 30th?

We use `scripts/interpolateCoords.mjs`. This script:
1. Reads the waypoints from `mapLayouts.js`.
2. Reads the total station count from the city data.
3. Maps each station index to a `t` value between 0 and 1.
4. Calculates the approximate Lat/Lon using the smoothstep curve.
5. Writes the result to `src/data/stationCoords.js`.

**This allows us to maintain geographic accuracy without manual data entry for thousands of stations.**

---

## 🎨 4. Design System (`variables.css`)

We follow a **Glassmorphic Dark Theme**.
- **Tokens**: All colors, blurs, and spacings are stored in `src/styles/variables.css`.
- **Dynamic Theming**: Metro line colors are NOT in the CSS. They are injected from the JS data files into the SVG style attributes. This makes the system "City-Agnostic."

---

## 🚀 5. Scaling: Adding a New City (Tutorial)

To add "Jaipur Metro," a newcomer would:

1. **Define the Data**: Create `src/data/jaipur.js` following the schema in the `README.md`.
2. **Register**: Add Jaipur to `src/data/cityRegistry.js` with its metadata (state, length, etc.).
3. **Layout**: In `src/data/mapLayouts.js`, define the `geoBounds` (max/min lat/lon) and at least 3-4 waypoints for each line.
4. **Interpolate**: Run `node scripts/interpolateCoords.mjs` in your terminal. This generates the station dots.
5. **Connect**: Open `src/app.js` and add a dynamic import to the `cityLoaders` object:
   ```javascript
   jaipur: () => import('./data/jaipur.js')
   ```

---

## 🎓 6. Learning Resources
- **MDN Web Docs**: [SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG)
- **Mathematical Curves**: [The Book of Shaders (Interpolation)](https://thebookofshaders.com/05/)
- **CSS Variables**: [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

*OneMetro is a "Living Lab." Feel free to experiment with the clustering radius, interpolation math, or animation timings to see how they impact the user experience!*
