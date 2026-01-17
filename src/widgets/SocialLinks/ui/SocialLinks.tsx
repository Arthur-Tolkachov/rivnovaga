import cn from "classnames";

import TelegramIcon from "@public/assets/icons/telegram.svg";
import ViberIcon from "@public/assets/icons/viber.svg";
import WhatsAppIcon from "@public/assets/icons/whatsapp.svg";
import { Link } from "@shared/ui/base/Link";

type SocialLinksColor = "dark" | "light";

export interface SocialLinksProps {
  color?: SocialLinksColor;
  telegram: string | null;
  viber: string | null;
  whatsapp: string | null;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  color = "light",
  telegram,
  viber,
  whatsapp,
}) => {
  const socialLinksStyle = {
    dark: "fill-secondary-dark group-hover:fill-secondary-lighter",
    light: "fill-secondary-light group-hover:fill-secondary-lighter",
  };

  return (
    <ul className="flex gap-6">
      {telegram && (
        <li>
          <Link
            href={`https://t.me/${telegram}`}
            target="_blank"
            className="group"
            startAdornment={
              <TelegramIcon
                className={cn("w-5 h-5  duration-200", socialLinksStyle[color])}
              />
            }
          />
        </li>
      )}

      {viber && (
        <li>
          <Link
            href={`viber://chat?number=${viber}`}
            className="group"
            target="_blank"
            startAdornment={
              <ViberIcon
                className={cn("w-5 h-5  duration-200", socialLinksStyle[color])}
              />
            }
          />
        </li>
      )}

      {whatsapp && (
        <li>
          <Link
            href={`https://wa.me/${whatsapp.replace(/\+/g, "")}`}
            className="group"
            target="_blank"
            startAdornment={
              <WhatsAppIcon
                className={cn("w-5 h-5  duration-200", socialLinksStyle[color])}
              />
            }
          />
        </li>
      )}
    </ul>
  );
};
