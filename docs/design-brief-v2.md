# peptriva — Design Brief (v2)

A fresh-start brief for redesigning the peptriva site. Keeps everything that worked, drops everything that didn't, and consolidates the original requirements with the v1 build feedback.

---

## 1 · The product in one paragraph

**peptriva** is a research-use-only (RUO) peptide ecom and education platform. Visitors arrive via SEO/social, are filtered through a 21+ age gate, and land on a dynamic quiz that maps their research interests to a recommended peptide stack — and to a single membership tier that bundles auto-shipments, dosing/protocol guidance, education, and member-only perks. The site sells individual research peptide vials (no bundling) backed by batch-specific Certificates of Analysis. Long-term goal: pivot to a telehealth-prescribed model when peptides become legal; near-term: operate as RUO with rigorous compliance language.

---

## 2 · Brand constraints

### Logo
- Keep current peptriva wordmark.
- Use the transparent / black-text version on light backgrounds. Use white version on dark sections only.

### Color palette
| Token | Hex | Use |
|---|---|---|
| Blurple | `#635BFF` | Primary action, links, focus rings |
| Electric Cyan | `#00D4FF` | Secondary accent, highlight chips |
| Vibrant Magenta | `#FF5DB1` | Tertiary accent, badges |
| Sunset Orange | `#FF8E00` | Promo/save indicators, alerts |
| Golden Yellow | `#FFD400` | Subtle accents, illustrations |
| Midnight | `#0A2540` | Headings, primary text, dark sections |
| Slate Grey | `#425466` | Body text, borders, muted UI |
| White | `#FFFFFF` | Backgrounds |
| Surface | `#F6F9FC` | Section/card backgrounds |

### Type
- Display: Inter Tight (or comparable geometric sans), 700–800 weight, tight tracking
- Body: Inter, 400/500
- Lowercase brand voice for headings, sentence case for body

### Rules
- **No gradients.** Use solid color blocks, hairline strokes, single-color illustrations, or color rotation between residues/elements instead.
- One accent color per page or section, max two — never all five at once.
- Generous whitespace; mostly white background with Midnight type and Slate body.
- Editorial / scientific feel, not "wellness" or "supplement". Closer to *elevenlabs.io*, *seed.com*, *sapgoodenergy.com* than *gnc.com*.

### Visual identity (keep)
Peptide structure illustrations are the differentiator. Each peptide has a deterministic illustration generated from its amino-acid sequence so every product page has a unique scientific visual. Render in brand colors with **per-residue color rotation** (Blurple / Cyan / Magenta / Sunset / Yellow on a Midnight or White background) — **no gradient washes**.

---

## 3 · Original requirements (carry over)

These come from the initial brief and must stay true in the redesign.

### Business
- Research-use-only (RUO) sales today; pivot path to telehealth-prescribed model when legal.
- Single company, single brand — same identity through both phases.
- Membership-driven recurring revenue is the strategic priority.
- AI-powered "research assistant" experience, properly scoped to chemistry/handling questions only (no human-use guidance until legally allowed).

### Catalog
- Individual peptide vials. **No bundling, ever.**
- Curated peptide stacks for research goals (skin, tissue, recovery, longevity, metabolic, neurochemical, endocrine).
- Auto-shipment subscriptions tied to specific protocols, not generic recurring orders.
- Every product is batch-traceable to a published COA.

### Compliance
- FDA-regulated compounding facility; sterile fill under USP <797>.
- HPLC purity, mass-spec identity, sterility, endotoxin tested per batch.
- 21+ age gate at entry; persistent cookie-based.
- No human-use language anywhere in product copy. No drug brand-name comparisons. No clinical-outcome claims on product pages.
- Clinical literature is permitted **only in the educational blog**, with a non-product-guidance disclaimer.
- COA library publicly searchable like ezpeps.com/coa-library.

### Differentiators
- AI evaluation of user research goals → peptide-category recommendations (legality-safe).
- Transparent, research-first tone; never wellness/lifestyle marketing.

---

## 4 · What's working — keep these from v1

| Element | Why it works | Notes for v2 |
|---|---|---|
| **COA library styling** | Clean searchable table, batch-traceable | **Make rows clickable → modal** (see section 5) |
| **Quality page (skeleton)** | Right concept, right placement | **Add real safety info** (see section 5) |
| **Design A (long-form, seed.com-style)** | Editorial, scientific, builds trust | **Move to /research/[peptide]** education pages, not product pages |
| **Sequence-driven peptide structure visuals** | Unique, ownable, scalable | Keep, but **render in solid brand colors only** (no gradient strokes/fills); per-residue color rotation |
| **Brand color system** | Right palette, distinct from competitors | Keep tokens; remove gradient utilities |
| **Light mode + Midnight headings** | Clean, scientific | Keep |
| **21+ age gate modal** | Required for RUO | Keep with same UX |
| **RUO banner (top strip)** | Immediate compliance signal | Keep, but make it less aggressive — slim line, low contrast |
| **AI research assistant (chemistry/handling Q&A)** | Strong differentiator, compliance-safe | Keep, **expand for members** (priority access, longer context) |
| **`pnpm lint:ruo` compliance gate** | Prevents accidental human-use language | Keep — production requirement |
| **Per-peptide COAs, no bundling** | Trust signal | Keep |
| **Mock checkout + Zustand cart pattern** | Right architecture | Keep, swap mock for real Stripe later |

