"use client";

import { usePathname } from "next/navigation";

import Logo from "../../ui/Logo";
import Navigation from "../Navigation/Navigation";

export default function HeaderBottom() {
  const pathname = usePathname();

  return (
    <div className="py-6 flex items-center justify-between">
      <Logo />

      <Navigation pathname={pathname} />
    </div>
  );
}
