import cn from "classnames";

import EmailIcon from "@public/assets/icons/email.svg";
import PhoneIcon from "@public/assets/icons/phone.svg";
import { MOBILE_HEADER_HEIGHT } from "@shared/config/layout.constants";
import { NAVIGATION_CONFIG } from "@shared/config/navigation.config";
import { transformPhoneToUserFriendly } from "@shared/lib/transformPhoneToUserFriendly";
import { Link } from "@shared/ui/base/Link";
import { NavigationItem } from "@widgets/Navigation/ui/NavigationItem";
import { SocialLinks } from "@widgets/SocialLinks";

import { HeaderProps } from "../types/header.types";

interface MobileMenuProps extends Omit<
  HeaderProps,
  "logo" | "organizationName"
> {
  isOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  email,
  phone,
  telegram,
  viber,
  whatsapp,
}) => {
  const displayPhone = transformPhoneToUserFriendly(phone);

  return (
    <div
      className="fixed right-0 bottom-0 w-full md:w-2/5 flex flex-col gap-5 bg-primary-main duration-200 px-4 overflow-auto"
      style={{
        top: MOBILE_HEADER_HEIGHT,
        transform: isOpen ? "translateX(0)" : `translateX(100%)`,
      }}
    >
      <ul className="flex flex-col mt-5 gap-5 border-b-1 border-secondary-main pb-5">
        {NAVIGATION_CONFIG.map(({ key, href, label }) => (
          <NavigationItem key={key} href={href} label={label} />
        ))}
      </ul>

      <div className="flex flex-col gap-5">
        {phone && (
          <Link
            href={`tel:${phone}`}
            className="text-secondary-light group"
            gap={15}
            startAdornment={
              <PhoneIcon className="w-5 h-5 fill-secondary-light group-hover:fill-secondary-main duration-200" />
            }
          >
            <span className="text-secondary-light group-hover:underline">
              {displayPhone}
            </span>
          </Link>
        )}

        {email && (
          <Link
            href={`mailto:${email}`}
            className="text-secondary-light group"
            gap={15}
            startAdornment={
              <EmailIcon className="w-5 h-5 fill-secondary-light group-hover:fill-secondary-main duration-200" />
            }
          >
            <span className="text-secondary-light group-hover:underline">
              {email}
            </span>
          </Link>
        )}
      </div>

      <SocialLinks telegram={telegram} viber={viber} whatsapp={whatsapp} />
    </div>
  );
};
