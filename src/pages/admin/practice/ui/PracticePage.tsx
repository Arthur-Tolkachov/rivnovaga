import { PracticeModel } from "@entity/practice";
import { PracticeCategoryModel } from "@entity/practiceCategory";
import { ServiceModel } from "@entity/service";
import { CreatePracticeForm, UpdatePracticeForm } from "@features/practice";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface PracticePageProps {
  practice?: PracticeModel;
  services: ServiceModel[];
  practiceCategories: PracticeCategoryModel[];
}

export const PracticePage: React.FC<PracticePageProps> = async ({
  practice,
  services,
  practiceCategories,
}) => {
  const title = practice ? "Редагування практики" : "Нова практика";

  const breadCrumbsConfig = [
    {
      key: practice?.id || "practice",
      title: practice ? practice.title : "Нова практика",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <BreadCrumbs
        home={{ title: "Практика", href: "/admin/practices" }}
        config={breadCrumbsConfig}
      />

      <h2 className="text-primary-dark">{title}</h2>

      {practice ? (
        <UpdatePracticeForm
          services={services}
          practiceCategories={practiceCategories}
          initialValues={practice}
        />
      ) : (
        <CreatePracticeForm
          services={services}
          practiceCategories={practiceCategories}
        />
      )}
    </div>
  );
};
