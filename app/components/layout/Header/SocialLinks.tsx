import Link from "@/app/components/ui/Link";

import { SOCIAL_LINKS_CONFIG } from "./links.config";

export function SocialLinks() {
  return (
    <ul className="flex gap-6">
      {SOCIAL_LINKS_CONFIG.map(({ id, href, Icon }) => (
        <li key={id}>
          <Link
            href={href}
            className="group"
            startAdornment={
              <Icon className="w-5 h-5 fill-text-light group-hover:fill-secondary-main duration-200" />
            }
          />
        </li>
      ))}
    </ul>
  );
}
