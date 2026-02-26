# OneMetro — The Pulse of Urban India

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Vite-646CFF.svg)](https://vitejs.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](CONTRIBUTING.md)

**OneMetro** is a high-performance, aesthetically premium open-source platform designed to be the definitive digital gateway for India's rapid transit systems. Built on the principle of "Performance as a Feature," it provides an immersive, lightning-fast experience for exploring metropolitan networks across the nation.

## 🏛️ Vision & Philosophy
Urban transit is the backbone of India's growth. OneMetro aims to democratize access to transit information through:
- **Extreme Speed**: Sub-1-second loads with zero runtime network dependency.
- **Visual Excellence**: A design-first approach that transforms raw data into beautiful, interactive SVG experiences.
- **Privacy First**: No tracking, no external cookies, no runtime API calls to third parties.

---

## 🚀 Engine Features

### 🗺️ Hybrid SVG Layout Engine
OneMetro uses a dual-engine approach to map rendering:
- **Geographic Projection (WGS84)**: For cities like Chennai, Pune, and Ahmedabad, maps are projected using real-world coordinates and smooth Hermite interpolation (smoothstep) for organic line curves.
- **Schematic Layouts**: For complex networks like Delhi and Mumbai, we use a custom-designed schematic grid to ensure maximum legibility and cognitive ease.

### ⚡ Architectural Invariants
- **No-Framework Core**: Built with Vanilla JS to minimize overhead and prevent "framework rot."
- **Data as Code**: Metro system data is stored as ES modules. This eliminates JSON parsing overhead and allows for aggressive tree-shaking and lazy-loading.
- **State via URL**: Every city, line, and station is indexed via URL fragments, making the entire platform deep-linkable and SEO-friendly.

---

## 📂 Internal Structure

```text
OneMetro/
├── src/
│   ├── app.js            # Router and dynamic module loader
│   ├── components/       # Pure-function UI components (Functional CSS)
│   ├── data/             # The Source of Truth: Static city modules
│   └── styles/           # Variables-driven Design System
├── scripts/              # Coordinate interpolation & data-generation toolset
└── public/               # Optimized assets (WebP format)
```

---

## 🛠️ Technical Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Local Development
```bash
# Clone the repository
git clone https://github.com/srivathsanvenkateswaran/OneMetro.git

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🧭 Roadmap 2026
We are building for the future of Indian mobility. Our priorities are:
1.  🚆 **RRTS Integration**: Adding the Delhi-Meerut and upcoming regional corridors.
2.  📊 **Real-World Integration**: Moving beyond static paths to include real-world frequency and boarding data.
3.  🌏 **Multilingual Support**: Localizing the entire interface into regional Indian languages.
4.  📱 **PWA / Offline Capabilities**: Full offline map access for commuters in underground networks.

---

## 🤝 Contributing
We welcome developers, transit enthusiasts, and data hobbyists! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before starting.

To add a new city, follow our [Scaling Guide](CONTRIBUTING.md#1-adding-new-cities).

---

## 📜 Acknowledgments
OneMetro is built on open data and community knowledge. We extend our gratitude to:
- **OpenStreetMap**: For the foundational geographic coordinates.
- **Wikipedia Community**: For historical and technical metadata.
- **Official Transit Providers**: DMRC, CMRL, KMRL, MMRDA, and others for their public documentation.

---

## 👨‍💻 Maintainer
**Srivathsan Venkateswaran**  
[LinkedIn Profile](https://www.linkedin.com/in/srivathsan-venkateswaran/)

---

### License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
