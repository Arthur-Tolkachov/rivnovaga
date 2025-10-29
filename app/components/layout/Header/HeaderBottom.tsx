"use client";

import { usePathname } from "next/navigation";

import Navigation from "@/app/components/layout/Navigation/Navigation";
import Logo from "@/app/components/ui/Logo";

export default function HeaderBottom() {
  const pathname = usePathname();

  return (
    <div className="py-6 flex items-center justify-between">
      <Logo />

      <Navigation pathname={pathname} />
    </div>
  );
}
