import { AboutServicesModel } from "@entity/aboutServices";
import { UpdateAboutServicesForm } from "@features/aboutServices";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface AboutServicesPageProps {
  aboutServices: AboutServicesModel;
}

export const AboutServicesPage: React.FC<AboutServicesPageProps> = async ({
  aboutServices,
}) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs
      home={{ title: "Сторiнка послуг", href: "/admin/about-services" }}
    />

    <h2 className="text-primary-dark">Сторiнка послуг</h2>

    <UpdateAboutServicesForm initialValues={aboutServices} />
  </div>
);
