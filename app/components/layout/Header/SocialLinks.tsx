import Link from "@/app/components/ui/Link";
import TelegramIcon from "@/public/assets/icons/telegram.svg";
import ViberIcon from "@/public/assets/icons/viber.svg";
import WhatsAppIcon from "@/public/assets/icons/whatsapp.svg";

export function SocialLinks() {
  return (
    <ul className="flex gap-6">
      <li>
        <Link
          href="/"
          className="hover:opacity-70 duration-200 ease-in"
          startAdornment={<TelegramIcon className="w-5 h-5 fill-text-light" />}
        />
      </li>
      <li>
        <Link
          href="/"
          className="hover:opacity-70 duration-200 ease-in"
          startAdornment={<ViberIcon className="w-5 h-5 fill-text-light" />}
        />
      </li>
      <li>
        <Link
          href="/"
          className="hover:opacity-70 duration-200 ease-in"
          startAdornment={<WhatsAppIcon className="w-5 h-5 fill-text-light" />}
        />
      </li>
    </ul>
  );
}
