# Vincent Sadino — Portfolio

React + React Router DOM + Tailwind CSS v4. Built from the mobile/desktop
layout mockups and the brand Design System (logo, color palette, Poppins
type scale).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint       # eslint
```

## Project structure

```
src/
├── assets/         # logo-icon.png (cropped from Design_System.png)
├── components/     # shared UI: Sidebar, Topbar, PageHero, StatsBar, IconCard,
│                   # Timeline, CTASection, ProjectThumb/Card, GalleryCard/Modal…
├── data/           # siteData.js — every page's content in one place
├── hooks/          # useTheme.js — light/dark toggle
├── layouts/        # MainLayout.jsx — sidebar + topbar shell
├── pages/          # one file per route
└── styles/
    ├── variables.css  # design tokens (colors, type scale, radii, shadows)
    └── index.css      # Tailwind import + @theme bridge + fonts + base styles
```

## Design system

All brand values live in **`src/styles/variables.css`** as plain CSS custom
properties — colors, the Poppins type scale, radii, shadows. `src/styles/index.css`
bridges a subset of them into Tailwind's `@theme` so utilities like
`bg-brand-orange`, `text-brand-blue`, `bg-brand-navy` and the custom
`animate-fade-in` / `animate-fade-in-up` / `animate-scale-in` animations are
generated straight from those tokens. Change a color or radius once in
`variables.css` and it updates everywhere.

Light/dark mode works the same way: `[data-theme="dark"]` in `variables.css`
re-points the *semantic* tokens (`--color-bg-page`, `--color-text-primary`,
etc.) — brand colors themselves never change, only the canvas around them.
Toggle it from the sun/moon icon in the top bar.

## Animations

All custom animations are registered as Tailwind v4 theme values in
`src/styles/index.css` (`--animate-fade-in`, `--animate-fade-in-up`,
`--animate-scale-in`, `--animate-slide-in-right`, `--animate-float`), so
they're used as normal utility classes (`animate-fade-in-up`, etc.) — add
more the same way. Grids and lists (stats, cards, timeline entries,
gallery) stagger their entrance using a small inline `animationDelay`
per item, since Tailwind's `delay-*` utilities only apply to
`transition`, not `animation`. Page navigation itself fades in via a
`key`-based remount in `MainLayout.jsx`.

## Real assets already wired up

- **Profile photo** — `public/portrait.png`, rendered by `ProfilePortrait`.
  Swap that file for a different photo any time (same filename).
- **Tech logos** — the `logo-*.png` files in `public/` are mapped by name
  in `techLogos` (`src/data/siteData.js`) and rendered next to skill/tech
  names in Skills & Tools, Tech I Use, and Tech Stack. Add a new logo file
  and a matching entry in `techLogos` to cover more tools.
- **Favicon** — `public/favicon.png`, referenced from `index.html`.

## Still placeholder — replace before shipping

- **Project screenshots** — `ProjectThumb` renders a gradient panel with a
  dashboard glyph per project (colors set via `coverFrom`/`coverTo` in
  `siteData.js`). Swap for real screenshots once you have them.
- **Gallery photos** — same gradient-panel pattern in `GalleryCard` /
  `GalleryModal`.
- **Achievements, Portfolio projects, and Gallery content** are still
  example data — the CV used to build this site didn't include awards,
  a project list, or photos. Replace the entries in `siteData.js`
  (`awards`, `keyAchievements`, `projects`, `galleryItems`) with real ones.
- **Social links & personal website** (`profile.social`, `profile.website`
  in `siteData.js`) are still guessed placeholders.

## Content

Everything text-based — profile info, nav, stats, projects, experience,
education, achievements, gallery items, contact details — lives in
`src/data/siteData.js`. Edit values there; the pages just render it.

Portfolio filter categories are `All, Company Profile, Dashboard,
E-commerce, APIs, Others` (`portfolioCategories` in `siteData.js`) — give
each project a matching `category` value to file it correctly. Gallery
photos open in a modal (`GalleryModal.jsx`) with prev/next navigation,
not a separate page.

## Notes

- The contact form (`src/pages/Contact.jsx`) opens WhatsApp (`wa.me`) in a
  new tab with the message pre-filled, addressed to `profile.phone` — no
  backend needed. Swap in Formspree/EmailJS/your own API instead if you'd
  rather receive messages by email.
- "Download CV" buttons link to `href="#"` — point them at a real PDF once
  you have one (e.g. `/cv.pdf` in `public/`).
- Social links (`GitHub`/`LinkedIn`/`Instagram`) and the resolved contact
  email/phone are all in the `profile` object in `siteData.js`.
