import type { ResearchCategory } from "./products";

export interface Protocol {
  slug: string;
  name: string;
  category: ResearchCategory;
  shortLine: string;
  components: { productSlug: string; note: string }[];
}

export const PROTOCOLS: Protocol[] = [
  {
    slug: "tissue-recovery-stack",
    name: "Tissue research stack",
    category: "tissue",
    shortLine:
      "Common pairing used in connective-tissue research models. Each component is a separate, individually-priced research peptide — never bundled.",
    components: [
      { productSlug: "bpc-157", note: "Pentadecapeptide, 5 mg/vial" },
      { productSlug: "tb-500", note: "Actin-binding fragment, 5 mg/vial" },
    ],
  },
  {
    slug: "dermal-research-set",
    name: "Dermal research set",
    category: "dermal",
    shortLine:
      "Short peptides used in keratinocyte and fibroblast research workflows.",
    components: [
      { productSlug: "ghk-cu", note: "Tripeptide-Cu complex, 50 mg/vial" },
    ],
  },
  {
    slug: "cellular-research-pair",
    name: "Cellular & longevity pair",
    category: "longevity",
    shortLine:
      "Tetrapeptide commonly studied alongside endocrine-axis research peptides.",
    components: [
      { productSlug: "epitalon", note: "Tetrapeptide, 10 mg/vial" },
    ],
  },
  {
    slug: "endocrine-axis-pair",
    name: "Endocrine axis research pair",
    category: "performance",
    shortLine:
      "Common GHRH-axis pairing for in-vitro receptor studies. Sold as separate vials.",
    components: [
      { productSlug: "cjc-1295-no-dac", note: "29-residue GHRH analog, 2 mg/vial" },
      { productSlug: "ipamorelin", note: "Pentapeptide, 5 mg/vial" },
    ],
  },
  {
    slug: "neurochemical-research",
    name: "Neurochemical research pair",
    category: "cognitive",
    shortLine:
      "Two heptapeptides used in regulatory-peptide and BBB transport research.",
    components: [
      { productSlug: "semax", note: "ACTH(4-10) analog, 30 mg/vial" },
      { productSlug: "selank", note: "Tuftsin analog, 30 mg/vial" },
    ],
  },
];
