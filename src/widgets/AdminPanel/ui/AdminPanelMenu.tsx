import {
  ADMIN_NAVIGATION_CONFIG,
  ADMIN_SETTINGS_NAVIGATION_CONFIG,
} from "@shared/config/navigation.config";

import { AdminPanelItem } from "./AdminPanelItem";

interface AdminPanelMenuProps {
  isOpen: boolean;
}

export const AdminPanelMenu: React.FC<AdminPanelMenuProps> = ({ isOpen }) => (
  <div
    className="fixed top-[60px] right-0 bottom-0 w-full md:w-2/5 flex flex-col gap-5 bg-primary-main duration-200 px-4 overflow-auto z-2"
    style={{
      transform: isOpen ? "translateX(0)" : `translateX(100%)`,
    }}
  >
    <ul className="flex flex-col gap-5 py-5">
      {ADMIN_NAVIGATION_CONFIG.map(({ key, href, label }) => (
        <AdminPanelItem key={key} href={href} label={label} />
      ))}
    </ul>

    <ul className="flex flex-col gap-5 border-t-1 border-secondary-lighter py-5">
      {ADMIN_SETTINGS_NAVIGATION_CONFIG.map(({ key, href, label }) => (
        <AdminPanelItem key={key} href={href} label={label} />
      ))}
    </ul>
  </div>
);
