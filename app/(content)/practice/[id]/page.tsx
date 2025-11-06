import { Metadata } from "next";

import { PracticeExamplePage } from "@pages/content/practiceExample";

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

export default function PracticeExample() {
  return <PracticeExamplePage />;
}
