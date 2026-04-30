import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TIERS } from "@/lib/data/membership";
import { formatPrice, cn } from "@/lib/utils";

export default function MembershipPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
      <Badge tone="brand">Membership</Badge>
      <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-[var(--brand-midnight)]">
        Recurring research, simplified.
      </h1>
      <p className="mt-3 text-[var(--brand-slate)] max-w-2xl">
        Pick a cadence and the products you actually use. Every shipment ships with its own COA and is logged to your account.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-4">
        {TIERS.map((t) => (
          <div
            key={t.id}
            className={cn(
              "rounded-3xl bg-white border p-8 relative overflow-hidden",
              t.highlight
                ? "border-[var(--brand-blurple)] shadow-pop"
                : "border-[var(--border)] shadow-soft",
            )}
          >
            {t.highlight && (
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
            )}
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
              {t.name}
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              {t.priceCents > 0 ? (
                <>
                  <span className="font-display text-5xl text-[var(--brand-midnight)]">
                    {formatPrice(t.priceCents)}
                  </span>
                  <span className="text-sm text-[var(--brand-slate)]">
                    {t.cadence}
                  </span>
                </>
              ) : (
                <span className="font-display text-5xl text-[var(--brand-midnight)]">
                  {t.cadence}
                </span>
              )}
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {t.perks.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-[var(--brand-midnight)]"
                >
                  <Check className="w-4 h-4 mt-0.5 text-[var(--brand-blurple)] shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              variant={t.highlight ? "gradient" : "outline"}
              className="w-full mt-8"
            >
              {t.id === "institution" ? "Contact sales" : "Choose plan"}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 lg:p-12">
        <h3 className="font-display text-2xl text-[var(--brand-midnight)]">
          A word on auto-shipments
        </h3>
        <p className="mt-3 text-sm text-[var(--brand-slate)] max-w-3xl leading-relaxed">
          peptriva memberships exist to simplify recurring research workflows. They are not
          intended to suggest, recommend, or facilitate any human use of these products.
          You can pause or cancel at any time, and every shipment is logged with its own COA.
        </p>
      </div>
    </div>
  );
}
