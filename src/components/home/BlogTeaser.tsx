import Link from "next/link";
import Image from "next/image";
import { POSTS } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

export function BlogTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)]">
            Research blog
          </div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-tight text-[var(--brand-midnight)]">
            For researchers, by researchers.
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden md:inline-flex text-sm font-medium text-[var(--brand-blurple)] hover:underline"
        >
          All articles →
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
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
              <div className="text-xs text-[var(--brand-slate)]">
                {formatDate(p.date)} · {p.readMins} min read
              </div>
              <div className="mt-2 font-display text-lg text-[var(--brand-midnight)] line-clamp-2">
                {p.title}
              </div>
              <p className="mt-2 text-sm text-[var(--brand-slate)] line-clamp-2">
                {p.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
