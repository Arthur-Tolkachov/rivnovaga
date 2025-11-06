import cn from "classnames";

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto px-6", className)}>{children}</div>
  );
};
