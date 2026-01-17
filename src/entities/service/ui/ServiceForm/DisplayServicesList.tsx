import { ServiceModel } from "@entity/service/model/service.model";
import { Card } from "@shared/ui/composite/Card";

interface DisplayServicesListProps {
  services: ServiceModel[];
}

export const DisplayServicesList: React.FC<DisplayServicesListProps> = ({
  services,
}) =>
  services.map((service) => (
    <Card
      key={service.id}
      href={`services/${service.id}`}
      className="min-h-[350px]"
      backgroundImageUrl={service.cover.url}
    >
      {service.title}
    </Card>
  ));
