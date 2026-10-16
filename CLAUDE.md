# CLAUDE.md

The SpotPlot website, live at https://spotplotapp.com. Plain HTML and CSS, no build step, hosted on GitHub Pages from `main` (repo `wheeler-moon/spotplot-website`, public). Pushing `main` publishes the site within about a minute.

The owner is a lighting designer, not a professional developer. Explain changes in plain terms.

## Home base

This site is one of several SpotPlot projects. The shared docs live in the desktop app's repo (`~/Desktop/followspot`):

- `docs/README.md`: map of every SpotPlot project and how they connect
- `TODO.md`: the one to-do list (see its Website section)
- `CHANGELOG.md`: every user-visible app change; check it so the manual stays accurate
- `DESIGN.md`: the one design language; `styles.css` here uses the same tokens

## Pages

- `index.html`: home (features, pricing, FAQ, download)
- `manual.html`: the user manual
- `support.html`: support FAQ and contact
- `motion.js`: the home page's Apple-style motion (entrances on load and on scroll, the growing hero screenshot); hover effects live in `styles.css`. Rules are in DESIGN.md → Motion, and everything stays still with Reduce motion on
- `styles.css`: all styling; `img/`: screenshots from the invented demo show "The Lighthouse" (never real shows)

## Rules

- **The manual and support pages must match the app.** When the desktop or iPad app changes how something works or looks, update these pages (and screenshots if they're now wrong) as part of that change.
- The top bar and footer are repeated in all three pages: change all three.
- Pricing: Standard and Student are shown; Production and Education are "Coming soon" without prices. Buy buttons stay "Coming soon" until Stripe is set up (see README).
- The download link points to the newest GitHub release's `SpotPlot.dmg`, so releases must keep that file name.
- Check pages at desktop and phone widths: nothing should scroll sideways.
