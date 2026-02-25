---
description: Git branching strategy and workflow for BharatOne / OneMetro
---

# Git Branching Strategy

## Branch Types

| Prefix | Purpose | Example |
|--------|---------|---------|
| `main` | Stable, production-ready code. Always deployable. | — |
| `feat/` | New city additions or new user-facing features | `feat/kochi-metro` |
| `refactor/` | Architecture rewrites or code restructuring (no new features) | `refactor/architecture-v2` |
| `fix/` | Bug fixes on existing functionality | `fix/station-click-interaction` |
| `chore/` | Non-functional changes: deps, config, docs | `chore/update-readme` |

## Workflow

1. **Always branch from `main`** before starting work:
   ```
   git checkout main
   git pull origin main
   git checkout -b feat/city-name
   ```

2. **Commit often** with conventional commit messages:
   - `feat: add kochi metro data and map layout`
   - `fix: correct pune purple line coordinates`
   - `refactor: replace hardcoded metroMap switch with geo-projection`
   - `chore: add city registry module`

3. **When the work is ready**, merge back to main:
   ```
   git checkout main
   git merge --no-ff feat/city-name -m "feat: add kochi metro"
   git push origin main
   git branch -d feat/city-name
   ```
   Use `--no-ff` (no fast-forward) to preserve branch history in the graph.

4. **Push branches** to remote while working on them for backup:
   ```
   git push -u origin feat/city-name
   ```

## Current Active Branches

- `main` — stable base (9 cities operational)
- `refactor/architecture-v2` — city registry, lazy loading, data-driven landing page, generic geo-projection

## City Addition Convention

Each new city should be its own `feat/` branch:
```
feat/kochi-metro
feat/jaipur-metro
feat/lucknow-metro
```
This makes it easy to revert or defer a city if the data has problems.
