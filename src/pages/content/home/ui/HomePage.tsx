import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { CtaSection } from "./CtaSection";
import { HeroSection } from "./HeroSection";
import { PracticeSection } from "./PracticeSection";
import { ServicesSection } from "./ServicesSection";
import { UsefulLinks } from "./UsefulLinks";

import "@app/styles/content.css";

export const HomePage = () => (
  <div className="overflow-x-hidden flex flex-col gap-5 md:gap-20 pb-5 md:pb-20">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <CtaSection />
    <PracticeSection />
    <ContactSection />
    <UsefulLinks />
  </div>
);
