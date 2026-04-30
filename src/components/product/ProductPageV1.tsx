import { ProductHeroV1 } from "@/components/product/ProductHeroV1";
import { StatStrip } from "@/components/product/StatStrip";
import { InsideMolecule } from "@/components/product/InsideMolecule";
import { CharacterizationAccordion } from "@/components/product/CharacterizationAccordion";
import { BatchCoaCard } from "@/components/product/BatchCoaCard";
import { ProductLiterature, ProductFaqs } from "@/components/product/ProductLiterature";
import { RuoDisclaimer } from "@/components/product/RuoDisclaimer";
import { SectionTOC } from "@/components/product/SectionTOC";
import { StickyBuyBar } from "@/components/product/StickyBuyBar";
import type { Product } from "@/lib/data/products";

export function ProductPageV1({ product }: { product: Product }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 lg:px-8 pt-10 pb-32 grid lg:grid-cols-[1fr_220px] gap-12">
        <div>
          <RuoDisclaimer />
          <ProductHeroV1 product={product} />
          <StatStrip product={product} />
          <InsideMolecule product={product} />
          <CharacterizationAccordion product={product} />
          <BatchCoaCard product={product} />
          <ProductLiterature product={product} />
          <ProductFaqs product={product} />
        </div>
        <SectionTOC />
      </div>
      <StickyBuyBar product={product} />
    </>
  );
}
