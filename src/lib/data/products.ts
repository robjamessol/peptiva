export type ResearchCategory =
  | "tissue"
  | "dermal"
  | "metabolic"
  | "longevity"
  | "cognitive"
  | "performance";

export interface ProductBatch {
  number: string;
  manufactured: string;
  expires: string;
  hplcPurity: number;
  msIdentityMatch: number;
  sterility: "Pass" | "Fail";
  endotoxinEU: number;
}

export interface Product {
  slug: string;
  name: string;
  classLabel: string;
  sequence: string;
  molecularWeight: number;
  isoelectricPoint: number;
  solubility: string;
  storage: string;
  vialMg: number;
  priceCents: number;
  category: ResearchCategory;
  shortLine: string;
  characterization: {
    hplcPurity: number;
    msMonoisotopic: number;
    sterility: "Pass" | "Fail";
    endotoxin: string;
  };
  currentBatch: ProductBatch;
  literature: { title: string; href: string }[];
  faqs: { q: string; a: string }[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    classLabel: "Pentadecapeptide",
    sequence: "GEPPPGKPADDAGLV",
    molecularWeight: 1419.55,
    isoelectricPoint: 4.0,
    solubility: "Bacteriostatic water, 0.9% NaCl",
    storage: "Lyophilized: -20°C. Reconstituted: 2-8°C, use within 30 days.",
    vialMg: 5,
    priceCents: 6900,
    category: "tissue",
    shortLine:
      "A 15-residue gastric-derived peptide studied in tissue and connective-tissue research models.",
    characterization: {
      hplcPurity: 99.1,
      msMonoisotopic: 1418.69,
      sterility: "Pass",
      endotoxin: "<0.5 EU/mg",
    },
    currentBatch: {
      number: "BPC157-2604A",
      manufactured: "2026-03-12",
      expires: "2028-03-12",
      hplcPurity: 99.1,
      msIdentityMatch: 99.8,
      sterility: "Pass",
      endotoxinEU: 0.21,
    },
    literature: [
      { title: "Synthesis & characterization of pentadecapeptides", href: "/blog/synthesis-characterization" },
      { title: "Reconstitution and storage of lyophilized peptides", href: "/blog/storage-handling" },
    ],
    faqs: [
      { q: "How is this product shipped?", a: "Lyophilized in a sealed vial, shipped with insulated packaging at ambient temperature. The COA for the shipped batch ships with the order and is also accessible online." },
      { q: "What is the typical batch size?", a: "Batches are produced at 250-500 vial scale and individually serialized. Each vial is traceable to a single COA." },
      { q: "Do you re-test after fill?", a: "Yes. Sterility and endotoxin are tested post-fill. HPLC and MS results reflect the final filled product." },
    ],
  },
  {
    slug: "tb-500",
    name: "TB-500",
    classLabel: "Thymosin β4 fragment",
    sequence: "LKKTETQ",
    molecularWeight: 889.04,
    isoelectricPoint: 9.8,
    solubility: "Bacteriostatic water",
    storage: "Lyophilized: -20°C. Reconstituted: 2-8°C, use within 21 days.",
    vialMg: 5,
    priceCents: 7900,
    category: "tissue",
    shortLine:
      "A 7-residue actin-binding fragment used in cellular motility and tissue research.",
    characterization: {
      hplcPurity: 98.6,
      msMonoisotopic: 888.51,
      sterility: "Pass",
      endotoxin: "<0.5 EU/mg",
    },
    currentBatch: {
      number: "TB500-2603B",
      manufactured: "2026-03-04",
      expires: "2028-03-04",
      hplcPurity: 98.6,
      msIdentityMatch: 99.6,
      sterility: "Pass",
      endotoxinEU: 0.18,
    },
    literature: [
      { title: "Actin-binding motifs in research peptides", href: "/blog/actin-binding-motifs" },
    ],
    faqs: [
      { q: "Is this the full thymosin β4 or a fragment?", a: "This product is a synthetic fragment containing the actin-binding motif, not full-length thymosin β4." },
      { q: "What solvent is recommended?", a: "Bacteriostatic water for laboratory reconstitution. Refer to the product's storage notes for stability windows." },
    ],
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    classLabel: "Tripeptide-copper complex",
    sequence: "GHK",
    molecularWeight: 340.81,
    isoelectricPoint: 8.1,
    solubility: "Sterile water",
    storage: "Lyophilized: -20°C. Reconstituted: 2-8°C, use within 14 days.",
    vialMg: 50,
    priceCents: 4900,
    category: "dermal",
    shortLine:
      "Glycyl-L-histidyl-L-lysine bound to copper(II); studied extensively in extracellular-matrix research.",
    characterization: {
      hplcPurity: 99.3,
      msMonoisotopic: 340.13,
      sterility: "Pass",
      endotoxin: "<0.25 EU/mg",
    },
    currentBatch: {
      number: "GHKCU-2602D",
      manufactured: "2026-02-21",
      expires: "2028-02-21",
      hplcPurity: 99.3,
      msIdentityMatch: 99.9,
      sterility: "Pass",
      endotoxinEU: 0.11,
    },
    literature: [
      { title: "Copper-peptide chemistry: characterization techniques", href: "/blog/copper-peptide-chemistry" },
    ],
    faqs: [
      { q: "How do you confirm the copper complex?", a: "Identity is confirmed by mass spectrometry against the expected monoisotopic mass of the copper-bound complex, with UV-Vis absorbance verifying the chromophore." },
    ],
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    classLabel: "Tetrapeptide",
    sequence: "AEDG",
    molecularWeight: 390.35,
    isoelectricPoint: 3.7,
    solubility: "Bacteriostatic water",
    storage: "Lyophilized: -20°C. Reconstituted: 2-8°C, use within 21 days.",
    vialMg: 10,
    priceCents: 5900,
    category: "longevity",
    shortLine: "Ala-Glu-Asp-Gly. Short tetrapeptide used in cellular research.",
    characterization: {
      hplcPurity: 99.5,
      msMonoisotopic: 389.16,
      sterility: "Pass",
      endotoxin: "<0.25 EU/mg",
    },
    currentBatch: {
      number: "EPI-2604C",
      manufactured: "2026-04-02",
      expires: "2028-04-02",
      hplcPurity: 99.5,
      msIdentityMatch: 99.9,
      sterility: "Pass",
      endotoxinEU: 0.09,
    },
    literature: [
      { title: "Short peptides in cellular research", href: "/blog/short-peptides-cellular-research" },
    ],
    faqs: [],
  },
  {
    slug: "cjc-1295-no-dac",
    name: "CJC-1295 (no DAC)",
    classLabel: "GHRH analog",
    sequence: "YADAIFTNSYRKVLGQLSARKLLQDIMSR",
    molecularWeight: 3367.95,
    isoelectricPoint: 9.2,
    solubility: "Bacteriostatic water",
    storage: "Lyophilized: -20°C. Reconstituted: 2-8°C, use within 14 days.",
    vialMg: 2,
    priceCents: 8400,
    category: "performance",
    shortLine:
      "A 29-residue GHRH analog (modified) used in growth-hormone-axis research.",
    characterization: {
      hplcPurity: 98.9,
      msMonoisotopic: 3365.74,
      sterility: "Pass",
      endotoxin: "<0.5 EU/mg",
    },
    currentBatch: {
      number: "CJC-2603F",
      manufactured: "2026-03-18",
      expires: "2027-09-18",
      hplcPurity: 98.9,
      msIdentityMatch: 99.7,
      sterility: "Pass",
      endotoxinEU: 0.32,
    },
    literature: [
      { title: "Characterization of long-chain peptides by ESI-MS", href: "/blog/long-chain-esi-ms" },
    ],
    faqs: [],
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    classLabel: "Pentapeptide ghrelin mimetic",
    sequence: "AHWFK",
    molecularWeight: 711.86,
    isoelectricPoint: 9.5,
    solubility: "Bacteriostatic water",
    storage: "Lyophilized: -20°C. Reconstituted: 2-8°C, use within 14 days.",
    vialMg: 5,
    priceCents: 6400,
    category: "performance",
    shortLine:
      "A short ghrelin-receptor research peptide with five residues including a non-natural backbone.",
    characterization: {
      hplcPurity: 99.0,
      msMonoisotopic: 711.39,
      sterility: "Pass",
      endotoxin: "<0.5 EU/mg",
    },
    currentBatch: {
      number: "IPA-2604E",
      manufactured: "2026-04-09",
      expires: "2028-04-09",
      hplcPurity: 99.0,
      msIdentityMatch: 99.8,
      sterility: "Pass",
      endotoxinEU: 0.16,
    },
    literature: [],
    faqs: [],
  },
  {
    slug: "semax",
    name: "Semax",
    classLabel: "Heptapeptide ACTH(4-10) analog",
    sequence: "MEHFPGP",
    molecularWeight: 813.93,
    isoelectricPoint: 6.8,
    solubility: "Sterile water",
    storage: "Lyophilized: -20°C. Reconstituted: 2-8°C, use within 21 days.",
    vialMg: 30,
    priceCents: 7400,
    category: "cognitive",
    shortLine:
      "A 7-residue ACTH(4-10) analog used in neurochemical research.",
    characterization: {
      hplcPurity: 99.2,
      msMonoisotopic: 813.36,
      sterility: "Pass",
      endotoxin: "<0.25 EU/mg",
    },
    currentBatch: {
      number: "SMX-2602H",
      manufactured: "2026-02-18",
      expires: "2028-02-18",
      hplcPurity: 99.2,
      msIdentityMatch: 99.8,
      sterility: "Pass",
      endotoxinEU: 0.12,
    },
    literature: [],
    faqs: [],
  },
  {
    slug: "selank",
    name: "Selank",
    classLabel: "Heptapeptide tuftsin analog",
    sequence: "TKPRPGP",
    molecularWeight: 751.86,
    isoelectricPoint: 11.0,
    solubility: "Sterile water",
    storage: "Lyophilized: -20°C. Reconstituted: 2-8°C, use within 21 days.",
    vialMg: 30,
    priceCents: 7900,
    category: "cognitive",
    shortLine:
      "A 7-residue tuftsin analog studied in regulatory-peptide research.",
    characterization: {
      hplcPurity: 99.0,
      msMonoisotopic: 751.42,
      sterility: "Pass",
      endotoxin: "<0.25 EU/mg",
    },
    currentBatch: {
      number: "SEL-2601A",
      manufactured: "2026-01-30",
      expires: "2028-01-30",
      hplcPurity: 99.0,
      msIdentityMatch: 99.7,
      sterility: "Pass",
      endotoxinEU: 0.14,
    },
    literature: [],
    faqs: [],
  },
];

export const CATEGORIES: { id: ResearchCategory; label: string; blurb: string }[] = [
  { id: "tissue", label: "Tissue & connective", blurb: "Peptides studied in fibroblast, ECM, and connective-tissue research." },
  { id: "dermal", label: "Dermal & integumentary", blurb: "Short peptides used in keratinocyte and ECM research." },
  { id: "metabolic", label: "Metabolic", blurb: "Peptides used in adipocyte, lipid, and energy-balance research." },
  { id: "longevity", label: "Longevity & cellular", blurb: "Short peptides studied in senescence and telomere research." },
  { id: "cognitive", label: "Neurochemical", blurb: "Regulatory peptides used in neurotransmitter and BBB research." },
  { id: "performance", label: "Endocrine axis", blurb: "GHRH analogs and ghrelin-receptor research peptides." },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
