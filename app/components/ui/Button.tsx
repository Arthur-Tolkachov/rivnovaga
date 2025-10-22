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
      filled: "",
      outlined: "",
    },
    secondary: {
      filled: "",
      outlined:
        "border-secondary-main hover:bg-secondary-main hover:text-secondary-dark duration-200",
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
