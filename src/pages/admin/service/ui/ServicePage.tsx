import { ServiceModel } from "@entity/services";
import { CreateServiceForm, UpdateServiceForm } from "@features/service";

interface ServicePageProps {
  service?: ServiceModel;
}

export const ServicePage: React.FC<ServicePageProps> = async ({ service }) => {
  const title = service ? "Редагування послуги" : "Нова послуга";

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-primary-dark">{title}</h2>

      {service ? (
        <UpdateServiceForm initialValues={service} />
      ) : (
        <CreateServiceForm />
      )}
    </div>
  );
};
