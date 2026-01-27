"use client";

import { useMobile } from "@shared/lib/useMobile";

import { DesktopAdminPanel } from "./DesktopAdminPanel";
import { MobileAdminPanel } from "./MobileAdminPanel";
import { AdminPanelProps } from "../types/adminPanel.types";

export const AdminPanel: React.FC<AdminPanelProps> = (props) => {
  const isMobile = useMobile();

  if (typeof isMobile !== "boolean") {
    return <div />;
  }

  if (!isMobile) {
    return <DesktopAdminPanel {...props} />;
  }

  return <MobileAdminPanel {...props} />;
};
