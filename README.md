# peptriva

Research-use-only peptide ecom template. Next.js 16 + Tailwind v4.

## Run

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build
pnpm lint:ruo     # forbidden-phrase compliance check
```

## What's in here

- **Brand system** with the peptriva palette (Blurple, Cyan, Magenta, Sunset, Yellow, Midnight, Slate) wired through CSS vars and Tailwind tokens. Inter + Inter Tight via `next/font`.
- **Peptide-structure visual identity**: `<PeptideRibbon />` (sequence-driven 2D backbone), `<PeptideHelix />` (animated alpha-helix), `<PeptideMesh />` (molecular lattice background). Every product gets a unique illustration deterministically generated from its amino-acid sequence.
- **Pages**: Home (with FDA-safe research-interest survey), Shop, Product detail with **two design variants** — `?view=v1` (seed.com-style long-form) and `?view=v2` (sapgoodenergy.com-style three-column). COA library, Protocols, Membership, Quality, About, FAQ, Contact, Blog index/post, Account dashboard stub, Login, Checkout success, Legal pages.
- **Cross-cutting**: 21+ age gate, RUO banner, cart drawer (Zustand persisted), AI research assistant stub, "no bundling" enforcement.
- **Compliance**: `lib/ruo.ts` defines canonical RUO copy. `pnpm lint:ruo` greps the source for forbidden phrases (treats, cures, therapeutic, drug brand names, etc.) and fails the build if any leak outside `app/blog/**` (where clinical literature is allowed for educational purposes).

## Try it

- `/` — hero, interest survey, featured products
- `/shop/bpc-157` — design A (seed-style)
- `/shop/bpc-157?view=v2` — design B (SAP-style)
- `/coa` — searchable batch library
- `/protocols` — research stacks (sold individually)
- `/account` — dashboard stub (mock login persists locally)
