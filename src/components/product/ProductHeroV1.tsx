"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PeptideRibbon } from "@/components/peptide/PeptideRibbon";
import { useCart } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";

export function ProductHeroV1({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  return (
    <section id="overview" className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center pt-4">
      <div>
        <div className="flex items-center gap-2">
          <Badge tone="brand">{product.classLabel}</Badge>
          <Badge tone="ruo">RUO</Badge>
        </div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--brand-midnight)] text-balance">
          {product.name}
        </h1>
        <p className="mt-4 text-lg text-[var(--brand-slate)] max-w-xl text-balance">
          {product.shortLine}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 items-center">
          <code className="text-xs font-mono px-2 py-1 rounded bg-[var(--surface)] border border-[var(--border)]">
            {product.sequence}
          </code>
          <span className="text-xs text-[var(--brand-slate)]">
            · {product.vialMg} mg / vial · MW {product.molecularWeight}
          </span>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className="font-display text-3xl text-[var(--brand-midnight)]">
            {formatPrice(product.priceCents * qty)}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-[var(--border)]"
              aria-label="Decrease"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm w-8 text-center">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-[var(--border)]"
              aria-label="Increase"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            size="lg"
            variant="gradient"
            onClick={() =>
              add({
                slug: product.slug,
                name: product.name,
                priceCents: product.priceCents,
                qty,
              })
            }
          >
            Add to research order
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`/coa?batch=${product.currentBatch.number}`}>View COA</a>
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-3xl bg-gradient-soft border border-[var(--border)] p-4 md:p-6 overflow-hidden relative shadow-soft">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
          <PeptideRibbon
            sequence={product.sequence}
            width={720}
            height={420}
            ariaLabel={`Structure illustration for ${product.name}`}
          />
          <div className="mt-2 text-xs text-[var(--brand-slate)] flex items-center justify-between">
            <span>
              {product.sequence.length} residues · seq-derived illustration
            </span>
            <span>pI {product.isoelectricPoint}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
