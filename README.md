# FeelDX — Materials & Furniture Selector

A lightweight room materials and furniture selection prototype built with Vue 3.

---

## Overview

FeelDX lets users:

Select a room type (e.g. bedroom, living room)
Choose materials and furniture options
View a live summary of selections
Generate a mock AI design analysis (rule-based, no API/backend)

---

## Technologies

- **Vue 3** via CDN (Composition API)
- **Native ES Modules** — no build step required
- **CSS3** — custom properties, grid layout
- **Google Fonts** — DM Mono + Cormorant Garamond

---

## Project Structure

```
material-furniture-selector/
├── index.html
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── assets
│   │   └── styles.css
│   ├── data/
│   │   └── rooms.js
│   ├── composables/
│   │   ├── useSelections.js
│   └── components/
│       ├── AiSection.vue
│       ├── CategorySection.vue
│       ├── Header.vue
│       ├── HelloWorld.vue
│       ├── MainPanel.vue
│       ├── OptionCard.vue
│       ├── RightPanel.vue
│       ├── Sidebar.vue
│       └── Summary.vue

```

---

## Setup & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Then open `http://localhost:5173` in your browser.
Alternatively, use the **VS Code Live Server** extension.

---

## Assumptions

- One selection per category at a time (mirrors real configuration)
- Selections persist for the session only — no localStorage or backend
- AI summary is rule-based, not connected to a real API
- Cost tiers and swatch colours are illustrative, not sourced from live data
- Layout is desktop-first; responsive below 900px

---

## Testing

Manual checklist — no automated tests in this prototype:

- [ ] Each room loads its correct categories and clears the AI summary
- [ ] Selecting a card highlights it; selecting again deselects it
- [ ] Picking a new option in the same category replaces the previous one
- [ ] Switching rooms preserves each room's selections independently
- [ ] AI summary reflects selections, flags missing categories, and warns on dark/dark combinations
- [ ] Layout stacks correctly on mobile (< 900px)

## Limitations & Improvements

| Now                     | Planned                            |
| ----------------------- | ---------------------------------- |
| Rule-based AI summary   | Real LLM API integration           |
| Session-only state      | localStorage / backend persistence |
| CSS gradient swatches   | Real material photography          |
| One option per category | Multi-select / layered finishes    |
| No automated tests      | Vitest unit + Cypress E2E          |
| CDN + ES modules        | Vite + Vue SFC build pipeline      |
