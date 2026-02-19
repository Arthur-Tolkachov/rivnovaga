import dynamic from "next/dynamic";
import Link from "next/link";

import { PracticeModel } from "@entity/practice";
import { PracticeCategoryModel } from "@entity/practiceCategory";
import { Button } from "@shared/ui/base/Button";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

const SendMessageForm = dynamic(() =>
  import("@features/contactUs/SendMessage").then((mod) => mod.SendMessageForm),
);

interface PracticePageProps {
  category: PracticeCategoryModel;
  practice: PracticeModel;
}

export const PracticePage: React.FC<PracticePageProps> = ({
  category,
  practice,
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
      href: `/practice/${category.slug}`,
    },
    {
      key: practice.slug,
      title: practice.title,
    },
  ];

  return (
    <MainSection className="py-5 md:py-15">
      <Container className="flex flex-col gap-8">
        <BreadCrumbs config={BREADCRUMBS_CONFIG} />

        <h1 className="text-primary-dark">{practice.title}</h1>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-secondary-dark">{practice.city}</span>

            <span className="text-secondary-dark">
              Номер справи {practice.caseNumber}
            </span>

            <span className="text-secondary-dark">
              Номер провадження {practice.proceedingNumber}
            </span>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: practice.description,
            }}
          />

          <div className="flex flex-col md:flex-row gap-5 mt-5">
            {practice.url && (
              <Button
                href={practice.url}
                className="!w-full md:!w-fit"
                color="secondary"
                variant="outlined-dark"
                size="sm"
                target="_blank"
              >
                Рішення в ЄРДСР
              </Button>
            )}

            {practice.file && (
              <Button
                href={practice.file.url}
                className="!w-full md:!w-fit"
                target="_blank"
                size="sm"
                color="secondary"
                variant="filled"
              >
                PDF
              </Button>
            )}
          </div>
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
