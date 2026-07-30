# RiskMaster Simulator

A lightweight, mobile-friendly risk simulator built with React and Vite.

## Features

- Colorful category hub with NovaTech Cloud Platform Upgrade as the featured Cybersecurity scenario
- PetroNova Refinery Expansion and Project Atlas AI Car Manufacturing remain available as full staged simulation packs
- Unfinished category placeholders are hidden from the homepage until their simulations are ready
- Stage-by-stage flow: briefing, activity, scoreboard, next stage
- Instructional videos for the core briefing stages in `public/videos`
- Animated risk identification, reflection, matrix analysis, response strategy, and monitoring activities
- Final grading: Risk Master, Risk Strategist, Risk Practitioner, or Risk Learner
- Retry from the beginning or return to the homepage
- Local progress persistence with `localStorage`
- No backend, no external runtime UI dependency, and Vercel-ready

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

- `src/App.jsx` - staged simulator flow, screen state, scoring, and UI composition
- `src/data/riskSimulator.js` - category, stage, risk, quiz, video, and grading content
- `src/styles/global.css` - mobile-first visual design and animations
- `src/main.jsx` - React entry point

## Stage Videos

The stage briefing videos live in `public/videos` with lowercase, hyphenated, HTML-friendly filenames. They are used before the relevant activity begins. NovaTech uses videos for project brief, risk identification, and risk analysis; its risk response and monitoring stages use interactive intro cards. To replace or add a video, update the matching `videoSrc` entry in `src/data/riskSimulator.js`.

## Adding Categories

Add a new object to `categories` in `src/data/riskSimulator.js`. Each category needs an `id`, display details, colors, and a `questions` array with scored options.
