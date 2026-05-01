"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, FlaskConical, FileBadge2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PeptideHelix } from "@/components/peptide/PeptideHelix";
import { PeptideMesh } from "@/components/peptide/PeptideMesh";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft" />
      <PeptideMesh className="opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-20 lg:pt-28 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <Badge tone="brand">Research use only · 21+</Badge>
            <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl text-[var(--brand-midnight)] tracking-tight text-balance">
              Research peptides,{" "}
              <span className="text-gradient-brand">characterized.</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--brand-slate)] max-w-xl text-balance">
              Every batch is HPLC-pure, mass-confirmed, and traceable to a published Certificate of Analysis. Never bundled. Built for serious research.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gradient" size="lg">
                <Link href="#interest-survey">
                  Find research peptides for your work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/shop">Browse catalog</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              <Stat icon={<FlaskConical className="w-4 h-4" />} v=">98%" l="HPLC purity" />
              <Stat icon={<ShieldCheck className="w-4 h-4" />} v="USP <797>" l="sterile fill" />
              <Stat icon={<FileBadge2 className="w-4 h-4" />} v="Per-batch" l="published COA" />
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-white border border-[var(--border)] shadow-pop p-6 lg:p-8 overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
              <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
                Featured molecule
              </div>
              <div className="font-display text-2xl mt-1 text-[var(--brand-midnight)]">
                BPC-157
              </div>
              <PeptideHelix className="my-4" turns={6} amplitude={60} />
              <div className="flex items-center justify-between text-xs text-[var(--brand-slate)]">
                <span>Pentadecapeptide · 15 residues</span>
                <span>MW 1419.55</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, v, l }: { icon: React.ReactNode; v: string; l: string }) {
  return (
    <div className="border-l-2 border-[var(--brand-blurple)]/40 pl-3">
      <div className="text-xs text-[var(--brand-slate)] flex items-center gap-1.5">
        {icon}
        {l}
      </div>
      <div className="font-display text-xl text-[var(--brand-midnight)] mt-0.5">
        {v}
      </div>
    </div>
  );
}
