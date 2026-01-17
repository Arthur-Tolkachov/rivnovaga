import Image from "next/image";

import { getAboutLawyers } from "@entity/aboutLawyers";
import { getLawyers } from "@entity/lawyer";
import PhoneIcon from "@public/assets/icons/phone.svg";
import { transformPhoneToUserFriendly } from "@shared/lib/transformPhoneToUserFriendly";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

const BREADCRUMBS_CONFIG = [
  {
    key: "about",
    title: "Про адвокатiв",
  },
];

export const LawyersPage = async () => {
  const aboutLawyers = await getAboutLawyers();
  const lawyers = await getLawyers();

  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />

          <h1 className="text-primary-dark">{aboutLawyers.title}</h1>

          <h3 className="text-primary-dark">{aboutLawyers.subtitle}</h3>
        </div>

        <div className="flex flex-col gap-10">
          {!!lawyers.length ? (
            lawyers.map((lawyer) => {
              const lawyerFullName = `${lawyer.surname} ${lawyer.name} ${lawyer.patronymic}`;
              const displayPhone = transformPhoneToUserFriendly(lawyer.phone);

              return (
                <div
                  className="grid grid-cols-[auto_auto] gap-8"
                  key={lawyer.id}
                >
                  <div className="w-[400px] h-[500px]">
                    <Image
                      src={lawyer.photo.url}
                      alt={`Адвокат ${lawyerFullName}`}
                      width={400}
                      height={500}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-primary-dark">{lawyerFullName}</h3>

                      <p className="text-primary-dark">
                        Свідоцтво №{lawyer.certificate.number} видане{" "}
                        {lawyer.certificate.date} р.
                      </p>

                      {displayPhone && (
                        <Link
                          href={`tel:${lawyer.phone}`}
                          className="text-secondary-light group"
                          gap={15}
                          startAdornment={
                            <PhoneIcon className="w-5 h-5 fill-primary-dark group-hover:fill-primary-light duration-200" />
                          }
                        >
                          <span className="text-primary-dark group-hover:underline">
                            {displayPhone}
                          </span>
                        </Link>
                      )}
                    </div>

                    <div
                      className="text-primary-main"
                      dangerouslySetInnerHTML={{ __html: lawyer.description }}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-primary-dark text-xl">
              Наразі жодного адвоката не додано.
            </div>
          )}
        </div>
      </Container>
    </MainSection>
  );
};
