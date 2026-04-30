"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useAccount } from "@/lib/store/account";
import { PeptideHelix } from "@/components/peptide/PeptideHelix";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const signIn = useAccount((s) => s.signIn);
  const router = useRouter();

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="rounded-3xl border border-[var(--border)] bg-white shadow-pop overflow-hidden">
        <div className="relative h-32 bg-[var(--brand-midnight)] overflow-hidden">
          <PeptideHelix className="absolute inset-0 opacity-90" turns={4} amplitude={50} />
        </div>
        <div className="p-8">
          <Badge tone="brand">Sign in</Badge>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-[var(--brand-midnight)]">
            Welcome back, researcher.
          </h1>
          <p className="mt-2 text-sm text-[var(--brand-slate)]">
            Sign in to view orders, manage subscriptions, and access your saved COAs. (Mock — any email works.)
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signIn(email || "researcher@peptriva.example");
              router.push("/account");
            }}
            className="mt-6 grid gap-3"
          >
            <input
              type="email"
              required
              placeholder="research@lab.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-4 rounded-lg border border-[var(--border)] bg-white text-sm focus:outline-none focus:border-[var(--brand-blurple)]"
            />
            <Button type="submit" variant="gradient" size="lg">
              Continue
            </Button>
          </form>
          <p className="mt-6 text-[11px] text-[var(--brand-slate)] text-center">
            Sign-in implies you remain a 21+ research professional. peptriva products are research use only.
          </p>
        </div>
      </div>
    </div>
  );
}
