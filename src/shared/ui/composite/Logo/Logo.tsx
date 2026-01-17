import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  logo: {
    url: string;
    fileName: string;
  };
  organizationName: string;
}

export const Logo: React.FC<LogoProps> = ({ logo, organizationName }) => {
  if (!logo) {
    return null;
  }

  return (
    <Link href="/" className="flex gap-6 items-center w-fit group">
      <Image
        src={logo.url}
        alt={organizationName || logo.fileName}
        width={70}
        height={70}
        priority
      />

      <div
        className={cn(
          "text-secondary-light duration-200",
          "group-hover:text-secondary-lighter"
        )}
      >
        <div className="text-xl max-w-80">{organizationName}</div>
      </div>
    </Link>
  );
};
