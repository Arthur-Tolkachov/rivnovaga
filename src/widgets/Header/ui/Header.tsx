"use client";

import { useMobile } from "@shared/lib/useMobile";

import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { HeaderProps } from "../types/header.types";

export const Header: React.FC<HeaderProps> = (headerProps) => {
  const isMobile = useMobile(1128);

  if (typeof isMobile !== "boolean") {
    return null;
  }

  if (!isMobile) {
    return <DesktopHeader {...headerProps} />;
  }

  return <MobileHeader {...headerProps} />;
};
