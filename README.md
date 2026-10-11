# SpotPlot website

A plain static site (HTML + CSS, no build step) for spotplot.app, hosted on GitHub Pages.

- `index.html`: home page (features, pricing, FAQ, download)
- `manual.html`: the user manual
- `support.html`: support FAQ and contact
- `styles.css`: all styling (dark, Apple-style, matches the app)
- `img/`: screenshots from the invented demo show "The Lighthouse", so no real show data appears

Preview locally by opening `index.html` in a browser.

## Before launch

- [ ] **Stripe checkout links:** the Buy Standard / Buy Student buttons in `index.html` point to `#` (marked `TODO before launch`). Replace them with the Stripe checkout links.
- [ ] **Domain:** buy spotplot.app, then add a `CNAME` file containing `spotplot.app` and point the domain's DNS at GitHub Pages (Settings → Pages → Custom domain).
- [ ] **App links:** in SpotPlot, point Help → SpotPlot Website (currently wheelermoon.com) at https://spotplot.app.
- [ ] **Policies:** confirm the billing answers on the Support page (cancellation, student verification) match how Stripe is set up.
- [ ] **Download link:** points to the latest GitHub release's `SpotPlot.dmg`, so new releases need that exact file name.

## Publish on GitHub Pages

1. On github.com, create a new repository, for example `spotplot-website`.
2. Push this folder to it.
3. In the repository, go to Settings → Pages, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
