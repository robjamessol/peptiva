import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PRODUCTS, getProduct } from "@/lib/data/products";
import { ProductPageV1 } from "@/components/product/ProductPageV1";
import { ProductPageV2 } from "@/components/product/ProductPageV2";
import { ViewToggle } from "@/components/product/ViewToggle";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ view?: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { view } = await searchParams;
  const product = getProduct(slug);
  if (!product) return notFound();

  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.category === product.category,
  ).slice(0, 3);

  return (
    <>
      {view === "v2" ? (
        <ProductPageV2 product={product} related={related} />
      ) : (
        <ProductPageV1 product={product} />
      )}
      <Suspense fallback={null}>
        <ViewToggle />
      </Suspense>
    </>
  );
}
