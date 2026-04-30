"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Sparkles, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CATEGORIES, PRODUCTS, type ResearchCategory } from "@/lib/data/products";
import { RUO_QUIZ_DISCLAIMER } from "@/lib/ruo";

interface Choice {
  id: string;
  label: string;
  weight: Partial<Record<ResearchCategory, number>>;
}

interface Step {
  question: string;
  multi?: boolean;
  choices: Choice[];
}

const STEPS: Step[] = [
  {
    question: "Which research areas are you currently working in?",
    multi: true,
    choices: [
      { id: "tissue", label: "Connective tissue / fibroblast research", weight: { tissue: 3 } },
      { id: "skin", label: "Keratinocyte / dermal research", weight: { dermal: 3 } },
      { id: "endocrine", label: "Endocrine-axis / GHRH receptor research", weight: { performance: 3 } },
      { id: "neuro", label: "Neurochemistry / regulatory peptides", weight: { cognitive: 3 } },
      { id: "longevity", label: "Cellular / longevity research", weight: { longevity: 3 } },
      { id: "metabolic", label: "Metabolic / adipocyte research", weight: { metabolic: 3 } },
    ],
  },
  {
    question: "What's your typical sequence length of interest?",
    choices: [
      { id: "short", label: "Short (3–7 residues)", weight: { dermal: 2, longevity: 2, cognitive: 2 } },
      { id: "mid", label: "Mid (8–20 residues)", weight: { tissue: 2, performance: 1 } },
      { id: "long", label: "Long (>20 residues)", weight: { performance: 3 } },
    ],
  },
  {
    question: "What characterization do you need on the COA?",
    multi: true,
    choices: [
      { id: "hplc", label: "HPLC purity", weight: {} },
      { id: "ms", label: "Mass spectrometry", weight: {} },
      { id: "endo", label: "Endotoxin", weight: {} },
      { id: "sterility", label: "Sterility", weight: {} },
    ],
  },
];

export function InterestSurvey() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[][]>(STEPS.map(() => []));
  const [done, setDone] = useState(false);

  const current = STEPS[step];
  const selected = answers[step];

  function toggle(id: string) {
    const next = [...answers];
    const cur = next[step];
    if (current.multi) {
      next[step] = cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id];
    } else {
      next[step] = [id];
    }
    setAnswers(next);
    if (!current.multi) {
      setTimeout(() => advance(next), 220);
    }
  }

  function advance(latest = answers) {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
    void latest;
  }

  function restart() {
    setStep(0);
    setAnswers(STEPS.map(() => []));
    setDone(false);
  }

  const scores: Record<ResearchCategory, number> = {
    tissue: 0,
    dermal: 0,
    metabolic: 0,
    longevity: 0,
    cognitive: 0,
    performance: 0,
  };
  STEPS.forEach((s, i) =>
    answers[i]?.forEach((id) => {
      const c = s.choices.find((c) => c.id === id);
      if (c) {
        for (const k in c.weight) {
          scores[k as ResearchCategory] += c.weight[k as ResearchCategory] ?? 0;
        }
      }
    }),
  );

  const ranked = (Object.keys(scores) as ResearchCategory[])
    .map((k) => ({ key: k, score: scores[k] }))
    .sort((a, b) => b.score - a.score)
    .filter((r) => r.score > 0)
    .slice(0, 3);

  return (
    <section
      id="interest-survey"
      className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28"
    >
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <div>
          <Badge tone="brand">
            <Sparkles className="w-3 h-3" />
            Informational
          </Badge>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight text-[var(--brand-midnight)] text-balance">
            Map your research interests to peptide categories.
          </h2>
          <p className="mt-4 text-[var(--brand-slate)] max-w-md">
            Answer a few questions and we'll point you to the relevant categories of research peptides and supporting literature. Educational only — no recommendations of human use.
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="h-1 bg-gradient-brand" />
          <div className="p-6 lg:p-8">
            {!done ? (
              <>
                <div className="flex items-center justify-between text-xs text-[var(--brand-slate)] mb-3">
                  <span>
                    Step {step + 1} of {STEPS.length}
                  </span>
                  <span>{current.multi ? "Select all that apply" : "Choose one"}</span>
                </div>
                <div className="h-1 bg-[var(--surface-2)] rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-gradient-brand"
                    style={{
                      width: `${((step + 1) / STEPS.length) * 100}%`,
                    }}
                  />
                </div>

                <h3 className="font-display text-2xl text-[var(--brand-midnight)] tracking-tight">
                  {current.question}
                </h3>

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {current.choices.map((c) => {
                    const active = selected.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        onClick={() => toggle(c.id)}
                        className={`text-left rounded-xl border px-4 py-3 transition-all ${
                          active
                            ? "border-[var(--brand-blurple)] bg-[var(--brand-blurple)]/5"
                            : "border-[var(--border)] hover:border-[var(--brand-blurple)]/40"
                        }`}
                      >
                        <span className="text-sm text-[var(--brand-midnight)]">
                          {c.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className="text-sm text-[var(--brand-slate)] disabled:opacity-40"
                  >
                    Back
                  </button>
                  {current.multi && (
                    <Button
                      onClick={() => advance()}
                      disabled={selected.length === 0}
                      variant="gradient"
                    >
                      Continue
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <Results ranked={ranked} restart={restart} />
            )}
          </div>
          <div className="px-6 lg:px-8 pb-6">
            <p className="text-[11px] text-[var(--brand-slate)] leading-relaxed border-t border-[var(--border)] pt-4">
              {RUO_QUIZ_DISCLAIMER}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Results({
  ranked,
  restart,
}: {
  ranked: { key: ResearchCategory; score: number }[];
  restart: () => void;
}) {
  const cats = ranked.length
    ? ranked
    : [{ key: "tissue" as ResearchCategory, score: 1 }];

  return (
    <div>
      <div className="flex items-center justify-between">
        <Badge tone="brand">Your reading list</Badge>
        <button
          onClick={restart}
          className="text-xs text-[var(--brand-slate)] hover:text-[var(--brand-blurple)] inline-flex items-center gap-1"
        >
          <RotateCw className="w-3 h-3" /> Restart
        </button>
      </div>
      <h3 className="mt-3 font-display text-2xl text-[var(--brand-midnight)] tracking-tight">
        Based on your interests, explore these categories.
      </h3>

      <div className="mt-5 space-y-3">
        {cats.map(({ key }) => {
          const c = CATEGORIES.find((c) => c.id === key)!;
          const products = PRODUCTS.filter((p) => p.category === key).slice(0, 3);
          return (
            <div
              key={key}
              className="rounded-xl border border-[var(--border)] p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-lg text-[var(--brand-midnight)]">
                    {c.label}
                  </div>
                  <p className="text-sm text-[var(--brand-slate)] mt-1">
                    {c.blurb}
                  </p>
                </div>
                <Link
                  href={`/shop?category=${key}`}
                  className="text-xs font-medium text-[var(--brand-blurple)] hover:underline whitespace-nowrap"
                >
                  Explore →
                </Link>
              </div>
              {products.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/shop/${p.slug}`}
                      className="text-xs px-2.5 py-1 rounded-full bg-[var(--surface)] hover:bg-[var(--brand-blurple)]/10 text-[var(--brand-midnight)]"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
