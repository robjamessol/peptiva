import Image from "next/image";
import { Atom, FlaskConical, ShieldCheck, FileBadge2, Microscope } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PeptideHelix } from "@/components/peptide/PeptideHelix";
import { PeptideMesh } from "@/components/peptide/PeptideMesh";
import { IMAGES } from "@/lib/data/images";
import { QUALITY_PROMISE, NO_BUNDLING } from "@/lib/ruo";

const METHODS = [
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "HPLC purity",
    body: "Reverse-phase HPLC at 220 nm with gradient elution. Peak-area-percent of the target peak relative to total area is reported on every COA.",
  },
  {
    icon: <Atom className="w-5 h-5" />,
    title: "Mass spectrometry",
    body: "ESI-MS confirms the eluted peak matches the calculated monoisotopic mass within tight tolerance. Spectra are reviewed for oxidation and adduct satellites.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Sterility",
    body: "USP <797> sterile fill in a certified compounding environment. Sterility is verified post-fill on representative vials per batch.",
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: "Endotoxin",
    body: "LAL or rFC assay with EU/mg result published on the COA. Specifications vary by product and are listed on each product page.",
  },
  {
    icon: <FileBadge2 className="w-5 h-5" />,
    title: "Identity by sequence",
    body: "For sequences containing oxidation-prone residues, MS/MS or Edman sequencing is performed and reported on request.",
  },
];

export default function QualityPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <PeptideMesh className="opacity-50" seed={3} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28">
          <Badge tone="brand">Quality</Badge>
          <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-[var(--brand-midnight)] max-w-3xl text-balance">
            Characterized in an FDA-regulated facility. Documented before it ships.
          </h1>
          <p className="mt-4 text-[var(--brand-slate)] max-w-2xl">
            {QUALITY_PROMISE}
          </p>
        </div>
      </section>

      <section id="testing" className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
          Testing methods
        </div>
        <h2 className="mt-2 font-display text-4xl tracking-tight text-[var(--brand-midnight)] max-w-2xl">
          Five panels, every batch.
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {METHODS.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl bg-white border border-[var(--border)] p-6 shadow-soft"
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-brand text-white">
                {m.icon}
              </div>
              <div className="mt-4 font-display text-lg text-[var(--brand-midnight)]">
                {m.title}
              </div>
              <p className="mt-2 text-sm text-[var(--brand-slate)] leading-relaxed">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="facility"
        className="bg-[var(--brand-midnight)] text-white relative overflow-hidden"
      >
        <PeptideHelix className="absolute inset-x-0 -bottom-16 opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
            <Image
              src={IMAGES.facility}
              alt="Compounding facility"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-white/60">
              Facility
            </div>
            <h2 className="mt-2 font-display text-4xl tracking-tight">
              Compounded under USP <span className="text-gradient-brand">&lt;797&gt;</span>.
            </h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Our compounding partner operates an FDA-regulated facility with ISO-certified cleanroom, environmental monitoring, and full chain-of-custody from raw API to filled vial.
            </p>
            <p className="mt-4 text-white/70 max-w-xl">
              {NO_BUNDLING}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
