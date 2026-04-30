import Link from "next/link";
import { FileBadge2, Download } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

export function BatchCoaCard({ product }: { product: Product }) {
  const b = product.currentBatch;
  return (
    <section
      id="storage"
      className="rounded-3xl bg-[var(--brand-midnight)] text-white p-8 lg:p-10 my-12 relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-brand" />
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/60">
            <FileBadge2 className="w-4 h-4" /> Current batch
          </div>
          <div className="mt-3 font-display text-3xl tracking-tight">
            {b.number}
          </div>
          <p className="mt-2 text-white/70 max-w-md text-sm">
            Every vial in the current run maps to this batch. Manufactured {formatDate(b.manufactured)}, expires {formatDate(b.expires)}.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild variant="gradient" size="md">
              <Link href={`/coa?batch=${b.number}`}>
                <Download className="w-4 h-4" />
                View full COA
              </Link>
            </Button>
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-y-4 text-sm">
          <Stat label="HPLC purity" value={`${b.hplcPurity.toFixed(1)}%`} />
          <Stat label="MS identity" value={`${b.msIdentityMatch.toFixed(1)}%`} />
          <Stat label="Sterility" value={b.sterility} />
          <Stat label="Endotoxin" value={`${b.endotoxinEU.toFixed(2)} EU/mg`} />
          <Stat label="Storage" value={product.storage} className="col-span-2" />
        </dl>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="text-[11px] uppercase tracking-[0.16em] text-white/50">
        {label}
      </dt>
      <dd className="font-display text-lg mt-0.5">{value}</dd>
    </div>
  );
}
