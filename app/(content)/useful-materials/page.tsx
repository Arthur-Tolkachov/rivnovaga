import { Metadata } from "next";

import { UsefulMaterialsPage } from "@pages/content/usefulMaterials";

export const metadata: Metadata = {
  title: "Корисні матеріали | Адвокатське об'єднання «Рівновага»",
  description:
    "Добірка корисних матеріалів: зразки процесуальних документів, заяв, договорів та актуальні нормативно-правові акти для практичного використання.",
  keywords: [
    "корисні матеріали",
    "зразки документів",
    "юридичні зразки",
    "нормативно-правові акти",
    "правова інформація",
    "юридичні форми",
    "документи для суду",
  ],
  openGraph: {
    title: "Корисні матеріали — Зразки документів та нормативно-правові акти",
    description:
      "Зразки юридичних документів та актуальні нормативно-правові акти для ознайомлення та практичного використання.",
    type: "website",
    url: "/useful-materials",
    locale: "uk_UA",
  },
  alternates: {
    canonical: "/useful-materials",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UsefulMaterials() {
  return <UsefulMaterialsPage />;
}
