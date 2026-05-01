# peptriva — Master Design Brief

**Hand-off document for designing the peptriva website.**

This is the single source of truth. It defines:
- **What** the site must do (functional + business + compliance requirements)
- **Brand** (logo, colors, type, voice — non-negotiable)
- **Reference sites** the designer should pull design language from
- **Three specific page designs** (research, protocols, COA library) where the direction is fixed because the previous prototype already nailed them

For every other page, **the designer has full control over layout, structure, and visual treatment**, provided brand and compliance rules hold. Design freely; reference the inspiration sites; build something better than the v1 prototype.

---

## Table of contents

1. [Product in one paragraph](#1--product-in-one-paragraph)
2. [Business model & legal posture](#2--business-model--legal-posture)
3. [Audience](#3--audience)
4. [Brand identity](#4--brand-identity)
5. [Reference sites — design direction](#5--reference-sites--design-direction)
6. [Sitemap](#6--sitemap)
7. [Three locked page designs](#7--three-locked-page-designs)
   - [Research library (`/research`, `/research/[peptide]`)](#71-research-library-research-researchpeptide)
   - [Protocols (`/protocols`, `/protocols/[slug]`, `/protocols/[slug]/subscribe`)](#72-protocols-protocols-protocolsslug-protocolsslugsubscribe)
   - [COA library (`/coa`)](#73-coa-library-coa)
8. [Open pages — functional requirements only](#8--open-pages--functional-requirements-only)
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
- Sell research peptides directly to researchers/labs/institutions
- Strict RUO compliance: no human-use, no medical, no therapeutic, no clinical-outcome language on any **product, shop, quiz, or membership** page
- Clinical literature is permitted on **`/blog`, `/research`, and `/protocols`** pages (with an educational disclaimer pinned). Everywhere else it is forbidden.
- 21+ age gate at the door, persistent
- AI evaluation of user goals → peptide-category recommendations only (legality-safe)

### Tomorrow: Option 1 — Telehealth-prescribed
- When peptides become legally prescribable, pivot the same brand & infrastructure to a telehealth model where physicians prescribe peptides, AI recommends protocols
- Same brand, same logo, same colors — design must extend to medical/telehealth without rebrand

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
- Institutional buyers (universities, biotech, contract research orgs) — secondary funnel via `/contact`

### Voice signals to nail
- "Characterized" not "high quality"
- "Research model" not "users"
- "Methodology" not "process"
- "Documented" not "trusted"
- "Batch-traceable" not "premium"

---

## 4 · Brand identity

These are non-negotiable. Designer must respect every rule in this section.

### Name
**peptriva** — lowercase, always.

### Logo
- Wordmark in lowercase Inter Tight (or comparable geometric sans), 800 weight, tight tracking
- Small ✦ sparkle accent positioned bottom-right of the wordmark, used sparingly
- **On light backgrounds**: black text on transparent
- **On dark backgrounds**: white text on transparent
- Never rendered with effects, never colored — it's monochrome black or white
- Provided asset has a black background that should be removed; redraw if needed for a true SVG transparent version

### Colors

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

### Hard rules
- **No gradients anywhere.** Solid color blocks, hairline strokes, monochrome illustrations only.
- Light mode is primary. Dark sections are accent only.
- One accent color per section, max two per page.
- Mostly white background.

### Brand visual identity: peptide structure illustrations
This is the differentiator. Every peptide on the site has its own deterministic structure illustration generated from its amino-acid sequence — so every product page, research page, and COA modal has a unique scientific visual that represents the actual molecule.

- 2D backbone-and-residue ribbon: alpha-carbon zigzag with side-chain spheres
- Residues colored by class, rotated through brand colors (Blurple / Cyan / Magenta / Sunset / Yellow on Midnight or White)
- Solid colors only — never gradient strokes or fills
- Slow draw-in animation on mount (~2–3 seconds), then idle subtle motion
- Respect `prefers-reduced-motion`

These illustrations must appear on the three locked pages (research, protocols, COA modal). Whether they appear elsewhere is the designer's call.

---

## 5 · Reference sites — design direction

For every page that isn't one of the three locked designs in section 7, the designer should pull layout, rhythm, motion, and component language from these references. The site's overall aesthetic should feel like a member of this set.

> **superpower.com is the most important reference.** Use it as the primary structural template for the home page, the membership conversion flow, and the overall site rhythm. Match its single-tier conviction, its perk presentation, its math/value-prop modules, and its quiet conversion focus. The peptriva site should feel like a member of the same family as superpower.com — applied to peptide research instead of preventive medicine.

| Reference | Pull from it |
|---|---|
| **[superpower.com](https://superpower.com)** | **Primary reference.** Homepage structure (replace the wellness content with peptide-research equivalents — research, category, membership), membership UX, perk presentation, single-tier conviction, premium feel, conversion-page rhythm. The peptriva home page should structurally mirror superpower.com's home page. |
| **[elevenlabs.io](https://elevenlabs.io)** | Aesthetic reference for `/shop`, `/shop/[peptide]`, and `/research` family pages — type rhythm, scientific minimalism, dark/light contrast, hero treatments, navigation simplicity. |
| **[seed.com/daily-multivitamin](https://seed.com/daily-multivitamin)** | Long-form education-style page format. Already locked for `/research/[peptide]` (see 7.1) — but its rhythm is also a template for any other long-form page. |
| **[sapgoodenergy.com/products/case-with-10-sap](https://sapgoodenergy.com/products/case-with-10-sap)** | Product page reference — three-column layout, sub-vs-once selector, dotted-divider value props, big outline display headline, sticky purchase rail. Use as the primary reference for `/shop/[peptide]`. |
| **[ezpeps.com/coa-library](https://ezpeps.com/coa-library)** | COA library table format. Already locked for `/coa` (see 7.3) but useful for understanding what researchers expect from a COA archive. |
| **[stripe.com](https://stripe.com)** | Editorial-scientific developer/research voice. Use for tone calibration on About, Quality, FAQ. |

The designer is free to pull from other sites where appropriate. The references above are the floor, not the ceiling.

---

## 6 · Sitemap

```
/                               Marketing landing
                                Reference: superpower.com homepage —
                                replace wellness content with peptide-specific
                                equivalents (research, category, membership).

/quiz                           Standalone quiz funnel → membership
/quiz/results                   Saved share-able results page
/quiz/results/[id]              Per-share-link results

/research                       Research library index — LOCKED design (7.1)
/research/[peptide]             Per-peptide deep dive — LOCKED design (7.1)

/shop                           Catalog
/shop/[peptide]                 Product detail (vial-mockup ecom)

/protocols                      Stacks index — LOCKED design (7.2)
/protocols/[slug]               Stack detail — LOCKED design (7.2)
/protocols/[slug]/subscribe     Protocol-tied subscription configurator

/membership                     Single-tier membership landing
/membership/welcome             Post-signup onboarding

/coa                            COA library — LOCKED design (7.3)

/quality                        Deep quality / safety / methods page
/about                          Brand story, principles, transparency
/blog                           Educational research blog
/blog/[slug]                    Article

/account                        Member dashboard
  /account/protocols            Active protocol subscriptions + tracking
  /account/orders               Order history
  /account/coas                 Saved COA archive
  /account/journal              Per-protocol research notes
  /account/billing              Membership + payment

/login, /signup
/checkout, /checkout/success
/legal/research-use, /legal/terms, /legal/privacy
/contact, /faq
```

---

## 7 · Three locked page designs

These three page families are locked. The previous prototype got their direction right and the design should preserve the structure described here. The designer can refine the visual treatment within brand rules but should not restructure these pages.

### 7.1 Research library (`/research`, `/research/[peptide]`)

Pure educational content. No add-to-cart hero. This is the resource library a researcher reads to learn about a peptide before deciding whether to buy.

#### `/research` — index
- Browse-by-class layout
- Each card: peptide name, class, one-line description, link to `/research/[peptide]`
- No prices, no buy buttons, no urgency
- Solid color cards, no gradients

#### `/research/[peptide]` — single peptide deep-dive

Long-form, editorial, single-page scroll with anchor-navigable sections (seed.com/daily-multivitamin pattern):

- **Hero** — peptide name, class chip, sequence preview, **animated structure visualization in solid brand colors specific to that peptide's sequence**
- **Discovery & history** — when, who, what was the parent molecule
- **Mechanism of action (as published)** — receptor targets, signaling pathways, cellular effects per published research
- **Structure deep-dive** — residue chips, MW, pI, modifications, characterization data
- **Characterization standards** — what HPLC purity, MS identity, etc. typically look like for this molecule
- **Storage & handling guide**
- **Related peer-reviewed literature** — clinical literature is permitted here (with educational disclaimer)
- **Reading time** displayed at top
- **Related research** — cross-link to other `/research` entries in the same class at the bottom
- **"Ready to research?"** — single small button at the bottom that links to the corresponding `/shop/[peptide]` product page (no upsell pressure, just a clean handoff)

The animations and illustrations on these pages must be of the **actual structure of that specific peptide**, not generic brand decoration.

### 7.2 Protocols (`/protocols`, `/protocols/[slug]`, `/protocols/[slug]/subscribe`)

Curated stacks for research goals. Each protocol is its own product with its own subscription cadence and tracking.

#### `/protocols` — index
- Card grid by category
- Each card: protocol name, category, included peptides (each as a small chip with its peptide-structure thumbnail), recommended cycle length

#### `/protocols/[slug]` — protocol detail
- Hero: name, category, short research-context description
- Components — each peptide in the stack as a card with name, class, mg/vial, structure illustration
- Recommended cycle: weekly schedule, total cycle length
- "Subscribe to this protocol" CTA → `/protocols/[slug]/subscribe`
- Rationale section explaining why this combination is studied together in research models — clinical literature is permitted here with educational disclaimer, but no outcome claims about the buyer
- Component COAs surfaced

#### `/protocols/[slug]/subscribe` — configurator
- Cycle length selector
- Cadence selector (weekly / biweekly / monthly)
- First shipment date
- Member vs non-member pricing comparison shown clearly
- One-click "subscribe and start" CTA

### 7.3 COA library (`/coa`)

A public, searchable index of every batch peptriva has ever shipped. **The most important trust element on the site.** Search by batch number, filter by product. Table format inspired by ezpeps.com/coa-library.

**Each row is clickable → opens a large centered modal:**

- **Animated peptide-structure visualization** of that specific peptide, rendered in solid brand colors (no gradients) — sequence-driven, slow draw-in animation, ~3 seconds, then idle subtle motion
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

---

## 8 · Open pages — functional requirements only

For everything below, **the designer has full creative control over layout, visual treatment, and component choices**. Listed here are only the *requirements* — what each page must do, what data it must surface, what conversions it must drive. How that's expressed visually is the designer's call, informed by the references in section 5.

### 8.1 Home (`/`)
- Functions as a funnel router, primarily driving traffic to `/quiz` (membership conversion path) and secondarily to `/shop` and `/membership`
- Must communicate brand identity and the three differentiators: per-batch COAs, no bundling, characterized in FDA-regulated facility
- Must surface featured stacks and a membership teaser
- Must include the RUO banner and respect the 21+ gate
- **Primary structural reference: superpower.com homepage.** Mirror its rhythm, section pacing, and conversion focus — but replace the wellness content with peptide-research equivalents (research library, category browsing, membership).

### 8.2 Quiz (`/quiz`, `/quiz/results`)
- Standalone marketing landing page optimized for membership conversion
- 5–7 question flow covering: research category interest, sequence length preference, required characterization, research cadence, prior peptide experience, importance of dosing/protocol guidance
- Results screen must surface: recommended research category (with peptides), recommended protocol/stack (with subscribe CTA), and a membership upsell section explaining why their answers map to membership value
- Optional email capture below results
- Standard quiz disclaimer: "informational only — not human-use guidance"
- All results phrased as research-category recommendations, never personal-outcome promises
- Designer's call on UX paradigm: full-screen-per-question vs single-page vs progressive disclosure
- Reference: any high-conversion quiz funnel (typeform, ramp, superhuman); designer's call

### 8.3 Shop (`/shop`, `/shop/[peptide]`)
- Catalog page with filterable grid (by research category, sequence length, format)
- Each product card surfaces: name, class, price, subscribe-and-save indicator
- Product detail must surface: photorealistic vial mockup, variant selector (mg), pack size selector, subscribe-vs-once selector (subscribe is the highlighted default), member-pricing strip, current-batch COA reference, FAQ, related stacks, link to corresponding `/research/[peptide]` for deeper science
- Subscribe selection should expose the protocol-tied cadence options (see section 10)
- References: sapgoodenergy.com/products/case-with-10-sap for product detail, elevenlabs.io for catalog aesthetic; designer's call on cards

### 8.4 Membership (`/membership`, `/membership/welcome`)
- Single-tier presentation only — never multi-tier
- Must list and explain all 15 perks from section 9
- 14-day free trial offered for first-time members
- Cancel-anytime, no contract, no fee — clearly communicated
- Math/savings calculator for the value proposition
- Member testimonials (research-context, RUO-safe)
- Sticky CTA to start membership
- **Primary reference: superpower.com.** Match its single-tier conviction, perk presentation, and conversion rhythm.

### 8.5 Quality (`/quality`)
- Trust deep-dive that documents methodology and safety
- Must cover concrete methodology in these areas (designer chooses how to organize):
  - Manufacturing facility (FDA-regulated, ISO classification, environmental monitoring)
  - Sterility & sterilization (USP <797>, sterile fill, sterility-test methodology)
  - Identity & purity testing (RP-HPLC parameters, ESI-MS tolerance, MS/MS where used)
  - Endotoxin testing (LAL or rFC, EU/mg specs)
  - Heavy-metal & residual-solvent panels (ICP-MS, GC-MS)
  - Stability program (real-time + accelerated, lyophilized vs reconstituted)
  - Cold chain & shipping (insulated packaging, temperature loggers)
  - Recall & batch-failure protocol (destroy-not-rework policy)
  - Independent third-party verification offering
  - Documentation philosophy (publish COA before ship)
  - Researcher safety guidance (sterile reconstitution, PPE, biohazard handling)
- Each section should contain real numbers / methods, not generic blurbs
- Reference: stripe.com voice; designer's call on visual treatment

### 8.6 Account dashboard (`/account` + sub-routes)
- Must surface: next shipment date/contents, active protocol subscriptions with progress bars, saved COAs (forever-searchable), per-protocol journal entries, order history, billing
- Each protocol subscription must show: where the user is in the protocol (week N of M), what's in the next shipment, cadence/pause/cancel controls
- COA archive must persist across cancellation for 12 months
- Reference: linear.app, ramp, superhuman for dashboard density and clarity; designer's call

### 8.7 About, Blog, FAQ, Contact, Legal, Login/Signup, Checkout
- About: brand origin, transparency principles, team
- Blog: educational research articles; clinical literature is allowed here (with educational-only disclaimer pinned)
- FAQ, Contact: standard form
- Legal: terms, privacy, research-use policy
- Login/Signup: standard, with the 21+ verification on signup
- Checkout: cart → review → payment → success
- Designer's call on all of these

---

## 9 · Membership — the strategic core

**Single tier. Premium feel. Unmistakable value.**

### Pricing
- One number, e.g., **$49/month** (placeholder — A/B test)
- Annual at $39/month equivalent ($468/yr) for a small commitment discount
- 14-day free trial for first-time members
- Cancel anytime, no contract, no fee

### The 15 perks (all must be communicated on `/membership`)

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

### Anti-patterns to avoid
- No multi-tier complexity (Researcher / Lab / Institution from v1 was wrong — kill it)
- No retention dark patterns on cancel
- No urgency timers, "limited spots", or fake scarcity
- No "downgrade to free" — there is no free tier, just guest checkout

---

## 10 · Subscription / protocol model

The strategic pivot from generic "subscribe to BPC-157 monthly" to **protocol-tied subscriptions**.

Subscriptions aren't generic recurring orders — each one is tied to a **named protocol** with its own dosing schedule, cadence, and tracking.

### Examples (all RUO research-context — never human-use language)
- *Tissue Recovery Stack* — BPC-157 + TB-500, 8-week research protocol, monthly auto-ship of two vials
- *Dermal Research Set* — GHK-Cu solo, 12-week, biweekly auto-ship of one vial
- *Endocrine Axis Research Pair* — CJC-1295 no-DAC + Ipamorelin, 6-week, monthly auto-ship of two vials
- *Cellular & Longevity Pair* — Epitalon-only, 20-day cycles repeated quarterly

### Each protocol subscription has
- A unique slug & landing page (`/protocols/[slug]/subscribe`)
- Recommended cadence (weekly/biweekly/monthly), total cycle length, what the next shipment will contain
- Member dashboard tracking: where the user is, next-shipment contents, all past COAs, journal entries, pause/cadence/cancel controls
- Each protocol is a **distinct subscription product** — no generic "subscribe to X every month" option. Members must subscribe to a named protocol; one-time orders are available outside subscriptions.

This is the wedge for the membership.

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

### Behavior requirements
- Disclaimer banner pinned to every conversation
- Suggested questions on first open
- Streaming responses
- Cite sources where applicable; never invent citations
- Refuses (politely, with redirection) any forbidden-scope question

UI placement and conversation paradigm is the designer's call.

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

A complete chemistry reference for every peptide is in `docs/peptide-reference.md` of this repo.

---

## 13 · Compliance guardrails

Every one of these is a **must-have** for launch. Many are RUO compliance requirements; cutting any opens legal/regulatory exposure.

### Hard requirements
- **21+ age gate** at first visit, cookie-persisted, with two checkboxes:
  - "I am 21 or older and conducting bona-fide research."
  - "I understand these products are research use only and not for human or veterinary use."
- **RUO banner** on every page (slim, top of header, low-contrast): *"For research use only. Not for human consumption."*
- **No human-use language** anywhere in product, shop, quiz, or membership pages
- **Generic peptide names only**: semaglutide, tirzepatide, liraglutide — never their brand drug names
- **No comparisons to existing drugs** anywhere
- **No clinical-trial outcome claims** on product pages, shop, quiz, or membership pages

### Where clinical literature IS allowed
Clinical and peer-reviewed literature can be cited (with educational disclaimers pinned) on:
- `/blog` and `/blog/[slug]`
- `/research` and `/research/[peptide]`
- `/protocols` and `/protocols/[slug]`
- `/docs/*` (internal reference documents)

Even in these allowlisted areas, **outcome claims about the buyer/researcher** are still forbidden — only the published literature itself can be referenced.

### Forbidden phrases (enforce with a build-time linter)
- *treats / cures / prevents / therapy / therapeutic / clinical-grade / prescription / prescribed*
- *weight loss / muscle gain / anti-aging / for users / dosage for humans / human dose / humans should*
- Drug brand names: *Ozempic, Wegovy, Trulicity, Saxenda, Mounjaro, Zepbound*, etc.

These phrases ARE allowed in the routes listed above (because peer-reviewed citation titles often contain them). The linter must allowlist those source-tree paths.

### Disclaimers
- **Quiz results**: "This is an informational resource only. We do not recommend peptides for any human use, condition, or outcome."
- **AI assistant**: "The research assistant answers questions about chemistry, characterization, and product handling. It does not provide medical, dosing, or human-use guidance."
- **Blog articles, research pages, protocol pages**: "Educational content — not product guidance."
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

These are preferences, not mandates. Designer can override for good reason.

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 with a custom theme using the brand palette
- **State**: Zustand for client state (cart, age-gate, account, quiz answers); persisted to localStorage
- **UI primitives**: Radix UI for dialogs/accordions/tabs
- **Motion**: Framer Motion
- **Icons**: Lucide
- **Fonts**: Inter + Inter Tight via `next/font/google`
- **Compliance gate**: build-time `lint:ruo` script that greps source for forbidden phrases and fails the build if violations are found outside the allowlisted routes
- **Deployment**: Vercel

---

## 16 · Acceptance criteria

The redesign is "done" when:

### Conversion funnel
- [ ] Home page drives ≥ 70% of clicks toward `/quiz`
- [ ] `/quiz` has ≥ 25% completion rate, ≥ 8% membership-conversion on results screen
- [ ] Members complete protocol-subscription signup in < 3 clicks from results screen

### Pages that exist
- [ ] Home, Quiz, Quiz results
- [ ] Research index + per-peptide education pages for every catalog peptide (using locked design from 7.1)
- [ ] Shop catalog + per-peptide product page
- [ ] Protocols index + per-protocol detail + per-protocol subscribe configurator (using locked design from 7.2)
- [ ] Membership landing + onboarding
- [ ] COA library with row-click modal (using locked design from 7.3)
- [ ] Quality page with all required content from 8.5
- [ ] About, Blog, FAQ, Contact, Legal trio
- [ ] Account dashboard with /protocols, /orders, /coas, /journal, /billing

### Brand
- [ ] No gradients used anywhere
- [ ] Single brand-color accent per section, max two per page
- [ ] Peptide structure illustrations on every research page and every COA modal
- [ ] All sections respect light-mode primary; dark sections are accent only
- [ ] Logo used correctly (black on light, white on dark, never colored)

### Compliance
- [ ] 21+ age gate triggers on first visit, persists via cookie
- [ ] RUO banner visible on every page
- [ ] `lint:ruo` build-time check passes (forbidden phrases not present outside allowlisted routes)
- [ ] No drug brand names anywhere
- [ ] No clinical-outcome claims on product / quiz / shop / membership pages
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

*This brief is the source of truth. Brand, compliance, the three locked page designs (research / protocols / COA), and functional requirements are non-negotiable. Everything else is the designer's call — pull from the reference sites in section 5, with **superpower.com as the primary structural template**, and build something better than the v1 prototype.*
