import cn from "classnames";

export interface PracticeCardProps {
  className?: string;
  title: string;
  description: string;
  city: string;
  caseNumber: string;
  proceedingNumber: string;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({
  className,
  city,
  description,
  title,
  caseNumber,
  proceedingNumber,
}) => (
  <div
    className={cn(
      "border-1 border-secondary-main p-5 bg-secondary-light flex flex-col justify-between gap-5 opacity-90 hover:opacity-100 duration-200",
      className,
    )}
  >
    <span className="text-secondary-dark">{city}</span>

    <h3 className="text-secondary-darker line-clamp-3">{title}</h3>

    <div className="flex flex-col">
      <span className="text-secondary-dark">Номер справи {caseNumber}</span>

      <span className="text-secondary-dark">
        Номер провадження {proceedingNumber}
      </span>

      <span
        className="text-secondary-dark mt-5 line-clamp-2"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></span>
    </div>
  </div>
);
