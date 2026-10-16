import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import IntergenerationalFeature from "@/components/home/IntergenerationalFeature";
import ProgramsSection from "@/components/home/ProgramsSection";
import OurCommunity from "@/components/home/OurCommunity";
import FamilySupport from "@/components/home/FamilySupport";
import ImpactSection from "@/components/home/ImpactSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import NewsEventsPreview from "@/components/home/NewsEventsPreview";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import PartnersPreview from "@/components/home/PartnersPreview";
import ContactSection from "@/components/home/ContactSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Who We Are (#about) */}
      <WhoWeAre />

      {/* 3. Connecting Generations */}
      <IntergenerationalFeature />

      {/* 4. Programs (#programs) */}
      <ProgramsSection />

      {/* 5. Our Gordonridge Community */}
      <OurCommunity />

      {/* 6. Family & Community Support */}
      <FamilySupport />

      {/* 7. Community Impact (#impact) */}
      <ImpactSection />

      {/* 8. Gallery (#gallery) */}
      <GalleryPreview />

      {/* 9. News & Events (#news-events) */}
      <NewsEventsPreview />

      {/* 10. Get Involved (#get-involved) */}
      <GetInvolvedSection />

      {/* 11. Partners (#partners) */}
      <PartnersPreview />

      {/* 12. Contact (#contact) */}
      <ContactSection />

      {/* 13. Final Call to Action */}
      <FinalCTA />
    </>
  );
}
