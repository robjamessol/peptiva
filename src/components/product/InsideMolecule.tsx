import type { Product } from "@/lib/data/products";
import { describeSequence } from "@/lib/peptide/sequence";
import { SequenceChips } from "@/components/peptide/ResidueChip";

export function InsideMolecule({ product }: { product: Product }) {
  const desc = describeSequence(product.sequence);
  const items = [
    {
      n: "01",
      title: "Sequence",
      body: (
        <SequenceChips sequence={product.sequence} className="mt-2" />
      ),
      caption: `${product.sequence.length} residues, single-letter codes`,
    },
    {
      n: "02",
      title: "Composition",
      body: (
        <ul className="mt-2 grid grid-cols-2 gap-1 text-sm text-[var(--brand-midnight)]">
          {Object.entries(desc.counts).map(([k, v]) => (
            <li key={k} className="flex justify-between border-b border-dotted border-[var(--border)] py-1">
              <span className="capitalize">{k}</span>
              <span className="text-[var(--brand-slate)]">{v}</span>
            </li>
          ))}
        </ul>
      ),
      caption: `Net charge at pH 7: ${desc.charge >= 0 ? "+" : ""}${desc.charge}`,
    },
    {
      n: "03",
      title: "Molecular weight",
      body: (
        <div className="mt-2 font-display text-3xl text-[var(--brand-midnight)]">
          {product.molecularWeight} <span className="text-base text-[var(--brand-slate)] font-sans">g/mol</span>
        </div>
      ),
      caption: `Isoelectric point ${product.isoelectricPoint}`,
    },
    {
      n: "04",
      title: "Solubility",
      body: (
        <div className="mt-2 text-sm text-[var(--brand-midnight)]">
          {product.solubility}
        </div>
      ),
      caption: "See COA for batch-specific recommendations.",
    },
  ];

  return (
    <section id="structure" className="py-12 lg:py-16">
      <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
        Inside the molecule
      </div>
      <h2 className="mt-2 font-display text-3xl md:text-4xl tracking-tight text-[var(--brand-midnight)]">
        Chemistry, not claims.
      </h2>
      <p className="mt-3 text-[var(--brand-slate)] max-w-2xl">
        peptriva product pages document chemistry and characterization. They do not describe physiological or medical outcomes — those questions are out of scope for research-use products.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div
            key={it.n}
            className="rounded-2xl bg-white border border-[var(--border)] p-5 shadow-soft"
          >
            <div className="text-xs font-mono text-[var(--brand-blurple)]">{it.n}</div>
            <div className="mt-1 font-display text-lg text-[var(--brand-midnight)]">
              {it.title}
            </div>
            {it.body}
            <div className="mt-3 text-[11px] text-[var(--brand-slate)]">{it.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
