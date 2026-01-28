import { Metadata } from "next";

import { HomePage } from "@pages/content/home";

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
    url: "/",
    type: "website",
    locale: "uk_UA",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <HomePage />;
}
