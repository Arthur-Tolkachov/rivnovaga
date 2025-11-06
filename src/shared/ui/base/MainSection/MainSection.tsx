import cn from "classnames";

export interface MainSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const MainSection: React.FC<MainSectionProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section className={cn("py-15", className)} {...rest}>
      {children}
    </section>
  );
};
