# peptriva — Master Design Brief

**Hand-off document for designing the peptriva website.**

This is the single source of truth. It consolidates the original product requirements, brand identity, content strategy, page-by-page direction, compliance constraints, and acceptance criteria. You should be able to design and build the site from this document alone.

---

## Table of contents

1. [Product in one paragraph](#1--product-in-one-paragraph)
2. [Business model & legal posture](#2--business-model--legal-posture)
3. [Audience](#3--audience)
4. [Brand identity](#4--brand-identity)
5. [Visual & UX rules](#5--visual--ux-rules)
6. [Reference sites (inspiration)](#6--reference-sites-inspiration)
7. [Sitemap](#7--sitemap)
8. [Page-by-page direction](#8--page-by-page-direction)
9. [Membership — the strategic core](#9--membership--the-strategic-core)
10. [Subscription / protocol model](#10--subscription--protocol-model)
11. [AI research assistant](#11--ai-research-assistant)
12. [Catalog snapshot](#12--catalog-snapshot)
13. [Compliance guardrails](#13--compliance-guardrails)
14. [Out of scope for v1 launch](#14--out-of-scope-for-v1-launch)
15. [Tech preferences](#15--tech-preferences)
16. [Acceptance criteria](#16--acceptance-criteria)

---

## 1 · Product in one paragraph

**peptriva** is a research-use-only (RUO) peptide ecom and education platform for serious researchers. Visitors arrive via SEO and social, pass through a 21+ age gate, and land on a dynamic quiz that maps their research interests to a recommended peptide stack — and to a single premium membership that bundles auto-shipments, dosing/protocol guidance, education, AI research assistance, and member-only perks. The site sells individual research peptide vials (no bundling) backed by batch-specific Certificates of Analysis. The brand voice is editorial-scientific, never wellness, never lifestyle.

---

## 2 · Business model & legal posture

### Today: Option 2 — Research Use Only (RUO)
- Sell research peptides directly to researchers/labs/institutions.
- Strict RUO compliance: no human-use, no medical, no therapeutic, no clinical-outcome language on any product, shop, quiz, protocol, or membership page.
- Clinical literature is allowed **only** on `/blog` with an educational disclaimer.
- 21+ age gate at the door, persistent.
- AI evaluation of user goals → peptide-category recommendations only (legality-safe).

### Tomorrow: Option 1 — Telehealth-prescribed
- When peptides become legally prescribable, pivot the same brand & infrastructure to a telehealth model where physicians prescribe peptides, AI recommends protocols.
- Same brand, same logo, same colors — design must extend to medical/telehealth without rebrand.

### Strategic priority: recurring revenue
The membership and protocol-tied subscriptions are the long game. The single most important conversion event on the site is **membership signup**, and the second most important is **protocol-tied subscription**. Single-purchase orders are a fallback path, not the goal.

---

## 3 · Audience

### Primary
- Independent researchers (academic, industry, hobbyist with research project)
- Lab managers buying for research workflows
- Aged 25–55, technical, science-literate
- Skeptical of wellness marketing — respond to chemistry, methodology, transparency

### Secondary
- Institutional buyers (universities, biotech, contract research orgs) — secondary funnel via `/contact` and institution-specific pricing

### Voice signals to nail
- "Characterized" not "high quality"
- "Research model" not "users"
- "Methodology" not "process"
- "Documented" not "trusted"
- "Batch-traceable" not "premium"

---

## 4 · Brand identity

### Name
**peptriva** — lowercase, always.

### Logo
- Wordmark in lowercase Inter Tight (or comparable geometric sans), 800 weight, tight tracking
- Small ✦ sparkle accent positioned bottom-right of the wordmark, used sparingly
- **On light backgrounds**: black text on transparent
- **On dark backgrounds**: white text on transparent
- Never rendered with effects, never colored — it's monochrome black or white
- Provided asset has a black background that should be removed; redraw if needed for a true SVG transparent version

### Colors (the entire palette — use these tokens)

| Token | Hex | Use |
|---|---|---|
| Blurple | `#635BFF` | Primary action, links, focus rings |
| Electric Cyan | `#00D4FF` | Secondary accent, highlight chips |
| Vibrant Magenta | `#FF5DB1` | Tertiary accent, badges |
| Sunset Orange | `#FF8E00` | Promo / save indicators, alerts |
| Golden Yellow | `#FFD400` | Subtle accents, illustrations |
| Midnight | `#0A2540` | Headings, primary text, dark sections |
| Slate Grey | `#425466` | Body text, borders, muted UI |
| White | `#FFFFFF` | Page background |
| Surface | `#F6F9FC` | Section / card background |

### Typography
- Display: **Inter Tight** (or geometric-sans equivalent), 700–800 weight, tight tracking
- Body: **Inter** 400/500
- Lowercase brand voice for headings; sentence case for body
- Generous size jumps (display 48–96px desktop, body 15–17px)

### Brand visual identity: peptide structure illustrations
This is the differentiator. **Do not skip this.** Every peptide on the site has its own deterministic structure illustration generated from its amino-acid sequence — so every product page, research page, and COA modal has a unique scientific visual that represents the actual molecule.

- 2D backbone-and-residue ribbon: alpha-carbon zigzag with side-chain spheres
- Residues colored by class, rotated through brand colors (Blurple / Cyan / Magenta / Sunset / Yellow on Midnight or White)
- Solid colors only — **never gradient strokes or fills**
- Slow draw-in animation on mount (~2–3 seconds), then idle subtle motion
- Respect `prefers-reduced-motion`

These illustrations appear on:
- Hero of each `/research/[peptide]` education page
- COA library row-click modal
- Featured-product spots on the home page
- Optionally as decorative dividers (still solid colors, no gradients)

---

## 5 · Visual & UX rules

### Hard rules
- **No gradients.** Solid color blocks, hairline strokes, monochrome illustrations.
- One accent color per section, max two per page.
- Light mode is primary. Dark sections are accent only (e.g., quality hero, membership upsell band).
- Mostly white background with Midnight headings and Slate body.

### Editorial / scientific feel
- Closer to *elevenlabs.io*, *seed.com*, *sapgoodenergy.com* than *gnc.com*.
- Generous whitespace; section padding ~96–128px desktop, 64–80px mobile.
- Hairline 1px dividers instead of background-color section changes where possible.
- Display weight for headlines, generous size jumps.
- Cards: white, 1px Slate border, optional soft shadow on hover. No gradient borders.
- Buttons: pill-shape, Midnight primary, hairline outline secondary, no gradient fills. Hover = darken.
- Iconography: line-weight icons (Lucide style), Midnight or Slate, never multi-colored.

### Animation
- Subtle fade/slide (200–300ms), no parallax.
- Peptide structures animate in over ~2–3s on viewport entry, then idle drift.
- Respect `prefers-reduced-motion` everywhere.

---

## 6 · Reference sites (inspiration)

| Site | Use as reference for |
|---|---|
| [elevenlabs.io](https://elevenlabs.io) | Overall aesthetic — dark/light contrast, type rhythm, scientific minimalism |
| [seed.com/daily-multivitamin](https://seed.com/daily-multivitamin) | Long-form education-style page format → `/research/[peptide]` |
| [sapgoodenergy.com/products/case-with-10-sap](https://sapgoodenergy.com) | Three-column product page, sub-vs-once selector, dotted-divider value props |
| [superpower.com](https://superpower.com) | Membership UX, perk presentation, single-tier conviction |
| [ezpeps.com/coa-library](https://ezpeps.com/coa-library) | COA library table format (we'll add a row-click modal on top) |
| [stripe.com](https://stripe.com) | Editorial-scientific developer/research voice |

---

## 7 · Sitemap

```
/                               Marketing landing
                                Hero → Quiz CTA → Stacks teaser → Quality teaser → Membership teaser → Footer

/quiz                           Standalone quiz funnel → membership
/quiz/results                   Saved share-able results page (with /quiz/results/[id] for emailed links)

/research                       Research library index (browse by class)
/research/[peptide]             Education-only deep-dive (long-form, scientific)

/shop                           Catalog (filterable, ecom-style cards with vial mockups)
/shop/[peptide]                 Ecom product detail (vial mockup hero, sticky buy rail, sub-vs-once)

/protocols                      Curated stacks index
/protocols/[slug]               Stack detail
/protocols/[slug]/subscribe     Protocol-tied subscription configurator

/membership                     Single-tier membership landing
/membership/welcome             Post-signup onboarding

/coa                            COA library — table with row-click modal
/quality                        Deep quality / safety / methods page (12 sections)
/about                          Brand story, principles, transparency commitments
/blog                           Educational research blog (clinical lit allowed here only)
/blog/[slug]                    Article

/account                        Member dashboard
  /account/protocols            Active protocol subscriptions + progress tracking
  /account/orders               Order history
  /account/coas                 Saved COA archive (forever-searchable)
  /account/journal              Per-protocol research notes
  /account/billing              Membership + payment

/login, /signup
/checkout, /checkout/success

/legal/research-use, /legal/terms, /legal/privacy
/contact, /faq
```

---

## 8 · Page-by-page direction

### 8.1 Home (`/`)

The home page is a funnel router, not a destination. Three cards above the fold, all leading to `/quiz`, `/membership`, or `/shop`.

- **Hero** — single bold question or claim ("Research peptides, characterized.") + primary CTA "Find research peptides for your work" → `/quiz`. Solid Midnight or White block, single-color accent line. Optional small peptide-structure illustration to one side.
- **Three-card row** — *Take the quiz* / *Browse stacks* / *Why peptriva*
- **Featured stacks** (3 cards with vial mockups) → links to `/protocols/[slug]`
- **Quality teaser strip** — 4 stat tiles (HPLC %, USP <797>, COA per batch, no bundling) with link to `/quality`
- **Membership teaser** — single CTA, member-pricing math, link to `/membership`
- **Blog teaser** — 3 latest articles
- **Footer** — full link grid + RUO long-form disclaimer

CTAs above the fold should drive **primarily to `/quiz`**, secondarily to `/shop`.

### 8.2 Quiz (`/quiz`)

Standalone marketing landing page optimized for membership conversion. **The single most important page on the site for funnel performance.**

Structure:
1. **Hero** — single bold question: "What does your research need?" + Start CTA. Solid color block, single accent line, no gradients.
2. **Quiz flow** — full-screen question-by-question UX (one question per "screen"), animated transitions, big tap-targets, progress dots. ~5–7 questions:
   - Research category interest (multi-select)
   - Typical sequence length you study
   - Required characterization on COA (multi-select)
   - Research cadence (one-off study / quarterly / continuous program)
   - Have you bought research peptides before?
   - How important is dosing/protocol guidance to your work?
3. **Mid-quiz nudges** — small "did you know?" cards between questions reinforcing peptriva differentiators (per-batch COA, no bundling, etc.)
4. **Results screen** — three sections, in this order:
   1. **Recommended research category** with the 2–3 top peptides for that category (links to `/research/[peptide]` for education)
   2. **Recommended protocol/stack** — the named protocol that fits their answers, with a "Subscribe to this protocol" CTA
   3. **Membership upsell** — full-width section explaining why their answers point to the membership being a fit. Includes a one-click "Start my membership" button. Soft, not pushy — emphasize the math (free shipping + member discount + dosing app + …) over the next 6 months if they actually run the protocol they were just recommended.
5. **Email capture** as a soft option below the results: "Save these recommendations to your inbox" (single-field).
6. **No human-use claims anywhere** — all results phrased as research-category and research-protocol recommendations, not personal-outcome promises. The standard quiz disclaimer remains.

### 8.3 Research library (`/research` and `/research/[peptide]`)

Pure educational content. No add-to-cart hero. This is the resource library a researcher reads to learn about a peptide before deciding whether to buy.

#### `/research` — index
- Browse-by-class layout
- Each card: peptide name, class, one-line description, link to `/research/[peptide]`
- No prices, no buy buttons, no urgency

#### `/research/[peptide]` — single peptide deep-dive
Long-form, editorial, ~10-section scroll:
- **Hero** — peptide name, class chip, sequence preview, **animated structure visualization in solid brand colors** (specific to that peptide's sequence)
- **Discovery & history** — when, who, what was the parent molecule
- **Mechanism of action (as published)** — receptor targets, signaling pathways, cellular effects per published research
- **Structure deep-dive** — residue chips, MW, pI, modifications
- **Characterization standards** — what HPLC purity, MS identity, etc. typically look like for this molecule
- **Storage & handling guide**
- **Related peer-reviewed literature** — with educational disclaimer per blog rules
- **Reading time** displayed at top
- **Related research** — cross-link to other `/research` entries in the same class at the bottom
- **"Ready to research?"** — single small button at the bottom that links to the corresponding `/shop/[peptide]` product page (no upsell pressure, just a clean handoff)

This is the long-form, seed.com-style page the v1 prototype called "Design A". It belongs HERE, not on product pages.

### 8.4 Shop (`/shop` and `/shop/[peptide]`)

Proper ecom — closer to **sapgoodenergy.com**, **athleticgreens.com**, or **seed.com** product pages, but for research vials.

#### `/shop` — catalog
- Filterable grid by research category, sequence length, format (vial mg)
- Each card shows: vial mockup, name, class, price, "subscribe & save" indicator
- Sort by: featured, alphabetical, price low→high, recently restocked
- Top of grid: short editorial intro for the category (2 sentences)
- No bundling promos anywhere

#### `/shop/[peptide]` — product detail

**Visual:**
- **Peptide vial mockup** — photorealistic 3D render or photographic style, neutral background. Vial label shows peptide name, batch number, mg, and peptriva logo. The abstract structure illustration moves to a secondary "About this molecule" tab/section that links out to the matching `/research/[peptide]` page.
- Multiple angles in a small gallery: front, top-down with cap removed, label close-up
- Subtle drop shadow, white background, no gradients

**Layout:**
- **Left column**: vial gallery
- **Right column** (sticky on desktop):
  - Class chip + RUO chip
  - Product name (display weight)
  - One-line research-context description
  - Star rating + count
  - **Variant selector** (vial mg, e.g. 5 mg / 10 mg)
  - **Pack size selector** (1 / 3 / 6 vials with per-vial pricing visible)
  - **Subscribe vs One-time** as the primary purchase decision (subscribe is the default highlighted option)
  - If subscribed → **Protocol-aware cadence** (see section 10)
  - "Add to research order" button (Midnight, full-width)
  - Promo strip below: "Members save 15% + free shipping"
- **Below the fold** (one continuous scroll, anchor-navigable):
  - Specs strip (HPLC %, sterility, endotoxin, mg/vial)
  - "About this molecule" — short summary with a link to the full `/research/[peptide]` page
  - Current batch COA card (with the deep COA modal — see 8.7)
  - Storage & handling
  - FAQ specific to this product
  - Cross-sell: stacks this peptide is part of (linked to `/protocols/[slug]`)
- **Sticky bottom buy bar** appears after scrolling past the hero

### 8.5 Protocols (`/protocols`, `/protocols/[slug]`, `/protocols/[slug]/subscribe`)

Curated stacks for research goals. Each protocol is its own product, with its own subscription cadence and tracking.

#### `/protocols` — index
- Card grid by category
- Each card: protocol name, category, included peptides (each as a small chip with its vial mockup), recommended cycle length

#### `/protocols/[slug]` — protocol detail
- Hero: name, category, short research-context description
- Components — each peptide in the stack as a card with name, class, mg/vial, structure illustration
- Recommended cycle: weekly schedule, total cycle length
- "Subscribe to this protocol" CTA → `/protocols/[slug]/subscribe`
- Rationale section explaining why this combination is studied together in research models (NO outcome claims)
- Component COAs surfaced

#### `/protocols/[slug]/subscribe` — configurator
- Cycle length selector
- Cadence selector (weekly / biweekly / monthly)
- First shipment date
- Member vs non-member pricing comparison shown clearly
- One-click "subscribe and start" CTA

### 8.6 COA library (`/coa`)

A public, searchable index of every batch peptriva has ever shipped. **The most important trust element on the site.** Search by batch number, filter by product.

**Each row is clickable → opens a large centered modal:**

- **Animated peptide-structure visualization** of that specific peptide, rendered in brand colors (no gradients) — sequence-driven, slow draw-in animation, ~3 seconds, then idle subtle motion
- Peptide quick-facts: name, class, sequence, MW, pI, vial size, storage
- COA testing section:
  - Batch number, manufacture date, expiry
  - HPLC purity (%) with mini chromatogram visual
  - MS identity match (%) with mini spectrum visual
  - Sterility result (pass/fail)
  - Endotoxin result (EU/mg)
  - Each row has a "view full method" link
- **Download full PDF COA** button (primary action)
- Close on overlay click, ESC, or X button
- Modal animates in (fade + scale-from-95%); peptide structure animation begins immediately on open

### 8.7 Quality (`/quality`)

The trust deep-dive. **Twelve concrete sections** — each must contain real numbers and real methodology, not generic blurbs.

1. **Hero** — "Characterized before it ships" (solid Midnight section with a single Cyan accent line, no gradient).
2. **Manufacturing facility** — FDA-regulated compounding pharmacy partnership, ISO classification, environmental monitoring, chain-of-custody from API to filled vial. Photos of the facility.
3. **Sterility & sterilization** — USP <797> compliance details, terminal filtration vs aseptic fill, sterility-test methodology, growth-medium controls, hold times.
4. **Identity & purity testing** — Reverse-phase HPLC (gradient, column, detection wavelength), ESI-MS with monoisotopic-mass tolerance, MS/MS for sequence confirmation when warranted.
5. **Endotoxin testing** — LAL or rFC assay, EU/mg specification ladder, sensitivity limits.
6. **Heavy-metal & residual-solvent testing** — ICP-MS panel for heavy metals, GC-MS for residual solvents from synthesis.
7. **Stability program** — Real-time + accelerated stability, lyophilized vs reconstituted, expiry-setting methodology.
8. **Cold chain & shipping** — Insulated packaging spec, temperature loggers for sensitive batches, transit-time monitoring.
9. **Recall & batch-failure protocol** — What happens if a batch fails any spec (destroyed, never reworked, never sold). Notification flow to anyone who received product from a recalled lot.
10. **Independent third-party verification** — Optional independent-lab re-testing on request for institutional buyers.
11. **Documentation philosophy** — Why we publish the COA *before* the product ships, not after.
12. **Researcher safety guidance** — Sterile reconstitution technique, PPE recommendations, biohazard handling for any disposed material. Frame as research-lab safety, not user safety.

### 8.8 About (`/about`)

- Hero — origin story + transparency manifesto
- Three principles cards (transparent characterization / no bundling / strictly research use)
- Team blurb (placeholder for now)
- Visual: split with facility/lab photo
- Closing CTA → `/quality` and `/membership`

### 8.9 Blog (`/blog` and `/blog/[slug]`)

The **only** place clinical literature can be referenced. Every article carries an "Educational content — not product guidance" callout.

#### `/blog` — index
- 3-column grid of articles
- Tags as small chips (Characterization, Storage, Cellular biology, etc.)
- Reading time per card

#### `/blog/[slug]` — article
- Centered prose layout, ~3-column max width
- Hero image
- "Educational content — not product guidance" pinned callout
- Bibliography at the bottom

### 8.10 Account dashboard (`/account` + sub-routes)

Logged-in member home. **The product experience that justifies the membership price.**

- `/account` — overview cards: next shipment, active protocol(s), saved COAs count, journal entries
- `/account/protocols` — list of active protocol subscriptions, each with:
  - Progress bar (week 3 of 8)
  - What's in the next shipment, when it ships
  - Cadence/pause/cancel controls
  - Per-protocol journal entries
- `/account/orders` — full order history
- `/account/coas` — searchable archive of every COA the member has received, plus saved-from-public-library COAs
- `/account/journal` — protocol-scoped research notes the member has added per shipment
- `/account/billing` — membership status, payment method, invoices

---

## 9 · Membership — the strategic core

**Single tier. Premium feel. Unmistakable value.**

### Pricing
- One number, e.g., **$49/month** (placeholder — A/B test)
- Annual at $39/month equivalent ($468/yr) for a small commitment discount
- 14-day free trial for first-time members
- Cancel anytime, no contract, no fee

### The 15 perks

1. **Free shipping** on every order — standard insulated cold-chain
2. **Member pricing** — 15% off every research order, every time
3. **Dosing & protocol app access** — web + mobile (PWA). Per-protocol scheduler, reminders, tracking, notes. Compliance-framed: "research protocol scheduler", not human dosing app
4. **Auto-shipments tied to active protocols** — sequenced to your protocol calendar, not arbitrary monthly cadence
5. **AI research assistant — full access** — non-members get a limited stub, members get full chat with longer context, document upload, and reference-paper queries
6. **Member COA archive** — every COA from every shipment auto-saved and searchable forever (kept across cancellations for 12 months)
7. **Priority batch reservations** — first access on new lots; never miss a restock
8. **Free batch re-test on request** — one extra HPLC or MS run per quarter on any shipped batch, on us
9. **First access to new peptides** — 14-day early window before public launch
10. **peptriva research notebook** — quarterly digital lab journal PDF you can drop into Notion/Obsidian; one physical hardcover delivered annually
11. **Members-only weekly research digest** — curated peer-reviewed paper summaries by class, no promotional content
12. **Refer a researcher** — both you and they get a free month, plus a discount on the referee's first protocol subscription
13. **Out-of-spec guarantee** — if any shipped batch fails any of the published specs, we replace and refund — automatic, no claim form
14. **Pause anytime** — up to 90 days, subscription resumes automatically
15. **Beta access** — early invite to new tools (sequence calculator, BBB-permeability predictor, characterization-request portal)

### Membership page structure

- **Hero** — single number ($49/month), one-line value prop, "Start membership" button. Solid Midnight section, single accent line.
- **Why members join** — three big icons: protocols / dosing-app / saved-COAs. Short copy under each.
- **Everything included** — full perk grid, two columns, subtle dividers.
- **The math** — short calculator: "If you run two protocol subscriptions per quarter you save ~$XYZ in shipping + member discount alone."
- **What members say** — testimonials (research-context, RUO-safe).
- **FAQ** — pause/cancel, refunds, when COA archive expires, etc.
- **Sticky CTA** at bottom: "Start your peptriva membership" (Midnight button, no gradient).

### Anti-patterns to avoid
- No multi-tier complexity (Researcher / Lab / Institution from v1 was wrong — kill it)
- No retention dark patterns on cancel
- No urgency timers, "limited spots", or fake scarcity
- No "downgrade to free" — there is no free tier, just guest checkout

---

## 10 · Subscription / protocol model

The strategic pivot from generic "subscribe to BPC-157 monthly" to **protocol-tied subscriptions**.

Subscriptions aren't just generic recurring orders — each one is tied to a **named protocol** with its own dosing schedule, cadence, and tracking.

### Examples (all RUO research-context — never human-use language)
- *Tissue Recovery Stack* — BPC-157 + TB-500, 8-week research protocol, monthly auto-ship of two vials
- *Dermal Research Set* — GHK-Cu solo, 12-week, biweekly auto-ship of one vial
- *Endocrine Axis Research Pair* — CJC-1295 no-DAC + Ipamorelin, 6-week, monthly auto-ship of two vials
- *Cellular & Longevity Pair* — Epitalon-only, 20-day cycles repeated quarterly

### Each protocol subscription has
- A unique slug & landing page (`/protocols/[slug]/subscribe`)
- Recommended cadence (weekly/biweekly/monthly), total cycle length, what the next shipment will contain
- Member dashboard tracking:
  - Where the user is in the protocol (week 3 of 8)
  - What's in the next shipment, when it ships
  - All COAs from past shipments aggregated
  - Notes / journal entries the researcher can add per shipment
  - Pause / change cadence / cancel buttons
- Each protocol is a **distinct subscription product** — no generic "subscribe to X every month" option. Members must subscribe to a named protocol; one-time orders are available outside subscriptions.

This is the wedge for the membership tier.

---

## 11 · AI research assistant

A chat experience available throughout the site. Not a coach, not a doctor, not a recommender — a chemistry-and-handling reference.

### Scope (allowed)
- Peptide chemistry, sequence questions, structural biology
- HPLC/MS interpretation, characterization techniques
- Storage, reconstitution, sterile technique
- Research-paper queries (members only — full-text indexing on member tier)
- Protocol-cadence scheduling math (research-context phrased)

### Scope (forbidden)
- Human dosing, human use guidance
- Medical advice
- Performance/outcome promises
- Brand-drug comparisons
- Diagnosis or symptom interpretation

### Tiered access
- **Public**: limited chat, ~5 messages per session, no document upload, capped context
- **Members**: full chat, document upload (drop a paper, ask questions), longer context window, persistent thread history, faster model

### UX
- Sparkle-icon button in header → opens right-side sheet
- Disclaimer banner at top of every conversation
- Suggested questions on first open
- Streaming responses
- Cite sources where applicable; never invent citations

---

## 12 · Catalog snapshot

Initial catalog of ~30 research peptides across 9 classes. Each peptide needs:
- A `/research/[peptide]` education page
- A `/shop/[peptide]` product page with vial mockup
- An entry in the COA library (with mock batches at launch)
- An associated protocol or stack appearance

### By class

**Tissue & connective** — BPC-157, TB-500, KPV
**Dermal** — GHK-Cu, Matrixyl (Pal-KTTKS), Argireline
**GHRH / ghrelin axis** — Sermorelin, Tesamorelin, CJC-1295 (no DAC), CJC-1295 (DAC), Ipamorelin, GHRP-2, GHRP-6, Hexarelin, Mod GRF 1-29
**Metabolic / incretin** — Semaglutide, Tirzepatide, Liraglutide, Retatrutide
**Longevity / cellular** — Epitalon, Humanin, MOTS-c, SS-31 (Elamipretide)
**Neurochemical** — Semax, Selank, DSIP
**Immune-regulatory** — Thymosin α1, LL-37
**Melanocortin** — PT-141 (Bremelanotide), Melanotan II
**Other** — AOD-9604, IGF-1 LR3

### Per-peptide data fields
- name, slug, class, sequence (single-letter), length, MW, pI, modifications
- short research-context description
- vial mg / price / SKU
- storage notes, reconstitution solvent
- current batch COA reference
- linked protocol(s)
- linked education article reference

A complete chemistry reference for each is in `docs/peptide-reference.md`.

---

## 13 · Compliance guardrails

Every one of these is a **must-have** for launch. Many are RUO compliance requirements; cutting any opens legal/regulatory exposure.

### Hard requirements
- **21+ age gate** at first visit, cookie-persisted, with the two checkboxes:
  - "I am 21 or older and conducting bona-fide research."
  - "I understand these products are research use only and not for human or veterinary use."
- **RUO banner** on every page (slim, top of header, low-contrast): *"For research use only. Not for human consumption."*
- **No human-use language** anywhere in product, shop, protocol, quiz, or membership pages.
- **Generic peptide names only**: semaglutide, tirzepatide, liraglutide — never their brand drug names.
- **No comparisons to existing drugs** anywhere.
- **No clinical-trial outcome claims** on product pages or quiz results. Allowed only on `/blog` with educational disclaimer.

### Forbidden phrases (enforce with a build-time linter)
- *treats / cures / prevents / therapy / therapeutic / clinical-grade / prescription / prescribed*
- *weight loss / muscle gain / anti-aging / for users / dosage for humans / human dose / humans should*
- Drug brand names: *Ozempic, Wegovy, Trulicity, Saxenda, Mounjaro, Zepbound*, etc.

### Allowlist for educational content
Forbidden phrases ARE allowed in `/blog` and `/docs` because peer-reviewed citations use them in titles. The blog must keep the educational-only disclaimer pinned.

### Disclaimers
- **Quiz results**: "This is an informational resource only. We do not recommend peptides for any human use, condition, or outcome."
- **AI assistant**: "The research assistant answers questions about chemistry, characterization, and product handling. It does not provide medical, dosing, or human-use guidance."
- **Blog articles**: "Educational content — not product guidance."
- **All product pages**: full RUO disclaimer block above the fold.

### Refund / replacement
Out-of-spec automatic replacement guarantee, clearly published on `/membership`, `/quality`, and `/legal/research-use`. Auto-issued, no claim form, on any batch that fails published specs.

---

## 14 · Out of scope for v1 launch

Defer until after launch:
- Real Stripe checkout / tax / 3DS
- Real auth (Clerk / Supabase / similar)
- Real LLM-powered AI assistant (use a stub at launch; wire actual API after)
- PDF COA generation pipeline (use stub PDF links at launch)
- International shipping (US-only at launch)
- Telehealth / Option-1 features (post-legality pivot)
- Native mobile apps for the protocol scheduler — a PWA is enough at launch

---

## 15 · Tech preferences

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 with a custom theme using the brand palette
- **State**: Zustand for client state (cart, age-gate, account, quiz answers); persisted to localStorage
- **UI primitives**: Radix UI for dialogs/accordions/tabs; shadcn-style component conventions
- **Motion**: Framer Motion for entry/exit and ribbon-draw animations
- **Icons**: Lucide
- **Images**: `next/image` + Unsplash hot-links for editorial; vial mockups should be owned assets (3D rendered or photographed)
- **Fonts**: Inter + Inter Tight via `next/font/google`
- **Testing**: Lighthouse target Perf ≥ 90, A11y ≥ 95
- **Compliance gate**: build-time `lint:ruo` script that greps source for forbidden phrases and fails the build if violations are found outside `/blog` and `/docs`
- **Deployment**: Vercel (preview deployments on every PR)

---

## 16 · Acceptance criteria

The redesign is "done" when:

### Conversion funnel
- [ ] Home page drives ≥ 70% of clicks toward `/quiz`
- [ ] `/quiz` has ≥ 25% completion rate, ≥ 8% membership-conversion on results screen
- [ ] Members complete protocol-subscription signup in < 3 clicks from results screen

### Pages that exist
- [ ] Home, Quiz, Quiz results
- [ ] Research index + per-peptide education pages for every catalog peptide
- [ ] Shop catalog + per-peptide product page (with vial mockup hero)
- [ ] Protocols index + per-protocol detail + per-protocol subscribe configurator
- [ ] Membership landing + onboarding
- [ ] COA library with row-click modal
- [ ] Quality page covering all 12 sections from 8.7
- [ ] About, Blog, FAQ, Contact, Legal trio
- [ ] Account dashboard with /protocols, /orders, /coas, /journal, /billing

### Visual / UX
- [ ] No gradients used anywhere
- [ ] Single brand-color accent per section, max two per page
- [ ] Peptide structure illustrations on every research page, every COA modal, optionally as decorative dividers
- [ ] Vial mockup on every shop product page hero
- [ ] All sections respect light-mode primary; dark sections are accent only

### Compliance
- [ ] 21+ age gate triggers on first visit, persists via cookie
- [ ] RUO banner visible on every page
- [ ] `lint:ruo` build-time check passes (forbidden phrases not present outside `/blog` + `/docs`)
- [ ] No drug brand names anywhere
- [ ] No clinical-outcome claims on product / quiz / protocol / membership pages
- [ ] All disclaimers from section 13 are present where required

### Membership UX
- [ ] Single-tier presentation only (no multi-tier)
- [ ] All 15 perks from section 9 are listed and explained
- [ ] 14-day free trial offered
- [ ] Cancel-anytime button is one click and visible from `/account/billing`
- [ ] Out-of-spec guarantee is published on `/membership`, `/quality`, `/legal/research-use`

### Subscriptions
- [ ] Subscriptions are protocol-tied (named, not generic recurring)
- [ ] Each active protocol shows progress bar and next shipment in `/account/protocols`
- [ ] Per-protocol journal entries are saved per shipment

### AI assistant
- [ ] Public users see a limited-message stub
- [ ] Members get full chat with longer context
- [ ] Disclaimer banner is pinned to every conversation
- [ ] Refuses human-use, medical, dosing, and brand-comparison questions

---

*This brief is the source of truth. Anything that was in the v1 prototype but isn't reaffirmed here is discarded. Anything new must trace back to a section in this document.*
