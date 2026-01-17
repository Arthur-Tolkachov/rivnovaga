import { getAboutServices } from "@entity/aboutServices";
import { getAllAvailableServices } from "@entity/service";
import { DisplayServicesList } from "@entity/service/ui/ServiceForm/DisplayServicesList";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

const BREADCRUMBS_CONFIG = [
  {
    key: "services",
    title: "Послуги",
  },
];

export const ServicesPage = async () => {
  const aboutServices = await getAboutServices();
  const services = await getAllAvailableServices();

  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">{aboutServices.title}</h1>

          <h3 className="text-primary-dark">{aboutServices.subtitle}</h3>
        </div>

        <div className="grid grid-col-3">
          {!!services.length ? (
            <div className="grid grid-cols-3 gap-5">
              <DisplayServicesList services={services} />
            </div>
          ) : (
            <div className="text-primary-dark text-xl">
              Наразі жодної послуги не додано.
            </div>
          )}
        </div>
      </Container>
    </MainSection>
  );
};
