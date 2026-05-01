import { RESIDUES, parseSequence, type AminoAcid } from "@/lib/peptide/sequence";
import { cn } from "@/lib/utils";

export function ResidueChip({ code }: { code: AminoAcid }) {
  const r = RESIDUES[code];
  return (
    <span
      className="inline-flex h-7 min-w-7 items-center justify-center rounded-md px-1.5 text-[11px] font-semibold text-white"
      style={{ background: r.color }}
      title={`${r.name} (${r.cls})`}
    >
      {r.code}
    </span>
  );
}

export function SequenceChips({
  sequence,
  className,
}: {
  sequence: string;
  className?: string;
}) {
  const residues = parseSequence(sequence);
  return (
    <div className={cn("flex flex-wrap gap-1", className)}>
      {residues.map((r, i) => (
        <ResidueChip key={i} code={r.code} />
      ))}
    </div>
  );
}
