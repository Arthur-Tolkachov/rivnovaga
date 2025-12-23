import cn from "classnames";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

interface AdminPanelItemProps {
  href: string;
  label: string;
}

export const AdminPanelItem: React.FC<AdminPanelItemProps> = ({
  href,
  label,
}) => {
  const segments = useSelectedLayoutSegments() || [];

  const isActive = `/admin/${segments[1]}` === href;

  return (
    <li>
      <Link
        href={href}
        className={cn("text-secondary-light hover:text-secondary-lighter", {
          "text-secondary-lighter": isActive,
        })}
      >
        {label}
      </Link>
    </li>
  );
};
