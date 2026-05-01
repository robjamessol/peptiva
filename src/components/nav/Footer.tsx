import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { RUO_LONG } from "@/lib/ruo";

const COLS = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All products" },
      { href: "/protocols", label: "Protocols" },
      { href: "/coa", label: "COA library" },
      { href: "/membership", label: "Membership" },
    ],
  },
  {
    title: "Quality",
    links: [
      { href: "/quality", label: "Characterization" },
      { href: "/quality#facility", label: "Facility" },
      { href: "/quality#testing", label: "Testing methods" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Research blog" },
      { href: "/contact", label: "Contact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/research-use", label: "Research use policy" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/privacy", label: "Privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 grid gap-12 lg:grid-cols-[1.4fr_repeat(4,_1fr)]">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-[var(--brand-slate)] max-w-xs">
            Characterized research peptides. Batch-traceable. Never bundled.
          </p>
        </div>
        {COLS.map((col) => (
          <div key={col.title}>
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)] mb-4">
              {col.title}
            </div>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[var(--brand-midnight)] hover:text-[var(--brand-blurple)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8 text-xs text-[var(--brand-slate)] grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-3xl leading-relaxed">{RUO_LONG}</p>
          <p>© {new Date().getFullYear()} peptriva research, inc.</p>
        </div>
      </div>
    </footer>
  );
}
