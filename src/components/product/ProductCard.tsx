"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { PeptideRibbon } from "@/components/peptide/PeptideRibbon";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/shop/${p.slug}`}
      className="group rounded-2xl bg-white border border-[var(--border)] overflow-hidden hover:shadow-pop transition-all"
    >
      <div className="relative h-48 bg-[var(--surface)] overflow-hidden">
        <div className="absolute inset-0 flex items-center px-4">
          <PeptideRibbon
            sequence={p.sequence}
            width={520}
            height={220}
            animate={false}
            className="opacity-90 group-hover:scale-[1.02] transition-transform"
          />
        </div>
        <div className="absolute top-3 left-3">
          <Badge tone="ruo">RUO</Badge>
        </div>
      </div>
      <div className="p-5">
        <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--brand-slate)]">
          {p.classLabel}
        </div>
        <div className="mt-1 font-display text-xl text-[var(--brand-midnight)]">
          {p.name}
        </div>
        <p className="mt-2 text-sm text-[var(--brand-slate)] line-clamp-2">
          {p.shortLine}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-[var(--brand-midnight)] font-semibold">
            {formatPrice(p.priceCents)}
          </span>
          <span className="text-xs text-[var(--brand-slate)]">
            {p.vialMg} mg / vial
          </span>
        </div>
      </div>
    </Link>
  );
}
