import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "ruo" | "brand" | "success" | "warn";
}) {
  const tones = {
    default:
      "bg-[var(--surface)] text-[var(--brand-slate)] border border-[var(--border)]",
    ruo:
      "bg-[var(--brand-midnight)] text-white",
    brand:
      "bg-[var(--brand-blurple)]/10 text-[var(--brand-blurple)] border border-[var(--brand-blurple)]/20",
    success:
      "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warn:
      "bg-amber-50 text-amber-800 border border-amber-200",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
