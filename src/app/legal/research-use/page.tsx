import { RUO_LONG } from "@/lib/ruo";
import { Badge } from "@/components/ui/Badge";

export default function ResearchUsePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 lg:px-8 py-16 prose prose-zinc max-w-none">
      <Badge tone="brand">Legal</Badge>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-[var(--brand-midnight)]">
        Research-use policy
      </h1>
      <p className="mt-4 text-[var(--brand-slate)]">{RUO_LONG}</p>
      <h2 className="font-display text-2xl mt-10">Acceptable use</h2>
      <p className="text-[var(--brand-slate)]">
        peptriva products may be used by researchers and laboratory professionals for in-vitro and laboratory research only. Any use in or on humans or animals is unauthorized and is a violation of these terms.
      </p>
      <h2 className="font-display text-2xl mt-10">Age restriction</h2>
      <p className="text-[var(--brand-slate)]">
        Purchasers must be at least 21 years of age. peptriva will not knowingly sell to anyone under 21 or to anyone who is unable to attest to a bona-fide research purpose.
      </p>
      <h2 className="font-display text-2xl mt-10">No medical claims</h2>
      <p className="text-[var(--brand-slate)]">
        We do not market, suggest, or recommend our products for any human use, condition, or outcome. Our website and assistant respond only to questions about chemistry, characterization, and product handling.
      </p>
      <h2 className="font-display text-2xl mt-10">Reporting concerns</h2>
      <p className="text-[var(--brand-slate)]">
        If you believe a product was mis-represented, mis-handled, or used outside of research, contact research@peptriva.example so we can investigate.
      </p>
    </div>
  );
}
