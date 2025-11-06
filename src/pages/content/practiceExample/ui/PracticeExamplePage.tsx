import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

const BREADCRUMBS_CONFIG = [
  {
    key: "practice",
    title: "Наша практика",
    href: "/practice",
  },
  {
    key: "practice/123",
    title:
      "Відшкодування шкоди, завданої внаслідок дорожньо - транспортної пригоди",
  },
];

export const PracticeExamplePage = () => (
  <MainSection>
    <Container className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <BreadCrumbs config={BREADCRUMBS_CONFIG} />

        <h1 className="text-primary-dark">
          Відшкодування шкоди, завданої внаслідок дорожньо - транспортної
          пригоди
        </h1>
      </div>

      <div>рiшення буде тут</div>
    </Container>
  </MainSection>
);
