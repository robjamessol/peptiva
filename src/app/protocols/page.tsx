import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { PROTOCOLS } from "@/lib/data/protocols";
import { PRODUCTS } from "@/lib/data/products";
import { PeptideRibbon } from "@/components/peptide/PeptideRibbon";
import { NO_BUNDLING } from "@/lib/ruo";
import { formatPrice } from "@/lib/utils";

export default function ProtocolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
      <Badge tone="brand">Stacks</Badge>
      <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-[var(--brand-midnight)]">
        Research protocols
      </h1>
      <p className="mt-3 text-[var(--brand-slate)] max-w-2xl">
        Pre-configured groupings of peptides commonly studied together in research workflows. Each peptide is sold and shipped as an individual vial — never combined.
      </p>

      <div className="mt-6 rounded-xl border border-[var(--brand-blurple)]/20 bg-[var(--brand-blurple)]/5 px-4 py-3 text-sm text-[var(--brand-midnight)] max-w-2xl">
        {NO_BUNDLING}
      </div>

      <div className="mt-12 space-y-6">
        {PROTOCOLS.map((p) => {
          const components = p.components
            .map((c) => PRODUCTS.find((pr) => pr.slug === c.productSlug))
            .filter((c): c is NonNullable<typeof c> => Boolean(c));
          return (
            <div
              key={p.slug}
              className="rounded-3xl border border-[var(--border)] bg-white overflow-hidden"
            >
              <div className="grid lg:grid-cols-[1fr_1.4fr]">
                <div className="p-8 lg:p-10 bg-[var(--surface)] relative">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
                  <Badge>{p.category}</Badge>
                  <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--brand-midnight)]">
                    {p.name}
                  </h2>
                  <p className="mt-3 text-sm text-[var(--brand-slate)]">
                    {p.shortLine}
                  </p>
                </div>
                <div className="p-6 lg:p-10 grid sm:grid-cols-2 gap-4 content-start">
                  {components.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/shop/${c.slug}`}
                      className="group rounded-2xl border border-[var(--border)] hover:border-[var(--brand-blurple)] p-4 flex gap-4"
                    >
                      <div className="w-24 h-24 shrink-0 rounded-xl bg-[var(--surface)] overflow-hidden flex items-center">
                        <PeptideRibbon
                          sequence={c.sequence}
                          width={240}
                          height={140}
                          animate={false}
                          showResidues={false}
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--brand-slate)] truncate">
                          {c.classLabel}
                        </div>
                        <div className="font-display text-base text-[var(--brand-midnight)] mt-0.5">
                          {c.name}
                        </div>
                        <div className="mt-1 text-xs text-[var(--brand-slate)] line-clamp-2">
                          {c.shortLine}
                        </div>
                        <div className="mt-2 text-sm font-medium text-[var(--brand-blurple)]">
                          {formatPrice(c.priceCents)} →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
