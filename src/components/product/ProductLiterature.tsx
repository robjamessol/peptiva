import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/lib/data/products";

export function ProductLiterature({ product }: { product: Product }) {
  if (product.literature.length === 0) return null;
  return (
    <section id="literature" className="py-12 lg:py-16">
      <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
        Related research
      </div>
      <h2 className="mt-2 font-display text-3xl md:text-4xl tracking-tight text-[var(--brand-midnight)]">
        Read more on the blog.
      </h2>
      <ul className="mt-6 space-y-3">
        {product.literature.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-white px-5 py-4 hover:border-[var(--brand-blurple)]"
            >
              <span className="text-[var(--brand-midnight)]">{l.title}</span>
              <span className="text-[var(--brand-blurple)] text-sm">Read →</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProductFaqs({ product }: { product: Product }) {
  if (product.faqs.length === 0) return null;
  return (
    <section id="faq" className="py-12 lg:py-16">
      <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
        FAQ
      </div>
      <h2 className="mt-2 font-display text-3xl md:text-4xl tracking-tight text-[var(--brand-midnight)]">
        About this product.
      </h2>
      <Accordion.Root
        type="multiple"
        className="mt-8 rounded-2xl border border-[var(--border)] bg-white overflow-hidden"
      >
        {product.faqs.map((f, i) => (
          <Accordion.Item
            key={i}
            value={`f${i}`}
            className="border-b last:border-b-0 border-[var(--border)]"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[var(--surface)]">
                <span className="text-[var(--brand-midnight)]">{f.q}</span>
                <ChevronDown className="w-4 h-4 text-[var(--brand-slate)] transition-transform group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <div className="px-5 pb-5 text-sm text-[var(--brand-slate)]">
                {f.a}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
