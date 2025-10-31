import { Metadata } from "next";
import Image from "next/image";

import PhoneIcon from "@/public/assets/icons/phone.svg";
import AdvokatImg1 from "@/public/assets/images/advokat.jpg";
import AdvokatImg2 from "@/public/assets/images/advokat2.jpg";
import BreadCrumbs from "@/src/components/layout/BreadCrumbs";
import Container from "@/src/components/ui/Container";
import Link from "@/src/components/ui/Link";
import MainSection from "@/src/components/ui/MainSection";

export const metadata: Metadata = {
  title:
    "Адвокати — Досвідчена команда юристів | Адвокатське об'єднання «Рівновага»",
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
    url: "https://zahist-ua.com/about",
  },
};

export const BREADCRUMBS_CONFIG = [
  {
    key: "about",
    title: "Про адвокатiв",
  },
];

export default function About() {
  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">Про адвокатiв</h1>

          <h3 className="text-primary-dark">
            На цій сторінці представлена команда кваліфікованих адвокатів, які
            мають багаторічний досвід роботи та глибоке розуміння українського
            законодавства. Наші фахівці поєднують професійні знання з практичним
            досвідом участі у судових процесах, консультуванні клієнтів та
            вирішенні складних правових питань. Вони спеціалізуються у різних
            напрямах — від цивільного та сімейного права до господарських і
            кримінальних справ.
          </h3>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <Image
              src={AdvokatImg1}
              alt="Адвокат Тесленко Михайло Сергійович"
              width={400}
              height={500}
            />

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h3 className="text-primary-dark">
                  Тесленко Михайло Сергійович
                </h3>

                <p className="text-primary-dark">
                  Свідоцтво №5270 видане 28.11.2018 р.
                </p>

                <Link
                  href="to:+380000000000"
                  className="text-secondary-light group"
                  gap={15}
                  startAdornment={
                    <PhoneIcon className="w-5 h-5 fill-primary-dark group-hover:fill-primary-light duration-200" />
                  }
                >
                  <span className="text-primary-dark group-hover:underline">
                    +38 (000) 000-00-00
                  </span>
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-primary-main">
                  Надання повного спектра правової допомоги, який включає
                  консультації та роз’яснення з правових питань, представництво
                  інтересів фізичних і юридичних осіб у судах усіх юрисдикцій,
                  державних органах та органах місцевого самоврядування.
                  Підготовка позовних заяв, скарг, клопотань та інших
                  процесуальних документів.
                </p>
                <p className="text-primary-main">
                  Здійснення захисту прав, свобод і законних інтересів
                  підозрюваних, обвинувачених, засуджених або виправданих осіб,
                  а також осіб, щодо яких застосовуються примусові медичні чи
                  виховні заходи. Надання юридичної допомоги свідкам у
                  кримінальних провадженнях, представництво інтересів потерпілих
                  у справах про адміністративні правопорушення, а також
                  цивільних позивачів і відповідачів у кримінальних справах.
                </p>
                <p className="text-primary-main">
                  Представництво інтересів клієнтів у цивільних, господарських,
                  адміністративних та конституційних судах, у державних
                  установах, а також у взаєминах з іншими фізичними та
                  юридичними особами.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            <Image
              src={AdvokatImg2}
              alt="Адвокат Гончаров Віталій Миколайович"
              width={400}
              height={500}
            />

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h3 className="text-primary-dark">
                  Адвокат Гончаров Віталій Миколайович
                </h3>

                <p className="text-primary-dark">
                  Свідоцтво №4474 видане 29.08.2012 р.
                </p>

                <Link
                  href="to:+380000000000"
                  className="text-secondary-light group"
                  gap={15}
                  startAdornment={
                    <PhoneIcon className="w-5 h-5 fill-primary-dark group-hover:fill-primary-light duration-200" />
                  }
                >
                  <span className="text-primary-dark group-hover:underline">
                    +38 (000) 000-00-00
                  </span>
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-primary-main">
                  Надання повного спектра правової допомоги, який включає
                  консультації та роз’яснення з правових питань, представництво
                  інтересів фізичних і юридичних осіб у судах усіх юрисдикцій,
                  державних органах та органах місцевого самоврядування.
                  Підготовка позовних заяв, скарг, клопотань та інших
                  процесуальних документів.
                </p>
                <p className="text-primary-main">
                  Здійснення захисту прав, свобод і законних інтересів
                  підозрюваних, обвинувачених, засуджених або виправданих осіб,
                  а також осіб, щодо яких застосовуються примусові медичні чи
                  виховні заходи. Надання юридичної допомоги свідкам у
                  кримінальних провадженнях, представництво інтересів потерпілих
                  у справах про адміністративні правопорушення, а також
                  цивільних позивачів і відповідачів у кримінальних справах.
                </p>
                <p className="text-primary-main">
                  Представництво інтересів клієнтів у цивільних, господарських,
                  адміністративних та конституційних судах, у державних
                  установах, а також у взаєминах з іншими фізичними та
                  юридичними особами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MainSection>
  );
}
