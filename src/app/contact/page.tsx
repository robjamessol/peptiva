"use client";

import { useState } from "react";
import { Mail, MessageSquare, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-[1fr_1.2fr] gap-12">
      <div>
        <Badge tone="brand">Contact</Badge>
        <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-[var(--brand-midnight)]">
          Talk to a researcher.
        </h1>
        <p className="mt-4 text-[var(--brand-slate)] max-w-md">
          Questions about a specific COA, a custom characterization request, or institutional ordering — drop us a note.
        </p>
        <ul className="mt-8 space-y-4 text-sm text-[var(--brand-midnight)]">
          <li className="flex items-start gap-3">
            <Mail className="w-4 h-4 mt-1 text-[var(--brand-blurple)]" />
            <div>
              <div className="font-medium">research@peptriva.example</div>
              <div className="text-[var(--brand-slate)] text-xs">Response in 1 business day</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MessageSquare className="w-4 h-4 mt-1 text-[var(--brand-blurple)]" />
            <div>
              <div className="font-medium">Live chat</div>
              <div className="text-[var(--brand-slate)] text-xs">Mon–Fri, 9am–5pm PT</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <BadgeCheck className="w-4 h-4 mt-1 text-[var(--brand-blurple)]" />
            <div>
              <div className="font-medium">Institutions</div>
              <div className="text-[var(--brand-slate)] text-xs">Net-30 invoicing and PO available</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="rounded-3xl border border-[var(--border)] bg-white p-8 shadow-soft">
        {sent ? (
          <div className="py-16 text-center">
            <BadgeCheck className="w-10 h-10 mx-auto text-[var(--brand-blurple)]" />
            <h2 className="mt-4 font-display text-2xl text-[var(--brand-midnight)]">
              Message received.
            </h2>
            <p className="mt-2 text-sm text-[var(--brand-slate)]">
              A researcher will reply to your inbox shortly. (This is a mock submit — nothing was sent.)
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="grid gap-4"
          >
            <Field label="Name">
              <input className="form-input" required />
            </Field>
            <Field label="Email">
              <input className="form-input" type="email" required />
            </Field>
            <Field label="Institution (optional)">
              <input className="form-input" />
            </Field>
            <Field label="Topic">
              <select className="form-input" defaultValue="general">
                <option value="general">General</option>
                <option value="coa">COA / batch question</option>
                <option value="institution">Institutional ordering</option>
                <option value="press">Press / partnerships</option>
              </select>
            </Field>
            <Field label="Message">
              <textarea className="form-input min-h-32" required />
            </Field>
            <Button type="submit" size="lg" variant="gradient">
              Send message
            </Button>
            <style>{`.form-input{ width:100%; height:42px; padding:0 12px; border-radius:10px; background:#fff; border:1px solid var(--border); font-size:14px; outline:none } .form-input:focus{ border-color: var(--brand-blurple) } textarea.form-input{ height:auto; padding: 10px 12px } `}</style>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="text-[var(--brand-slate)]">{label}</span>
      {children}
    </label>
  );
}
