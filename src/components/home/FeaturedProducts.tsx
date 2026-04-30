import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS } from "@/lib/data/products";

export function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
            Catalog
          </div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight text-[var(--brand-midnight)]">
            Featured research peptides
          </h2>
        </div>
        <Link
          href="/shop"
          className="hidden md:inline-flex text-sm font-medium text-[var(--brand-blurple)] hover:underline items-center gap-1"
        >
          Shop all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
