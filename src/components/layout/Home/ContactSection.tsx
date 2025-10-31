import { CONTACT_LINKS_CONFIG } from "@/src/utils/links.constants";

import Button from "../../ui/Button";
import Container from "../../ui/Container";
import Link from "../../ui/Link";
import MainSection from "../../ui/MainSection";
import { Map } from "../Map";
import { SocialLinks } from "../SocialLinks";

export default function ContactSection() {
  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <h1 className="text-secondary-dark w-fit">Контакти</h1>

        <div className="flex flex-col gap-3 text-secondary-dark">
          <h3>08200, м. Ірпінь, вул. Джерельна, 14, офіс 119</h3>
          <h3>Графік роботи: понеділок - п&apos;ятниця: 10:00 - 18:00</h3>

          <div className="flex flex-col gap-5 bg-secondary-light border-1 border-secondary-main p-5">
            <h3>
              Ви можете зв&apos;язатися з нами у будь-який зручний для вас
              спосіб:
            </h3>

            <div className="flex gap-10">
              {CONTACT_LINKS_CONFIG.map(({ id, href, Icon, label }) => (
                <Link
                  key={id}
                  href={href}
                  className="text-secondary-dark group"
                  gap={15}
                  startAdornment={
                    <Icon className="w-5 h-5 fill-secondary-dark group-hover:fill-secondary-main duration-200" />
                  }
                >
                  <span className="text-secondary-dark group-hover:underline">
                    {label}
                  </span>
                </Link>
              ))}

              <SocialLinks color="dark" />
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
          <Map />
        </div>
      </Container>
    </MainSection>
  );
}
