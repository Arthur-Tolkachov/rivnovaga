import EmailIcon from "@/public/assets/icons/email.svg";
import PhoneIcon from "@/public/assets/icons/phone.svg";

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
