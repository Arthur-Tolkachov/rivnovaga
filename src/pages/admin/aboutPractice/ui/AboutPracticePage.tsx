import { AboutPracticeModel } from "@entity/aboutPractice";
import { UpdateAboutPracticeForm } from "@features/aboutPractice";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface AboutPracticePageProps {
  practice: AboutPracticeModel;
}

export const AboutPracticePage: React.FC<AboutPracticePageProps> = ({
  practice,
}) => {
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
