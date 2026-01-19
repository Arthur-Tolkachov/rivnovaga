import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export interface LogoProps {
  logo: {
    url: string;
    fileName: string;
  };
  organizationName: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  logo,
  organizationName,
  className,
}) => {
  if (!logo) {
    return null;
  }

  return (
    <Link
      href="/"
      className={cn("flex gap-6 items-center w-fit group", className)}
    >
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
