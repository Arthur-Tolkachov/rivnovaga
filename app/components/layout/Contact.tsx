import Link from "@/app/components/ui/Link";
import { CONTACT_LINKS_CONFIG } from "@/app/utils/links.constants";

import { Map } from "./Map";
import { SocialLinks } from "./SocialLinks";

interface ContactProps {
  HeadTag?: "h1" | "h2";
}

export default function Contact({ HeadTag = "h1" }: ContactProps) {
  return (
    <>
      <HeadTag className="text-secondary-dark w-fit">Контакти</HeadTag>

      <div className="flex flex-col gap-3 text-secondary-dark">
        <h3>08200, м. Ірпінь, вул. Джерельна, 14, офіс 119</h3>
        <h3>Графік роботи: понеділок - п&apos;ятниця: 10:00 - 18:00</h3>

        <div className="flex flex-col gap-5 bg-secondary-light border-1 border-secondary-main p-5">
          <h3>
            Ви можете зв&apos;язатися з нами у будь-який зручний для вас спосіб:
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

      <div className="border-1 border-secondary-main">
        <Map />
      </div>
    </>
  );
}
