import { AboutLawyersModel } from "@entity/aboutLawyers";
import { UpdateAboutLawyersForm } from "@features/aboutLawyers";

interface AboutLawyersPageProps {
  aboutLawyers: AboutLawyersModel;
}

export const AboutLawyersPage: React.FC<AboutLawyersPageProps> = async ({
  aboutLawyers,
}) => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Сторiнка адвокатiв</h2>

    <UpdateAboutLawyersForm initialValues={aboutLawyers} />
  </div>
);
