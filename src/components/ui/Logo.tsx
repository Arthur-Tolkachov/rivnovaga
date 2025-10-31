import cn from "classnames";
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
        height={70}
        priority
      />

      <div
        className={cn(
          "flex flex-col text-secondary-light duration-200",
          "group-hover:text-secondary-lighter"
        )}
      >
        <span className="text-xl">Адвокатське об&apos;єднання</span>

        <span className="text-2xl">«Рівновага»</span>
      </div>
    </Link>
  );
}
