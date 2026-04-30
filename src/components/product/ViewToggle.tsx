"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function ViewToggle() {
  const sp = useSearchParams();
  const path = usePathname();
  const router = useRouter();
  const view = sp.get("view") === "v2" ? "v2" : "v1";

  function set(v: "v1" | "v2") {
    const next = new URLSearchParams(sp.toString());
    if (v === "v2") next.set("view", "v2");
    else next.delete("view");
    router.replace(`${path}?${next.toString()}`);
  }

  return (
    <div className="fixed bottom-24 right-4 z-30 lg:bottom-28 lg:right-8 rounded-full border border-[var(--border)] bg-white/95 backdrop-blur shadow-pop p-1 flex items-center text-xs">
      <button
        onClick={() => set("v1")}
        className={cn(
          "px-3 h-8 rounded-full font-medium",
          view === "v1"
            ? "bg-[var(--brand-midnight)] text-white"
            : "text-[var(--brand-slate)]",
        )}
      >
        Design A
      </button>
      <button
        onClick={() => set("v2")}
        className={cn(
          "px-3 h-8 rounded-full font-medium",
          view === "v2"
            ? "bg-[var(--brand-midnight)] text-white"
            : "text-[var(--brand-slate)]",
        )}
      >
        Design B
      </button>
    </div>
  );
}
