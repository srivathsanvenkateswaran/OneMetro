# OneMetro — Project Constitution

## North Star
A fast, premium static website displaying metro system maps, lines, and stations across India.

## Data Schemas

### City Schema
```json
{
  "id": "string",
  "name": "string",
  "nameLocal": "string",
  "state": "string",
  "totalStations": "number",
  "totalLength": "string",
  "totalLines": "number",
  "phase": "string",
  "lines": ["Line"]
}
```

### Line Schema
```json
{
  "id": "string",
  "name": "string",
  "color": "string (hex)",
  "colorLight": "string (hex)",
  "corridor": "string",
  "length": "string",
  "totalStations": "number",
  "operationalSince": "string",
  "frequency": "string",
  "firstTrain": "string",
  "lastTrain": "string",
  "gauge": "string",
  "stations": ["Station"]
}
```

### Station Schema
```json
{
  "id": "string",
  "name": "string",
  "nameLocal": "string (Tamil)",
  "type": "elevated | underground",
  "isInterchange": "boolean",
  "interchangeWith": "string[] (line IDs)",
  "landmark": "string (nearby landmark)",
  "zone": "number",
  "contact": "string (optional phone)",
  "parking": "boolean (optional)",
  "facilities": "string[] (optional)",
  "gates": [
    {
      "gate": "string (e.g., A)",
      "landmarks": "string[]"
    }
  ],
  "platforms": [
    {
      "no": "number",
      "towards": "string"
    }
  ]
}
```

## Behavioral Rules
- Site must load in < 1 second
- No external API calls at runtime
- Dark theme only (for now)
- All data is static JS modules — no JSON fetching
- Architecture must support adding new cities by adding a single data file
- Vanilla JS only — no React/Vue/Angular
- Vite for build tooling only

## Architectural Invariants
- One data file per city: `src/data/{cityId}.js`
- All styles use CSS custom properties from `variables.css`
- Components are pure functions that return HTML strings
- Metro line colors come from data, not hardcoded in CSS
- SVG map is generated programmatically, not a static image

## Deployment
- Build: `npm run build` → `dist/`
- Host: GitHub Pages (free)
- Base path: configurable via `vite.config.js`
