"use client";

import Link from "next/link";

import { Logo } from "@shared/ui/composite/Logo";

export const AdminPanel = () => {
  return (
    <div className="sticky p-5 left-0 top-0 flex flex-col gap-5 h-screen w-full bg-primary-main">
      <Logo />

      <ul className="flex flex-col gap-5 border-t-1 border-secondary-lighter py-5">
        <li>
          <Link
            href="/admin/profile"
            className="text-secondary-light hover:text-secondary-lighter"
          >
            Основна iнформацiя
          </Link>
        </li>
        <li>
          <Link
            href="/admin/profile"
            className="text-secondary-light hover:text-secondary-lighter"
          >
            Головна сторiнка
          </Link>
        </li>
      </ul>
    </div>
  );
};
