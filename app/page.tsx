import AboutSection from "@/app/components/layout/Home/AboutSection";
import ContactSection from "@/app/components/layout/Home/ContactSection";
import CtaSection from "@/app/components/layout/Home/CtaSection";
import HeroSection from "@/app/components/layout/Home/HeroSection";
import PracticeSection from "@/app/components/layout/Home/PracticeSection";
import ServicesSection from "@/app/components/layout/Home/ServicesSection";

import { UsefulLinks } from "./components/layout/Home/UsefulLinks";
import { DESKTOP_HEADER_HEIGHT } from "./utils/rootLayout.constants";

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
