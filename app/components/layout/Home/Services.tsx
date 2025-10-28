import Card from "@/app/components/ui/Card";
import Container from "@/app/components/ui/Container";
import Link from "@/app/components/ui/Link";
import ArrowRightIcon from "@/public/assets/icons/arrow-right.svg";

export default function Services() {
  return (
    <section className="py-15">
      <Container className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h2 className="text-primary-dark w-fit">Послуги</h2>
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
          <Card
            href="/"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/4family.png"
          >
            Вирішення сімейних спорів - розірвання шлюбу, поділ майна,
            визначення місця проживання дитини
          </Card>

          <Card
            href="/"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/5fakty.png"
          >
            Встановлення юридичних фактів - смерть, рідство, народження,
            батьківство
          </Card>

          <Card
            href="/"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/6borgnik.png"
          >
            Захист прав боржників та стягувачів у виконавчому провадженні
          </Card>

          <Card
            href="/"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/2zahist.png"
          >
            Захист підозрюваних, обвинувачених, засуджених на всіх стадіях
            кримінального провадження
          </Card>

          <Card
            href="/"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/4family.png"
          >
            Вирішення сімейних спорів - розірвання шлюбу, поділ майна,
            визначення місця проживання дитини
          </Card>

          <Card
            href="/"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/5fakty.png"
          >
            Встановлення юридичних фактів - смерть, рідство, народження,
            батьківство
          </Card>
        </div>
      </Container>
    </section>
  );
}
