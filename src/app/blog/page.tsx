import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { POSTS } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
      <Badge tone="brand">Research blog</Badge>
      <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-[var(--brand-midnight)]">
        Educational reading.
      </h1>
      <p className="mt-3 text-[var(--brand-slate)] max-w-2xl">
        Articles on chemistry, characterization, and peptide science. Educational content — not product guidance.
      </p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-white hover:shadow-pop transition-all"
          >
            <div className="relative h-44">
              <Image
                src={p.cover}
                alt=""
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-[0.12em] text-[var(--brand-slate)] bg-[var(--surface)] px-2 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 font-display text-lg text-[var(--brand-midnight)] line-clamp-2">
                {p.title}
              </div>
              <p className="mt-2 text-sm text-[var(--brand-slate)] line-clamp-2">
                {p.excerpt}
              </p>
              <div className="mt-4 text-xs text-[var(--brand-slate)]">
                {formatDate(p.date)} · {p.readMins} min read
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
