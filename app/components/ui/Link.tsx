import cn from "classnames";

export interface LinkProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
  startAdornment?: React.ReactNode;
}

export default function Link({
  children,
  startAdornment,
  className,
  ...rest
}: LinkProps) {
  return (
    <a className={cn("flex gap-5 items-center", className)} {...rest}>
      {startAdornment && startAdornment}
      {children && <span>{children}</span>}
    </a>
  );
}
