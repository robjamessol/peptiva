import type { Product } from "@/lib/data/products";

export function StatStrip({ product }: { product: Product }) {
  const stats = [
    {
      v: `${product.characterization.hplcPurity.toFixed(1)}%`,
      l: "HPLC purity",
    },
    {
      v: product.characterization.sterility,
      l: "Sterility (USP <797>)",
    },
    {
      v: product.characterization.endotoxin,
      l: "Endotoxin (LAL)",
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-y border-[var(--border)] my-12 lg:my-20">
      {stats.map((s, i) => (
        <div
          key={s.l}
          className={`relative p-6 lg:p-8 ${
            i !== stats.length - 1 ? "md:border-r border-[var(--border)]" : ""
          }`}
        >
          <div className="absolute top-0 left-0 right-6 h-[3px] bg-gradient-brand" />
          <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
            {s.l}
          </div>
          <div className="mt-2 font-display text-4xl lg:text-5xl text-[var(--brand-midnight)] tracking-tight">
            {s.v}
          </div>
        </div>
      ))}
    </section>
  );
}
