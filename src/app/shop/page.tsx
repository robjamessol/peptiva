"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { CATEGORIES, PRODUCTS, type ResearchCategory } from "@/lib/data/products";

function ShopInner() {
  const params = useSearchParams();
  const initial = (params.get("category") as ResearchCategory | null) ?? null;
  const [active, setActive] = useState<ResearchCategory | null>(initial);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => (active ? p.category === active : true)).filter(
      (p) =>
        query
          ? (p.name + p.classLabel + p.sequence + p.shortLine)
              .toLowerCase()
              .includes(query.toLowerCase())
          : true,
    );
  }, [active, query]);

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
      <Badge tone="brand">Catalog</Badge>
      <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-[var(--brand-midnight)]">
        Research peptides
      </h1>
      <p className="mt-3 text-[var(--brand-slate)] max-w-xl">
        Every product is individually priced and shipped. Filters map to research categories — not human use cases.
      </p>

      <div className="mt-10 grid lg:grid-cols-[260px_1fr] gap-10">
        <aside className="space-y-6">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)] mb-2">
              Search
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, sequence, class…"
              className="w-full h-10 px-4 text-sm rounded-lg bg-white border border-[var(--border)] focus:outline-none focus:border-[var(--brand-blurple)]"
            />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)] mb-2">
              Research category
            </div>
            <div className="space-y-1">
              <button
                onClick={() => setActive(null)}
                className={`w-full text-left px-3 py-2 text-sm rounded-lg ${
                  !active
                    ? "bg-[var(--brand-blurple)]/10 text-[var(--brand-blurple)]"
                    : "hover:bg-[var(--surface)]"
                }`}
              >
                All categories ({PRODUCTS.length})
              </button>
              {CATEGORIES.map((c) => {
                const count = PRODUCTS.filter((p) => p.category === c.id).length;
                if (count === 0) return null;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg ${
                      active === c.id
                        ? "bg-[var(--brand-blurple)]/10 text-[var(--brand-blurple)]"
                        : "hover:bg-[var(--surface)]"
                    }`}
                  >
                    {c.label} <span className="text-[var(--brand-slate)]">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        <div>
          <div className="text-sm text-[var(--brand-slate)] mb-4">
            {filtered.length} product{filtered.length === 1 ? "" : "s"}
          </div>
          {filtered.length === 0 ? (
            <div className="text-sm text-[var(--brand-slate)] py-12 text-center border border-dashed border-[var(--border)] rounded-2xl">
              No products match the current filters.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20">Loading…</div>
      }
    >
      <ShopInner />
    </Suspense>
  );
}
