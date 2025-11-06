import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

const BREADCRUMBS_CONFIG = [
  {
    key: "information",
    title: "Кориснi матерiали",
    href: "/information",
  },
  {
    key: "slug",
    title: "Про видачу наказу про стягнення аліментів",
  },
];

export const MaterialPage = () => (
  <MainSection>
    <Container className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <BreadCrumbs config={BREADCRUMBS_CONFIG} />

        <h1 className="text-primary-dark">
          Про видачу наказу про стягнення аліментів
        </h1>
      </div>

      <div>Тут буде документ</div>
    </Container>
  </MainSection>
);
