"use client";

import cn from "classnames";

import PlusIcon from "@public/assets/icons/plus.svg";

import { CardButtonContainer } from "./CardButtonContainer";

export interface CardButtonProps {
  className?: string;
  href?: string;
  onClick?: VoidFunction;
}

export const CardButton: React.FC<CardButtonProps> = ({
  className,
  href,
  onClick,
}) => (
  <CardButtonContainer className={cn("relative", className)}>
    <div className="fill-secondary-main absolute inset-0 flex justify-center items-center">
      <PlusIcon className="w-[100px] h-[100px]" />
    </div>

    {href ? (
      <a href={href} className="block relative w-full h-full" />
    ) : (
      <button
        onClick={onClick}
        className="block w-full h-full cursor-pointer relative"
      />
    )}
  </CardButtonContainer>
);
