import { getAboutPractice } from "@entity/aboutPractice";
import { getAllPractices, PracticeCard } from "@entity/practice";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

const BREADCRUMBS_CONFIG = [
  {
    key: "practice",
    title: "Наша практика",
  },
];

export const PracticePage = async () => {
  const aboutPractice = await getAboutPractice();
  const practices = await getAllPractices();

  return (
    <MainSection className="py-5 md:py-15">
      <Container className="flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">{aboutPractice.title}</h1>

          <h3 className="text-primary-dark">{aboutPractice.subtitle}</h3>
        </div>

        <div className="grid min-[600px]:grid-cols-2 lg:grid-cols-3 gap-5">
          {!!practices.length ? (
            practices.map((practice) => (
              <PracticeCard
                key={practice.id}
                caseNumber={practice.caseNumber}
                city={practice.city}
                proceedingNumber={practice.proceedingNumber}
                title={practice.title}
                fileUrl={practice.file.url}
                href={practice.url}
              />
            ))
          ) : (
            <div className="text-primary-dark text-xl">
              Наразі жодної практики не додано.
            </div>
          )}
        </div>
      </Container>
    </MainSection>
  );
};
