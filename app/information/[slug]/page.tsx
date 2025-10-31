import BreadCrumbs from "@/app/components/layout/BreadCrumbs";
import Container from "@/app/components/ui/Container";
import MainSection from "@/app/components/ui/MainSection";

export const BREADCRUMBS_CONFIG = [
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

export default function Document() {
  return (
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
}
