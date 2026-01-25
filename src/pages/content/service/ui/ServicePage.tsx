import Image from "next/image";

import { PracticeCard } from "@entity/practice";
import { ServiceWithPracticesModel } from "@entity/service";
import { SendMessageForm } from "@features/contactUs/SendMessage";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface ServicePageProps {
  service: ServiceWithPracticesModel;
}

export const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
  const BREADCRUMBS_CONFIG = [
    {
      key: "services",
      title: "Послуги",
      href: "/services",
    },
    {
      key: service.id,
      title: service.title,
    },
  ];

  return (
    <MainSection className="py-5 md:py-15">
      <Container className="flex flex-col gap-10">
        <BreadCrumbs config={BREADCRUMBS_CONFIG} />

        <div>
          {service.cover.url && (
            <Image
              src={service.cover.url}
              alt={service.title}
              objectFit="cover"
              className="md:float-left mr-5 mb-5"
              width={500}
              height={300}
            />
          )}

          <h1 className="text-primary-dark">{service.title}</h1>

          <div
            className="text-primary-main mt-5"
            dangerouslySetInnerHTML={{
              __html: service.description,
            }}
          />
        </div>

        <div className="border-y-1 border-secondary-main py-5 flex flex-col gap-5">
          <h3 className="text-secondary-darker">
            Для отримання консультації заповніть форму нижче або зв’яжіться з
            нами у зручний для вас спосіб:
          </h3>

          <SendMessageForm />
        </div>

        {!!service.practices.length && (
          <div className="flex flex-col gap-5">
            <h2 className="text-secondary-dark">Практика</h2>

            <div className="grid md:grid-cols-3 gap-5">
              {service.practices.map((practice) => (
                <PracticeCard
                  key={practice.id}
                  caseNumber={practice.caseNumber}
                  city={practice.city}
                  proceedingNumber={practice.proceedingNumber}
                  title={practice.title}
                  fileUrl={practice.file.url}
                  href={practice.url}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </MainSection>
  );
};
