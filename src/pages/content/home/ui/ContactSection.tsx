import { CONTACT_LINKS_CONFIG } from "@shared/config/contact.constants";
import { Button } from "@shared/ui/base/Button";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { MainSection } from "@shared/ui/base/MainSection";
import { TextInput } from "@shared/ui/base/TextInput";
import { Map } from "@widgets/Map";
import { SocialLinks } from "@widgets/SocialLinks";

export const ContactSection = () => {
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

        <div className="border-y-1 border-secondary-main pb-8">
          <form className="flex flex-col">
            <div className="flex flex-col w-[500px]">
              <TextInput name="name" label="Як до вас звертатись" />

              <TextInput name="phone" label="Телефон" />
            </div>

            <textarea id="message" name="message" />

            <Button color="secondary" variant="outlined-dark" className="mt-5">
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
};
