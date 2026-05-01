import { RUO_BANNER } from "@/lib/ruo";

export function RuoBanner() {
  return (
    <div className="bg-[var(--brand-midnight)] text-white text-[11px] uppercase tracking-[0.18em] font-medium">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-yellow)]" />
        {RUO_BANNER}
      </div>
    </div>
  );
}
