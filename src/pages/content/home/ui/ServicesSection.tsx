import ArrowRightIcon from "@public/assets/icons/arrow-right.svg";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";
import { Card } from "@shared/ui/composite/Card";

export const ServicesSection = () => {
  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h2 className="text-primary-dark w-fit">Послуги</h2>
          <Link
            href="/services"
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
            href="services/slug1"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/4family.png"
          >
            Вирішення сімейних спорів - розірвання шлюбу, поділ майна,
            визначення місця проживання дитини
          </Card>

          <Card
            href="services/slug2"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/5fakty.png"
          >
            Встановлення юридичних фактів - смерть, рідство, народження,
            батьківство
          </Card>

          <Card
            href="services/slug3"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/6borgnik.png"
          >
            Захист прав боржників та стягувачів у виконавчому провадженні
          </Card>

          <Card
            href="services/slug4"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/2zahist.png"
          >
            Захист підозрюваних, обвинувачених, засуджених на всіх стадіях
            кримінального провадження
          </Card>

          <Card
            href="services/slug5"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/4family.png"
          >
            Вирішення сімейних спорів - розірвання шлюбу, поділ майна,
            визначення місця проживання дитини
          </Card>

          <Card
            href="services/slug6"
            className="min-h-[350px]"
            backgroundImageUrl="/assets/images/5fakty.png"
          >
            Встановлення юридичних фактів - смерть, рідство, народження,
            батьківство
          </Card>
        </div>
      </Container>
    </MainSection>
  );
};
