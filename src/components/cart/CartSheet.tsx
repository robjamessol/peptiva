"use client";

import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart, cartTotal } from "@/lib/store/cart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { NO_BUNDLING } from "@/lib/ruo";

export function CartSheet() {
  const isOpen = useCart((s) => s.isOpen);
  const close = useCart((s) => s.close);
  const lines = useCart((s) => s.lines);
  const remove = useCart((s) => s.remove);
  const setQty = useCart((s) => s.setQty);
  const clear = useCart((s) => s.clear);
  const router = useRouter();

  const total = cartTotal(lines);

  function checkout() {
    const orderId =
      "PEP-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    clear();
    close();
    router.push(`/checkout/success?order=${orderId}`);
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={(o) => (o ? null : close())}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[var(--brand-midnight)]/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed right-0 top-0 z-50 h-full w-full sm:max-w-md bg-white shadow-pop flex flex-col"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
            <Dialog.Title className="font-display text-lg tracking-tight text-[var(--brand-midnight)]">
              Research order
            </Dialog.Title>
            <button
              onClick={close}
              className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-[var(--surface)]"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-auto p-5 space-y-4">
            {lines.length === 0 ? (
              <div className="text-sm text-[var(--brand-slate)] py-12 text-center">
                Your research order is empty.
              </div>
            ) : (
              lines.map((l) => (
                <div
                  key={l.slug}
                  className="flex items-start gap-4 border-b border-[var(--border)] pb-4"
                >
                  <div className="flex-1">
                    <div className="font-medium text-sm text-[var(--brand-midnight)]">
                      {l.name}
                    </div>
                    <div className="mt-1 text-xs text-[var(--brand-slate)]">
                      {formatPrice(l.priceCents)} per vial
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() => setQty(l.slug, l.qty - 1)}
                        className="h-7 w-7 inline-flex items-center justify-center rounded-full border border-[var(--border)]"
                        aria-label="Decrease"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm w-6 text-center">{l.qty}</span>
                      <button
                        onClick={() => setQty(l.slug, l.qty + 1)}
                        className="h-7 w-7 inline-flex items-center justify-center rounded-full border border-[var(--border)]"
                        aria-label="Increase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-sm">
                      {formatPrice(l.priceCents * l.qty)}
                    </div>
                    <button
                      onClick={() => remove(l.slug)}
                      className="mt-2 text-[11px] text-[var(--brand-slate)] hover:text-[var(--brand-magenta)] inline-flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-[var(--border)] p-5 space-y-3 bg-[var(--surface)]">
            <p className="text-[11px] text-[var(--brand-slate)] leading-relaxed">
              {NO_BUNDLING}
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--brand-slate)]">Subtotal</span>
              <span className="font-semibold">{formatPrice(total)}</span>
            </div>
            <Button
              variant="gradient"
              size="lg"
              className="w-full"
              disabled={lines.length === 0}
              onClick={checkout}
            >
              Checkout (mock)
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
