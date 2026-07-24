# Proton B2B Performance Marketing Strategy

A pitch site for the **Performance Marketing Manager B2B** role at Proton (Barcelona), by Thomas Germain.

**Live pitch:** the strategy, a 90-day plan, a privacy-first measurement stack, four campaign concepts, and four working demo landing pages.

---

## Why this exists

Rather than describe how I would run Proton's B2B paid acquisition, I built it: the strategy is on one page, and four of the campaign concepts have real landing pages with working forms attached.

## What's in it

| Route | What it is |
| --- | --- |
| `/` | The pitch: why me, audience mapping, 90-day plan, benchmarks, measurement, campaigns, channel mix |
| `/demo/legal` | Proton Mail for Legal Teams |
| `/demo/startups` | Proton Workspace for Startups |
| `/demo/media` | Proton VPN for Newsrooms |
| `/demo/compare` | Proton vs Google Workspace |

## Accuracy

Every Proton product name, price, feature and certification claim on this site was read directly from `proton.me` and `proton.me/business/plans` in **July 2026**. Where a market benchmark could not be traced to a credible original source, it is labelled as such on the site rather than quietly dropped or quietly used.

Two deliberate omissions:

- **No unverified customer names.** Only Proton's own published customer statistics and testimonials appear.
- **No competitor pricing.** Google and Microsoft prices vary by plan and region, and quoting an unverified competitor price is how a comparison page loses its credibility.

## Design

The design system was extracted from proton.me's live computed styles rather than guessed:

- **Colour**: `#1B1340` (dark sections), `#372580` (headings), `#6D4AFF` (brand purple), `#67E8F9` (primary CTA), Tailwind's grey ramp for neutrals
- **Type**: Proton serves Inter as `ProtonSans` and ABC Arizona Flare as `ProtonSerif`. Inter is used as-is; Fraunces stands in for Arizona Flare (a licensed face), held at a text optical size so its contrast matches
- **Shape**: pill buttons (`border-radius: 9999px`), cards at 16-28px, `0 4px 16px rgba(31,31,35,0.08)` elevation

## Practising what it preaches

No third-party scripts, no analytics, no cookie banner, no tracking pixels. Fonts are self-hosted via `next/font`. The forms are client-side only and transmit nothing.

## Running it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build
```

Builds all six routes as static pages. Deploys to Vercel with no configuration.

## Stack

Next.js 16 (App Router) · TypeScript · CSS Modules · zero runtime dependencies beyond React.

---

**Thomas Germain**, Barcelona, 2026
[thomasgermain5@proton.me](mailto:thomasgermain5@proton.me) · [adsfellow.app](https://adsfellow.app) · [b2blast.com](https://b2blast.com) · [linkedin.com/in/thomasgermain5](https://linkedin.com/in/thomasgermain5)

*An independent pitch by a job applicant. Not affiliated with, endorsed by, or published by Proton AG.*
