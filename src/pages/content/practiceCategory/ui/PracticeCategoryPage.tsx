import dynamic from "next/dynamic";
import Link from "next/link";

import { PracticeModel } from "@entity/practice";
import { PracticeCategoryModel } from "@entity/practiceCategory";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

const PracticeCard = dynamic(() =>
  import("@entity/practice").then((mod) => mod.PracticeCard),
);

interface PracticeCategoryPageProps {
  category: PracticeCategoryModel;
  practices: PracticeModel[];
}

export const PracticeCategoryPage: React.FC<PracticeCategoryPageProps> = ({
  practices,
  category,
}) => {
  const BREADCRUMBS_CONFIG = [
    {
      key: "practice",
      title: "Практика",
      href: "/practice",
    },
    {
      key: category.slug,
      title: category.title,
    },
  ];

  return (
    <MainSection className="py-5 md:py-15">
      <Container className="flex flex-col gap-10">
        <BreadCrumbs config={BREADCRUMBS_CONFIG} />

        <div className="grid min-[600px]:grid-cols-2 lg:grid-cols-3 gap-5">
          {!!practices.length ? (
            practices.map((practice) => {
              const href = `/practice/${category.slug}/${practice.slug}`;

              return (
                <PracticeCard
                  key={practice.id}
                  caseNumber={practice.caseNumber}
                  city={practice.city}
                  proceedingNumber={practice.proceedingNumber}
                  title={practice.title}
                  description={practice.description}
                  href={href}
                />
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
