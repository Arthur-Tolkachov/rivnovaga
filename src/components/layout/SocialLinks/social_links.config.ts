import TelegramIcon from "@/public/assets/icons/telegram.svg";
import ViberIcon from "@/public/assets/icons/viber.svg";
import WhatsAppIcon from "@/public/assets/icons/whatsapp.svg";

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
