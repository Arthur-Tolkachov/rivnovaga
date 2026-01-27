import {
  ADMIN_NAVIGATION_CONFIG,
  ADMIN_SETTINGS_NAVIGATION_CONFIG,
} from "@shared/config/navigation.config";
import { Logo } from "@shared/ui/composite/Logo";

import { AdminPanelItem } from "./AdminPanelItem";
import { AdminPanelProps } from "../types/adminPanel.types";

export const DesktopAdminPanel = ({
  logo,
  organizationName,
}: AdminPanelProps) => (
  <div className="sticky p-5 left-0 top-0 flex flex-col gap-5 h-screen w-full bg-primary-main">
    <div className="border-b-1 border-secondary-lighter pb-5">
      <Logo logo={logo} organizationName={organizationName} />
    </div>

    <div className="flex flex-col gap-5 h-[calc(100vh-62px)] overflow-x-auto">
      <ul className="flex flex-col gap-5">
        {ADMIN_NAVIGATION_CONFIG.map(({ key, href, label }) => (
          <AdminPanelItem key={key} href={href} label={label} />
        ))}
      </ul>

      <ul className="flex flex-col gap-5 border-t-1 border-secondary-lighter pt-5">
        {ADMIN_SETTINGS_NAVIGATION_CONFIG.map(({ key, href, label }) => (
          <AdminPanelItem key={key} href={href} label={label} />
        ))}
      </ul>
    </div>
  </div>
);
