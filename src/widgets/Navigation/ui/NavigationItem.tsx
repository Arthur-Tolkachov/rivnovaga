import cn from "classnames";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

interface NavigationItemProps {
  href: string;
  label: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  label,
}) => {
  const segments = useSelectedLayoutSegments() || [];

  const isActive = `/${segments[0]}` === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "text-secondary-light hover:text-secondary-lighter duration-200",
          { "text-secondary-lighter": isActive }
        )}
      >
        {label}
      </Link>
    </li>
  );
};
