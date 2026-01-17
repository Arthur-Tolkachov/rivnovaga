"use client";

import { Logo } from "@shared/ui/composite/Logo";
import { LogoProps } from "@shared/ui/composite/Logo/Logo";
import { Navigation } from "@widgets/Navigation";

export type HeaderBottomPanelProps = LogoProps;

export const HeaderBottomPanel: React.FC<HeaderBottomPanelProps> = ({
  logo,
  organizationName,
}) => (
  <div className="py-6 flex items-center justify-between">
    <Logo logo={logo} organizationName={organizationName} />

    <Navigation />
  </div>
);
