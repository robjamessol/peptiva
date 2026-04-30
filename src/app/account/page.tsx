"use client";

import Link from "next/link";
import { CalendarClock, Package, FileBadge2, LogOut, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useAccount } from "@/lib/store/account";
import { COA_LIBRARY } from "@/lib/data/coa";
import { formatDate } from "@/lib/utils";

const ORDERS = [
  { id: "PEP-A04F2", date: "2026-04-22", lines: ["BPC-157 (5mg)", "TB-500 (5mg)"], total: "$148.00" },
  { id: "PEP-89XK1", date: "2026-03-04", lines: ["GHK-Cu (50mg)"], total: "$49.00" },
  { id: "PEP-QQ2D7", date: "2026-01-18", lines: ["Epitalon (10mg)"], total: "$59.00" },
];

export default function AccountPage() {
  const { loggedIn, email, signIn, signOut } = useAccount();
  const recentCoas = COA_LIBRARY.slice(0, 4);

  if (!loggedIn) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <Badge tone="brand">Account</Badge>
        <h1 className="mt-3 font-display text-3xl text-[var(--brand-midnight)] tracking-tight">
          Sign in to view your dashboard.
        </h1>
        <p className="mt-3 text-sm text-[var(--brand-slate)]">
          This is a UI stub — clicking below logs you in locally.
        </p>
        <Button
          variant="gradient"
          size="lg"
          className="mt-6 w-full"
          onClick={() => signIn("researcher@peptriva.example")}
        >
          Sign in (mock)
        </Button>
        <Link
          href="/login"
          className="block mt-3 text-sm text-[var(--brand-blurple)] hover:underline"
        >
          Use the full sign-in screen →
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Badge tone="brand">Account</Badge>
          <h1 className="mt-3 font-display text-5xl tracking-tight text-[var(--brand-midnight)]">
            Researcher dashboard
          </h1>
          <p className="mt-2 text-sm text-[var(--brand-slate)]">
            Signed in as <code className="font-mono">{email}</code>
          </p>
        </div>
        <Button variant="outline" size="md" onClick={signOut}>
          <LogOut className="w-4 h-4" /> Sign out
        </Button>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        <Card icon={<CalendarClock className="w-5 h-5" />} title="Next shipment" body="May 22, 2026 · BPC-157 5mg" />
        <Card icon={<Package className="w-5 h-5" />} title="Active subscription" body="Lab tier · 30-day cadence" />
        <Card icon={<ShieldCheck className="w-5 h-5" />} title="21+ verified" body="Confirmed Apr 28, 2026" />
      </div>

      <div className="mt-12 grid lg:grid-cols-2 gap-8">
        <section>
          <h2 className="font-display text-2xl text-[var(--brand-midnight)] tracking-tight">
            Recent orders
          </h2>
          <div className="mt-4 rounded-2xl border border-[var(--border)] bg-white divide-y divide-[var(--border)]">
            {ORDERS.map((o) => (
              <div key={o.id} className="flex items-center justify-between p-4">
                <div className="min-w-0">
                  <div className="font-mono text-sm">{o.id}</div>
                  <div className="text-xs text-[var(--brand-slate)] mt-0.5">
                    {formatDate(o.date)} · {o.lines.join(", ")}
                  </div>
                </div>
                <div className="text-sm font-semibold">{o.total}</div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-display text-2xl text-[var(--brand-midnight)] tracking-tight flex items-center gap-2">
            <FileBadge2 className="w-5 h-5 text-[var(--brand-blurple)]" /> Saved COAs
          </h2>
          <div className="mt-4 rounded-2xl border border-[var(--border)] bg-white divide-y divide-[var(--border)]">
            {recentCoas.map((c) => (
              <Link
                key={c.batch}
                href={`/coa?batch=${c.batch}`}
                className="flex items-center justify-between p-4 hover:bg-[var(--surface)]"
              >
                <div className="min-w-0">
                  <div className="font-medium text-sm text-[var(--brand-midnight)]">
                    {c.productName}
                  </div>
                  <div className="text-xs text-[var(--brand-slate)] mt-0.5">
                    {c.batch} · HPLC {c.hplcPurity.toFixed(1)}%
                  </div>
                </div>
                <span className="text-sm text-[var(--brand-blurple)]">View →</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Card({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-[var(--border)] p-5 shadow-soft">
      <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[var(--brand-blurple)]/10 text-[var(--brand-blurple)]">
        {icon}
      </div>
      <div className="mt-3 text-xs uppercase tracking-[0.12em] text-[var(--brand-slate)]">
        {title}
      </div>
      <div className="mt-1 font-display text-lg text-[var(--brand-midnight)]">
        {body}
      </div>
    </div>
  );
}
