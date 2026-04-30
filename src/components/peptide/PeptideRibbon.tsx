"use client";

import { useMemo } from "react";
import { buildRibbon } from "@/lib/peptide/render";
import { cn } from "@/lib/utils";

interface Props {
  sequence: string;
  width?: number;
  height?: number;
  className?: string;
  showResidues?: boolean;
  animate?: boolean;
  ariaLabel?: string;
}

export function PeptideRibbon({
  sequence,
  width = 720,
  height = 360,
  className,
  showResidues = true,
  animate = true,
  ariaLabel,
}: Props) {
  const geom = useMemo(
    () => buildRibbon(sequence, { width, height }),
    [sequence, width, height],
  );
  const gradId = `pep-grad-${geom.seed.toString(36)}`;
  const glowId = `pep-glow-${geom.seed.toString(36)}`;

  return (
    <svg
      viewBox={`0 0 ${geom.width} ${geom.height}`}
      role="img"
      aria-label={ariaLabel ?? `Peptide structure for sequence ${sequence}`}
      className={cn("w-full h-auto", className, animate && "animate-ribbon-draw")}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffd400" />
          <stop offset="20%" stopColor="#ff8e00" />
          <stop offset="45%" stopColor="#ff5db1" />
          <stop offset="72%" stopColor="#635bff" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={geom.path}
        stroke={`url(#${gradId})`}
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
        filter={`url(#${glowId})`}
        opacity={0.6}
      />
      <path
        d={geom.path}
        stroke={`url(#${gradId})`}
        strokeWidth={2.5}
        strokeLinecap="round"
        fill="none"
      />

      {showResidues &&
        geom.nodes.map((node) => (
          <g key={node.index}>
            <circle
              cx={node.x}
              cy={node.y}
              r={Math.max(8, node.residue.size * 11)}
              fill={node.residue.color}
              opacity={0.18}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={Math.max(5, node.residue.size * 7)}
              fill={node.residue.color}
            />
            <text
              x={node.x}
              y={node.y + 3}
              textAnchor="middle"
              fontSize={9}
              fontWeight={700}
              fill="#fff"
              style={{ letterSpacing: "0.02em" }}
            >
              {node.residue.code}
            </text>
          </g>
        ))}
    </svg>
  );
}
