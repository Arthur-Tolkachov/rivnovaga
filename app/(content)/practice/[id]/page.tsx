import { Metadata } from "next";

import BreadCrumbs from "@/src/components/layout/BreadCrumbs";
import Container from "@/src/components/ui/Container";
import MainSection from "@/src/components/ui/MainSection";

export const metadata: Metadata = {
  title: "Відшкодування шкоди після ДТП | Адвокатське об'єднання «Рівновага»",
  description:
    "Приклади рішень судів щодо відшкодування шкоди, завданої внаслідок дорожньо-транспортних пригод. Професійний захист прав потерпілих та клієнтів адвокатів АО «Рівновага».",
  keywords: [
    "відшкодування шкоди",
    "ДТП",
    "судові рішення",
    "адвокатська практика",
    "захист потерпілих",
    "юридична допомога",
    "відшкодування збитків",
  ],
  openGraph: {
    title: "Відшкодування шкоди після ДТП | Адвокатське об'єднання «Рівновага»",
    description:
      "Ознайомтесь із реальними судовими рішеннями щодо відшкодування шкоди після дорожньо-транспортних пригод. Професійний захист прав потерпілих.",
    url: "https://zahist-ua.com/practice/123",
    type: "website",
  },
};

export const BREADCRUMBS_CONFIG = [
  {
    key: "practice",
    title: "Наша практика",
    href: "/practice",
  },
  {
    key: "practice/123",
    title:
      "Відшкодування шкоди, завданої внаслідок дорожньо - транспортної пригоди",
  },
];

export default function PracticePreviewPage() {
  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">
            Відшкодування шкоди, завданої внаслідок дорожньо - транспортної
            пригоди
          </h1>
        </div>

        <div>рiшення буде тут</div>
      </Container>
    </MainSection>
  );
}
