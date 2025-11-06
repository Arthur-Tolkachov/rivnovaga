import cn from "classnames";

export interface LinkProps {
  id?: string;
  children?: React.ReactNode;
  href: string;
  className?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  gap?: number;
  target?: "_blank" | "_self" | "_parent";
}

export const Link: React.FC<LinkProps> = ({
  children,
  startAdornment,
  endAdornment,
  className,
  gap,
  ...rest
}) => {
  return (
    <a className={cn("flex items-center", className)} style={{ gap }} {...rest}>
      {startAdornment && startAdornment}
      {children && <span>{children}</span>}
      {endAdornment && endAdornment}
    </a>
  );
};
