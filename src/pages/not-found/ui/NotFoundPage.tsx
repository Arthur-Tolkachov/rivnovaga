"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NotFoundPage = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.includes("/admin/");

  const href = isAdminPage ? "/admin" : "/";

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-primary-dark">Cторiнку не знайдено</h1>

      <Link href={href} className="text-primary-main underline">
        Повернутись на головну сторiнку
      </Link>
    </div>
  );
};
