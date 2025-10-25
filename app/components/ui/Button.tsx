import cn from "classnames";

type ButtonVariant = "outlined" | "filled";
type ButtonColor = "primary" | "secondary";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

export default function Button({
  children,
  variant = "filled",
  color = "primary",
}: ButtonProps) {
  const buttonStyles = {
    primary: {
      filled:
        "bg-primary-main border-primary-main hover:bg-primary-dark duration-200",
      outlined: "bg-secondary-main border-secondary-main",
    },
    secondary: {
      filled: "border-primary-main",
      outlined:
        "border-secondary-main hover:bg-secondary-main hover:text-secondary-darker duration-200",
    },
  };

  return (
    <button
      className={cn(
        "cursor-pointer w-fit px-8 py-4 text-text-light text-xl border-solid border-2",
        buttonStyles[color][variant]
      )}
    >
      {children}
    </button>
  );
}
