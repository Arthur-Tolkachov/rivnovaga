import { Metadata } from "next";
import Image from "next/image";

import BreadCrumbs from "@/app/components/layout/BreadCrumbs";
import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";

export const metadata: Metadata = {
  title: "Вирішення сімейних спорів | Адвокатське об'єднання «Рівновага»",
  description:
    "Професійний юридичний захист у сімейних спорах: розірвання шлюбу, поділ майна, визначення місця проживання дитини. Надійна допомога адвокатів на всіх етапах процесу.",
  keywords: [
    "сімейні спори",
    "розірвання шлюбу",
    "поділ майна",
    "адвокат сімейний",
    "захист прав дитини",
    "сімейний адвокат",
    "юридична допомога",
  ],
  openGraph: {
    title: "Вирішення сімейних спорів | Адвокатське об'єднання «Рівновага»",
    description:
      "Експертний юридичний захист у сімейних спорах: розірвання шлюбу, поділ майна, визначення місця проживання дитини.",
    url: "https://zahist-ua.com/services",
    type: "website",
  },
};

export const BREADCRUMBS_CONFIG = [
  {
    key: "services",
    title: "Послуги",
    href: "/services",
  },
  {
    key: "slug",
    title:
      "Вирішення сімейних спорів - розірвання шлюбу, поділ майна, визначення місця проживання дитини",
  },
];

export default function Service() {
  return (
    <section className="py-15">
      <Container className="flex flex-col gap-10">
        <BreadCrumbs config={BREADCRUMBS_CONFIG} />

        <div>
          <Image
            src="/assets/images/4family.png"
            alt="Вирішення сімейних спорів - розірвання шлюбу, поділ майна,
              визначення місця проживання дитини"
            objectFit="cover"
            className="float-left mr-5 mb-5"
            width={500}
            height={300}
          />

          <h1 className="text-primary-dark">
            Вирішення сімейних спорів - розірвання шлюбу, поділ майна,
            визначення місця проживання дитини
          </h1>

          <div className="text-primary-main mt-5">
            <p>
              Вирішення сімейних спорів — це один із найчутливіших напрямів
              юридичної практики, адже йдеться не лише про правові питання, а й
              про особисті стосунки, емоції та долі людей. Наша мета — допомогти
              клієнтам пройти цей непростий етап життя максимально спокійно,
              зберігаючи гідність, інтереси та майнові права.
            </p>
            <p>
              Ми надаємо повний спектр послуг у справах, що стосуються
              розірвання шлюбу, поділу майна подружжя, визначення місця
              проживання дитини, а також встановлення порядку участі у
              вихованні. Наші юристи ретельно аналізують кожну ситуацію,
              допомагають зібрати докази, підготувати процесуальні документи та
              представляють ваші інтереси в суді.
            </p>
            <p>
              Особливу увагу ми приділяємо спорам, що стосуються дітей, адже
              вони потребують не лише правової, а й моральної чутливості. Ми
              допоможемо досягти рішення, яке забезпечить найкращі умови для
              дитини, водночас захищаючи права кожного з батьків.
            </p>
            <p>
              У справах про поділ спільного майна ми допомагаємо визначити
              частки, оскаржити неправомірні дії, довести факт спільного набуття
              чи навпаки — довести, що майно є особистою власністю. Також ми
              супроводжуємо мирні угоди між подружжям, які дозволяють уникнути
              судових конфліктів.
            </p>
            <p>
              Кожна справа для нас — індивідуальна. Ми дбаємо про
              конфіденційність, уважно ставимося до деталей і завжди шукаємо
              рішення, яке буде найбільш вигідним і справедливим саме для вас.
              Наша команда допоможе вам пройти всі етапи процесу — від
              консультації та досудового врегулювання до отримання рішення суду
              й його виконання.
            </p>
            <p>
              Ми переконані, що навіть найскладніші сімейні конфлікти можна
              вирішити цивілізовано. Звертаючись до нас, ви отримаєте не лише
              правову допомогу, а й підтримку професіоналів, які щиро
              зацікавлені у вашому спокої та добробуті.
            </p>
          </div>
        </div>

        <div className="border-y-1 border-secondary-main py-5">
          <h3 className="text-secondary-darker">
            Для отримання консультації заповніть форму нижче або зв’яжіться з
            нами у зручний для вас спосіб:
          </h3>

          <form className="flex flex-col gap-10 py-5">
            <input
              type="text"
              className="focus:outline focus:px-3 focus:border-0 text-secondary-darker outline-secondary-main border-b-1 border-secondary-main w-full max-w-[500px] py-3"
              placeholder="Як до вас звертатись"
            />
            <input
              type="text"
              className="focus:outline focus:px-3 focus:border-0 text-secondary-darker outline-secondary-main border-b-1 border-secondary-main w-full max-w-[500px] py-3"
              placeholder="Телефон"
            />
            <textarea
              name=""
              placeholder="Опишiть ваше питання"
              className="resize-none h-[300px] focus:border-0 text-secondary-darker outline-secondary-main border-1 border-secondary-main  p-3"
            ></textarea>

            <Button color="secondary" variant="outlined-dark">
              Надiслати
            </Button>
          </form>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-secondary-dark">Практика</h2>

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
                  href="/"
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
                  href="/"
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
                  href="/"
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
                  href="/"
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
                  href="/"
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
                  href="/"
                  color="secondary"
                  variant="outlined-dark"
                  className="mt-5 w-full"
                >
                  Переглянути рiшення
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
