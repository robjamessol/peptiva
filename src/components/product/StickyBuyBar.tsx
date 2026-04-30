"use client";

import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { useCart } from "@/lib/store/cart";
import { Button } from "@/components/ui/Button";
import { formatPrice, cn } from "@/lib/utils";

export function StickyBuyBar({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed left-0 right-0 bottom-0 z-30 border-t border-[var(--border)] bg-white/95 backdrop-blur transition-transform",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3 flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <div className="font-display text-base text-[var(--brand-midnight)] truncate">
            {product.name}
          </div>
          <div className="text-xs text-[var(--brand-slate)] truncate">
            {product.classLabel} · {product.vialMg} mg / vial
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-[var(--border)]"
            aria-label="Decrease"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="text-sm w-8 text-center">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-[var(--border)]"
            aria-label="Increase"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="hidden md:block text-sm font-semibold text-[var(--brand-midnight)]">
          {formatPrice(product.priceCents * qty)}
        </div>
        <Button
          variant="gradient"
          size="md"
          onClick={() =>
            add({
              slug: product.slug,
              name: product.name,
              priceCents: product.priceCents,
              qty,
            })
          }
        >
          Add to research order
        </Button>
      </div>
    </div>
  );
}
