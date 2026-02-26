# Contributing to OneMetro

Thank you for your interest in contributing to **OneMetro**! We are building the single source of truth for India's rapid transit systems, and your help—whether it's fixing bugs, adding new cities, or improving documentation—is invaluable.

## 🤝 How to Contribute

### 1. Adding New Cities
Adding a new city is the most impactful way to contribute. Please follow the [Architecture Guide](README.md#architecture-adding-a-new-city) in the main README.
- Ensure all station names are accurate and include local language names.
- Provide geographical waypoints in `src/data/mapLayouts.js`.
- Verify coordinates using the interpolation script.

### 2. Bug Reports & Feature Requests
- Check the [Issue Tracker](https://github.com/srivathsanvenkateswaran/OneMetro/issues) to see if the issue has already been reported.
- If not, open a new issue with a clear title, description, and steps to reproduce.

### 3. Pull Requests
1. **Fork** the repository and create your branch from `main`.
2. **Commit** your changes with descriptive messages.
3. **Format** your code. We use Vanilla JS and standard CSS—avoid adding heavy libraries.
4. **Test** your changes by running `npm run dev`.
5. **Submit** your PR and link it to any relevant issues.

## 🛠 Tech Stack Requirements
To keep the project lightning-fast (< 1s load time), we adhere to a "No-Framework" policy:
- **Zero Frameworks**: No React, Vue, or Angular. Only pure ES6+ JavaScript.
- **Utility CSS**: Avoid Tailwind or Bootstrap. Use the variables defined in `src/styles/variables.css`.
- **Pure Functions**: UI components should be pure functions that return HTML strings.

## 📜 Code of Conduct
By participating in this project, you agree to abide by the terms of our [Code of Conduct](CODE_OF_CONDUCT.md).

## 💎 Design Principles
- **Aesthetics First**: Every component must feel premium and coordinated.
- **Zero Runtime Fetching**: Data must be stored in static JS modules, not JSON files, to avoid additional network requests.
- **SVG-First**: Maps must be generated programmatically from layout data, not static images.

---
*Questions? Reach out to [Srivathsan Venkateswaran](https://www.linkedin.com/in/srivathsan-venkateswaran/) on LinkedIn.*
