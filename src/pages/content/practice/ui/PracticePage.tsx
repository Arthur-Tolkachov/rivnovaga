import dynamic from "next/dynamic";

import { PracticeModel } from "@entity/practice";
import { PracticeCategoryModel } from "@entity/practiceCategory";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

const PracticeCard = dynamic(() =>
  import("@entity/practice").then((mod) => mod.PracticeCard),
);

const SendMessageForm = dynamic(() =>
  import("@features/contactUs/SendMessage").then((mod) => mod.SendMessageForm),
);

interface PracticePageProps {
  category: PracticeCategoryModel;
  practices: PracticeModel[];
}

export const PracticePage: React.FC<PracticePageProps> = ({
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
              Розділ в стані наповнення.
            </div>
          )}
        </div>

        <div className="border-y-1 border-secondary-main py-5 flex flex-col gap-5">
          <h3 className="text-secondary-darker">
            Для отримання консультації заповніть форму нижче або зв’яжіться з
            нами у зручний для вас спосіб:
          </h3>

          <SendMessageForm />
        </div>
      </Container>
    </MainSection>
  );
};
