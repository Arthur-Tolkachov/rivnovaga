import { Button } from "@shared/ui/base/Button";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

const BREADCRUMBS_CONFIG = [
  {
    key: "practice",
    title: "Наша практика",
  },
];

export const PracticePage = () => (
  <MainSection>
    <Container className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <BreadCrumbs config={BREADCRUMBS_CONFIG} />

        <h1 className="text-primary-dark">Наша практика</h1>

        <h3 className="text-primary-dark">
          На цій сторінці представлено приклади справ, у яких адвокати нашого
          об&apos;єднання успішно захищали права та інтереси клієнтів. Ми
          ділимося рішеннями судів, що підтверджують нашу професійність, досвід
          і відданість справі. Кожна справа — це результат ретельної підготовки,
          глибокого аналізу законодавства та наполегливої роботи нашої команди.
          Ми пишаємося тим, що допомагаємо клієнтам досягати справедливості у
          найскладніших правових ситуаціях. Ознайомтесь із нашими справами
          нижче, щоб побачити реальні результати нашої роботи.
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
