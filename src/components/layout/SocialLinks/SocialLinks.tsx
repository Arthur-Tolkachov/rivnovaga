import cn from "classnames";

import { SOCIAL_LINKS_CONFIG } from "./social_links.config";
import Link from "../../ui/Link";

type SocialLinksColor = "dark" | "light";

interface SocialLinksProps {
  color?: SocialLinksColor;
}

export function SocialLinks({ color = "light" }: SocialLinksProps) {
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
}
