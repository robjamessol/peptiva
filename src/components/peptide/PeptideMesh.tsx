"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  count?: number;
  seed?: number;
  width?: number;
  height?: number;
}

function mulberry32(a: number) {
  return () => {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PALETTE = ["#635bff", "#00d4ff", "#ff5db1", "#ff8e00", "#ffd400"];

export function PeptideMesh({
  className,
  count = 80,
  seed = 7,
  width = 1200,
  height = 600,
}: Props) {
  const { dots, lines } = useMemo(() => {
    const rng = mulberry32(seed);
    const dots = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rng() * width,
      y: rng() * height,
      r: 1.5 + rng() * 3,
      c: PALETTE[Math.floor(rng() * PALETTE.length)],
    }));
    const lines: { a: number; b: number; o: number }[] = [];
    const threshold = Math.min(width, height) * 0.18;
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const d = Math.hypot(dx, dy);
        if (d < threshold) {
          lines.push({ a: i, b: j, o: 1 - d / threshold });
        }
      }
    }
    return { dots, lines };
  }, [count, seed, width, height]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn("absolute inset-0 w-full h-full", className)}
      aria-hidden
    >
      {lines.map((l, i) => (
        <line
          key={i}
          x1={dots[l.a].x}
          y1={dots[l.a].y}
          x2={dots[l.b].x}
          y2={dots[l.b].y}
          stroke="#635bff"
          strokeWidth={0.6}
          opacity={l.o * 0.25}
        />
      ))}
      {dots.map((d) => (
        <circle key={d.id} cx={d.x} cy={d.y} r={d.r} fill={d.c} opacity={0.35} />
      ))}
    </svg>
  );
}
