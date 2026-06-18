# michigan.org — JEC Pitch Deck

RFP-CASE-449952 · Pure Michigan × MMGY · Michigan Strategic Fund Joint Evaluation Committee.

A 14-screen oral-presentation deck (cover + 13 content slides) that ends on a button launching the live demo. Built on the `horizon-overview` template — same stack, layout system, design tokens and motion language.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173  → redirects to /01
npm run build    # type-checks + builds to dist/ (self-contained offline fallback)
npm run preview  # serve the built dist/
```

Present full-screen at **16:9** (the slides are designed for a 1280×720 / 1920×1080 screen-share).

## Controls

| Key | Action |
| --- | --- |
| → / Space / PageDown | Next slide |
| ← / PageUp | Previous slide |
| Home / End | First / last slide |
| **N** | Toggle **presenter notes** (the verbatim talk track). Hidden by default — safe to leave off during screen-share, or open it on a second, un-shared window. |
| Esc | Close notes |

The on-screen nav pill (bottom-right) also steps through slides.

## Slide order

| # | Slide | Section |
| --- | --- | --- |
| 01 | Cover | — |
| 02 | We know Michigan (3 facts) | Team |
| 03 | The people doing the work (wave grid) | Team |
| 04 | A team of people who… (3 values) | Team |
| 05 | Discovery has changed (constellation) | The shift |
| 06 | It comes down to trust (broken links) | The shift |
| 07 | Bots now outnumber humans (53% grid + 8,000% line) | The shift |
| 08 | Why we're optimistic (first-mover curve) | The opportunity |
| 09 | The website is the intelligence (hub — signature) | Destination Intelligence |
| 10 | Trust · Taste · Ownability | Destination Intelligence |
| 11 | Managing site traffic (seasonal line + uptime) | Traffic / Security / Access |
| 12 | Secure by design (bots vs shield) | Traffic / Security / Access |
| 13 | Private & accessible by default (WCAG gauge) | Traffic / Security / Access |
| 14 | "Time for some design →" → **live demo** | Transition |

Slide 14's button launches the demo and the deck ends there — everything after is the live walkthrough.

## Before Monday — open items

1. **Demo URL** — paste the live demo link into `DEMO_URL` at the top of `src/slides/Slide14TimeForDesign.tsx`. Until then the button shows a reminder instead of opening a blank tab.
2. **"20 employees"** wording on slide 02 — confirm the headcount line.
3. **Discoverability proof point** (slide 08) — currently a first-mover divergence curve. If a real client before/after number is available, it can replace the curve.
4. Horizon is intentionally **not named** on slides 09/10 (held for the demo, per Dave's call). Easy to add back if you change your mind.

## Static fallback

`npm run build` produces a self-contained `dist/` that runs offline from any static server (`npm run preview`) — the first line of defense if the live build hiccups.

For an image/PDF fallback: open the deck in a foreground browser (so animations settle), then on each slide use the browser's **Print → Save as PDF** (landscape), or screenshot each of `/01`…/`/14`. Keep the export with the presenter as a backup if screen-share or the demo link fails.

## Brand note

Per Dave's direction this keeps the template's ember/orange design system rather than re-skinning to Pure Michigan blue; the *content* is Michigan-specific and the cover carries the Pure Michigan × MMGY lockup. To re-skin later, the palette lives in `tailwind.config.js` (`ink`, `bone`, `ember`, `glow`).
