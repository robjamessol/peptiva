"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Download } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { COA_LIBRARY } from "@/lib/data/coa";
import { formatDate } from "@/lib/utils";

function CoaInner() {
  const sp = useSearchParams();
  const [query, setQuery] = useState(sp.get("batch") ?? "");
  const [product, setProduct] = useState<string>("all");

  const filtered = useMemo(() => {
    return COA_LIBRARY.filter(
      (c) =>
        (product === "all" || c.productSlug === product) &&
        (query
          ? (c.batch + c.productName).toLowerCase().includes(query.toLowerCase())
          : true),
    );
  }, [query, product]);

  const products = Array.from(new Set(COA_LIBRARY.map((c) => c.productSlug)));

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
      <Badge tone="brand">Transparency</Badge>
      <h1 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-[var(--brand-midnight)]">
        COA library
      </h1>
      <p className="mt-3 text-[var(--brand-slate)] max-w-xl">
        Search every batch we&apos;ve ever shipped. Each COA captures the actual chromatograms, mass spectra, and sterility/endotoxin results for that specific lot.
      </p>

      <div className="mt-10 grid md:grid-cols-[1fr_240px] gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--brand-slate)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by batch or product"
            className="w-full h-11 pl-10 pr-4 rounded-lg border border-[var(--border)] bg-white focus:outline-none focus:border-[var(--brand-blurple)]"
          />
        </div>
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="h-11 px-3 rounded-lg border border-[var(--border)] bg-white text-sm"
        >
          <option value="all">All products</option>
          {products.map((p) => (
            <option key={p} value={p}>
              {COA_LIBRARY.find((c) => c.productSlug === p)?.productName}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[var(--surface)]">
            <tr className="text-left">
              <Th>Product</Th>
              <Th>Batch</Th>
              <Th>Manufactured</Th>
              <Th>HPLC</Th>
              <Th>MS</Th>
              <Th>Sterility</Th>
              <Th>Endotoxin</Th>
              <Th>COA</Th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="text-center py-10 text-[var(--brand-slate)]"
                >
                  No batches match the current filters.
                </td>
              </tr>
            )}
            {filtered.map((c) => (
              <tr
                key={c.batch}
                className="border-t border-[var(--border)] hover:bg-[var(--surface)]/60"
              >
                <Td>
                  <div className="font-medium text-[var(--brand-midnight)]">
                    {c.productName}
                  </div>
                </Td>
                <Td>
                  <code className="font-mono text-xs">{c.batch}</code>
                </Td>
                <Td>{formatDate(c.manufactured)}</Td>
                <Td>{c.hplcPurity.toFixed(1)}%</Td>
                <Td>{c.msIdentityMatch.toFixed(1)}%</Td>
                <Td>
                  <span
                    className={
                      c.sterility === "Pass"
                        ? "text-emerald-600 font-medium"
                        : "text-rose-600 font-medium"
                    }
                  >
                    {c.sterility}
                  </span>
                </Td>
                <Td>{c.endotoxinEU.toFixed(2)} EU/mg</Td>
                <Td>
                  <a
                    href={c.pdfUrl}
                    className="inline-flex items-center gap-1 text-[var(--brand-blurple)] hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        `In production this would download ${c.batch} as a signed PDF.`,
                      );
                    }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    PDF
                  </a>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-xs uppercase tracking-[0.12em] text-[var(--brand-slate)] font-medium">
      {children}
    </th>
  );
}
function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-3 align-top">{children}</td>;
}

export default function CoaPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20">Loading…</div>
      }
    >
      <CoaInner />
    </Suspense>
  );
}
