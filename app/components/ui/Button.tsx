import cn from "classnames";
import Link from "next/link";

type ButtonVariant = "outlined-light" | "outlined-dark" | "filled";
type ButtonColor = "primary" | "secondary";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
  href?: string;
  onClick?: VoidFunction;
}

export default function Button({
  children,
  variant = "filled",
  color = "primary",
  href,
  className,
  onClick,
}: ButtonProps) {
  const buttonStyles = {
    primary: {
      filled:
        "bg-primary-main border-primary-main hover:bg-primary-dark duration-200",
      ["outlined-light"]:
        "bg-primary-main border-secondary-main text-primary-light",
      ["outlined-dark"]:
        "bg-primary-main border-primary-main text-primary-dark",
    },
    secondary: {
      filled: "border-primary-main",
      ["outlined-light"]:
        "border-secondary-main text-secondary-light hover:bg-secondary-main hover:text-secondary-darker duration-200",
      ["outlined-dark"]:
        "border-secondary-main text-secondary-darker hover:bg-secondary-main hover:text-secondary-darker duration-200",
    },
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "cursor-pointer w-fit px-8 py-4 text-xl border-solid border-2 text-center",
          buttonStyles[color][variant],
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer w-fit px-8 py-4 text-xl border-solid border-2 text-center",
        buttonStyles[color][variant],
        className
      )}
    >
      {children}
    </button>
  );
}
