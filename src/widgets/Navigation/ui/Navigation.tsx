import { NAVIGATION_CONFIG } from "@shared/config/navigation.config";

import { NavigationItem } from "./NavigationItem";

export const Navigation = () => (
  <nav>
    <ul className="flex gap-8">
      {NAVIGATION_CONFIG.map(({ key, href, label }) => (
        <NavigationItem key={key} href={href} label={label} />
      ))}
    </ul>
  </nav>
);
