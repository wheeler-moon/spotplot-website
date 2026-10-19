# SpotPlot website

A plain static site (HTML + CSS, no build step) for spotplotapp.com, hosted on GitHub Pages.

- `index.html`: home page (features, pricing, FAQ, download)
- `manual.html`: the user manual
- `support.html`: support FAQ and contact
- `styles.css`: all styling (dark, Apple-style, matches the app)
- `img/`: screenshots from the invented demo show "The Lighthouse", so no real show data appears

Preview locally by opening `index.html` in a browser.

## Before launch

- [ ] **Stripe checkout links:** the Standard and Student buttons in `index.html` say "Coming soon" (marked `TODO at launch`). Turn them into Buy buttons linking to Stripe checkout, and change the download band's wording back to "from your purchase".
- [x] **Domain:** spotplotapp.com is bought; the `CNAME` file holds it. Still to do: point its DNS at GitHub Pages (see below), then turn on "Enforce HTTPS" in Settings → Pages.
- [x] **App links:** SpotPlot's Help → SpotPlot Website and Settings → Visit spotplotapp.com point here.
- [ ] **Policies:** confirm the billing answers on the Support page (cancellation, refunds, student verification) match how Stripe is set up.
- [ ] **Privacy Policy and Terms** (`privacy.html`, `terms.html`) are drafts: a lawyer reviews them before launch, and the business's legal name and mailing address go in once The Wheeler Moon Group is registered.
- [ ] **Download link:** points to the latest GitHub release's `SpotPlot.dmg`, so new releases need that exact file name.

## Publish on GitHub Pages

1. On github.com, create a new repository, for example `spotplot-website`.
2. Push this folder to it.
3. In the repository, go to Settings → Pages, set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.

## DNS for spotplotapp.com

At the domain registrar, add these records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | wheeler-moon.github.io |

Remove any other A or "parked page" records for `@` first. DNS can take up to a day to spread; then GitHub issues the HTTPS certificate.
