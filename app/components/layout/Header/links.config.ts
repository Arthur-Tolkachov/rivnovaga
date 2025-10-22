import EmailIcon from "@/public/assets/icons/email.svg";
import PhoneIcon from "@/public/assets/icons/phone.svg";
import TelegramIcon from "@/public/assets/icons/telegram.svg";
import ViberIcon from "@/public/assets/icons/viber.svg";
import WhatsAppIcon from "@/public/assets/icons/whatsapp.svg";

export const CONTACT_LINKS_CONFIG = [
  {
    id: "email",
    href: "mailto:example@gmail.com",
    label: "example@gmail.com",
    Icon: EmailIcon as React.FC<React.SVGProps<SVGSVGElement>>,
  },
  {
    id: "phone",
    href: "to:+380000000000",
    label: "+38 (000) 000-00-00",
    Icon: PhoneIcon as React.FC<React.SVGProps<SVGSVGElement>>,
  },
];

export const SOCIAL_LINKS_CONFIG = [
  {
    id: "telegram",
    title: "Telegram",
    href: "/",
    Icon: TelegramIcon as React.FC<React.SVGProps<SVGSVGElement>>,
  },
  {
    id: "viber",
    title: "Viber",
    href: "/",
    Icon: ViberIcon as React.FC<React.SVGProps<SVGSVGElement>>,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    href: "/",
    Icon: WhatsAppIcon as React.FC<React.SVGProps<SVGSVGElement>>,
  },
];
