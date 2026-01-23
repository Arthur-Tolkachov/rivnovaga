import NextLink from "next/link";

import EmailIcon from "@public/assets/icons/email.svg";
import PhoneIcon from "@public/assets/icons/phone.svg";
import { NAVIGATION_CONFIG } from "@shared/config/navigation.config";
import { transformPhoneToUserFriendly } from "@shared/lib/transformPhoneToUserFriendly";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { Logo } from "@shared/ui/composite/Logo";
import { LogoProps } from "@shared/ui/composite/Logo/Logo";
import { SocialLinks, SocialLinksProps } from "@widgets/SocialLinks";

export interface FooterProps extends LogoProps, SocialLinksProps {
  phone: string | null;
  email: string | null;
}

export const Footer: React.FC<FooterProps> = ({
  logo,
  organizationName,
  email,
  phone,
  telegram,
  viber,
  whatsapp,
}) => {
  const displayPhone = transformPhoneToUserFriendly(phone);

  return (
    <footer className="bg-secondary-main py-5 md:py-15 h-fit">
      <Container className="grid md:grid-cols-3 gap-5 md:gap-0 items-start">
        <Logo logo={logo} organizationName={organizationName} />

        <ul className="flex flex-col gap-1 md:gap-5">
          {NAVIGATION_CONFIG.map(({ key, href, label }) => (
            <li key={key}>
              <NextLink
                href={href}
                className="text-secondary-light hover:text-secondary-lighter duration-200"
              >
                {label}
              </NextLink>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-5 md:gap-5">
          {phone && (
            <Link
              href={`tel:${phone}`}
              className="text-secondary-light group w-fit"
              gap={15}
              startAdornment={
                <PhoneIcon className="w-5 h-5 fill-secondary-light group-hover:fill-secondary-lighter duration-200" />
              }
            >
              <span className="text-secondary-light group-hover:underline">
                {displayPhone}
              </span>
            </Link>
          )}

          {email && (
            <Link
              href={`mailto:${email}`}
              className="text-secondary-light group w-fit"
              gap={15}
              startAdornment={
                <EmailIcon className="w-5 h-5 fill-secondary-light group-hover:fill-secondary-lighter duration-200" />
              }
            >
              <span className="text-secondary-light group-hover:underline">
                {email}
              </span>
            </Link>
          )}

          <SocialLinks telegram={telegram} viber={viber} whatsapp={whatsapp} />
        </ul>
      </Container>
    </footer>
  );
};
