import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import BurgerButtonIcon from "@public/assets/icons/burger-button.svg";
import CloseIcon from "@public/assets/icons/plus.svg";
import { Button } from "@shared/ui/base/Button";
import { Container } from "@shared/ui/base/Container";
import { Logo } from "@shared/ui/composite/Logo";

import { AdminPanelMenu } from "./AdminPanelMenu";
import { AdminPanelProps } from "../types/adminPanel.types";

export const MobileAdminPanel = ({
  logo,
  organizationName,
}: AdminPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 bg-primary-main py-2 z-2">
      <Container className="flex justify-between">
        <Logo
          logo={logo}
          organizationName={organizationName}
          width={50}
          height={50}
        />

        <AdminPanelMenu isOpen={isOpen} />

        <Button variant="text" size="xs" onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon className="w-6 h-6 fill-secondary-light rotate-45" />
          ) : (
            <BurgerButtonIcon className="w-6 h-6 stroke-secondary-light" />
          )}
        </Button>
      </Container>
    </div>
  );
};
