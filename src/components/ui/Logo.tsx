import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "midnight",
}: {
  className?: string;
  variant?: "midnight" | "white" | "gradient";
}) {
  const colors = {
    midnight: "text-[var(--brand-midnight)]",
    white: "text-white",
    gradient: "text-gradient-brand",
  };
  return (
    <Link
      href="/"
      aria-label="peptriva home"
      className={cn(
        "font-display font-extrabold tracking-tight lowercase text-2xl md:text-[26px] flex items-center gap-1",
        colors[variant],
        className,
      )}
    >
      <span>peptriva</span>
      <Sparkle className="w-3.5 h-3.5 opacity-80" />
    </Link>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M12 1.5l1.6 7.4L21 11l-7.4 1.6L12 20l-1.6-7.4L3 11l7.4-2.1L12 1.5z" />
    </svg>
  );
}
