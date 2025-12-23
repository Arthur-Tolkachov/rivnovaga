"use client";

import { ADMIN_NAVIGATION_CONFIG } from "@shared/config/navigation.config";
import { Logo } from "@shared/ui/composite/Logo";

import { AdminPanelItem } from "./AdminPanelItem";

export const AdminPanel = () => (
  <div className="sticky p-5 left-0 top-0 flex flex-col gap-5 h-screen w-full bg-primary-main">
    <Logo />

    <ul className="flex flex-col gap-5 border-t-1 border-secondary-lighter py-5">
      {ADMIN_NAVIGATION_CONFIG.map(({ key, href, label }) => (
        <AdminPanelItem key={key} href={href} label={label} />
      ))}
    </ul>
  </div>
);
