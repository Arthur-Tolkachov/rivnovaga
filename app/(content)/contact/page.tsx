import { Metadata } from "next";

import { ContactPage } from "@pages/content/contact";

export const metadata: Metadata = {
  title: "Контакти | Адвокатське об'єднання «Рівновага»",
  description:
    "Контактна інформація Адвокатського об'єднання «Рівновага». Адреса, телефон, електронна пошта та форма зворотного зв'язку для консультацій та звернень.",
  keywords: [
    "контакти",
    "адвокатське об'єднання",
    "зв'язатися з адвокатом",
    "юридична консультація",
    "адвокат Рівновага",
    "телефон",
    "електронна пошта",
  ],
  openGraph: {
    title: "Контакти | Адвокатське об'єднання «Рівновага»",
    description:
      "Адреса, телефон, електронна пошта та форма зворотного зв'язку Адвокатського об'єднання «Рівновага». Зв'яжіться з нами для консультації.",
    url: "/contact",
    type: "website",
    locale: "uk_UA",
  },
  alternates: {
    canonical: "/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  return <ContactPage />;
}
