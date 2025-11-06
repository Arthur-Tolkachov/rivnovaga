import { DESKTOP_HEADER_HEIGHT } from "@shared/config/layout.constants";

import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { CtaSection } from "./CtaSection";
import { HeroSection } from "./HeroSection";
import { PracticeSection } from "./PracticeSection";
import { ServicesSection } from "./ServicesSection";
import { UsefulLinks } from "./UsefulLinks";

export const HomePage = () => (
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
