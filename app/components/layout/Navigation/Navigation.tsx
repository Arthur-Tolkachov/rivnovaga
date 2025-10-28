import Link from "next/link";

import { NAVIGATION_CONFIG } from "./navigation.config";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8">
        {NAVIGATION_CONFIG.map(({ id, href, label }) => (
          <li key={id}>
            <Link
              href={href}
              className="text-secondary-light hover:text-secondary-lighter duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
