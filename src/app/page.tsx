import { Hero } from "@/components/home/Hero";
import { InterestSurvey } from "@/components/home/InterestSurvey";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { QualityStrip } from "@/components/home/QualityStrip";
import { MembershipTeaser } from "@/components/home/MembershipTeaser";
import { BlogTeaser } from "@/components/home/BlogTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InterestSurvey />
      <FeaturedProducts />
      <QualityStrip />
      <MembershipTeaser />
      <BlogTeaser />
    </>
  );
}
