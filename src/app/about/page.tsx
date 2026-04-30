import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { PeptideHelix } from "@/components/peptide/PeptideHelix";
import { IMAGES } from "@/lib/data/images";

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28">
        <Badge tone="brand">About</Badge>
        <h1 className="mt-3 font-display text-5xl md:text-7xl tracking-tight text-[var(--brand-midnight)] max-w-3xl text-balance">
          Peptide chemistry deserves transparent characterization.
        </h1>
        <p className="mt-6 text-lg text-[var(--brand-slate)] max-w-2xl">
          peptriva exists for the researcher who is tired of mystery vials. We publish full characterization data for every batch, refuse to bundle, and never describe what these molecules might do in a human body — because that&apos;s simply not what they&apos;re sold for.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center pb-20">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--border)]">
          <Image
            src={IMAGES.lab}
            alt="Laboratory"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
            Principles
          </div>
          <h2 className="mt-2 font-display text-4xl tracking-tight text-[var(--brand-midnight)]">
            Three commitments.
          </h2>
          <ul className="mt-6 space-y-5 text-[var(--brand-midnight)]">
            <li>
              <div className="font-display text-lg">Transparent characterization</div>
              <p className="text-sm text-[var(--brand-slate)] mt-1">
                Every batch ships with HPLC chromatograms, mass spectra, and sterility / endotoxin test reports. We publish before we ship.
              </p>
            </li>
            <li>
              <div className="font-display text-lg">No bundling</div>
              <p className="text-sm text-[var(--brand-slate)] mt-1">
                Each peptide is priced and shipped individually. Researchers should be able to verify a single batch on its own merits, never as part of an aggregated package.
              </p>
            </li>
            <li>
              <div className="font-display text-lg">Strictly research use</div>
              <p className="text-sm text-[var(--brand-slate)] mt-1">
                We do not market our products for any human use. Our website does not describe physiological outcomes, dosing, or medical indications.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[var(--brand-midnight)] text-white relative overflow-hidden py-20">
        <PeptideHelix className="absolute inset-x-0 -bottom-12 opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 lg:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.16em] text-white/60">
            Our team
          </div>
          <h2 className="mt-2 font-display text-4xl tracking-tight">
            Researchers, chemists, and operators.
          </h2>
          <p className="mt-4 text-white/70">
            peptriva is built by a team that has shipped peptides into research labs for over a decade. We obsess over chromatograms and chain-of-custody so you don&apos;t have to.
          </p>
        </div>
      </section>
    </div>
  );
}
