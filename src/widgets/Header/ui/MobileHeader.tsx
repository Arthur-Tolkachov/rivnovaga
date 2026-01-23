"use client";

import { useEffect, useState } from "react";

import BurgerButtonIcon from "@public/assets/icons/burger-button.svg";
import CloseIcon from "@public/assets/icons/plus.svg";
import { MOBILE_HEADER_HEIGHT } from "@shared/config/layout.constants";
import { Button } from "@shared/ui/base/Button";
import { Container } from "@shared/ui/base/Container";
import { Logo } from "@shared/ui/composite/Logo";

import { MobileMenu } from "./MobileMenu";
import { HeaderProps } from "../types/header.types";

export const MobileHeader: React.FC<HeaderProps> = ({
  logo,
  phone,
  email,
  organizationName,
  viber,
  whatsapp,
  telegram,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className="bg-primary-main sticky top-0 left-0 right-0 z-2 py-2"
      style={{
        marginBottom: `-${MOBILE_HEADER_HEIGHT}px`,
      }}
    >
      <Container className="flex justify-between">
        <Logo
          logo={logo}
          organizationName={organizationName}
          width={50}
          height={50}
        />

        <MobileMenu
          email={email}
          phone={phone}
          telegram={telegram}
          viber={viber}
          whatsapp={whatsapp}
          isOpen={isOpen}
        />

        <Button variant="text" size="xs" onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon className="w-6 h-6 fill-secondary-light rotate-45" />
          ) : (
            <BurgerButtonIcon className="w-6 h-6 stroke-secondary-light" />
          )}
        </Button>
      </Container>
    </header>
  );
};
