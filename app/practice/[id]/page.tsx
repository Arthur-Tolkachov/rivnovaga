import BreadCrumbs from "@/app/components/layout/BreadCrumbs";
import Container from "@/app/components/ui/Container";
import MainSection from "@/app/components/ui/MainSection";

export const BREADCRUMBS_CONFIG = [
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

export default function PracticePreview() {
  return (
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
}
