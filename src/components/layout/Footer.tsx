import NextLink from "next/link";

import { CONTACT_LINKS_CONFIG } from "@/src/utils/links.constants";
import { NAVIGATION_CONFIG } from "@/src/utils/navigation.config";

import { SocialLinks } from "./SocialLinks";
import Container from "../ui/Container";
import Link from "../ui/Link";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-secondary-main py-15 h-fit">
      <Container className="grid grid-cols-3 items-start">
        <Logo />

        <ul className="flex flex-col gap-5">
          {NAVIGATION_CONFIG.map(({ id, href, label }) => (
            <li key={id}>
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
}
