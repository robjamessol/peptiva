import Link from "next/link";
import { ArrowRight, Repeat, Tag, FileBadge2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PeptideMesh } from "@/components/peptide/PeptideMesh";

export function MembershipTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-pop">
        <div className="absolute inset-0 bg-gradient-soft" />
        <PeptideMesh className="opacity-50" seed={11} />
        <div className="relative grid lg:grid-cols-2 gap-10 p-10 lg:p-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
              Membership
            </div>
            <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight text-[var(--brand-midnight)] text-balance">
              Auto-shipments for ongoing research workflows.
            </h2>
            <p className="mt-4 text-[var(--brand-slate)] max-w-md">
              Schedule recurring vials of the products you actually use. Member pricing, priority batch reservations, and a saved COA library across every order.
            </p>
            <div className="mt-6">
              <Button asChild variant="gradient" size="lg">
                <Link href="/membership">
                  Compare plans
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <Perk icon={<Repeat className="w-4 h-4" />} title="Auto-shipments" body="30 / 45 / 60 day cadence." />
            <Perk icon={<Tag className="w-4 h-4" />} title="Member pricing" body="Up to 15% off every order." />
            <Perk icon={<FileBadge2 className="w-4 h-4" />} title="COA archive" body="Every batch, every order." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Perk({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-[var(--border)] p-5">
      <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[var(--brand-blurple)]/10 text-[var(--brand-blurple)]">
        {icon}
      </div>
      <div className="mt-3 font-display text-base text-[var(--brand-midnight)]">
        {title}
      </div>
      <p className="text-sm text-[var(--brand-slate)] mt-1">{body}</p>
    </div>
  );
}
