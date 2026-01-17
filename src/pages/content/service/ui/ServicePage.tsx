import Image from "next/image";

import { PracticeCard } from "@entity/practice";
import { ServiceWithPracticesModel } from "@entity/service";
import { Button } from "@shared/ui/base/Button";
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
    <MainSection>
      <Container className="flex flex-col gap-10">
        <BreadCrumbs config={BREADCRUMBS_CONFIG} />

        <div>
          {service.cover.url && (
            <Image
              src={service.cover.url}
              alt={service.title}
              objectFit="cover"
              className="float-left mr-5 mb-5"
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

        <div className="border-y-1 border-secondary-main py-5">
          <h3 className="text-secondary-darker">
            Для отримання консультації заповніть форму нижче або зв’яжіться з
            нами у зручний для вас спосіб:
          </h3>

          <form className="flex flex-col gap-10 py-5">
            <input
              type="text"
              className="focus:outline focus:px-3 focus:border-0 text-secondary-darker outline-secondary-main border-b-1 border-secondary-main w-full max-w-[500px] py-3"
              placeholder="Як до вас звертатись"
            />
            <input
              type="text"
              className="focus:outline focus:px-3 focus:border-0 text-secondary-darker outline-secondary-main border-b-1 border-secondary-main w-full max-w-[500px] py-3"
              placeholder="Телефон"
            />
            <textarea
              name=""
              placeholder="Опишiть ваше питання"
              className="resize-none h-[300px] focus:border-0 text-secondary-darker outline-secondary-main border-1 border-secondary-main  p-3"
            ></textarea>

            <Button color="secondary" variant="outlined-dark">
              Надiслати
            </Button>
          </form>
        </div>

        {!!service.practices.length && (
          <div className="flex flex-col gap-5">
            <h2 className="text-secondary-dark">Практика</h2>

            <div className="grid grid-cols-3 gap-5">
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