---

## 5 · What's changing — feedback to incorporate

### 5.1 COA library → row click opens modal

**Current:** Static table.

**New:** Each row is clickable. On click, open a **large centered modal** with:
- **Animated peptide-structure visualization** of that specific peptide, rendered in brand colors (no gradients) — sequence-driven, slow draw-in animation, ~3 seconds, then idle subtle motion.
- Peptide quick-facts: name, class, sequence, MW, pI, vial size, storage.
- COA testing section:
  - Batch number, manufacture date, expiry
  - HPLC purity (%) with mini chromatogram visual
  - MS identity match (%) with mini spectrum visual
  - Sterility result (pass/fail)
  - Endotoxin result (EU/mg)
  - Each row has a "view full method" link
- Download full PDF COA button (primary action).
- Close on overlay click, ESC, or X button.
- Modal animates in (fade + scale-from-95%); peptide structure animation begins immediately on open.

### 5.2 Quality page — needs real safety information

**Current:** Five testing-method cards. Too sparse.

**New:** Quality page becomes a deep, multi-section trust document:

1. **Hero** — "Characterized before it ships" (no gradient — solid Midnight section with a single Cyan accent line).
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

Each section needs concrete numbers / methods, not generic blurbs.

### 5.3 Design A → move to /research education pages

**Current:** Long-form seed-style layout was the default product detail page.

**New:** Design A becomes the **/research/[peptide]** layout — pure education, no add-to-cart hero. This is the resource library a researcher reads to learn about a peptide before deciding whether to buy.

