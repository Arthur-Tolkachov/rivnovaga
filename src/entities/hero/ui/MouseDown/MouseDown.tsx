"use client";

import MouseIcon from "@public/assets/icons/mouse.svg";
import { useMobile } from "@shared/lib/useMobile";
import { Link } from "@shared/ui/base/Link";

interface MouseDownProps {
  anchor: string;
}

export const MouseDown: React.FC<MouseDownProps> = ({ anchor }) => {
  const isMobile = useMobile();

  if (typeof isMobile !== "boolean" || isMobile) {
    return null;
  }

  return (
    <Link
      href={anchor}
      className="w-fit absolute bottom-10 left-2/4 ml-[-7px]"
      startAdornment={
        <MouseIcon className="w-15 h-auto fill-secondary-light hover:fill-secondary-main duration-200" />
      }
    />
  );
};
