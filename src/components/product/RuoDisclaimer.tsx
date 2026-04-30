import { Info } from "lucide-react";
import { RUO_LONG } from "@/lib/ruo";

export function RuoDisclaimer() {
  return (
    <div className="rounded-xl border border-[var(--brand-midnight)]/15 bg-[var(--surface)] px-4 py-3 flex gap-3 items-start">
      <Info className="w-4 h-4 mt-0.5 text-[var(--brand-midnight)]" />
      <p className="text-xs text-[var(--brand-slate)] leading-relaxed">
        {RUO_LONG}
      </p>
    </div>
  );
}
