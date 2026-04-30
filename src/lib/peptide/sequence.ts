export type AminoAcid =
  | "A" | "R" | "N" | "D" | "C" | "E" | "Q" | "G" | "H" | "I"
  | "L" | "K" | "M" | "F" | "P" | "S" | "T" | "W" | "Y" | "V";

export type ResidueClass =
  | "hydrophobic"
  | "polar"
  | "acidic"
  | "basic"
  | "aromatic"
  | "special";

export interface ResidueInfo {
  code: AminoAcid;
  name: string;
  cls: ResidueClass;
  size: number;
  color: string;
}

const HYDROPHOBIC = "var(--brand-blurple)";
const POLAR = "var(--brand-cyan)";
const ACIDIC = "var(--brand-magenta)";
const BASIC = "var(--brand-orange)";
const AROMATIC = "var(--brand-yellow)";
const SPECIAL = "var(--brand-midnight)";

export const RESIDUES: Record<AminoAcid, ResidueInfo> = {
  A: { code: "A", name: "Ala", cls: "hydrophobic", size: 0.7, color: HYDROPHOBIC },
  V: { code: "V", name: "Val", cls: "hydrophobic", size: 0.9, color: HYDROPHOBIC },
  L: { code: "L", name: "Leu", cls: "hydrophobic", size: 1.0, color: HYDROPHOBIC },
  I: { code: "I", name: "Ile", cls: "hydrophobic", size: 1.0, color: HYDROPHOBIC },
  M: { code: "M", name: "Met", cls: "hydrophobic", size: 1.0, color: HYDROPHOBIC },
  S: { code: "S", name: "Ser", cls: "polar", size: 0.7, color: POLAR },
  T: { code: "T", name: "Thr", cls: "polar", size: 0.8, color: POLAR },
  N: { code: "N", name: "Asn", cls: "polar", size: 0.85, color: POLAR },
  Q: { code: "Q", name: "Gln", cls: "polar", size: 0.95, color: POLAR },
  C: { code: "C", name: "Cys", cls: "polar", size: 0.8, color: POLAR },
  D: { code: "D", name: "Asp", cls: "acidic", size: 0.85, color: ACIDIC },
  E: { code: "E", name: "Glu", cls: "acidic", size: 0.95, color: ACIDIC },
  K: { code: "K", name: "Lys", cls: "basic", size: 1.05, color: BASIC },
  R: { code: "R", name: "Arg", cls: "basic", size: 1.15, color: BASIC },
  H: { code: "H", name: "His", cls: "basic", size: 1.0, color: BASIC },
  F: { code: "F", name: "Phe", cls: "aromatic", size: 1.1, color: AROMATIC },
  Y: { code: "Y", name: "Tyr", cls: "aromatic", size: 1.15, color: AROMATIC },
  W: { code: "W", name: "Trp", cls: "aromatic", size: 1.3, color: AROMATIC },
  G: { code: "G", name: "Gly", cls: "special", size: 0.6, color: SPECIAL },
  P: { code: "P", name: "Pro", cls: "special", size: 0.85, color: SPECIAL },
};

export function parseSequence(seq: string): ResidueInfo[] {
  return seq
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .filter((c): c is AminoAcid => c in RESIDUES)
    .map((c) => RESIDUES[c]);
}

export function describeSequence(seq: string) {
  const residues = parseSequence(seq);
  const total = residues.length;
  const counts = residues.reduce<Record<ResidueClass, number>>(
    (acc, r) => {
      acc[r.cls] = (acc[r.cls] ?? 0) + 1;
      return acc;
    },
    {
      hydrophobic: 0,
      polar: 0,
      acidic: 0,
      basic: 0,
      aromatic: 0,
      special: 0,
    },
  );
  const charge = counts.basic - counts.acidic;
  return { total, counts, charge };
}
