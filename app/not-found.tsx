import Link from "next/link";
import "./globals.css";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full">
      <h2 className="text-primary-dark">404</h2>

      <h1 className="text-primary-dark">Сторiнку не знайдено</h1>

      <Link href="/" className="text-primary-main underline">
        Повернутись на головну сторiнку
      </Link>
    </div>
  );
}
