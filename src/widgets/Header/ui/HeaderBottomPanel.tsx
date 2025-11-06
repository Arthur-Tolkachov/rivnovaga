"use client";

import { usePathname } from "next/navigation";

import { Logo } from "@shared/ui/composite/Logo";
import { Navigation } from "@widgets/Navigation";

export default function HeaderBottomPanel() {
  const pathname = usePathname();

  return (
    <div className="py-6 flex items-center justify-between">
      <Logo />

      <Navigation pathname={pathname} />
    </div>
  );
}
