"use client";

import { Logo } from "@shared/ui/composite/Logo";
import { Navigation } from "@widgets/Navigation";

export default function HeaderBottomPanel() {
  return (
    <div className="py-6 flex items-center justify-between">
      <Logo />

      <Navigation />
    </div>
  );
}
