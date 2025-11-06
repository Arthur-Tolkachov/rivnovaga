"use client";

import { useEffect, useState } from "react";

import ArrowRightIcon from "@public/assets/icons/arrow-right.svg";
import EmailIcon from "@public/assets/icons/email.svg";
import PhoneIcon from "@public/assets/icons/phone.svg";
import TelegramIcon from "@public/assets/icons/telegram.svg";
import ViberIcon from "@public/assets/icons/viber.svg";
import WhatsAppIcon from "@public/assets/icons/whatsapp.svg";
import { Button } from "@shared/ui/base/Button";

export const QuickActionsPanel = () => {
  const [show, setShow] = useState(false);

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

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-10">
      {show && (
        <Button variant="rounded" color="secondary" onClick={handleClick}>
          <ArrowRightIcon className="w-10 h-10 rotate-[-90deg] stroke-secondary-light" />
        </Button>
      )}

      <div className="flex flex-col gap-3">
        <Button href="/" variant="rounded">
          <PhoneIcon className="w-5 h-5 fill-secondary-light" />
        </Button>

        <Button href="/" variant="rounded">
          <TelegramIcon className="w-5 h-5 fill-secondary-light" />
        </Button>

        <Button href="/" variant="rounded">
          <ViberIcon className="w-5 h-5 fill-secondary-light" />
        </Button>

        <Button href="/" variant="rounded">
          <WhatsAppIcon className="w-5 h-5 fill-secondary-light" />
        </Button>

        <Button href="/" variant="rounded">
          <EmailIcon className="w-5 h-5 fill-secondary-light" />
        </Button>
      </div>
    </div>
  );
};
