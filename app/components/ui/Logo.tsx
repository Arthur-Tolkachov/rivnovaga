import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/public/assets/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-6 items-center w-fit group">
      <Image
        src={LogoImg}
        alt="Адвокатське об'єднання «Рівновага»"
        width={70}
        className="group-hover:scale-110 duration-200 ease-in"
      />

      <div className="flex flex-col group-hover:opacity-70 duration-200 ease-in">
        <span className="text-text-light text-xl">
          Адвокатське об&apos;єднання
        </span>

        <span className="text-text-light text-2xl">«Рівновага»</span>
      </div>
    </Link>
  );
}
