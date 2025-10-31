import AboutSection from "@/src/components/layout/Home/AboutSection";
import ContactSection from "@/src/components/layout/Home/ContactSection";
import CtaSection from "@/src/components/layout/Home/CtaSection";
import HeroSection from "@/src/components/layout/Home/HeroSection";
import PracticeSection from "@/src/components/layout/Home/PracticeSection";
import ServicesSection from "@/src/components/layout/Home/ServicesSection";
import { UsefulLinks } from "@/src/components/layout/Home/UsefulLinks";
import { DESKTOP_HEADER_HEIGHT } from "@/src/utils/rootLayout.constants";

export default function Home() {
  return (
    <div>
      <div
        style={{
          marginTop: `-${DESKTOP_HEADER_HEIGHT}px`,
        }}
      >
        <HeroSection />
      </div>

      <div>
        <AboutSection />
        <ServicesSection />
        <CtaSection />
        <PracticeSection />
        <ContactSection />
        <UsefulLinks />
      </div>
    </div>
  );
}
