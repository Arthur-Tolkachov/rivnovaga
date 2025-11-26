"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ADMIN_NAVIGATION_CONFIG } from "@shared/config/navigation.config";
import { Logo } from "@shared/ui/composite/Logo";

export const AdminPanel = () => {
  const pathname = usePathname();

  return (
    <div className="sticky p-5 left-0 top-0 flex flex-col gap-5 h-screen w-full bg-primary-main">
      <Logo />

      <ul className="flex flex-col gap-5 border-t-1 border-secondary-lighter py-5">
        {ADMIN_NAVIGATION_CONFIG.map(({ key, href, label }) => {
          const active = href === pathname;

          return (
            <li key={key}>
              <Link
                href={href}
                className={cn(
                  "text-secondary-light hover:text-secondary-lighter",
                  {
                    "text-secondary-lighter": active,
                  }
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
