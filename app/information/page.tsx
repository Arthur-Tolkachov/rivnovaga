import { Metadata } from "next";

import BreadCrumbs from "@/src/components/layout/BreadCrumbs";
import Card from "@/src/components/ui/Card";
import Container from "@/src/components/ui/Container";
import Link from "@/src/components/ui/Link";
import MainSection from "@/src/components/ui/MainSection";

export const metadata: Metadata = {
  title: "Корисні матеріали — Зразки документів та нормативно-правові акти",
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
    url: "https://zahist-ua.com/",
  },
};

export const BREADCRUMBS_CONFIG = [
  {
    key: "information",
    title: "Кориснi матерiали",
  },
];

export default function InformationPage() {
  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">Кориснi матерiали</h1>

          <h3 className="text-primary-dark">
            На цій сторінці зібрано добірку корисних матеріалів для ознайомлення
            та практичного використання. Тут ви знайдете зразки основних
            процесуальних документів, типових заяв, договорів та інших юридичних
            форм, які допоможуть у підготовці до звернення до суду чи інших
            органів. Також представлено добірку чинних нормативно-правових
            актів, що регулюють ключові правові питання у різних галузях.
            Матеріали покликані надати зручний доступ до перевіреної правової
            інформації та сприяти підвищенню обізнаності громадян у сфері права.
          </h3>
        </div>

        <div className="sticky grid grid-cols-[3fr_1fr]">
          <div className="flex flex-col gap-10 pr-5">
            <h3 className="text-secondary-dark">Зразки документів</h3>

            <div className="grid grid-cols-3 gap-5">
              <Card
                href="/information/slug"
                backgroundImageUrl="/assets/images/example.jpg"
                className="min-h-[350px]"
              >
                Про видачу наказу про стягнення аліментів
              </Card>
              <Card
                href="/information/slug"
                backgroundImageUrl="/assets/images/example.jpg"
                className="min-h-[350px]"
              >
                Про видачу наказу про стягнення аліментів
              </Card>
              <Card
                href="/information/slug"
                backgroundImageUrl="/assets/images/example.jpg"
                className="min-h-[350px]"
              >
                Про видачу наказу про стягнення аліментів
              </Card>
              <Card
                href="/information/slug"
                backgroundImageUrl="/assets/images/example.jpg"
                className="min-h-[350px]"
              >
                Про видачу наказу про стягнення аліментів
              </Card>
              <Card
                href="/information/slug"
                backgroundImageUrl="/assets/images/example.jpg"
                className="min-h-[350px]"
              >
                Про видачу наказу про стягнення аліментів
              </Card>
              <Card
                href="/information/slug"
                backgroundImageUrl="/assets/images/example.jpg"
                className="min-h-[350px]"
              >
                Про видачу наказу про стягнення аліментів
              </Card>
              <Card
                href="/information/slug"
                backgroundImageUrl="/assets/images/example.jpg"
                className="min-h-[350px]"
              >
                Про видачу наказу про стягнення аліментів
              </Card>
              <Card
                href="/information/slug"
                backgroundImageUrl="/assets/images/example.jpg"
                className="min-h-[350px]"
              >
                Про видачу наказу про стягнення аліментів
              </Card>
            </div>
          </div>

          <div className="flex flex-col gap-10 pl-5 border-l-1 border-secondary-main">
            <h3 className="text-secondary-dark">Нормативно-правові акти</h3>

            <div className="flex flex-col gap-5 px-10">
              <Link
                className="text-secondary-darker hover:text-secondary-main hover:underline duration-200"
                href="https://www.echr.coe.int/documents/convention_ukr.pdf"
              >
                Європейська конвенція з прав людини
              </Link>

              <Link
                className="text-secondary-darker hover:text-secondary-main hover:underline duration-200"
                href="https://zakon.rada.gov.ua/laws/show/80731-10/stru#Stru"
              >
                Кодекс України про адміністративні правопорушення
              </Link>

              <Link
                className="text-secondary-darker hover:text-secondary-main hover:underline duration-200"
                href="https://zakon.rada.gov.ua/laws/show/254%D0%BA/96-%D0%B2%D1%80/stru#Stru"
              >
                Конституція України
              </Link>

              <Link
                className="text-secondary-darker hover:text-secondary-main hover:underline duration-200"
                href="https://zakon.rada.gov.ua/laws/show/2341-14/stru#Stru"
              >
                Кримінальний кодекс України
              </Link>

              <Link
                className="text-secondary-darker hover:text-secondary-main hover:underline duration-200"
                href="https://zakon.rada.gov.ua/laws/show/2947-14/stru#Stru"
              >
                Сімейний кодекс України
              </Link>

              <Link
                className="text-secondary-darker hover:text-secondary-main hover:underline duration-200"
                href="https://zakon.rada.gov.ua/laws/show/435-15/stru#Stru"
              >
                Цивільний кодекс України
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </MainSection>
  );
}
