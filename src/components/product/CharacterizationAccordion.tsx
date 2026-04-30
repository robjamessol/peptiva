"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/lib/data/products";

function MiniHplc() {
  return (
    <svg viewBox="0 0 400 120" className="w-full h-auto">
      <defs>
        <linearGradient id="hplc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#635bff" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#635bff" stopOpacity={0} />
        </linearGradient>
      </defs>
      <line x1="0" y1="100" x2="400" y2="100" stroke="#e3e8ee" />
      {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
        <line key={x} x1={x} y1="98" x2={x} y2="102" stroke="#e3e8ee" />
      ))}
      <path
        d="M 0 100 L 80 100 L 100 98 L 140 95 L 180 99 L 200 99 L 220 30 L 230 12 L 240 30 L 260 90 L 320 99 L 400 100 Z"
        fill="url(#hplc-fill)"
      />
      <path
        d="M 0 100 L 80 100 L 100 98 L 140 95 L 180 99 L 200 99 L 220 30 L 230 12 L 240 30 L 260 90 L 320 99 L 400 100"
        stroke="#635bff"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

function MiniMs() {
  return (
    <svg viewBox="0 0 400 120" className="w-full h-auto">
      <line x1="0" y1="100" x2="400" y2="100" stroke="#e3e8ee" />
      {[
        [60, 78],
        [100, 92],
        [150, 50],
        [180, 18],
        [200, 30],
        [240, 70],
        [290, 86],
        [330, 92],
      ].map(([x, y]) => (
        <line key={x} x1={x} y1="100" x2={x} y2={y} stroke="#ff5db1" strokeWidth={2} />
      ))}
      <line x1="180" y1="18" x2="180" y2="100" stroke="#ff5db1" strokeWidth={3} />
    </svg>
  );
}

export function CharacterizationAccordion({ product }: { product: Product }) {
  const items = [
    {
      id: "hplc",
      title: `HPLC purity — ${product.characterization.hplcPurity.toFixed(1)}%`,
      body: (
        <div className="space-y-3">
          <p className="text-sm text-[var(--brand-slate)]">
            Reverse-phase HPLC at 220 nm, gradient elution. Peak-area-percent of target relative to total.
          </p>
          <div className="rounded-xl bg-[var(--surface)] p-4 border border-[var(--border)]">
            <MiniHplc />
          </div>
        </div>
      ),
    },
    {
      id: "ms",
      title: `Mass spectrometry — m/z ${product.characterization.msMonoisotopic}`,
      body: (
        <div className="space-y-3">
          <p className="text-sm text-[var(--brand-slate)]">
            ESI-MS confirms identity vs. expected monoisotopic mass. The dominant peak is the protonated species.
          </p>
          <div className="rounded-xl bg-[var(--surface)] p-4 border border-[var(--border)]">
            <MiniMs />
          </div>
        </div>
      ),
    },
    {
      id: "sterility",
      title: `Sterility — ${product.characterization.sterility}`,
      body: (
        <p className="text-sm text-[var(--brand-slate)]">
          Filled in a USP &lt;797&gt; environment. Sterility verified post-fill on representative vials.
        </p>
      ),
    },
    {
      id: "endotoxin",
      title: `Endotoxin — ${product.characterization.endotoxin}`,
      body: (
        <p className="text-sm text-[var(--brand-slate)]">
          LAL or rFC assay. Reported in EU/mg on every batch COA.
        </p>
      ),
    },
  ];

  return (
    <section id="characterization" className="py-12 lg:py-16">
      <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
        Characterization
      </div>
      <h2 className="mt-2 font-display text-3xl md:text-4xl tracking-tight text-[var(--brand-midnight)]">
        How we verify each batch.
      </h2>
      <Accordion.Root
        type="multiple"
        defaultValue={["hplc"]}
        className="mt-8 rounded-2xl border border-[var(--border)] bg-white overflow-hidden"
      >
        {items.map((it) => (
          <Accordion.Item key={it.id} value={it.id} className="border-b last:border-b-0 border-[var(--border)]">
            <Accordion.Header>
              <Accordion.Trigger className="group w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[var(--surface)]">
                <span className="font-display text-base text-[var(--brand-midnight)]">
                  {it.title}
                </span>
                <ChevronDown className="w-4 h-4 text-[var(--brand-slate)] transition-transform group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out">
              <div className="px-5 pb-5">{it.body}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
