import { AboutLawyersModel } from "@entity/aboutLawyers";
import { UpdateAboutLawyersForm } from "@features/aboutLawyers";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface AboutLawyersPageProps {
  aboutLawyers: AboutLawyersModel;
}

export const AboutLawyersPage: React.FC<AboutLawyersPageProps> = async ({
  aboutLawyers,
}) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs
      home={{ title: "Сторiнка адвокатiв", href: "/admin/about_lawyers" }}
    />

    <h2 className="text-primary-dark">Сторiнка адвокатiв</h2>

    <UpdateAboutLawyersForm initialValues={aboutLawyers} />
  </div>
);
