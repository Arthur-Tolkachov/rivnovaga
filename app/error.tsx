"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full">
      <h2 className="text-primary-dark">500</h2>

      <h1 className="text-primary-dark">На жаль сталася помилка</h1>

      <Link href="/" className="text-primary-main underline">
        Повернутись на головну сторiнку
      </Link>
    </div>
  );
}
