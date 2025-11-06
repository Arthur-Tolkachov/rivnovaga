import { CONTACT_LINKS_CONFIG } from "@shared/config/contact.constants";
import { Link } from "@shared/ui/base/Link";
import { SocialLinks } from "@widgets/SocialLinks";

export function HeaderTopPanel() {
  return (
    <div className="flex justify-between items-center border-b border-b-secondary-main py-6">
      <div className="flex gap-10">
        {CONTACT_LINKS_CONFIG.map(({ id, href, Icon, label }) => (
          <Link
            key={id}
            href={href}
            className="text-secondary-light group"
            gap={15}
            startAdornment={
              <Icon className="w-5 h-5 fill-secondary-light group-hover:fill-secondary-main duration-200" />
            }
          >
            <span className="text-secondary-light group-hover:underline">
              {label}
            </span>
          </Link>
        ))}
      </div>

      <SocialLinks />
    </div>
  );
}
