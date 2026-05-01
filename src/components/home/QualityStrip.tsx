import { FlaskConical, Atom, ShieldCheck, FileBadge2 } from "lucide-react";
import { PeptideHelix } from "@/components/peptide/PeptideHelix";

const ITEMS = [
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "HPLC purity",
    body: "Reverse-phase HPLC at 220 nm. Peak-area-percent reported on every COA.",
  },
  {
    icon: <Atom className="w-5 h-5" />,
    title: "Mass spectrometry",
    body: "ESI-MS confirms identity against expected monoisotopic mass within tight tolerance.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Sterility & endotoxin",
    body: "USP <797> sterile fill, post-fill sterility, and LAL endotoxin reported per batch.",
  },
  {
    icon: <FileBadge2 className="w-5 h-5" />,
    title: "Batch-traceable COA",
    body: "Every vial maps to a published COA. No exceptions, no aggregated batches.",
  },
];

export function QualityStrip() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-midnight)] text-white">
      <PeptideHelix className="absolute inset-x-0 -bottom-10 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28">
        <div className="text-xs uppercase tracking-[0.16em] text-white/60">
          Every batch, every test
        </div>
        <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight max-w-2xl">
          Characterized before it ships.
        </h2>
        <p className="mt-4 text-white/70 max-w-2xl">
          We publish the COA before the box leaves the facility. If a batch fails any spec, the batch is destroyed — never reworked, never sold.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6"
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-brand text-white">
                {it.icon}
              </div>
              <div className="mt-4 font-display text-lg">{it.title}</div>
              <p className="mt-2 text-sm text-white/70">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
