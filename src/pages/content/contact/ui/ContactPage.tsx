import { getProfile } from "@entity/profile";
import EmailIcon from "@public/assets/icons/email.svg";
import PhoneIcon from "@public/assets/icons/phone.svg";
import { DAYS_OF_THE_WEEK } from "@shared/config/date.constants";
import { transformPhoneToUserFriendly } from "@shared/lib/transformPhoneToUserFriendly";
import { Button } from "@shared/ui/base/Button";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";
import { Map } from "@widgets/Map";
import { SocialLinks } from "@widgets/SocialLinks";

const BREADCRUMBS_CONFIG = [
  {
    key: "contact",
    title: "Контакти",
  },
];

export const ContactPage = async () => {
  const {
    general: { phone, email, telegram, viber, whatsapp },
    address: { building, city, index, office, street },
    workingDaysSchedule,
    workingTimeSchedule,
    map,
  } = await getProfile();

  const addressString = `${index} ${city} ${street} ${building} ${office}`;

  const displayPhone = transformPhoneToUserFriendly(phone);

  const startDay =
    DAYS_OF_THE_WEEK[
      workingDaysSchedule.start as keyof typeof DAYS_OF_THE_WEEK
    ];
  const endDay =
    DAYS_OF_THE_WEEK[workingDaysSchedule.end as keyof typeof DAYS_OF_THE_WEEK];

  const workingRangeString = `Графік роботи: ${startDay} - ${endDay}: ${workingTimeSchedule.start} - ${workingTimeSchedule.end}`;

  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <BreadCrumbs config={BREADCRUMBS_CONFIG} />
          <h1 className="text-primary-dark w-fit">Контакти</h1>
        </div>

        <div className="flex flex-col gap-3 text-secondary-dark">
          <h3>{addressString}</h3>
          <h3>{workingRangeString}</h3>

          <div className="flex flex-col gap-5 bg-secondary-light border-1 border-secondary-main p-5">
            <h3>
              Ви можете зв&apos;язатися з нами у будь-який зручний для вас
              спосіб:
            </h3>

            <div className="flex gap-10">
              {phone && (
                <Link
                  href={`tel:${phone}`}
                  className="text-secondary-dark group"
                  gap={15}
                  startAdornment={
                    <PhoneIcon className="w-5 h-5 fill-secondary-dark group-hover:fill-secondary-main duration-200" />
                  }
                >
                  <span className="text-secondary-dark group-hover:underline">
                    {displayPhone}
                  </span>
                </Link>
              )}

              {email && (
                <Link
                  href={`mailto:${email}`}
                  className="text-secondary-dark group"
                  gap={15}
                  startAdornment={
                    <EmailIcon className="w-5 h-5 fill-secondary-dark group-hover:fill-secondary-main duration-200" />
                  }
                >
                  <span className="text-secondary-dark group-hover:underline">
                    {email}
                  </span>
                </Link>
              )}

              <SocialLinks
                color="dark"
                telegram={telegram}
                viber={viber}
                whatsapp={whatsapp}
              />
            </div>
          </div>
        </div>

        <div className="border-y-1 border-secondary-main py-5">
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

        <div className="border-1 border-secondary-main">
          <Map lat={Number(map.lat)} lng={Number(map.lng)} />
        </div>
      </Container>
    </MainSection>
  );
};
