import Link from "@/app/components/ui/Link";

import { SOCIAL_LINKS_CONFIG } from "./social_links.config";

export function SocialLinks() {
  return (
    <ul className="flex gap-6">
      {SOCIAL_LINKS_CONFIG.map(({ id, Icon, ...rest }) => (
        <li key={id}>
          <Link
            className="group"
            startAdornment={
              <Icon className="w-5 h-5 fill-secondary-light group-hover:fill-secondary-main duration-200" />
            }
            {...rest}
          />
        </li>
      ))}
    </ul>
  );
}
