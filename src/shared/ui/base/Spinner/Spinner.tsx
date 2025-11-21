"use client";

import { Oval } from "react-loader-spinner";

export interface SpinnerProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "primary" | "secondary" | "light";
  show?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  width = 80,
  height = 80,
  variant = "primary",
  show = false,
}) => {
  const color = {
    primary: "var(--color-primary-main)",
    secondary: "var(--color-secondary-main)",
    light: "var(--color-secondary-light)",
  }[variant];

  return (
    <Oval
      height={height}
      width={width}
      color={color}
      visible={show}
      ariaLabel="oval-loading"
      secondaryColor={color}
      strokeWidth={5}
      strokeWidthSecondary={5}
      wrapperClass={className}
    />
  );
};
