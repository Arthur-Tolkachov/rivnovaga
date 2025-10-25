import cn from "classnames";
import Link from "next/link";

export interface CardProps {
  href: string;
  children: React.ReactNode;
  backgroundImageUrl: string;
  className?: string;
}

export default function Card({
  children,
  backgroundImageUrl,
  className,
  href,
}: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col-reverse w-1/4 group relative overflow-hidden",
        className
      )}
    >
      <div
        className="bg-cover absolute inset-0 group-hover:scale-110 duration-200"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      <div className="bg-primary-main-90 p-3 z-1 min-h-[150px]">
        <h3 className="text-secondary-light group-hover:text-secondary-main duration-200">
          {children}
        </h3>
      </div>
    </Link>
  );
}
