import EmailIcon from "@public/assets/icons/email.svg";
import PhoneIcon from "@public/assets/icons/phone.svg";
import { transformPhoneToUserFriendly } from "@shared/lib/transformPhoneToUserFriendly";
import { Link } from "@shared/ui/base/Link";
import { SocialLinks, SocialLinksProps } from "@widgets/SocialLinks";

export interface HeaderTopPanelProps extends SocialLinksProps {
  phone: string | null;
  email: string | null;
}

export const HeaderTopPanel: React.FC<HeaderTopPanelProps> = ({
  email,
  phone,
  ...rest
}) => {
  const displayPhone = transformPhoneToUserFriendly(phone);

  return (
    <div className="flex justify-between items-center border-b border-b-secondary-main py-6">
      <div className="flex gap-10">
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

      <SocialLinks {...rest} />
    </div>
  );
};
