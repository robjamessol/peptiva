"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Circle, CircleDot } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";
import { PeptideRibbon } from "@/components/peptide/PeptideRibbon";
import { useCart } from "@/lib/store/cart";
import { formatPrice, cn } from "@/lib/utils";
import { describeSequence } from "@/lib/peptide/sequence";

interface Props {
  product: Product;
  related: Product[];
}

const SIZES = [10, 20, 30] as const;
type Size = (typeof SIZES)[number];

const CADENCES = ["30 day", "45 days", "60 days"] as const;

export function ProductPageV2({ product, related }: Props) {
  const [size, setSize] = useState<Size>(10);
  const [variant, setVariant] = useState(product.vialMg);
  const [mode, setMode] = useState<"sub" | "once">("sub");
  const [cadence, setCadence] = useState<(typeof CADENCES)[number]>("30 day");
  const add = useCart((s) => s.add);

  const desc = describeSequence(product.sequence);
  const onceTotal = product.priceCents * size;
  const subTotal = Math.round(onceTotal * 0.81);
  const perVialOnce = onceTotal / size;
  const perVialSub = subTotal / size;
  const variants = Array.from(new Set([product.vialMg, product.vialMg * 2]));

  return (
    <div className="bg-white relative">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-12 pt-6 pb-24 grid lg:grid-cols-[1fr_1fr_minmax(360px,420px)] gap-x-12 gap-y-10">
        {/* Left column — outline display headline */}
        <div className="order-2 lg:order-1 flex flex-col justify-center min-h-[440px]">
          <h1
            className="font-display font-extrabold tracking-tight uppercase leading-[0.95] text-[44px] md:text-[64px] xl:text-[80px] text-balance"
            style={{
              WebkitTextStroke: "1.2px #d4d8df",
              color: "transparent",
            }}
          >
            Not a drug —
            <br />
            it&apos;s a research
            <br />
            peptide.
          </h1>
          <p className="mt-6 text-sm text-[var(--brand-slate)] max-w-md uppercase tracking-[0.12em]">
            Characterized by HPLC. Confirmed by MS. Sold individually.
          </p>
        </div>

        {/* Center column — product visual */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[420px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <PeptideRibbon
              sequence={product.sequence}
              width={620}
              height={620}
              animate={false}
              className="opacity-95"
            />
          </div>
          <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] uppercase tracking-[0.18em] text-[var(--brand-slate)]">
            {product.classLabel} · {product.sequence.length} residues · MW {product.molecularWeight}
          </div>
        </div>

        {/* Right rail — purchase panel */}
        <div className="order-3 space-y-5">
          {/* Variant chips */}
          <div className="grid grid-cols-2 gap-2">
            {variants.map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={cn(
                  "h-10 rounded-md text-xs font-bold uppercase tracking-[0.1em] border-2 transition-colors",
                  variant === v
                    ? "border-[var(--brand-orange)] text-[var(--brand-orange)]"
                    : "border-[var(--surface-2)] text-[var(--brand-slate)]/70",
                )}
              >
                {product.name} {v}MG
              </button>
            ))}
          </div>

          <DottedDivider />

          <div className="text-[13px] uppercase tracking-[0.06em] font-semibold leading-relaxed text-[var(--brand-midnight)]">
            <p>{product.shortLine}</p>
          </div>

          <DottedDivider />

          <div className="text-[13px] uppercase tracking-[0.06em] font-semibold leading-relaxed text-[var(--brand-midnight)] space-y-1">
            <p>{product.classLabel.toUpperCase()}</p>
            <p>
              {desc.total} residues · MW {product.molecularWeight} · pI {product.isoelectricPoint}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Stars />
            <span className="text-[var(--brand-slate)]">(127)</span>
          </div>

          {/* Pack size selector */}
          <div className="grid grid-cols-3 gap-2">
            {SIZES.map((s) => {
              const tier = s === 10 ? product.priceCents : s === 20 ? Math.round(product.priceCents * 0.91) : Math.round(product.priceCents * 0.85);
              return (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={cn(
                    "rounded-md py-3 px-2 text-center border-2 transition-colors",
                    size === s
                      ? "border-[var(--brand-orange)]"
                      : "border-[var(--surface-2)]",
                  )}
                >
                  <div className="font-bold text-sm">{s} VIALS</div>
                  <div className="text-[11px] text-[var(--brand-slate)] mt-0.5">
                    {formatPrice(tier)} / vial
                  </div>
                </button>
              );
            })}
          </div>

          {/* Subscribe panel */}
          <button
            onClick={() => setMode("sub")}
            className={cn(
              "w-full text-left rounded-md border-2 p-4 transition-colors",
              mode === "sub"
                ? "border-[var(--brand-orange)]"
                : "border-[var(--surface-2)]",
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {mode === "sub" ? (
                  <CircleDot className="w-4 h-4 text-[var(--brand-orange)]" />
                ) : (
                  <Circle className="w-4 h-4 text-[var(--brand-slate)]" />
                )}
                <span className="text-xs font-bold uppercase tracking-[0.08em]">Subscribe</span>
              </div>
              <div className="text-right">
                <span className="text-xs line-through text-[var(--brand-slate)] mr-1.5">
                  {formatPrice(onceTotal)}
                </span>
                <span className="text-sm font-bold">{formatPrice(subTotal)}</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1.5 text-xs">
              {[
                "Free shipping on every order",
                "Pause or cancel anytime",
                "Saved COA library across orders",
                "peptriva research notebook",
              ].map((p, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[var(--brand-midnight)]">
                    <Check className="w-3.5 h-3.5 text-[var(--brand-orange)]" /> {p.toUpperCase()}
                  </span>
                  {i === 0 && (
                    <span className="text-[10px] font-bold text-white bg-[var(--brand-orange)] px-2 py-0.5 rounded">
                      SAVE 19%
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {CADENCES.map((c) => (
                <button
                  key={c}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCadence(c);
                    setMode("sub");
                  }}
                  className={cn(
                    "h-9 rounded-md text-[11px] font-bold uppercase tracking-[0.08em] border-2",
                    cadence === c
                      ? "border-[var(--brand-midnight)] text-[var(--brand-midnight)]"
                      : "border-[var(--surface-2)] text-[var(--brand-slate)]",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.1em] text-[var(--brand-slate)]">
              {formatPrice(perVialSub)} / vial · billed every {cadence}
            </div>
          </button>

          {/* One-time panel */}
          <button
            onClick={() => setMode("once")}
            className={cn(
              "w-full text-left rounded-md border-2 p-4 transition-colors flex items-center justify-between",
              mode === "once"
                ? "border-[var(--brand-orange)]"
                : "border-[var(--surface-2)]",
            )}
          >
            <div className="flex items-center gap-2">
              {mode === "once" ? (
                <CircleDot className="w-4 h-4 text-[var(--brand-orange)]" />
              ) : (
                <Circle className="w-4 h-4 text-[var(--brand-slate)]" />
              )}
              <span className="text-xs font-bold uppercase tracking-[0.08em]">One time</span>
            </div>
            <div className="text-sm font-bold">{formatPrice(onceTotal)}</div>
          </button>

          <Button
            size="lg"
            className="w-full !rounded-md bg-[var(--brand-midnight)] hover:bg-black"
            onClick={() =>
              add({
                slug: product.slug,
                name: `${product.name} (${size} vials${mode === "sub" ? ` · ${cadence} sub` : ""})`,
                priceCents: mode === "sub" ? subTotal : onceTotal,
                qty: 1,
              })
            }
          >
            Add to research order
          </Button>

          <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--brand-orange)] leading-relaxed">
            <p>Order 2 packs or more</p>
            <p>Free peptriva lab notebook</p>
            <p>10% off + free shipping</p>
          </div>

          <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--brand-slate)]">
            <span>Per-vial: {formatPrice(perVialOnce)} once · {formatPrice(perVialSub)} subscribed</span>
          </div>
        </div>
      </div>

      {/* Footer info strip */}
      <div className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 grid md:grid-cols-3 gap-6 text-xs uppercase tracking-[0.12em] text-[var(--brand-slate)]">
          <div>
            <div className="font-bold text-[var(--brand-midnight)] mb-1">Sequence</div>
            <code className="font-mono normal-case tracking-normal text-sm text-[var(--brand-midnight)]">{product.sequence}</code>
          </div>
          <div>
            <div className="font-bold text-[var(--brand-midnight)] mb-1">Storage</div>
            <p className="normal-case tracking-normal text-sm text-[var(--brand-slate)]">{product.storage}</p>
          </div>
          <div>
            <div className="font-bold text-[var(--brand-midnight)] mb-1">Current batch</div>
            <p className="normal-case tracking-normal text-sm text-[var(--brand-slate)]">
              {product.currentBatch.number} ·{" "}
              <Link href={`/coa?batch=${product.currentBatch.number}`} className="text-[var(--brand-blurple)] underline">
                view COA
              </Link>
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
          <div className="text-xs uppercase tracking-[0.16em] text-[var(--brand-slate)] mb-6">
            Researchers also study
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/shop/${r.slug}`}
                className="group p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--brand-blurple)]"
              >
                <div className="text-[11px] uppercase tracking-[0.16em] text-[var(--brand-slate)]">
                  {r.classLabel}
                </div>
                <div className="font-display text-xl mt-1 text-[var(--brand-midnight)]">
                  {r.name}
                </div>
                <div className="mt-2 text-sm text-[var(--brand-slate)] line-clamp-2">{r.shortLine}</div>
                <div className="mt-3 text-sm text-[var(--brand-blurple)]">{formatPrice(r.priceCents)} →</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function DottedDivider() {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 50 }).map((_, i) => (
        <span key={i} className="h-[2px] w-[6px] rounded-full bg-[var(--border)]" />
      ))}
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center text-[var(--brand-orange)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
          <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L10 15l-5.4 2.8 1-5.9L1.4 7.8l6-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
