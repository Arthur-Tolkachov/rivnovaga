import { AboutPracticeModel } from "@entity/aboutPractice";
import { UpdateAboutPracticeForm } from "@features/aboutPractice";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface PracticePageProps {
  practice: AboutPracticeModel;
}

export const PracticePage: React.FC<PracticePageProps> = ({ practice }) => {
  return (
    <div className="flex flex-col gap-5">
      <BreadCrumbs
        home={{ title: "Сторiнка практики", href: "/admin/about_practice" }}
      />

      <h2 className="text-primary-dark">Сторiнка практики</h2>

      <div className="flex flex-col gap-2">
        <UpdateAboutPracticeForm initialValues={practice} />
      </div>
    </div>
  );
};
