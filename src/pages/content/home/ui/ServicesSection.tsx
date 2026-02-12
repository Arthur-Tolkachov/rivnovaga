import { getAllAvailableServices } from "@entity/service";
import ArrowRightIcon from "@public/assets/icons/arrow-right.svg";
import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";
import { Card } from "@shared/ui/composite/Card";

export const ServicesSection = async () => {
  const availableServices = await getAllAvailableServices();

  if (!availableServices.length) {
    return null;
  }

  return (
    <MainSection>
      <Container className="flex flex-col gap-5 md:gap-10">
        <div className="flex justify-between">
          <h2 className="text-primary-dark w-fit">Послуги</h2>

          <Link
            href="/services"
            className="text-secondary-darker hover:underline"
            endAdornment={
              <ArrowRightIcon className="w-5 h-5 stroke-secondary-darker" />
            }
            gap={10}
          >
            Переглянути всi
          </Link>
        </div>

        <div className="grid min-[600px]:grid-cols-2 md:grid-cols-3 gap-5">
          {availableServices.map((service, idx) => {
            if (idx > 7) {
              return null;
            }

            const backgroundImageUrl =
              service.cover?.url || EmptyPlaceholderImg.src;

            return (
              <Card
                key={service.id}
                href={`services/${service.slug}`}
                className="min-h-[350px]"
                backgroundImageUrl={backgroundImageUrl}
              >
                {service.title}
              </Card>
            );
          })}
        </div>
      </Container>
    </MainSection>
  );
};
