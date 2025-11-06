import cn from "classnames";
import Link from "next/link";

import { NAVIGATION_CONFIG } from "@shared/config/navigation.config";

interface NavigationProps {
  pathname: string | null;
}

export const Navigation: React.FC<NavigationProps> = ({ pathname }) => (
  <nav>
    <ul className="flex gap-8">
      {NAVIGATION_CONFIG.map(({ id, href, label }) => {
        const active = href === pathname;

        return (
          <li key={id}>
            <Link
              href={href}
              className={cn(
                "text-secondary-light hover:text-secondary-lighter duration-200",
                { "text-secondary-lighter": active }
              )}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);
