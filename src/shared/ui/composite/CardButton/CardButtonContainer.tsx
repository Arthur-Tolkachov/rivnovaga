import cn from "classnames";

interface CardButtonContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export const CardButtonContainer: React.FC<CardButtonContainerProps> = ({
  children,
  className,
}) => (
  <div
    className={cn(
      "h-[300px] bg-secondary-light border-1 border-secondary-lighter hover:opacity-70 transition-all duration-100",
      className
    )}
  >
    {children}
  </div>
);
