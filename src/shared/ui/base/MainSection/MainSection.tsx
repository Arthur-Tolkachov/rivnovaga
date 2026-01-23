export interface MainSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const MainSection: React.FC<MainSectionProps> = ({
  children,
  className,
  ...rest
}) => (
  <section className={className} {...rest}>
    {children}
  </section>
);
