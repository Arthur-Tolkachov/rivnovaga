import { PracticeModel } from "@entity/practice";
import { PracticeCategoryModel } from "@entity/practiceCategory";
import {
  CreatePracticeCategoryForm,
  UpdatePracticeCategoryForm,
} from "@features/practiceCategory";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface PracticeCategoryPageProps {
  practices: PracticeModel[];
  practiceCategory?: PracticeCategoryModel;
}

export const PracticeCategoryPage: React.FC<
  PracticeCategoryPageProps
> = async ({ practices, practiceCategory }) => {
  const title = practiceCategory ? "Редагування роздiлу" : "Новий роздiл";

  const breadCrumbsConfig = [
    {
      key: practiceCategory?.id || "practice",
      title: practiceCategory ? practiceCategory.title : "Новий роздiл",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <BreadCrumbs
        home={{ title: "Роздiли практики", href: "/admin/practice-categories" }}
        config={breadCrumbsConfig}
      />

      <h2 className="text-primary-dark">{title}</h2>

      {practiceCategory ? (
        <UpdatePracticeCategoryForm
          practices={practices}
          initialValues={practiceCategory}
        />
      ) : (
        <CreatePracticeCategoryForm practices={practices} />
      )}
    </div>
  );
};
