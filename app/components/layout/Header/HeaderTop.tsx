import Link from "@/app/components/ui/Link";
import EmailIcon from "@/public/assets/icons/email.svg";
import PhoneIcon from "@/public/assets/icons/phone.svg";

import { SocialLinks } from "./SocialLinks";

export function HeaderTop() {
  return (
    <div className="flex justify-between items-center border-b border-b-secondary-main py-6">
      <div className="flex gap-10">
        <Link
          href="example@gmail.com"
          className="text-text-light group"
          startAdornment={<EmailIcon className="w-5 h-5 fill-text-light" />}
        >
          <span className="text-text-light group-hover:underline">
            example@gmail.com
          </span>
        </Link>

        <Link
          href="+380000000000"
          className="text-text-light group"
          startAdornment={<PhoneIcon className="w-5 h-5 fill-text-light" />}
        >
          <span className="text-text-light group-hover:underline">
            +38 (000) 000-00-00
          </span>
        </Link>
      </div>

      <SocialLinks />
    </div>
  );
}
