import { getAboutPractice } from "@entity/aboutPractice";
import { getPracticeCategories } from "@entity/practiceCategory";
import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";
import { Card } from "@shared/ui/composite/Card";

const BREADCRUMBS_CONFIG = [
  {
    key: "practice",
    title: "Наша практика",
  },
];

export const PracticesPage = async () => {
  const aboutPractice = await getAboutPractice();
  const practiceCategories = await getPracticeCategories();

  return (
    <MainSection className="py-5 md:py-15">
      <Container className="flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">{aboutPractice.title}</h1>

          <h3 className="text-primary-dark">{aboutPractice.subtitle}</h3>
        </div>

        <div className="grid min-[600px]:grid-cols-2 lg:grid-cols-3 gap-5">
          {!!practiceCategories.length ? (
            practiceCategories.map((category) => {
              const backgroundImageUrl =
                category.cover?.url || EmptyPlaceholderImg.src;

              return (
                <Card
                  key={category.id}
                  backgroundImageUrl={backgroundImageUrl}
                  href={`/practice/${category.slug}`}
                  className="h-[250px] md:h-[350px]"
                >
                  {category.title}
                </Card>
              );
            })
          ) : (
            <div className="text-primary-dark text-xl">
              Розділ в стані наповнення.
            </div>
          )}
        </div>
      </Container>
    </MainSection>
  );
};
