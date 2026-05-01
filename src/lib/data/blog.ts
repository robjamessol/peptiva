export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readMins: number;
  cover: string;
  tags: string[];
  body: { heading?: string; paragraph: string }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "synthesis-characterization",
    title: "Synthesis and characterization of pentadecapeptides",
    excerpt:
      "An overview of solid-phase peptide synthesis (SPPS), the role of HPLC in purity verification, and how mass spectrometry confirms identity for mid-length sequences.",
    date: "2026-04-12",
    author: "peptriva research",
    readMins: 7,
    cover:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=70",
    tags: ["Characterization", "HPLC", "Mass Spec"],
    body: [
      {
        paragraph:
          "Solid-phase peptide synthesis remains the dominant route for producing research-grade peptides between five and forty residues. The technique relies on iterative coupling of protected amino acids onto a resin, followed by global deprotection and cleavage.",
      },
      {
        heading: "Reverse-phase HPLC purity",
        paragraph:
          "Reverse-phase HPLC with UV detection at 220 nm is the standard purity assay. The chromatogram resolves the target peptide from deletion sequences and oxidation products. A peak-area-percent above 98% is the working bar for research-use material.",
      },
      {
        heading: "Mass spectrometry for identity",
        paragraph:
          "ESI-MS confirms that the eluted peak matches the calculated monoisotopic mass within tight tolerance. For sequences containing oxidation-prone residues such as methionine, the spectrum is examined for +16 Da satellites. Educational material in this article does not constitute usage guidance.",
      },
    ],
  },
  {
    slug: "storage-handling",
    title: "Reconstitution and storage of lyophilized peptides",
    excerpt:
      "Best practices for handling lyophilized peptide powder in a research setting, including solvent selection, reconstitution volumes, and stability windows.",
    date: "2026-03-21",
    author: "peptriva research",
    readMins: 5,
    cover:
      "https://images.unsplash.com/photo-1581093458791-9d2b11a0c41f?auto=format&fit=crop&w=1600&q=70",
    tags: ["Handling", "Storage"],
    body: [
      {
        paragraph:
          "Lyophilized peptides are shipped under ambient temperature with desiccant. Long-term stability requires storage at -20°C in the original sealed vial. Once reconstituted, stability becomes a function of solvent, pH, and storage temperature.",
      },
      {
        heading: "Solvent selection",
        paragraph:
          "Bacteriostatic water (0.9% benzyl alcohol) is suitable for many short and mid-length peptides. Hydrophobic sequences may require trace acetic acid or DMSO; consult the COA for recommended solvent on a per-product basis.",
      },
    ],
  },
  {
    slug: "actin-binding-motifs",
    title: "Actin-binding motifs in research peptides",
    excerpt:
      "A short literature review of actin-binding sequence motifs and how short synthetic peptides recapitulate the binding interface for in-vitro research.",
    date: "2026-02-09",
    author: "peptriva research",
    readMins: 8,
    cover:
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=1600&q=70",
    tags: ["Literature", "Cellular biology"],
    body: [
      {
        paragraph:
          "The 17-residue actin-binding motif of thymosin β4 has been the subject of extensive structural and biophysical characterization. Synthetic fragments retain measurable affinity for G-actin in solution.",
      },
      {
        heading: "Why fragments matter",
        paragraph:
          "Short fragments are easier to characterize by HPLC and MS, ship lyophilized, and allow tightly-controlled in-vitro studies of the binding interface. They are not used in human research and are not therapeutics.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
