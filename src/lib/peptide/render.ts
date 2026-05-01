import { parseSequence, type ResidueInfo } from "./sequence";

export interface RibbonNode {
  index: number;
  x: number;
  y: number;
  residue: ResidueInfo;
}

export interface RibbonGeometry {
  nodes: RibbonNode[];
  path: string;
  width: number;
  height: number;
  seed: number;
}

function hashString(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(a: number) {
  return () => {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildRibbon(
  seq: string,
  opts: { width?: number; height?: number; padding?: number } = {},
): RibbonGeometry {
  const width = opts.width ?? 640;
  const height = opts.height ?? 360;
  const padding = opts.padding ?? 40;
  const residues = parseSequence(seq);
  const seed = hashString(seq || "peptriva");
  const rng = mulberry32(seed);

  const innerW = width - padding * 2;
  const innerH = height - padding * 2;
  const cy = height / 2;

  const n = Math.max(residues.length, 1);
  const nodes: RibbonNode[] = residues.map((r, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    const x = padding + t * innerW;
    const wave =
      Math.sin(t * Math.PI * 4 + seed * 0.001) * (innerH / 4) +
      (rng() - 0.5) * (innerH / 6);
    const y = cy + wave;
    return { index: i, x, y, residue: r };
  });

  let path = "";
  if (nodes.length > 0) {
    path = `M ${nodes[0].x.toFixed(2)} ${nodes[0].y.toFixed(2)}`;
    for (let i = 1; i < nodes.length; i++) {
      const prev = nodes[i - 1];
      const curr = nodes[i];
      const cx1 = (prev.x + curr.x) / 2;
      const cy1 = prev.y;
      const cx2 = (prev.x + curr.x) / 2;
      const cy2 = curr.y;
      path += ` C ${cx1.toFixed(2)} ${cy1.toFixed(2)}, ${cx2.toFixed(
        2,
      )} ${cy2.toFixed(2)}, ${curr.x.toFixed(2)} ${curr.y.toFixed(2)}`;
    }
  }

  return { nodes, path, width, height, seed };
}
