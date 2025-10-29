import BreadCrumbs from "@/app/components/layout/BreadCrumbs";
import Card from "@/app/components/ui/Card";
import Container from "@/app/components/ui/Container";

import { BREADCRUMBS_CONFIG } from "./breadCrumbs.config";

export default function Services() {
  return (
    <section className="py-15">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">Нашi послуги</h1>

          <h3 className="text-primary-dark">
            Наша адвокатська діяльність спрямована на професійний захист прав,
            свобод і законних інтересів клієнтів. Ми надаємо повний спектр
            правової допомоги — від консультацій до представництва в судах та
            органах державної влади.
          </h3>
        </div>

        <div className="grid grid-col-3">
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
        </div>
      </Container>
    </section>
  );
}
