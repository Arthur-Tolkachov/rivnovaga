import cn from "classnames";
import Link from "next/link";

export interface CardProps {
  href: string;
  children: React.ReactNode;
  backgroundImageUrl: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  backgroundImageUrl,
  className,
  href,
}) => (
  <Link
    href={href}
    className={cn(
      "flex flex-col-reverse group relative overflow-hidden",
      className
    )}
  >
    <div
      className="bg-cover bg-center absolute inset-0 opacity-90 group-hover:scale-110 group-hover:opacity-100 duration-200"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    />

    <div className="bg-primary-main-90 p-3 z-1 min-h-[150px]">
      <h3 className="text-secondary-light group-hover:text-secondary-lighter duration-200 line-clamp-5">
        {children}
      </h3>
    </div>
  </Link>
);
