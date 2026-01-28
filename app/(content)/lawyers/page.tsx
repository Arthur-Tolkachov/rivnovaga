import { Metadata } from "next";

import { LawyersPage } from "@pages/content/lawyers";

export const metadata: Metadata = {
  title: "Про адвокатiв | Адвокатське об'єднання «Рівновага»",
  description:
    "Команда професійних адвокатів із багаторічним досвідом у різних галузях права. Правова допомога, представництво інтересів у судах, захист прав фізичних і юридичних осіб.",
  keywords: [
    "адвокати",
    "юристи",
    "правова допомога",
    "представництво в суді",
    "захист інтересів",
    "юридичні послуги",
    "адвокат Київ",
    "адвокатська команда",
  ],
  openGraph: {
    title:
      "Адвокати — Досвідчена команда юристів | Адвокатське об'єднання «Рівновага»",
    description:
      "Досвідчені адвокати, які надають професійну правову допомогу та представляють інтереси клієнтів у судах і державних органах.",
    type: "website",
    url: "/about",
    locale: "uk_UA",
  },
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return <LawyersPage />;
}
