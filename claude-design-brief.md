# Prodigal Swan — Brief for Claude Design

Paste the prompt below into claude.ai/design (High fidelity prototype). Notes for Keith follow at the bottom.

---

## Prompt

Design a single-page website for **Prodigal Swan**, a fire-breathing, LED-lit art car based in Las Vegas. This replaces an existing Wix site at prodigalswan.com. Output should be a single-file responsive HTML page that can host anywhere.

### Voice and tone

Irreverent, swaggering, a little profane. The Swan has a chip on its shoulder.

Anchor tagline: *"Self-discovery's a bitch when you're flammable."*

Voice samples:
- "We broke it, we fixed it, now duck."
- "A cargo mover's midlife crisis turned playa legend."
- "Redemption's for suckers — this swan's here to burn shit down."

### What the Swan is

A 2016 art car. A fire-breathing steel mechaswan welded onto a 1996 Taylor-Dunn electric cargo mover. Born from the ashes of a previous art car called *Beezus Christ Supercar*. Built by the Dust to Dust Collective out of Oakland. Lives in Las Vegas. Returns to the Black Rock playa annually. Available for festivals, parades, brand activations, film shoots, and private bookings.

### Visual direction

Dark, cinematic, atmospheric. Black-to-deep-charcoal base. Flame-orange accents around `#E8913A`. Real golden-hour desert photography of the Swan should drive the hero and act as full-bleed visual breaks between sections.

Typography pairing:
- **Display** — chunky condensed sans-serif at huge sizes with tight letter-spacing (Bebas Neue, Anton, Inter Black, or similar). For the hero wordmark and big section moments.
- **Editorial** — Playfair Display (or a similar slim serif) for atmospheric pull-quotes and section labels.
- **Body** — Inter or similar humanist sans at 16px.

Aesthetic notes: subtle grain, ember glows on interactive elements, dust/ash/smoke energy. Avoid anything that feels corporate or SaaS-y. This is a rock-and-roll fire-breathing art car, not a fintech.

### Use this hero photo

Golden-hour shot of the Swan with a person posing on top:
`https://static.wixstatic.com/media/a8963e_3e279d1c362942bcabdbc12050095478~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90,enc_avif,quality_auto/a8963e_3e279d1c362942bcabdbc12050095478~mv2.jpg`

Logo (small swan-with-flame mark, currently at low res, ok to use as-is):
`https://static.wixstatic.com/media/5db773_91d8d2ef0648416686eb86193b97679d~mv2.png`

### Page structure (top to bottom)

1. **Sticky translucent nav** — Logo + small wordmark on the left; links on the right: About / Specs / Gallery / Press / Where to Find Us / Booking.
2. **Hero** — Full-bleed cinematic photo (the URL above). Huge "PRODIGAL SWAN" wordmark, tagline below ("Self-discovery's a bitch when you're flammable"), then a "Book for your event" CTA in flame-orange. Subtle scroll hint at the bottom.
3. **About** — Three trimmed paragraphs covering the Beezus origin, the 2016 rebirth as Prodigal Swan, and the Vegas-to-playa annual rampage. Editorial layout. Pull a key line out as a serif blockquote.
4. **Specs grid** — Six cards: Dimensions (6' × 16' × 12'), Base Vehicle (1996 Taylor-Dunn B248), Weight & Capacity (10,000 lbs / 4,000 lb load), Power (Dual 500Ah battery packs + onboard propane), Lighting (200m programmable LED), Fire Effects (Propane crown flame, certified operator).
5. **Fire system schematics** — Two technical diagram cards showing the side-profile fire layout and the propane plumbing flow. Reads as engineering credibility for event bookers worried about safety.
6. **Photo gallery** — Cinematic horizontal-scroll carousel or grid of the Swan at festivals, in Vegas, on the playa. Pull additional photos from the existing prodigalswan.com photo carousel.
7. **Press** — Three card links: Forbes (2022, *Burning Man's Outrageous Mutant Vehicles Of The Future*), SFGate (2019, *Burning Man's 2019 Mutant Vehicles*), From the Playa (2025, *The Prodigal Swan: Our Fire-Spitting Tyrant*).
8. **Where to find us (ecosystem)** — Full-width dramatic section with two cards:
   - **Swan Forest Camp** — Burning Man 2026, Aug 30 – Sep 7. *Two art cars, one camp, Black Rock City.* Link to https://www.swanforestcamp.com
   - **ForestHouse** — Our partner art car, a glowing two-story forest mutant vehicle. Link to https://foresthou.se
9. **Booking** — Bookable for $5,000 per 6-hour event. Includes: trained driver for the full event, certified fire operator and propane, full LED light show programming, sound system with DJ input, transport to and from the venue. CTA: "Get in touch" → `mailto:info@prodigalswan.com?subject=Booking%20Inquiry`.
10. **Footer** — Small swan mark, © 2026 Prodigal Swan, Las Vegas NV, Instagram link (@prodigal_swan), and a quiet link to swanforestcamp.com.

### Motion

Subtle: very slow ken-burns drift on the hero, ember-glow on hover for the flame-orange buttons, scroll-driven fade-ins on section reveals, gentle parallax on full-bleed photography breaks. Nothing that hurts mobile performance.

### Accessibility

Strong text contrast against dark backgrounds. All touch targets ≥44px. Every image alt-tagged. Booking CTA fully keyboard-reachable. Respect `prefers-reduced-motion`.

### Output format

A single self-contained HTML file with inline CSS. No build step. Should drop onto any static host.

---

## Notes for Keith

- Try **High fidelity** mode in Claude Design first — it'll get closer to the cinematic vibe than Wireframe.
- If the first generation goes too far in one direction (e.g. too SaaS, too corporate, too minimal), feed it back specific notes: *"more rock-and-roll, more dust, less clean"*, or *"the wordmark should feel like Bebas Neue at 200px, not Playfair"*.
- The hero photo URL above is hot-linked from your Wix CDN. Once the redesign is final, we should download the original and host it locally in your repo to remove the Wix dependency before fully migrating off Wix.
- If Claude Design doesn't get there, we fall back to iterating `index.html` directly — I've already got the hero photo wired in and the nav updated. Drop me back into that flow and I'll finish the gallery, ecosystem, and trimmed-About moves.
- When you have a draft you like, save the HTML, drop it in `/Users/keithwhite/Projects/prodigal-swan-web/`, and I'll do a design-critique + accessibility review pass before launch.
