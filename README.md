# SteadyTouch – Website

Landingpage für das Diplomarbeitsprojekt **SteadyTouch** (HTL Rennweg, 4BI).

SteadyTouch filtert per Kamera erkannte Handbewegungen von Zittern/Tremor,
um Menschen mit motorischen Einschränkungen eine stabile Gestensteuerung
für digitale Interfaces zu ermöglichen.

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Der Build wird bei jedem Push auf `main` automatisch per GitHub Actions
(`.github/workflows/deploy.yml`) nach GitHub Pages deployed.

Damit das funktioniert, muss in den Repo-Einstellungen unter
**Settings → Pages → Source** auf **GitHub Actions** gestellt werden.

## Stack

- [Vite](https://vite.dev/)
- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
