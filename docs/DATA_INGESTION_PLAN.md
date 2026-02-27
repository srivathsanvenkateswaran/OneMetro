# Implementation Plan: Data Ingestion Engine

## Goal
Automate the collection, transformation, and validation of metro network data (Stations, Lines, Schedules, Fares) from official sources.

## Proposed Architecture

### 1. Unified Tooling Directory
- **Location**: `tools/ingestion/`
- **Language**: Node.js

### 2. Components
- **`scrapers/`**: Individual modules for each city/source.
- **`standardizer/`**: Map various source formats to OneMetro Schema.
- **`generator/`**: Logic to update `src/data/{city}.js` without losing manual refinements.
- **`validator/`**: Ensure data follows the [Constitution](gemini.md).

## Verification Plan
1. **Schema Validation**: Run validation against generated files.
2. **Build Test**: Ensure new data doesn't break Vite builds.
3. **Diff Analysis**: Compare generated modules with existing ones before commit.
