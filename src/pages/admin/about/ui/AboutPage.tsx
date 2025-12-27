import { AboutModel } from "@entity/about";
import { UpdateAboutSectionForm } from "@features/about";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface AboutPageProps {
  about: AboutModel[];
}

export const AboutPage: React.FC<AboutPageProps> = ({ about }) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs home={{ title: 'Секцiя "Про нас"', href: "/admin/about" }} />

    <h2 className="text-primary-dark">
      Налаштування секції &quot;Про нас&quot;
    </h2>

    <div className="flex flex-col gap-2">
      <UpdateAboutSectionForm initialValues={about} />
    </div>
  </div>
);
