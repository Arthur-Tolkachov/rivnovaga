import cn from "classnames";

export interface MainSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function MainSection({
  children,
  className,
  ...rest
}: MainSectionProps) {
  return (
    <section className={cn("py-15", className)} {...rest}>
      {children}
    </section>
  );
}
