import { ServiceModel } from "@entity/service";
import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";
import { Card } from "@shared/ui/composite/Card";
import { CardButton } from "@shared/ui/composite/CardButton";

interface ServicesPageProps {
  services: ServiceModel[];
}

export const ServicesPage: React.FC<ServicesPageProps> = async ({
  services,
}) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs home={{ title: "Послуги", href: "/admin/services" }} />

    <h2 className="text-primary-dark">Послуги</h2>

    <div className="grid grid-cols-4 gap-5">
      <CardButton className="h-[350px]" href="/admin/services/new" />

      {services.map(({ id, title, cover }) => {
        const backgroundImageUrl = cover?.url || EmptyPlaceholderImg.src;

        return (
          <Card
            key={id}
            href={`/admin/services/${id}`}
            backgroundImageUrl={backgroundImageUrl}
            className="h-[350px]"
          >
            {title}
          </Card>
        );
      })}
    </div>
  </div>
);
