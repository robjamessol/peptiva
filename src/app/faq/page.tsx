"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const FAQS = [
  {
    q: "What does 'research use only' mean?",
    a: "Our products are sold strictly for in-vitro and laboratory research. They are not drugs, foods, cosmetics, or medical devices. They are not for human or veterinary use. We do not advise on dosing or any human protocol.",
  },
  {
    q: "Why do you require an age check?",
    a: "We require purchasers to be at least 21 and to confirm they are conducting bona-fide research. This is a self-attestation gate, not a substitute for institutional approval where required.",
  },
  {
    q: "How is each batch characterized?",
    a: "Every batch is tested by reverse-phase HPLC for purity, mass spectrometry for identity, and is sterility/endotoxin tested. The COA is published before shipping and is accessible from your account and from the COA Library.",
  },
  {
    q: "Why don't you bundle products?",
    a: "Bundling makes it harder for researchers to verify a single batch on its own merits. We sell individually so each vial maps to one COA.",
  },
  {
    q: "Can the research assistant recommend a peptide for me?",
    a: "No. The assistant answers questions about chemistry, characterization, and product handling. It does not provide dosing, medical, or human-use guidance. Use the on-site Interest Survey to map a research domain to peptide categories for further reading.",
  },
  {
    q: "How are auto-shipments handled?",
    a: "Members can schedule auto-shipments at 30, 45, or 60 day cadences. Each shipment generates its own COA. You can pause, change cadence, or cancel anytime from your account.",
  },
  {
    q: "What about international shipping?",
    a: "We ship within the United States today. International shipping is on the roadmap and will be subject to per-country research-use compliance requirements.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 lg:px-8 py-12 lg:py-20">
      <Badge tone="brand">FAQ</Badge>
      <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-[var(--brand-midnight)]">
        Frequently asked.
      </h1>

      <Accordion.Root
        type="multiple"
        className="mt-10 rounded-2xl border border-[var(--border)] bg-white overflow-hidden"
      >
        {FAQS.map((f, i) => (
          <Accordion.Item
            key={i}
            value={`q${i}`}
            className="border-b last:border-b-0 border-[var(--border)]"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[var(--surface)]">
                <span className="font-display text-base text-[var(--brand-midnight)]">
                  {f.q}
                </span>
                <ChevronDown className="w-4 h-4 text-[var(--brand-slate)] transition-transform group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <div className="px-5 pb-5 text-sm text-[var(--brand-slate)] leading-relaxed">
                {f.a}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
