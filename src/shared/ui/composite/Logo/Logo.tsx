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
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  logo,
  organizationName,
  className,
  width = 70,
  height = 70,
}) => {
  if (!logo) {
    return null;
  }

  return (
    <Link
      href="/"
      className={cn("flex gap-2 md:gap-6 items-center w-fit group", className)}
    >
      <Image
        src={logo.url}
        alt={organizationName || logo.fileName}
        width={width}
        height={height}
        priority
      />

      <div
        className={cn(
          "text-secondary-light duration-200",
          "group-hover:text-secondary-lighter",
        )}
      >
        <div className="text-xs md:text-xl max-w-50 md:max-w-80 line-clamp-2">
          {organizationName}
        </div>
      </div>
    </Link>
  );
};
