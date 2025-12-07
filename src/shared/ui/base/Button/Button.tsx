import cn from "classnames";
import Link from "next/link";

import { Spinner } from "../Spinner";
import {
  BUTTON_STYLES,
  DEFAULT_SIZES_STYLES,
  ROUNDED_SIZES_STYLES,
} from "./constants";

type ButtonVariant = "outlined-light" | "outlined-dark" | "filled" | "rounded";
type ButtonColor = "primary" | "secondary";

export interface ButtonProps {
  type?: "submit" | "button";
  children: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
  href?: string;
  disabled?: boolean;
  isLoading?: boolean;
  size?: "sm" | "md";
  onClick?: VoidFunction;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  color = "primary",
  type = "button",
  href,
  className,
  disabled,
  isLoading,
  size = "md",
  onClick,
}) => {
  const buttonSizeStyles =
    variant === "rounded"
      ? ROUNDED_SIZES_STYLES[size]
      : DEFAULT_SIZES_STYLES[size];

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "flex justify-center items-center cursor-pointer text-xl border-solid border-2 text-center",
          BUTTON_STYLES[color][variant],
          className
        )}
        style={{ ...buttonSizeStyles }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "relative flex justify-center items-center cursor-pointer text-xl border-solid border-2 text-center",
        BUTTON_STYLES[color][variant],
        className
      )}
      style={{
        ...(disabled && {
          cursor: "default",
          opacity: 0.8,
          pointerEvents: "none",
        }),
        ...buttonSizeStyles,
      }}
      disabled={disabled}
    >
      <Spinner
        className="absolute"
        width={30}
        height={30}
        variant="light"
        show={isLoading}
      />

      <span
        style={{
          opacity: isLoading ? 0 : 1,
        }}
      >
        {children}
      </span>
    </button>
  );
};
