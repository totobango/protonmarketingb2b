# Product

## Register

brand

## Users

Proton's Performance Marketing Lead and the hiring team for the Performance Marketing Manager B2B role in Barcelona. They are reading this between other applications, on a desktop, with limited patience and a very well-calibrated sense of what a marketer who actually knows the platforms sounds like. They will fact-check the Proton claims, because they wrote them.

The job to be done: decide within ninety seconds whether Thomas Germain is worth an interview, then find enough substance to justify that decision to a colleague.

## Product Purpose

A pitch site that argues Thomas Germain should run Proton's B2B paid acquisition, by doing a piece of the job rather than describing it. Success is an interview, and secondarily a reader who forwards the link.

The site has to survive two audiences at once: a marketer checking the strategy holds up, and a designer or engineer checking the execution does.

## Brand Personality

Precise, plain, quietly confident. Borrowed deliberately from Proton's own voice: short declaratives, concrete nouns, no hype, comfortable stating a limitation out loud. Evidence before assertion. The site should read as though someone inside Proton wrote it on a good day.

Confidence is carried by specificity, never by adjectives.

## Anti-references

- **The generic AI landing page.** Uppercase eyebrow above every section, identical three-across card grids, side-stripe accent borders, numbered `01 / 02 / 03` scaffolding, gradient text, hero-metric templates. The single biggest risk to this project's credibility.
- **The designer's portfolio flex.** Art direction that draws attention to itself rather than to the argument. This is a business document that happens to be well made.
- **Template SaaS.** Rounded icon above every heading, stock abstract gradients, "empower / streamline / seamless" copy.
- **The consultancy deck.** Benchmark numbers presented with false precision and no source.

## Design Principles

1. **Practice what it preaches.** A pitch about privacy-first marketing cannot ship third-party trackers, a cookie banner, or analytics. The absence is the argument.
2. **Show the work, don't claim it.** Verified prices, cited sources, named limitations. Where a number could not be sourced, say so on the page.
3. **Borrow Proton's grammar, not its logo.** Match the visual system closely enough to feel native; label the site clearly as an independent applicant's work.
4. **Every element earns its place.** If a card, a label, or a divider is there because landing pages have them, remove it.
5. **State the limitation.** Admitting what a method cannot do is the most persuasive move available to a performance marketer talking to other performance marketers.

## Accessibility & Inclusion

WCAG 2.1 AA as a hard floor: body text at or above 4.5:1, large text at or above 3:1, verified programmatically rather than by eye. Full keyboard operability, visible focus rings, correct heading order, form errors tied to inputs via `aria-describedby`.

Motion respects `prefers-reduced-motion`. Scroll reveals enhance an already-visible default so the page never ships blank to a headless renderer or a background tab.
