"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  turns?: number;
  amplitude?: number;
  steps?: number;
}

export function PeptideHelix({
  className,
  turns = 6,
  amplitude = 70,
  steps = 220,
}: Props) {
  const { topPath, botPath, rungs } = useMemo(() => {
    const w = 1200;
    const h = 320;
    const cy = h / 2;
    const k = (turns * Math.PI * 2) / w;
    const top: string[] = [];
    const bot: string[] = [];
    const rungs: { x1: number; x2: number; y1: number; y2: number }[] = [];
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * w;
      const yt = cy + Math.sin(k * x) * amplitude;
      const yb = cy + Math.sin(k * x + Math.PI) * amplitude;
      top.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${yt.toFixed(2)}`);
      bot.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${yb.toFixed(2)}`);
      if (i % 6 === 0) {
        rungs.push({ x1: x, x2: x, y1: yt, y2: yb });
      }
    }
    return { topPath: top.join(" "), botPath: bot.join(" "), rungs };
  }, [turns, amplitude, steps]);

  return (
    <svg
      viewBox="0 0 1200 320"
      className={cn("w-full h-auto", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="helix-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffd400" />
          <stop offset="22%" stopColor="#ff8e00" />
          <stop offset="48%" stopColor="#ff5db1" />
          <stop offset="74%" stopColor="#635bff" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
      </defs>
      {rungs.map((r, i) => (
        <line
          key={i}
          x1={r.x1}
          x2={r.x2}
          y1={r.y1}
          y2={r.y2}
          stroke="url(#helix-grad)"
          strokeWidth={1}
          opacity={0.35}
        />
      ))}
      <path
        d={topPath}
        stroke="url(#helix-grad)"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={botPath}
        stroke="url(#helix-grad)"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  );
}
