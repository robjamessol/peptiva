import { PRODUCTS } from "./products";

export interface CoaEntry {
  productSlug: string;
  productName: string;
  batch: string;
  manufactured: string;
  expires: string;
  hplcPurity: number;
  msIdentityMatch: number;
  sterility: "Pass" | "Fail";
  endotoxinEU: number;
  pdfUrl: string;
}

const extra: Omit<CoaEntry, "productName">[] = [
  {
    productSlug: "bpc-157",
    batch: "BPC157-2602K",
    manufactured: "2026-02-04",
    expires: "2028-02-04",
    hplcPurity: 99.0,
    msIdentityMatch: 99.7,
    sterility: "Pass",
    endotoxinEU: 0.27,
    pdfUrl: "/coa/BPC157-2602K.pdf",
  },
  {
    productSlug: "tb-500",
    batch: "TB500-2601C",
    manufactured: "2026-01-12",
    expires: "2028-01-12",
    hplcPurity: 98.4,
    msIdentityMatch: 99.5,
    sterility: "Pass",
    endotoxinEU: 0.22,
    pdfUrl: "/coa/TB500-2601C.pdf",
  },
  {
    productSlug: "ghk-cu",
    batch: "GHKCU-2601A",
    manufactured: "2026-01-04",
    expires: "2028-01-04",
    hplcPurity: 99.2,
    msIdentityMatch: 99.9,
    sterility: "Pass",
    endotoxinEU: 0.1,
    pdfUrl: "/coa/GHKCU-2601A.pdf",
  },
  {
    productSlug: "epitalon",
    batch: "EPI-2603A",
    manufactured: "2026-03-01",
    expires: "2028-03-01",
    hplcPurity: 99.4,
    msIdentityMatch: 99.9,
    sterility: "Pass",
    endotoxinEU: 0.08,
    pdfUrl: "/coa/EPI-2603A.pdf",
  },
];

export const COA_LIBRARY: CoaEntry[] = [
  ...PRODUCTS.map((p) => ({
    productSlug: p.slug,
    productName: p.name,
    batch: p.currentBatch.number,
    manufactured: p.currentBatch.manufactured,
    expires: p.currentBatch.expires,
    hplcPurity: p.currentBatch.hplcPurity,
    msIdentityMatch: p.currentBatch.msIdentityMatch,
    sterility: p.currentBatch.sterility,
    endotoxinEU: p.currentBatch.endotoxinEU,
    pdfUrl: `/coa/${p.currentBatch.number}.pdf`,
  })),
  ...extra.map((e) => ({
    ...e,
    productName: PRODUCTS.find((p) => p.slug === e.productSlug)?.name ?? e.productSlug,
  })),
].sort((a, b) => (a.manufactured < b.manufactured ? 1 : -1));
