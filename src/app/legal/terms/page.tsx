import { Badge } from "@/components/ui/Badge";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 lg:px-8 py-16">
      <Badge tone="brand">Legal</Badge>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-[var(--brand-midnight)]">
        Terms of service
      </h1>
      <p className="mt-4 text-sm text-[var(--brand-slate)]">
        These mock terms are placeholders. They establish that purchasers are 21+ research professionals, that products are research use only, and that peptriva is not liable for off-label use. Replace before going to production.
      </p>
      <ol className="mt-6 list-decimal list-inside space-y-3 text-sm text-[var(--brand-midnight)]">
        <li>Eligibility: 21+ researchers only.</li>
        <li>Products are sold strictly for in-vitro and laboratory research.</li>
        <li>No human or veterinary use is authorized.</li>
        <li>peptriva is not liable for any unauthorized use.</li>
        <li>Subscriptions can be paused or cancelled anytime from your account.</li>
        <li>Refunds available on damaged or out-of-spec batches verified by COA.</li>
      </ol>
    </div>
  );
}
