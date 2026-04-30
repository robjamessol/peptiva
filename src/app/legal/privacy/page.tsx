import { Badge } from "@/components/ui/Badge";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 lg:px-8 py-16">
      <Badge tone="brand">Legal</Badge>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-[var(--brand-midnight)]">
        Privacy policy
      </h1>
      <p className="mt-4 text-sm text-[var(--brand-slate)]">
        Placeholder privacy policy. We collect order, account, and characterization-request data to operate the service. We never sell personal data. Replace before going to production.
      </p>
      <ul className="mt-6 list-disc list-inside space-y-2 text-sm text-[var(--brand-midnight)]">
        <li>Data collected: account email, order history, COA access logs.</li>
        <li>Cookies: session, age-gate, cart persistence.</li>
        <li>Subprocessors: payments (Stripe), analytics (PostHog), email (Postmark).</li>
        <li>Subject access: research@peptriva.example.</li>
      </ul>
    </div>
  );
}
