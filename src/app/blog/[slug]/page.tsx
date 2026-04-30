import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { POSTS, getPost } from "@/lib/data/blog";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="bg-white">
      <div className="mx-auto max-w-3xl px-4 lg:px-8 pt-12 pb-16">
        <Link
          href="/blog"
          className="text-sm text-[var(--brand-blurple)] hover:underline"
        >
          ← All articles
        </Link>
        <Badge tone="brand" className="mt-6">
          Research blog
        </Badge>
        <h1 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-[var(--brand-midnight)] text-balance">
          {post.title}
        </h1>
        <div className="mt-4 text-sm text-[var(--brand-slate)]">
          {formatDate(post.date)} · {post.readMins} min read · {post.author}
        </div>
        <div className="mt-8 relative aspect-[16/9] rounded-3xl overflow-hidden border border-[var(--border)]">
          <Image
            src={post.cover}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 768px, 100vw"
            priority
          />
        </div>

        <div className="mt-8 rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 py-3 flex gap-3 items-start">
          <Info className="w-4 h-4 mt-0.5 text-[var(--brand-midnight)]" />
          <p className="text-xs text-[var(--brand-slate)] leading-relaxed">
            Educational content — not product guidance. References to clinical
            literature on this page are for educational purposes only.
          </p>
        </div>

        <div className="prose prose-zinc max-w-none mt-8">
          {post.body.map((b, i) => (
            <div key={i} className="mb-6">
              {b.heading && (
                <h2 className="font-display text-2xl text-[var(--brand-midnight)] tracking-tight mb-3">
                  {b.heading}
                </h2>
              )}
              <p className="text-[var(--brand-midnight)] leading-relaxed">
                {b.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>

      {others.length > 0 && (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)] mb-6">
              Continue reading
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl overflow-hidden border border-[var(--border)] bg-white hover:shadow-pop transition-all flex"
                >
                  <div className="relative w-32 shrink-0">
                    <Image
                      src={p.cover}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <div className="p-4 flex-1 min-w-0">
                    <div className="font-display text-base text-[var(--brand-midnight)] line-clamp-2">
                      {p.title}
                    </div>
                    <div className="mt-1 text-xs text-[var(--brand-slate)]">
                      {p.readMins} min · {formatDate(p.date)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
