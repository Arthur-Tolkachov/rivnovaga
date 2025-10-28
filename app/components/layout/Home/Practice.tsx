import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import Link from "@/app/components/ui/Link";
import ArrowRightIcon from "@/public/assets/icons/arrow-right.svg";

export default function Practice() {
  return (
    <section className="py-15">
      <Container className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h2 className="text-secondary-dark w-fit">Наша практика</h2>
          <Link
            href="/"
            className="text-secondary-darker hover:underline"
            endAdornment={
              <ArrowRightIcon className="w-5 h-5 stroke-secondary-darker" />
            }
            gap={10}
          >
            Переглянути всi
          </Link>
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
      </Container>
    </section>
  );
}