Content per /research/[peptide] page:
- Hero: peptide name, class chip, sequence preview, **animated structure visualization in solid brand colors** (specific to that peptide's sequence)
- Discovery & history (when, who, what was the parent molecule)
- Mechanism of action (as published in literature)
- Structure deep-dive (residue chips, MW, pI, modifications)
- Characterization standards (what HPLC purity, MS identity, etc. typically look like for this molecule)
- Storage & handling guide
- Related peer-reviewed literature (with educational disclaimer per blog rules)
- "Ready to research?" — single small button at the bottom that links to the corresponding **shop product page** (no upsell pressure, just a clean handoff)

Notes:
- Animations/illustrations on these pages should be of the **actual structure** of that specific peptide, not generic brand decoration.
- Reading time displayed at top.
- Cross-link to other /research entries in the same class at the bottom.

### 5.4 Product & category pages → proper ecom

**Current:** Long-form scientific page tried to double as a product page. Doesn't convert.

**New:** Product pages look like proper ecom — closer to **sapgoodenergy.com**, **athleticgreens.com**, or **seed.com** product pages, but for research vials.

#### Visual

- **Peptide vial mockup** — photorealistic 3D render or photographic style, neutral background. Vial label shows peptide name, batch number, mg, and peptriva logo. Replace the abstract structure illustration in the hero of the *product* page with the vial; structure illustration moves to a secondary "About this molecule" tab/section that links out to the matching /research/[peptide] page.
- Multiple angles in a small gallery: front, top-down with cap removed, label close-up.
- Subtle drop shadow, white background, no gradients.

#### Layout

- **Left column**: vial gallery
- **Right column** (sticky on desktop):
  - Class chip + RUO chip
  - Product name (display weight)
  - One-line research-context description
  - Star rating + count
  - **Variant selector** (vial mg, e.g. 5 mg / 10 mg)
  - **Pack size selector** (1 / 3 / 6 vials with per-vial pricing visible)
  - **Subscribe vs One-time** as the primary purchase decision (subscribe is the default highlighted option)
  - If subscribed → **Protocol-aware cadence** (see 5.4.1 below)
  - "Add to research order" button (Midnight, full-width)
  - Promo strip below (e.g., "Members save 15% + free shipping")
- **Below the fold** (one continuous scroll, anchor-navigable):
  - Specs strip (HPLC %, sterility, endotoxin, mg/vial)
  - "About this molecule" — short summary with a link to the full /research/[peptide] page
  - Current batch COA card (with the deep COA modal as in 5.1)
  - Storage & handling
  - FAQ specific to this product
  - Cross-sell: stacks this peptide is part of (linked to stack pages)
- **Sticky bottom buy bar** appears after scrolling past the hero (already in v1 — keep that pattern, just remove gradient styling).

#### Category pages

- Filterable grid by research category, sequence length, format (vial mg).
- Each card shows: vial mockup, name, class, price, "subscribe & save" indicator.
- Sort by: featured, alphabetical, price low→high, recently restocked.
- Top of grid: short editorial intro for the category (2 sentences).
- No bundling promos anywhere.

#### 5.4.1 Subscriptions tied to protocols

This is the new strategic direction. Subscriptions aren't just generic recurring orders — each one is tied to a **named protocol** with its own dosing schedule, cadence, and tracking.

Examples (all RUO research-context — never human-use language):
- *Tissue Recovery Stack* — BPC-157 + TB-500, 8-week research protocol, monthly auto-ship of two vials
- *Dermal Research Set* — GHK-Cu solo, 12-week, biweekly auto-ship of one vial
- *Endocrine Axis Research Pair* — CJC-1295 no-DAC + Ipamorelin, 6-week, monthly auto-ship of two vials
- *Cellular & Longevity Pair* — Epitalon-only, 20-day cycles repeated quarterly

Each protocol subscription:
- Has a unique slug & landing page (`/protocols/[slug]/subscribe`)
- Lists the recommended cadence (weekly/biweekly/monthly), total cycle length, and what the next shipment will contain
- Tracked in the member dashboard:
  - Where the user is in the protocol (week 3 of 8)
  - What's in the next shipment, when it ships
  - All COAs from past shipments aggregated
  - Notes / journal entries the researcher can add per shipment
  - Pause / change cadence / cancel buttons
- Each protocol is a **distinct subscription product** — no generic "subscribe to BPC-157 every month" option. Members must subscribe to a named protocol; one-time orders are available outside subscriptions.

This is the wedge for the membership tier (section 6).

### 5.5 Quiz → standalone landing page driving membership

**Current:** Embedded quiz on home page with a results screen.

**New:** Dedicated `/quiz` route as a marketing landing page optimized for membership conversion.

#### Page structure

1. **Hero** — Single bold question: "What does your research need?" + small subtext + Start CTA. Solid color block (Midnight or White), single accent line, no gradients.
2. **Quiz flow** — full-screen question-by-question UX (one question per "screen"), animated transitions, big tap-targets, progress dots. ~5–7 questions covering:
   - Research category interest (multi-select)
   - Typical sequence length you study
   - Required characterization on COA (multi-select)
   - Research cadence (one-off study / quarterly / continuous program)
   - Have you bought research peptides before?
   - How important is dosing/protocol guidance to your work?
3. **Mid-quiz nudges** — small "did you know?" cards between questions reinforcing peptriva differentiators (per-batch COA, no bundling, etc.).
4. **Results screen** — three sections, in this order:
   1. **Recommended research category** with the 2–3 top peptides for that category (links to /research/[peptide] for education)
   2. **Recommended protocol/stack** — the named protocol that fits their answers, with a "Subscribe to this protocol" CTA
   3. **Membership upsell** — full-width section explaining why their answers point to the membership being a fit. Includes a one-click "Start my membership" button. Soft, not pushy — emphasize what they save (free shipping + member discount + dosing app + …) over the next 6 months if they actually run the protocol they were just recommended.
5. **Email capture** as a soft option below the results: "Save these recommendations to your inbox" (single-field).
6. **No human-use claims anywhere** — all results phrased as research-category and research-protocol recommendations, not personal-outcome promises. The standard quiz disclaimer remains.

The quiz is the **primary funnel** to membership. Home-page CTAs above the fold should drive to /quiz first, /shop second.

### 5.6 Membership — single tier, rethink perks

**Current:** Three tiers (Researcher / Lab / Institution) with generic perks.

**New:** **One tier**, premium feel, unmistakable value. Working name: **peptriva membership** (or "peptriva research membership" if you want it more formal).

#### Pricing
- One number, e.g., **$49/month** (placeholder — A/B test)
- Or annual at $39/month equivalent ($468/yr) for a small commitment discount

#### Core perks (build the page around these)

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
14. **Pause / cancel anytime** — no contract, no fee
15. **Beta access** — early invite to new tools (sequence calculator, BBB-permeability predictor, characterization-request portal)

#### Membership page structure

- Hero: single number ($49/month), one-line value prop, "Start membership" button. Solid Midnight section, single accent line.
- **Why members join** — three big icons: protocols / dosing-app / saved-COAs. Short copy under each.
- **Everything included** — full perk grid, two columns, subtle dividers.
- **The math** — short calculator: "If you run two protocol subscriptions per quarter you save ~$XYZ in shipping + member discount alone."
- **What members say** — testimonials (research-context, RUO-safe).
- **FAQ** — pause/cancel, refunds, when COA archive expires, etc.
- **Sticky CTA** at bottom: "Start your peptriva membership" (Midnight button, no gradient).

#### Behavior
- Free trial: 14 days free for first-time members.
- Cancel from member dashboard, one click, no retention dark-pattern.
- Pause: up to 90 days, subscription resumes automatically.
- Refund policy: prorated on annual plan, none on monthly.

---

## 6 · Page-by-page sitemap

```
/                               Marketing landing
                                Hero → Quiz CTA → Stacks → Quality teaser → Membership teaser → Footer

/quiz                           Standalone quiz funnel → membership
/quiz/results                   Saved share-able results page (with /quiz/results/[id] for emailed links)

/research                       Research library index (browse by class)
/research/[peptide]             Education-only deep-dive (the old "Design A")

/shop                           Catalog (filterable, ecom-style cards)
/shop/[peptide]                 Ecom product detail (vial mockup hero, sticky buy rail, sub-vs-once)

/protocols                      Curated stacks index
/protocols/[slug]               Stack detail
/protocols/[slug]/subscribe     Protocol-tied subscription configurator

/membership                     Single-tier membership landing
/membership/welcome             Post-signup onboarding

/coa                            COA library — table with row-click modal
/quality                        Deep quality / safety / methods page
/about                          Brand story, team, principles
/blog                           Educational research blog (clinical lit allowed here)
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

## 7 · Compliance guardrails (must remain)

- **21+ age gate** at first visit; cookie-persisted.
- **RUO banner** on every page (slim, top of header, low-contrast).
- **No human-use language** anywhere in product, shop, protocols, quiz, or membership pages. Allowed only in `/blog`.
- **Forbidden phrases** (enforced by `pnpm lint:ruo`):
  - treats / cures / prevents / therapy / therapeutic / clinical-grade / prescription / weight loss / muscle gain / anti-aging / for users / dosage for humans
  - drug brand names: Ozempic, Wegovy, Trulicity, Saxenda, Mounjaro, Zepbound, etc.
- **Generic peptide names only**: semaglutide, tirzepatide, liraglutide — never their brand drug names.
- **No comparisons to existing drugs** anywhere.
- **No clinical-trial outcome claims** on product pages or quiz results. OK only in `/blog` with educational disclaimer.
- **Disclaimers** on quiz results, AI-assistant chat, membership pages: "informational only — not human-use guidance."
- **Refunds & out-of-spec policy** — clearly published.

---

## 8 · Visual / UX rules for the redesign

- **No gradients.** Solid color blocks, hairline strokes, monochrome illustrations.
- One accent color per section, max two per page.
- Typography is the primary differentiator — display weight for headlines, generous size jumps.
- Whitespace generous; section padding ~96–128px desktop, 64–80px mobile.
- Hairline dividers (1px borders) instead of section background changes where possible.
- Animations: subtle, mostly fade/slide (200–300ms), no parallax. Peptide structures animate in over ~2–3 seconds on viewport entry, then idle subtle drift.
- Buttons: pill-shape, Midnight primary, hairline outline secondary, no gradient fills. Hover = darken or invert.
- Cards: white, 1px Slate/border, optional soft shadow on hover. No gradient borders.
- Iconography: line-weight icons (Lucide style), Midnight or Slate, never multi-colored.

---

## 9 · Out of scope for v2 launch

Defer these until after launch:
- Real Stripe + tax + 3DS
- Real auth (Clerk / Supabase)
- Real LLM-powered assistant (current stub becomes real once API key is wired)
- PDF COA generation pipeline (currently stubs)
- International shipping
- Telehealth / Option-1 (post-legality pivot)
- Native mobile apps for the protocol scheduler (web/PWA is enough at launch)

---

## 10 · Acceptance criteria for the new design

A redesign is "done" when:

- [ ] Home page drives ≥ 70% of clicks toward `/quiz`
- [ ] `/quiz` has ≥ 25% completion rate, ≥ 8% membership-conversion on results screen
- [ ] Every product page features a vial mockup hero, sticky buy rail, sub-vs-once selector, and sticky bottom buy bar
- [ ] Every research peptide has both a `/research/[peptide]` education page and a `/shop/[peptide]` product page
- [ ] COA library rows open a centered modal with animated structure + COA test detail
- [ ] Quality page covers all 12 sections in 5.2 with concrete methodology
- [ ] Membership page presents a single tier with all 15 perks from 5.6
- [ ] `/account` shows active protocol subscriptions with progress tracking
- [ ] No gradients used anywhere; `pnpm lint:ruo` passes; 21+ gate persists; RUO banner visible on every page

---

*This brief is the source of truth for the v2 redesign. Anything in the v1 implementation not reaffirmed here can be discarded.*
