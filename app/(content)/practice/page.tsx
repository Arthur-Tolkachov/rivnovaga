import { Metadata } from "next";

import BreadCrumbs from "@/src/components/layout/BreadCrumbs";
import Button from "@/src/components/ui/Button";
import Container from "@/src/components/ui/Container";
import MainSection from "@/src/components/ui/MainSection";

export const metadata: Metadata = {
  title: "Наша практика | Адвокатське об'єднання «Рівновага»",
  description:
    "Реальні кейси та рішення судів у справах, які вели адвокати Адвокатського об'єднання «Рівновага». Досвід та професійний захист прав клієнтів на всіх етапах процесу.",
  keywords: [
    "судові рішення",
    "кейс адвоката",
    "адвокатська практика",
    "захист прав",
    "кримінальні справи",
    "цивільні справи",
    "сімейні спори",
    "юридична допомога",
  ],
  openGraph: {
    title: "Наша практика | Адвокатське об'єднання «Рівновага»",
    description:
      "Ознайомтесь із реальними кейсами та судовими рішеннями, які демонструють досвід та професійний підхід наших адвокатів.",
    url: "https://zahist-ua.com/practice",
    type: "website",
  },
};

export const BREADCRUMBS_CONFIG = [
  {
    key: "practice",
    title: "Наша практика",
  },
];

export default function PracticePage() {
  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">Наша практика</h1>

          <h3 className="text-primary-dark">
            На цій сторінці представлено приклади справ, у яких адвокати нашого
            об&apos;єднання успішно захищали права та інтереси клієнтів. Ми
            ділимося рішеннями судів, що підтверджують нашу професійність,
            досвід і відданість справі. Кожна справа — це результат ретельної
            підготовки, глибокого аналізу законодавства та наполегливої роботи
            нашої команди. Ми пишаємося тим, що допомагаємо клієнтам досягати
            справедливості у найскладніших правових ситуаціях. Ознайомтесь із
            нашими справами нижче, щоб побачити реальні результати нашої роботи.
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="border-1 border-secondary-main p-5 bg-secondary-light flex flex-col justify-between gap-5">
            <div className="flex justify-between">
              <span className="text-secondary-dark">16.10.2018</span>
              <span className="text-secondary-dark">м. Iзюм</span>
            </div>

            <h3 className="text-secondary-darker">
              Відшкодування шкоди, завданої внаслідок дорожньо - транспортної
              пригоди
            </h3>

            <div className="flex flex-col">
              <span className="text-secondary-dark">
                Номер справи 623/1468/18
              </span>

              <span className="text-secondary-dark">
                Номер провадження 2/623/716/2018
              </span>

              <Button
                href="/practice/123"
                color="secondary"
                variant="outlined-dark"
                className="mt-5 w-full"
              >
                Переглянути рiшення
              </Button>
            </div>
          </div>

          <div className="border-1 border-secondary-main p-5 bg-secondary-light flex flex-col justify-between gap-5">
            <div className="flex justify-between">
              <span className="text-secondary-dark">18.10.2018</span>
              <span className="text-secondary-dark">м. Слов&apos;янськ</span>
            </div>

            <h3 className="text-secondary-darker">
              Виплата заборгованості по пенсії
            </h3>

            <div className="flex flex-col">
              <span className="text-secondary-dark">
                Номер справи 0540/8858/18-а
              </span>

              <span className="text-secondary-dark">
                Номер провадження 2/623/716/2018
              </span>

              <Button
                href="/practice/123"
                color="secondary"
                variant="outlined-dark"
                className="mt-5 w-full"
              >
                Переглянути рiшення
              </Button>
            </div>
          </div>

          <div className="border-1 border-secondary-main p-5 bg-secondary-light flex flex-col justify-between gap-5">
            <div className="flex justify-between">
              <span className="text-secondary-dark">20.09.2018</span>
              <span className="text-secondary-dark">м. Бахмут</span>
            </div>

            <h3 className="text-secondary-darker">
              Виправдувальний вирок за ч.1 ст. 286 КК України
            </h3>

            <div className="flex flex-col">
              <span className="text-secondary-dark">
                Номер справи 219/4352/17
              </span>

              <span className="text-secondary-dark">
                Номер провадження 219/144/2018
              </span>

              <Button
                href="/practice/123"
                color="secondary"
                variant="outlined-dark"
                className="mt-5 w-full"
              >
                Переглянути рiшення
              </Button>
            </div>
          </div>

          <div className="border-1 border-secondary-main p-5 bg-secondary-light flex flex-col justify-between gap-5">
            <div className="flex justify-between">
              <span className="text-secondary-dark">20.09.2018</span>
              <span className="text-secondary-dark">м. Бахмут</span>
            </div>

            <h3 className="text-secondary-darker">
              Виправдувальний вирок за ч.1 ст. 286 КК України
            </h3>

            <div className="flex flex-col">
              <span className="text-secondary-dark">
                Номер справи 219/4352/17
              </span>

              <span className="text-secondary-dark">
                Номер провадження 219/144/2018
              </span>

              <Button
                href="/practice/123"
                color="secondary"
                variant="outlined-dark"
                className="mt-5 w-full"
              >
                Переглянути рiшення
              </Button>
            </div>
          </div>

          <div className="border-1 border-secondary-main p-5 bg-secondary-light flex flex-col justify-between gap-5">
            <div className="flex justify-between">
              <span className="text-secondary-dark">20.09.2018</span>
              <span className="text-secondary-dark">м. Бахмут</span>
            </div>

            <h3 className="text-secondary-darker">
              Виправдувальний вирок за ч.1 ст. 286 КК України
            </h3>

            <div className="flex flex-col">
              <span className="text-secondary-dark">
                Номер справи 219/4352/17
              </span>

              <span className="text-secondary-dark">
                Номер провадження 219/144/2018
              </span>

              <Button
                href="/practice/123"
                color="secondary"
                variant="outlined-dark"
                className="mt-5 w-full"
              >
                Переглянути рiшення
              </Button>
            </div>
          </div>

          <div className="border-1 border-secondary-main p-5 bg-secondary-light flex flex-col justify-between gap-5">
            <div className="flex justify-between">
              <span className="text-secondary-dark">20.09.2018</span>
              <span className="text-secondary-dark">м. Бахмут</span>
            </div>

            <h3 className="text-secondary-darker">
              Виправдувальний вирок за ч.1 ст. 286 КК України
            </h3>

            <div className="flex flex-col">
              <span className="text-secondary-dark">
                Номер справи 219/4352/17
              </span>

              <span className="text-secondary-dark">
                Номер провадження 219/144/2018
              </span>

              <Button
                href="/practice/123"
                color="secondary"
                variant="outlined-dark"
                className="mt-5 w-full"
              >
                Переглянути рiшення
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </MainSection>
  );
}
