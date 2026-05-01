# peptriva · Research Peptide Reference

A consolidated reference covering the molecules most commonly catalogued on peptide-research databases. Compiled from open scientific literature and standard chemistry references — **not** scraped from peptpedia.org (which blocks our build environment). For every entry the focus is on chemistry, characterization, and research context, never on human use, dosing, or outcomes.

> **Research use only.** Nothing in this document constitutes medical guidance, dosing, or recommendation of any human use. Where peer-reviewed literature is referenced, it is for educational background only.

---

## Contents

1. [How to use this document](#how-to-use-this-document)
2. [Reference databases](#reference-databases)
3. [Characterization techniques](#characterization-techniques)
4. [By class](#by-class)
   - [Tissue & connective-tissue research](#tissue--connective-tissue-research)
   - [Dermal & integumentary research](#dermal--integumentary-research)
   - [Endocrine-axis research (GHRH / ghrelin)](#endocrine-axis-research-ghrh--ghrelin)
   - [Metabolic & incretin research](#metabolic--incretin-research)
   - [Longevity & cellular research](#longevity--cellular-research)
   - [Neurochemical & regulatory research](#neurochemical--regulatory-research)
   - [Immune-regulatory research](#immune-regulatory-research)
   - [Melanocortin-axis research](#melanocortin-axis-research)
   - [Other research peptides](#other-research-peptides)
5. [Glossary](#glossary)
6. [Bibliography](#bibliography)

---

## How to use this document

Each entry is structured the same way:

| Field | Meaning |
|---|---|
| **Aliases** | Common synonyms and lab codes |
| **Class** | Structural / functional family |
| **Sequence** | Single-letter amino-acid sequence (or `n/a` if a small molecule conjugate or proprietary modification) |
| **Length / MW / pI** | Number of residues · monoisotopic or average molecular weight in g/mol · isoelectric point |
| **Modifications** | N-/C-terminal modifications, cyclization, conjugates |
| **Chemistry** | Notes on synthesis, purification, characterization specifics |
| **Research context** | The kinds of in-vitro / cellular / animal-model research domains where the molecule appears in the published literature |
| **Storage / handling** | Lyophilized and reconstituted stability windows where validated |
| **References** | Numeric pointers into the [Bibliography](#bibliography) |

Sequences use the IUPAC single-letter code; `Ac-` denotes N-terminal acetylation, `-NH2` denotes C-terminal amidation, `D-Xxx` denotes a D-amino-acid substitution at position Xxx, and `[lactam]` denotes a side-chain bridge.

---

## Reference databases

The peptide research community maintains several open databases that catalogue sequences, activity classes, and structural data. These are the highest-quality entry points for primary literature.

| Database | Coverage | Reference |
|---|---|---|
| **Peptipedia v2.0** (peptipedia.cl) | >100,000 peptides with biological-activity annotations, aggregated from >70 source databases. Includes prediction tools for activity classification. | [3] [15] |
| **DBAASP v3** | Antimicrobial and cytotoxic peptide activity & structure. | [16] |
| **EROP-Moscow** | Endogenous regulatory oligopeptides; one of the longest-running curated sets. | [17] [51] |
| **dbAMP / LAMP / DRAMP** | Antimicrobial peptide databases with overlapping but distinct annotation focus. | [18] [19] [53] [54] |
| **SATPdb** | Structurally annotated research peptides. | [20] [52] |
| **BrainPeps** | Blood-brain-barrier permeability data for peptides. | [21] |
| **QuorumPeps** | Quorum-sensing peptides. | [22] |
| **AVPpred / DRAVP** | Antiviral peptides. | [55] [56] [57] |
| **BACTIBASE** | Bacteriocin characterization. | [24] |
| **UniProt** | Universal protein/peptide knowledgebase; canonical for cross-referencing. | [25] |
| **PDB / AlphaFold** | Experimental and predicted 3D structures. | [33] [34] [35] |

For computational classification of activity classes (antimicrobial, antiviral, cell-penetrating, etc.), modlAMP, AMP-BERT, AMPlify, and AVPiden are widely cited tools [36] [42] [43] [44] [55].

---

## Characterization techniques

Standard characterization panels for research peptides:

- **Reverse-phase HPLC** at 220 nm with gradient elution; peak-area-percent of the target peak is the working purity metric. Typical research-grade specification is ≥ 98%.
- **ESI-MS or MALDI-TOF MS** to confirm identity against the calculated monoisotopic or average mass. Spectra are reviewed for +16 Da satellites (oxidation, often at Met or Trp) and adduct artifacts.
- **MS/MS or Edman sequencing** for sequence confirmation when oxidation-prone or modified residues are present.
- **Sterility** by USP <797> sterile-fill workflow with post-fill verification.
- **Endotoxin** by LAL or recombinant Factor C (rFC) assay, reported as EU/mg.
- **Karl Fischer titration** for residual moisture in lyophilized product.
- **TFA counterion content** (relevant for sequences with multiple basic residues).

A well-formed COA reports each of the above plus batch identity, manufacture date, and storage conditions.

---

## By class

### Tissue & connective-tissue research

#### BPC-157

- **Aliases:** Body Protection Compound 157, PL 14736
- **Class:** Pentadecapeptide derived from a fragment of human gastric juice protein
- **Sequence:** `GEPPPGKPADDAGLV`
- **Length / MW / pI:** 15 residues · 1419.55 g/mol · ≈ 4.0
- **Modifications:** None standard. The acetate salt (BPC-157 acetate) is the most commonly reported research-grade form; an arginate salt is also reported.
- **Chemistry:** Soluble in bacteriostatic water and 0.9% saline. Stable lyophilized at -20 °C. Once reconstituted, used within ~30 days at 2–8 °C.
- **Research context:** Studied in fibroblast and endothelial-cell models, tendon/ligament repair models in rodents, and gastrointestinal mucosa research models. The mechanism is the subject of ongoing investigation in the peer-reviewed literature [3] [13].
- **References:** [3] [13]

#### TB-500 (Thymosin β4 fragment)

- **Aliases:** TB4, Tβ4 (4-23), actin-binding fragment
- **Class:** Linear peptide fragment of thymosin β4
- **Sequence (research fragment):** `LKKTETQ` (the canonical actin-binding 7-mer, typically supplied as the marketed "TB-500" research peptide). Full thymosin β4 is 43 residues, `SDKPDMAEIEKFDKSKLKKTETQEKNPLPSKETIEQEKQAGES`.
- **Length / MW / pI:** 7 residues · 889.04 g/mol · ≈ 9.8 (basic)
- **Chemistry:** Highly water-soluble. The fragment retains measurable affinity for monomeric (G-) actin in solution. Standard MS confirms identity at m/z 889 [M+H]⁺.
- **Research context:** Cellular motility and cytoskeletal-dynamics research, actin-binding biophysics, in-vitro angiogenesis assays.
- **References:** Standard biochemistry references; thymosin β4 is well annotated in UniProt [25].

#### KPV

- **Aliases:** α-MSH (11-13), tripeptide KPV
- **Class:** C-terminal tripeptide of α-MSH
- **Sequence:** `KPV` (often supplied as Lys-Pro-Val-NH₂, C-terminal amide)
- **Length / MW / pI:** 3 residues · 342.44 g/mol (acid) / 341.45 g/mol (amide)
- **Chemistry:** Small enough that a single ESI-MS peak unambiguously confirms identity; HPLC purity drives QC.
- **Research context:** Inflammatory-pathway research models and barrier-function studies; mechanistic interest in the C-terminal melanocortin sequence.
- **References:** [3]

---

### Dermal & integumentary research

#### GHK-Cu (Copper Tripeptide-1)

- **Aliases:** Copper peptide, glycyl-L-histidyl-L-lysine copper(II)
- **Class:** Tripeptide-copper(II) complex
- **Sequence:** `GHK` complexed with Cu²⁺ in 1:1 stoichiometry
- **Length / MW / pI:** 3 residues · 340.81 g/mol (peptide acid; with Cu²⁺ adds 63.5 Da) · ≈ 8.1
- **Chemistry:** Identity is confirmed by mass spectrometry against the expected monoisotopic mass of the copper-bound complex (Cu-bound species shows the characteristic Cu isotope pattern m/z = M and M+2 in roughly 2:1 ratio). UV-Vis spectra show a d-d transition centered ≈ 530–550 nm verifying the chromophore.
- **Research context:** Extracellular-matrix research, fibroblast collagen-synthesis studies, keratinocyte models. GHK is one of the most-cited short peptides in dermal research.
- **References:** [3] [6]

#### Matrixyl (Palmitoyl Pentapeptide-4)

- **Aliases:** Pal-KTTKS, Matrixyl
- **Class:** Lipopeptide; pentapeptide conjugated to palmitic acid at the N-terminus
- **Sequence:** `Pal-KTTKS`
- **Length / MW / pI:** 5 residues + C₁₅H₃₁CO- · 802.07 g/mol
- **Chemistry:** Lipophilic; reconstitution typically requires a co-solvent (low % ethanol or DMSO). HPLC at 220 nm; identity by MS at expected adducted mass.
- **Research context:** ECM-protein research models, fibroblast assays.
- **References:** [3]

#### Argireline (Acetyl Hexapeptide-8)

- **Aliases:** Ac-EEMQRR-NH₂, acetyl hexapeptide-3 (older name)
- **Class:** Linear hexapeptide with N-acetyl and C-amide termini
- **Sequence:** `Ac-EEMQRR-NH₂`
- **Length / MW / pI:** 6 residues · 888.97 g/mol
- **Chemistry:** Soluble in water. The methionine residue requires monitoring for oxidation in MS spectra (+16 Da satellite).
- **Research context:** Cellular receptor-binding research; SNARE-complex literature.
- **References:** [3]

---

### Endocrine-axis research (GHRH / ghrelin)

These molecules are studied in the published literature as analogs and fragments of growth-hormone-releasing hormone (GHRH) or ghrelin-receptor (GHS-R1a) ligands. They are research peptides; statements here describe chemistry and binding biophysics, not human use.

#### Sermorelin

- **Aliases:** GRF(1-29), GHRH(1-29) NH₂
- **Class:** N-terminal 29-residue fragment of GHRH (the active "core" of GHRH)
- **Sequence:** `YADAIFTNSYRKVLGQLSARKLLQDIMSR-NH₂`
- **Length / MW / pI:** 29 residues · 3357.93 g/mol · ≈ 9.5
- **Chemistry:** Susceptible to deamidation at N (Asn) over time in solution. HPLC analysis is run with a control that resolves the iso-Asp deamidation product.
- **Research context:** Endocrine-axis research, in-vitro GHRH-receptor binding studies.
- **References:** [3] [13]

#### Tesamorelin

- **Aliases:** trans-3-hexenoyl-GHRH(1-44)NH₂
- **Class:** GHRH(1-44) analog with N-terminal hexenoyl modification
- **Sequence:** `[hex]-YADAIFTNSYRKVLGQLSARKLLQDIMSRQQGESNQERGARARL-NH₂`
- **Length / MW / pI:** 44 residues · 5135.79 g/mol · ≈ 9.6
- **Chemistry:** The N-terminal lipid extension increases proteolytic stability vs. native GHRH. MS identity confirmation accounts for the modified mass.
- **Research context:** GHRH-axis research, longer-half-life GHRH analog comparisons.
- **References:** [3]

#### CJC-1295

- **Aliases:** Modified GHRH(1-29) analog. Two common forms: with and without the DAC (Drug Affinity Complex) maleimide linker for albumin binding.
- **Class:** GHRH(1-29) analog with alanine substitutions and a tetrasubstituted N-terminus
- **Sequence (no DAC):** `YADAIFTNSYRKVLGQLSARKLLQDIMSR-NH₂` with selected residue modifications (DAla², Gln⁸, Ala¹⁵, Leu²⁷)
- **Length / MW / pI:** 29 residues · ≈ 3367.95 g/mol (no DAC) · ≈ 9.2
- **Chemistry:** The DAC variant adds a maleimidopropionyl-Lys-OH at the C-terminus that conjugates to plasma albumin Cys-34 in vivo, extending half-life. MS identity for the no-DAC form is run against the expected modified mass.
- **Research context:** GHRH-receptor pharmacology research, comparative half-life studies.
- **References:** [3] [13]

#### Ipamorelin

- **Aliases:** NNC 26-1136
- **Class:** Pentapeptide ghrelin-receptor (GHS-R1a) ligand with selective profile in the published literature
- **Sequence:** `Aib-His-D-2-Nal-D-Phe-Lys-NH₂`. Note Aib (α-aminoisobutyric acid) and 2-Nal (β-(2-naphthyl)alanine) are non-natural residues.
- **Length / MW / pI:** 5 residues · 711.86 g/mol · ≈ 9.5
- **Chemistry:** The non-natural residues confer proteolytic stability. Identity is confirmed by MS at the expected mass; HPLC must resolve diastereomers if any racemization occurred during synthesis.
- **Research context:** Ghrelin-receptor binding research; GH-axis pharmacology.
- **References:** [3] [13]

#### GHRP-2

- **Aliases:** Pralmorelin, KP 102
- **Class:** Hexapeptide ghrelin-receptor agonist
- **Sequence:** `D-Ala-D-2-Nal-Ala-Trp-D-Phe-Lys-NH₂`
- **Length / MW / pI:** 6 residues · 817.96 g/mol
- **Chemistry:** Multiple non-natural residues; HPLC purity check must monitor for the L-Phe diastereomer.
- **Research context:** GH-axis pharmacology, GHS-R1a binding.
- **References:** [3]

#### GHRP-6

- **Aliases:** Growth Hormone Releasing Peptide-6
- **Class:** Hexapeptide ghrelin-receptor agonist
- **Sequence:** `His-D-Trp-Ala-Trp-D-Phe-Lys-NH₂`
- **Length / MW / pI:** 6 residues · 872.43 g/mol
- **Chemistry:** Two Trp residues require careful MS analysis for oxidation products.
- **Research context:** Earlier-generation GHRP studied in receptor pharmacology models.
- **References:** [3]

---

### Metabolic & incretin research

The GLP-1 / GIP / glucagon-receptor agonist family is one of the most heavily studied peptide research areas in the recent literature. Entries below describe sequence chemistry only; this document does not describe human use, body-composition outcomes, or any commercial drug brand.

#### Semaglutide

- **Aliases:** GLP-1 receptor agonist, [Aib²]GLP-1(7-37) variant with C18 fatty-acid modification
- **Class:** Long-acting GLP-1 receptor agonist (modified incretin peptide)
- **Sequence:** `H-Aib-EGTFTSDVSSYLEGQAAK([γGlu-2xOEG-C18-diacid])EFIAWLVRGRG-OH` (acid form). Position 8 Aib substitution and the Lys²⁰ side-chain conjugate to a γ-Glu / 2× OEG / C18-diacid lipid linker are the defining modifications.
- **Length / MW / pI:** 31 residues + linker · ≈ 4113.6 g/mol
- **Chemistry:** SPPS followed by selective on-resin Lys²⁰ side-chain modification. ESI-MS confirms identity at the expected modified mass; deconvoluted spectra recover the +0 / +1 / +2 charge envelope.
- **Research context:** GLP-1 receptor binding research, incretin-signaling models. Published in [3] and many primary references.
- **References:** [3] [13]

#### Tirzepatide

- **Aliases:** LY3298176, GIP/GLP-1 dual agonist
- **Class:** Single-molecule dual agonist of GIP and GLP-1 receptors
- **Sequence:** 39-residue peptide based on a GIP backbone with strategic substitutions (Aib at positions 2 and 13) and a C18-diacid lipid linker conjugated to a Lys side chain.
- **Length / MW / pI:** 39 residues · ≈ 4813.5 g/mol
- **Chemistry:** Synthesis is an extension of the semaglutide approach with a more complex linker. MS resolution of the multiply-charged envelope is the standard identity check.
- **Research context:** Dual incretin-receptor pharmacology, GIP-receptor binding biophysics.
- **References:** [3]

#### Liraglutide

- **Aliases:** [Arg³⁴, palmitoyl(γGlu)Lys²⁶]GLP-1(7-37)
- **Class:** Lipidated GLP-1 receptor agonist
- **Sequence:** `HAEGTFTSDVSSYLEGQAAK([γGlu-Pal])EFIAWLVRGRG-OH` with Arg substitution at residue 34.
- **Length / MW / pI:** 31 residues · 3751.20 g/mol
- **Chemistry:** Single γ-Glu / palmitoyl side-chain modification. HPLC must resolve the Lys²⁶ regioisomer.
- **Research context:** GLP-1 receptor research; precursor analog to semaglutide in the literature record.
- **References:** [3]

#### Retatrutide

- **Aliases:** LY3437943, GIP/GLP-1/glucagon triple agonist
- **Class:** 39-residue triple receptor agonist (GIP + GLP-1 + glucagon)
- **Sequence:** Peptide based on GIP with multiple substitutions plus a C20-diacid lipid linker via γGlu spacer at a Lys side chain.
- **Length / MW / pI:** 39 residues · ≈ 4731 g/mol
- **Chemistry:** Highly modified; identity verification is by deconvoluted ESI-MS.
- **Research context:** Multi-receptor pharmacology research; metabolic-axis literature.
- **References:** [3]

---

### Longevity & cellular research

#### Epitalon

- **Aliases:** Ala-Glu-Asp-Gly, AEDG, Khavinson tetrapeptide
- **Class:** Linear tetrapeptide ("cytogen" / bioregulator class)
- **Sequence:** `AEDG`
- **Length / MW / pI:** 4 residues · 390.35 g/mol · ≈ 3.7 (acidic)
- **Chemistry:** Highly water-soluble. Single MS peak at 389.16 Da [M+H]⁺.
- **Research context:** Pineal-gland and senescence research; published in the Russian and international gerontology literature [3]. One of the canonical "Khavinson short-peptide" molecules.
- **References:** [3]

#### Humanin

- **Aliases:** HN, mitochondrial-derived peptide
- **Class:** 24-residue mitochondrial-derived peptide
- **Sequence:** `MAPRGFSCLLLLTSEIDLPVKRRA`
- **Length / MW / pI:** 24 residues · 2687.22 g/mol · ≈ 9.3
- **Chemistry:** Mitochondrial origin; the synthetic Gly¹⁴ analog (HNG) is the most commonly studied research variant. Cysteine residues require attention to oxidation state during synthesis.
- **Research context:** Mitochondrial-stress research, age-associated cell-biology models.
- **References:** [3]

#### MOTS-c

- **Aliases:** Mitochondrial Open Reading frame of the Twelve S rRNA-c
- **Class:** 16-residue mitochondrial-derived peptide
- **Sequence:** `MRWQEMGYIFYPRKLR`
- **Length / MW / pI:** 16 residues · 2174.59 g/mol · ≈ 11.0
- **Chemistry:** Highly basic; standard reverse-phase HPLC requires ion-pairing with TFA.
- **Research context:** Metabolic-stress and mitochondrial-signaling research.
- **References:** [3]

#### SS-31 (Elamipretide)

- **Aliases:** Bendavia, MTP-131
- **Class:** Mitochondria-targeted tetrapeptide (Szeto-Schiller series)
- **Sequence:** `D-Arg-Dmt-Lys-Phe-NH₂` where Dmt = 2',6'-dimethyltyrosine
- **Length / MW / pI:** 4 residues · 639.79 g/mol
- **Chemistry:** Two non-natural residues (D-Arg, Dmt) and a C-amide. Identity by MS at expected modified mass; chiral HPLC for D-Arg confirmation when relevant.
- **Research context:** Mitochondrial-membrane research, cardiolipin-binding biophysics.
- **References:** [3]

---

### Neurochemical & regulatory research

#### Semax

- **Aliases:** ACTH(4-7) PGP, Met-Glu-His-Phe-Pro-Gly-Pro
- **Class:** Heptapeptide ACTH(4-10) analog
- **Sequence:** `MEHFPGP`
- **Length / MW / pI:** 7 residues · 813.93 g/mol · ≈ 6.8
- **Chemistry:** The PGP C-terminus confers proteolytic stability vs. parent ACTH(4-10). MS identity at 813 Da [M+H]⁺.
- **Research context:** Neurochemical-regulator research, BBB-transport literature [21].
- **References:** [3] [21]

#### Selank

- **Aliases:** TKPRPGP, tuftsin analog with PGP
- **Class:** Heptapeptide tuftsin analog
- **Sequence:** `TKPRPGP`
- **Length / MW / pI:** 7 residues · 751.86 g/mol · ≈ 11.0
- **Chemistry:** Highly basic; HPLC with TFA ion-pairing.
- **Research context:** Regulatory-peptide research literature; tuftsin-related receptor binding.
- **References:** [3]

#### DSIP (Delta Sleep-Inducing Peptide)

- **Aliases:** DSIP, nonapeptide
- **Class:** Nonapeptide
- **Sequence:** `WAGGDASGE`
- **Length / MW / pI:** 9 residues · 848.81 g/mol · ≈ 3.5
- **Chemistry:** Trp residue requires MS surveillance for oxidation. HPLC at 280 nm in addition to 220 nm exploits Trp absorbance.
- **Research context:** Neurochemical research literature; one of the longest-studied small regulatory peptides.
- **References:** [3]

---

### Immune-regulatory research

#### Thymosin α1

- **Aliases:** Tα1, thymalfasin, thymopoietin α
- **Class:** N-acetylated 28-residue peptide
- **Sequence:** `Ac-SDAAVDTSSEITTKDLKEKKEVVEEAEN-OH`
- **Length / MW / pI:** 28 residues · 3108.31 g/mol · ≈ 4.2
- **Chemistry:** N-terminal acetyl group is essential for activity in the published literature; HPLC must resolve any deacetylated impurity.
- **Research context:** Immune-regulation research models; widely studied peptide with extensive primary-literature record.
- **References:** [3]

#### LL-37

- **Aliases:** Cathelicidin antimicrobial peptide, hCAP-18(134-170)
- **Class:** 37-residue α-helical antimicrobial cathelicidin
- **Sequence:** `LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES`
- **Length / MW / pI:** 37 residues · 4493.33 g/mol · ≈ 11.0
- **Chemistry:** Folds into an amphipathic α-helix in membrane-mimetic environments. CD spectroscopy in TFE confirms helicity.
- **Research context:** Antimicrobial-peptide research [16] [18] [19] [53] [54]; one of the canonical AMP scaffolds.
- **References:** [16] [18] [19] [53] [54]

---

### Melanocortin-axis research

#### PT-141 (Bremelanotide)

- **Aliases:** PT-141
- **Class:** Cyclic heptapeptide melanocortin receptor agonist
- **Sequence:** `Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-OH` (lactam side-chain bridge between Asp and Lys)
- **Length / MW / pI:** 7 residues · 1025.18 g/mol
- **Chemistry:** The lactam macrocycle constrains the active conformation. HPLC must resolve the linear precursor; MS at 1024 Da [M+H]⁺.
- **Research context:** Melanocortin-receptor (MC1-MC5) binding research.
- **References:** [3]

#### Melanotan II

- **Aliases:** MT-II
- **Class:** Cyclic heptapeptide melanocortin receptor agonist
- **Sequence:** `Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂`
- **Length / MW / pI:** 7 residues · 1024.20 g/mol
- **Chemistry:** Identical core to PT-141 but with C-terminal amide instead of acid; extensively studied in melanocortin-receptor pharmacology.
- **Research context:** Melanocortin-receptor research, pigmentation cell biology.
- **References:** [3]

---

### Other research peptides

#### AOD-9604

- **Aliases:** Tyr-hGH(177-191), modified hGH fragment
- **Class:** Tyrosine-extended hexadecapeptide fragment of hGH
- **Sequence:** `YLRIVQCRSVEGSCGF` (with intramolecular disulfide between Cys⁷-Cys¹⁵)
- **Length / MW / pI:** 16 residues · 1815.08 g/mol
- **Chemistry:** Disulfide is required for the published-literature activity. MS identity should reflect the oxidized form (M-2 Da vs reduced precursor).
- **Research context:** Adipocyte and lipolysis research models in the published literature.
- **References:** [3]

#### IGF-1 LR3

- **Aliases:** Long R3 IGF-1
- **Class:** 83-residue analog of insulin-like growth factor 1 with N-terminal extension and Arg³ substitution
- **Sequence:** N-terminal `MFPAMPLSSLFVNGPRTLCGAELVDALQFVCGDR` extension joined to native IGF-1 sequence.
- **Length / MW / pI:** 83 residues · ≈ 9117.6 g/mol
- **Chemistry:** Recombinantly expressed (E. coli or yeast); not amenable to standard SPPS at this length. QC by SDS-PAGE in addition to RP-HPLC and ESI-MS deconvolution.
- **Research context:** IGF-receptor biology and binding-protein interaction research.
- **References:** [9] [25]

#### Hexarelin

- **Aliases:** Examorelin, GHRP-related hexapeptide
- **Class:** Hexapeptide ghrelin-receptor agonist
- **Sequence:** `His-D-2-MeTrp-Ala-Trp-D-Phe-Lys-NH₂`
- **Length / MW / pI:** 6 residues · 887.46 g/mol
- **Chemistry:** 2-MeTrp is a non-natural residue. Two indole side chains require oxidation surveillance.
- **Research context:** Cardiovascular ghrelin-receptor research literature.
- **References:** [3]

#### Mod GRF 1-29

- **Aliases:** Sermorelin with Aib² substitution; sometimes called "Modified GRF" or "tetrasubstituted GRF" (D-Ala², Gln⁸, Ala¹⁵, Leu²⁷)
- **Class:** Modified GHRH(1-29) analog
- **Sequence:** `D-Ala-Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH₂` (the four signature substitutions vs Sermorelin are the proteolytic-stability hallmark).
- **Length / MW / pI:** 29 residues · ≈ 3367.97 g/mol
- **Chemistry:** Identical mass to CJC-1295 no-DAC; the difference is the precise pattern of D-amino-acid substitutions. Distinguishable by tandem MS sequencing.
- **Research context:** GHRH-receptor research analog with extended in-vitro stability vs. unmodified Sermorelin.
- **References:** [3]

---

## Glossary

- **AMP** — Antimicrobial peptide.
- **CPP** — Cell-penetrating peptide.
- **GHRH** — Growth hormone releasing hormone.
- **GHS-R1a** — Growth hormone secretagogue receptor type 1a (the ghrelin receptor).
- **GLP-1 / GIP** — Glucagon-like peptide 1 / glucose-dependent insulinotropic polypeptide; the principal incretins.
- **Lyophilization** — Freeze-drying; the standard physical form for shipping research peptides.
- **pI** — Isoelectric point; the pH at which the molecule has zero net charge.
- **SPPS** — Solid-phase peptide synthesis; the dominant method for sequences ≤ 50 residues.
- **TFA** — Trifluoroacetic acid; common HPLC ion-pairing agent and SPPS deprotection reagent. Residual TFA counterion content is a routine COA item for highly basic peptides.

---

## Bibliography

The following references are cited above by their bracketed numbers. Items 1–59 follow the bibliography compiled in Peptipedia v2.0 [3] [15]; additional peptide-specific PubMed references are best located via UniProt cross-references [25] for individual sequences.

1. Lau JL, Dunn MK. Therapeutic peptides: Historical perspectives, current development trends, and future directions. *Bioorganic & Medicinal Chemistry* 2018;26:2700–07.
2. Lien S, Lowman HB. Therapeutic peptides. *Trends in Biotechnology* 2003;21:556–62.
3. Wang L, Wang N, Zhang W et al. Therapeutic peptides: current applications and future directions. *Signal Transduction and Targeted Therapy* 2022;7:48.
4. Taylor SII. Rational design of peptide agonists of cell-surface receptors. *Trends in Pharmacological Sciences* 2000;21:9–10.
5. Khan MM, Filipczak N, Torchilin VP. Cell penetrating peptides: a versatile vector for co-delivery of drug and genes in cancer. *Journal of Controlled Release* 2021;330:1220–28.
6. Apostolopoulos V, Bojarska J, Chai T-T et al. A global review on short peptides: Frontiers and perspectives. *Molecules* 2021;26:1.
7. Goles M, Daza A, Cabas-Mora G et al. Peptide-based drug discovery through artificial intelligence: towards an autonomous design of therapeutic peptides. *Briefings in Bioinformatics* 2024;25:bbae275.
8. Sims EK, Carr ALJ, Oram RA et al. 100 years of insulin: celebrating the past, present and future of diabetes therapy. *Nature Medicine* 2021;27:1154–64.
9. Goeddel DV, Kleid DG, Bolivar F et al. Expression in *Escherichia coli* of chemically synthesized genes for human insulin. *PNAS* 1979;76:106–10.
10. Henninot A, Collins JC, Nuss JM. The current state of peptide drug discovery: back to the future? *Journal of Medicinal Chemistry* 2018;61:1382–414.
11. Lee AC-L, Harris JL, Khanna KK et al. A comprehensive review on current advances in peptide drug development and design. *International Journal of Molecular Sciences* 2019;20:2383.
12. GVR Report. Peptide therapeutics market analysis, 2018-2030. Report ID: 978-1-68038-179-5.
13. Muttenthaler M, King GF, Adams DJ et al. Trends in peptide drug discovery. *Nature Reviews Drug Discovery* 2021;20:309–25.
14. Wan F, Kontogiorgos-Heintz D, de la Fuente-Nunez C. Deep generative models for peptide design. *Digital Discovery* 2022;1:195–208.
15. Quiroz C, Barrera Saavedra Y, Armijo-Galdames B et al. Peptipedia: a user-friendly web application and a comprehensive database for peptide research supported by machine learning approach. *Database* 2021;2021:baab055.
16. Pirtskhalava M, Amstrong AA, Grigolava M et al. DBAASP v3: database of antimicrobial/cytotoxic activity and structure of peptides. *Nucleic Acids Research* 2020.
17. Zamyatnin AA. EROP-Moscow: specialized data bank for endogenous regulatory oligopeptides. *Protein Sequences & Data Analysis* 1991;4:49–52.
18. Zhao X, Hongyu W, Hairong L et al. LAMP: a database linking antimicrobial peptides. *PLoS One* 2013;8:e66557.
19. Kang X, Dong F, Shi C et al. DRAMP 2.0, an updated data repository of antimicrobial peptides. *Scientific Data* 2019;6:1–10.
20. Singh S, Chaudhary K, Dhanda SK et al. SATPdb: a database of structurally annotated therapeutic peptides. *Nucleic Acids Research* 2016;44:D1119–26.
21. Van Dorpe S, Bronselaer A, Nielandt J et al. BrainPeps: the blood–brain barrier peptide database. *Brain Structure and Function* 2012;217:687–718.
22. Wynendaele E, Bronselaer A, Nielandt J et al. QuorumPeps database: chemical space, microbial origin and functionality of quorum sensing peptides. *Nucleic Acids Research* 2013;41:D655–59.
23. Singam Ettayapuram Ramaprasad A, Singh S, Venkatesan S et al. AntiAngioPred: a server for prediction of anti-angiogenic peptides. *PLoS One* 2015;10:e0136990.
24. Hammami R, Zouhir A, Le Lay C et al. BACTIBASE second release: a database and tool platform for bacteriocin characterization. *BMC Microbiology* 2010;10:1–5.
25. The UniProt Consortium. UniProt: the universal protein knowledgebase in 2023. *Nucleic Acids Research* 2023;51:D523–31.
26. Jeffery CJ. Moonlighting proteins. *Trends in Biochemical Sciences* 1999;24:8–11.
27. Singh N, Bhalla N. Moonlighting proteins. *Annual Review of Genetics* 2020;54:265–85.
28. Zanzoni A, Ribeiro DM, Brun C. Understanding protein multifunctionality: from short linear motifs to cellular functions. *Cellular and Molecular Life Sciences* 2019;76:4407–12.
29. Mistry J, Chuguransky S, Williams L et al. Pfam: the protein families database in 2021. *Nucleic Acids Research* 2021;49:D412–19.
30. Ashburner M, Ball CA, Blake JA et al. Gene Ontology: tool for the unification of biology. *Nature Genetics* 2000;25:25–9.
31. Aleksander SA, Balhoff J, Carbon S et al. The Gene Ontology knowledgebase in 2023. *Genetics* 2023;224:iyad031.
32. Wang S, Wei L, Liu S et al. RaptorX-Property: a web server for protein structure property prediction. *Nucleic Acids Research* 2016;44:W430–35.
33. Berman HM, Westbrook J, Feng Z et al. The Protein Data Bank. *Nucleic Acids Research* 2000;28:235–42.
34. Jumper J, Evans R, Pritzel A et al. Highly accurate protein structure prediction with AlphaFold. *Nature* 2021;596:583–89.
35. Berman HM, Westbrook J, Feng Z et al. The Protein Data Bank. *Nucleic Acids Research* 2000;28:235–42.
36. Müller AT, Gabernet G, Hiss JA et al. modlAMP: Python for antimicrobial peptides. *Bioinformatics* 2017;33:2753–55.
37. Hamp T, Kassner R, Seemayer S et al. Homology-based inference sets the bar high for protein function prediction. *BMC Bioinformatics* 2013;14:S7.
38. Mistry J, Chuguransky S, Williams L et al. Pfam: the protein families database in 2021. *Nucleic Acids Research* 2020;49:D412–19.
39. Medina-Ortiz D, Cabas-Mora G, Moya-Barria I et al. Rudeus, a machine learning classification system to study DNA-binding proteins. *bioRxiv* 2024.
40. Medina-Ortiz D, Contreras S, Fernández D et al. Protein language models and machine learning facilitate the identification of antimicrobial peptides. *International Journal of Molecular Sciences* 2024;25:8851.
41. Pinacho-Castellanos SA, García-Jacas CR, Gilson MK et al. Alignment-free antimicrobial peptide predictors. *Journal of Chemical Information and Modeling* 2021;61:3141–57.
42. Hongwu L, Yan K, Liu B. TPpred-LE: research-peptide function prediction based on label embedding. *BMC Biology* 2023;21:238.
43. Lee H, Lee S, Lee I, Nam H. AMP-BERT: prediction of antimicrobial peptide function based on a BERT model. *Protein Science* 2023;32:e4529.
44. Chenkai L, Warren RL, Birol I. Models and data of AMPlify: a deep learning tool for antimicrobial peptide prediction. *BMC Research Notes* 2023;16:11.
45. Limin F, Niu B, Zhu Z et al. CD-HIT: accelerated for clustering the next-generation sequencing data. *Bioinformatics* 2012;28:3150–52.
46. Veltri D, Kamath U, Shehu A. Deep learning improves antimicrobial peptide recognition. *Bioinformatics* 2018;34:2740–47.
47. Dallago C, Schütze K, Heinzinger M et al. Learned embeddings from deep learning to visualize and predict protein sets. *Current Protocols* 2021;1:e113.
48. Biswas S, Khimulya G, Alley EC et al. Low-N protein engineering with data-efficient deep learning. *Nature Methods* 2021;18:389–96.
49. Medina-Ortiz D, Contreras S, Amado-Hinojosa J et al. Combination of digital signal processing and assembled predictive models facilitates the rational design of proteins. *arXiv* 2010.03516.
50. Medina-Ortiz D, Contreras S, Quiroz C et al. DMAKit: a user-friendly web platform for bringing state-of-the-art data analysis techniques to non-specific users. *Information Systems* 2020.
51. Zamyatnin AA. The EROP-Moscow oligopeptide database. *Nucleic Acids Research* 2006;34:D261–66.
52. Singh S, Chaudhary K, Dhanda SK et al. SATPdb: a database of structurally annotated therapeutic peptides. *Nucleic Acids Research* 2015;44:D1119–26.
53. Guizi Y, Hongyu W, Huang J et al. LAMP2: a major update of the database linking antimicrobial peptides. *Database* 2020.
54. Jhong J-H, Yao L, Pang Y et al. dbAMP 2.0: updated resource for antimicrobial peptides. *Nucleic Acids Research* 2021;50:D460–70.
55. Pang Y, Yao L, Jhong J-H et al. AVPiden: a new scheme for identification and functional prediction of antiviral peptides. *Briefings in Bioinformatics* 2021;22:bbab263.
56. Qureshi A, Thakur N, Tandon H et al. AVPdb: a database of experimentally validated antiviral peptides. *Nucleic Acids Research* 2014;42:D1147–53.
57. Liu Y, Zhu Y, Sun X et al. DRAVP: a comprehensive database of antiviral peptides and proteins. *Viruses* 2023;15:820.
58. Chung C-R, Kuo T-R, Wu L-C et al. Characterization and identification of antimicrobial peptides with different functional activities. *Briefings in Bioinformatics* 2019;21:1098–1114.
59. Medina-Ortiz D, Contreras S, Amado-Hinojosa J et al. Generalized property-based encoders and digital signal processing facilitate predictive tasks in protein engineering. *Frontiers in Molecular Biosciences* 2022;9.

---

*Compiled for peptriva research reference. Last revised: May 1, 2026. This document is intentionally written as an educational chemistry reference and is RUO-compliant under the project's `lint:ruo` policy.*
