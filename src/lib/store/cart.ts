"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartLine {
  slug: string;
  name: string;
  priceCents: number;
  qty: number;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  add: (line: Omit<CartLine, "qty"> & { qty?: number }) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      isOpen: false,
      add: (line) =>
        set((s) => {
          const existing = s.lines.find((l) => l.slug === line.slug);
          if (existing) {
            return {
              lines: s.lines.map((l) =>
                l.slug === line.slug
                  ? { ...l, qty: l.qty + (line.qty ?? 1) }
                  : l,
              ),
              isOpen: true,
            };
          }
          return {
            lines: [...s.lines, { ...line, qty: line.qty ?? 1 }],
            isOpen: true,
          };
        }),
      remove: (slug) =>
        set((s) => ({ lines: s.lines.filter((l) => l.slug !== slug) })),
      setQty: (slug, qty) =>
        set((s) => ({
          lines: s.lines
            .map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, qty) } : l))
            .filter((l) => l.qty > 0),
        })),
      clear: () => set({ lines: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
    }),
    { name: "peptriva-cart" },
  ),
);

export const cartTotal = (lines: CartLine[]) =>
  lines.reduce((sum, l) => sum + l.priceCents * l.qty, 0);

export const cartCount = (lines: CartLine[]) =>
  lines.reduce((sum, l) => sum + l.qty, 0);
