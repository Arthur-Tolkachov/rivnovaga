import cn from "classnames";
import Link from "next/link";

type ButtonVariant = "outlined-light" | "outlined-dark" | "filled" | "rounded";
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
        "w-fit px-8 py-4 bg-primary-main border-primary-main hover:bg-primary-dark duration-200",
      rounded:
        "rounded-full bg-primary-main border-primary-main w-[50px] h-[50px] hover:bg-primary-lighter hover:border-primary-lighter duration-200",
      ["outlined-light"]:
        "w-fit px-8 py-4 bg-primary-main border-secondary-main text-primary-light",
      ["outlined-dark"]:
        "w-fit px-8 py-4 bg-primary-main border-primary-main text-primary-dark",
    },
    secondary: {
      filled: "w-fit px-8 py-4 border-primary-main",
      rounded:
        "rounded-full bg-secondary-main border-secondary-main w-[50px] h-[50px] hover:bg-secondary-lighter hover:border-secondary-lighter duration-200",
      ["outlined-light"]:
        "w-fit px-8 py-4 border-secondary-main text-secondary-light hover:bg-secondary-main hover:text-secondary-dark duration-200",
      ["outlined-dark"]:
        "w-fit px-8 py-4 border-secondary-main text-secondary-darker hover:bg-secondary-main hover:text-secondary-dark duration-200",
    },
  };

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "flex justify-center items-center cursor-pointer text-xl border-solid border-2 text-center",
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
        "flex justify-center items-center cursor-pointer text-xl border-solid border-2 text-center",
        buttonStyles[color][variant],
        className
      )}
    >
      {children}
    </button>
  );
}
