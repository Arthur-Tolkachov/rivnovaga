"use client";

import { useEffect, useState } from "react";

import ArrowRightIcon from "@public/assets/icons/arrow-right.svg";
import EmailIcon from "@public/assets/icons/email.svg";
import PhoneIcon from "@public/assets/icons/phone.svg";
import TelegramIcon from "@public/assets/icons/telegram.svg";
import ViberIcon from "@public/assets/icons/viber.svg";
import WhatsAppIcon from "@public/assets/icons/whatsapp.svg";
import { useMobile } from "@shared/lib/useMobile";
import { Button } from "@shared/ui/base/Button";

export interface QuickActionPanelProps {
  phone?: string | null;
  telegram?: string | null;
  viber?: string | null;
  whatsapp?: string | null;
  email?: string | null;
}

export const QuickActionsPanel: React.FC<QuickActionPanelProps> = ({
  phone,
  telegram,
  viber,
  whatsapp,
  email,
}) => {
  const [show, setShow] = useState(false);
  const isMobile = useMobile();

  const onScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 1000) {
      return setShow(true);
    }

    return setShow(false);
  };

  useEffect(() => {
    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  if (typeof isMobile !== "boolean") {
    return null;
  }

  const iconSize = {
    width: isMobile ? 14 : 24,
    height: isMobile ? 14 : 24,
  };

  return (
    <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 flex flex-col gap-5 md:gap-10">
      {show && (
        <Button
          variant="rounded"
          color="secondary"
          onClick={handleClick}
          size={isMobile ? "sm" : "md"}
        >
          <ArrowRightIcon
            width={isMobile ? 20 : 35}
            height={isMobile ? 20 : 35}
            className="rotate-[-90deg] stroke-secondary-light"
          />
        </Button>
      )}

      <div className="flex flex-col gap-3">
        {phone && (
          <Button
            href={`tel:${phone}`}
            variant="rounded"
            size={isMobile ? "sm" : "md"}
          >
            <PhoneIcon {...iconSize} className="fill-secondary-light" />
          </Button>
        )}

        {telegram && (
          <Button
            href={`https://t.me/${telegram}`}
            variant="rounded"
            size={isMobile ? "sm" : "md"}
          >
            <TelegramIcon {...iconSize} className="fill-secondary-light" />
          </Button>
        )}

        {viber && (
          <Button
            href={`viber://chat?number=${viber}`}
            variant="rounded"
            size={isMobile ? "sm" : "md"}
          >
            <ViberIcon {...iconSize} className="fill-secondary-light" />
          </Button>
        )}

        {whatsapp && (
          <Button
            href={`https://wa.me/${whatsapp.replace(/\+/g, "")}`}
            variant="rounded"
            size={isMobile ? "sm" : "md"}
          >
            <WhatsAppIcon {...iconSize} className="fill-secondary-light" />
          </Button>
        )}

        {email && (
          <Button
            href={`mailto:${email}`}
            variant="rounded"
            size={isMobile ? "sm" : "md"}
          >
            <EmailIcon {...iconSize} className="fill-secondary-light" />
          </Button>
        )}
      </div>
    </div>
  );
};
