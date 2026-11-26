import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import IntergenerationalFeature from "@/components/home/IntergenerationalFeature";
import SeniorsSection from "@/components/home/SeniorsSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import OurCommunity from "@/components/home/OurCommunity";
import FamilySupport from "@/components/home/FamilySupport";
import ImpactSection from "@/components/home/ImpactSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import PartnersPreview from "@/components/home/PartnersPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Building a Stronger Gordonridge */}
      <Hero />

      {/* 2. Who We Are (#about) */}
      <WhoWeAre />

      {/* 3. Connecting Generations */}
      <IntergenerationalFeature />

      {/* 4. Seniors Engagement & Wellness (#seniors) */}
      <SeniorsSection />

      {/* 5. Programs Preview (#programs) */}
      <ProgramsSection />

      {/* 6. Our Gordonridge Community */}
      <OurCommunity />

      {/* 7. Food Security & Nutrition (#food-security / #family-support) */}
      <FamilySupport />

      {/* 8. Community Impact (#impact) */}
      <ImpactSection />

      {/* 9. Moments from Gordonridge (#gallery) */}
      <GalleryPreview />

      {/* 10. Get Involved (#get-involved) */}
      <GetInvolvedSection />

      {/* 11. Partners (#partners) */}
      <PartnersPreview />

      {/* 12. Final Call to Action */}
      <FinalCTA />
    </>
  );
}
