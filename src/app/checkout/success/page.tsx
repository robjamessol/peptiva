"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PeptideMesh } from "@/components/peptide/PeptideMesh";

function SuccessInner() {
  const sp = useSearchParams();
  const order = sp.get("order") ?? "PEP-XXXXXX";
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center px-4 py-20">
      <PeptideMesh className="opacity-30" seed={9} />
      <div className="relative z-10 max-w-md text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600">
          <CircleCheck className="w-6 h-6" />
        </div>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--brand-midnight)]">
          Order received.
        </h1>
        <p className="mt-3 text-[var(--brand-slate)]">
          This is a mock checkout — no payment was charged.
        </p>
        <div className="mt-6 rounded-2xl border border-[var(--border)] bg-white p-4 inline-block">
          <div className="text-xs text-[var(--brand-slate)]">Order number</div>
          <div className="font-mono text-lg mt-0.5">{order}</div>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild variant="gradient">
            <Link href="/account">Go to dashboard</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/shop">Keep browsing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div className="px-4 py-20 text-center">Loading…</div>}>
      <SuccessInner />
    </Suspense>
  );
}
