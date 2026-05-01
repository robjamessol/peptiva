"use client";

import { useEffect, useState } from "react";
import { useAgeGate } from "@/lib/store/age-gate";
import { Button } from "@/components/ui/Button";
import { PeptideHelix } from "@/components/peptide/PeptideHelix";

export function AgeGateModal() {
  const verified = useAgeGate((s) => s.verified);
  const verify = useAgeGate((s) => s.verify);
  const [mounted, setMounted] = useState(false);
  const [age, setAge] = useState(false);
  const [ruo, setRuo] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || verified) return null;

  return (
    <div
      role="dialog"
      aria-modal
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-[var(--brand-midnight)]/80 backdrop-blur"
    >
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-pop overflow-hidden">
        <div className="relative h-32 overflow-hidden bg-[var(--brand-midnight)]">
          <PeptideHelix className="absolute inset-0 opacity-90" turns={5} amplitude={50} />
        </div>
        <div className="p-8">
          <h2 className="font-display text-2xl text-[var(--brand-midnight)] tracking-tight">
            Welcome to peptriva
          </h2>
          <p className="mt-2 text-sm text-[var(--brand-slate)]">
            Before continuing, please confirm the following. peptriva products are sold strictly for laboratory research use.
          </p>

          <div className="mt-6 space-y-3">
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={age}
                onChange={(e) => setAge(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[var(--border)] text-[var(--brand-blurple)] focus:ring-[var(--brand-blurple)]"
              />
              <span>I am 21 years of age or older and conducting bona-fide research.</span>
            </label>
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={ruo}
                onChange={(e) => setRuo(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[var(--border)] text-[var(--brand-blurple)] focus:ring-[var(--brand-blurple)]"
              />
              <span>
                I understand these products are for research use only and are not for human or veterinary use.
              </span>
            </label>
          </div>

          <Button
            disabled={!age || !ruo}
            onClick={verify}
            variant="gradient"
            size="lg"
            className="mt-6 w-full"
          >
            Enter peptriva
          </Button>
          <p className="mt-4 text-[11px] text-[var(--brand-slate)]">
            By continuing you agree to our research-use policy and terms of service.
          </p>
        </div>
      </div>
    </div>
  );
}
