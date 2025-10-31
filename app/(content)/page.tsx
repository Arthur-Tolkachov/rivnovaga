import { Metadata } from "next";

import AboutSection from "@/src/components/layout/Home/AboutSection";
import ContactSection from "@/src/components/layout/Home/ContactSection";
import CtaSection from "@/src/components/layout/Home/CtaSection";
import HeroSection from "@/src/components/layout/Home/HeroSection";
import PracticeSection from "@/src/components/layout/Home/PracticeSection";
import ServicesSection from "@/src/components/layout/Home/ServicesSection";
import { UsefulLinks } from "@/src/components/layout/Home/UsefulLinks";
import { DESKTOP_HEADER_HEIGHT } from "@/src/utils/rootLayout.constants";

export const metadata: Metadata = {
  title: "Адвокатське об'єднання «Рівновага» – Захист ваших прав та інтересів",
  description:
    "Надійна юридична допомога у кримінальних, цивільних, сімейних та адміністративних справах. Експертний захист ваших прав на всіх етапах.",
  keywords: [
    "адвокат",
    "адвокатське об'єднання",
    "захист прав",
    "кримінальні справи",
    "сімейний адвокат",
    "цивільні справи",
    "юридичні послуги",
  ],
  openGraph: {
    title:
      "Адвокатське об'єднання «Рівновага» – Захист ваших прав та інтересів",
    description:
      "Експертний юридичний захист у всіх галузях права. Ваш надійний адвокат у суді та поза ним.",
    url: "https://zahist-ua.com/",
    type: "website",
  },
};

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
