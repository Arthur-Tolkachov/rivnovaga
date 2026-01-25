import { ServiceModel } from "@entity/service/model/service.model";
import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";
import { Card } from "@shared/ui/composite/Card";

interface DisplayServicesListProps {
  services: ServiceModel[];
}

export const DisplayServicesList: React.FC<DisplayServicesListProps> = ({
  services,
}) =>
  services.map((service) => {
    const backgroundImageUrl = service.cover?.url || EmptyPlaceholderImg.src;

    return (
      <Card
        key={service.id}
        href={`services/${service.id}`}
        className="min-h-[350px]"
        backgroundImageUrl={backgroundImageUrl}
      >
        {service.title}
      </Card>
    );
  });
