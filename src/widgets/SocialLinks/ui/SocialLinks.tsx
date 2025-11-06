import cn from "classnames";

import { SOCIAL_LINKS_CONFIG } from "@shared/config/contact.constants";
import { Link } from "@shared/ui/base/Link";

type SocialLinksColor = "dark" | "light";

export interface SocialLinksProps {
  color?: SocialLinksColor;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  color = "light",
}) => {
  const socialLinksStyle = {
    dark: "fill-secondary-dark group-hover:fill-secondary-lighter",
    light: "fill-secondary-light group-hover:fill-secondary-lighter",
  };

  return (
    <ul className="flex gap-6">
      {SOCIAL_LINKS_CONFIG.map(({ id, Icon, ...rest }) => (
        <li key={id}>
          <Link
            className="group"
            startAdornment={
              <Icon
                className={cn("w-5 h-5  duration-200", socialLinksStyle[color])}
              />
            }
            {...rest}
          />
        </li>
      ))}
    </ul>
  );
};
