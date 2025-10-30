import { Metadata } from "next";

import Contact from "@/app/components/layout/Contact";
import Container from "@/app/components/ui/Container";
import MainSection from "@/app/components/ui/MainSection";

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
    url: "https://zahist-ua.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <Contact />
      </Container>
    </MainSection>
  );
}
