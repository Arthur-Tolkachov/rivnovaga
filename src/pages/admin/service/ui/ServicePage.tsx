import { ServiceModel } from "@entity/service";
import { CreateServiceForm, UpdateServiceForm } from "@features/service";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface ServicePageProps {
  service?: ServiceModel;
}

export const ServicePage: React.FC<ServicePageProps> = async ({ service }) => {
  const title = service ? "Редагування послуги" : "Нова послуга";

  const breadCrumbsConfig = [
    {
      key: service?.id || "service",
      title: service ? service.title : "Нова послуга",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <BreadCrumbs
        home={{ title: "Послуги", href: "/admin/services" }}
        config={breadCrumbsConfig}
      />

      <h2 className="text-primary-dark">{title}</h2>

      {service ? (
        <UpdateServiceForm initialValues={service} />
      ) : (
        <CreateServiceForm />
      )}
    </div>
  );
};
