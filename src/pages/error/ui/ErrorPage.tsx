import Link from "next/link";

export const ErrorPage = () => (
  <div className="flex flex-col gap-5 justify-center items-center h-screen">
    <h1 className="text-primary-dark">На жаль сталася помилка</h1>

    <Link href="/" className="text-primary-main underline">
      Повернутись на головну сторiнку
    </Link>
  </div>
);
