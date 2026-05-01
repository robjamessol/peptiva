"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useCart, cartCount } from "@/lib/store/cart";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/protocols", label: "Protocols" },
  { href: "/coa", label: "COA Library" },
  { href: "/quality", label: "Quality" },
  { href: "/membership", label: "Membership" },
  { href: "/blog", label: "Research" },
];

export function Header({
  onOpenAssistant,
}: {
  onOpenAssistant?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const lines = useCart((s) => s.lines);
  const openCart = useCart((s) => s.open);
  const count = cartCount(lines);

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 h-16 flex items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm text-[var(--brand-slate)] hover:text-[var(--brand-midnight)] transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenAssistant}
            className="hidden md:inline-flex"
          >
            <Sparkles className="w-4 h-4 text-[var(--brand-blurple)]" />
            Research assistant
          </Button>
          <Link
            href="/account"
            className="hidden md:inline-flex text-sm text-[var(--brand-slate)] hover:text-[var(--brand-midnight)] px-3"
          >
            Account
          </Link>
          <button
            onClick={openCart}
            className="relative inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-[var(--surface)]"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--brand-blurple)] text-white text-[10px] font-bold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-[var(--surface)]"
            aria-label="Toggle nav"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "lg:hidden border-t border-[var(--border)] overflow-hidden transition-[max-height]",
          open ? "max-h-[400px]" : "max-h-0",
        )}
      >
        <nav className="px-4 py-4 flex flex-col gap-3">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-[var(--brand-midnight)]"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/account"
            className="text-sm text-[var(--brand-slate)]"
            onClick={() => setOpen(false)}
          >
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
}
