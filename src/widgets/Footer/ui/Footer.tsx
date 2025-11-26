import NextLink from "next/link";

import { CONTACT_LINKS_CONFIG } from "@shared/config/contact.constants";
import { NAVIGATION_CONFIG } from "@shared/config/navigation.config";
import { Container } from "@shared/ui/base/Container";
import { Link } from "@shared/ui/base/Link";
import { Logo } from "@shared/ui/composite/Logo";
import { SocialLinks } from "@widgets/SocialLinks";

export const Footer = () => (
  <footer className="bg-secondary-main py-15 h-fit">
    <Container className="grid grid-cols-3 items-start">
      <Logo />

      <ul className="flex flex-col gap-5">
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

      <ul className="flex flex-col gap-5">
        {CONTACT_LINKS_CONFIG.map(({ id, href, Icon, label }) => (
          <li key={id}>
            <Link
              href={href}
              className="text-secondary-light group"
              gap={15}
              startAdornment={
                <Icon className="w-5 h-5 fill-secondary-light group-hover:fill-secondary-lighter duration-200" />
              }
            >
              <span className="text-secondary-light group-hover:underline">
                {label}
              </span>
            </Link>
          </li>
        ))}

        <SocialLinks />
      </ul>
    </Container>
  </footer>
);
