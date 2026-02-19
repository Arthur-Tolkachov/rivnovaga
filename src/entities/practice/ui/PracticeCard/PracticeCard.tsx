import cn from "classnames";

import { Button } from "@shared/ui/base/Button";

export interface PracticeCardProps {
  className?: string;
  title: string;
  description: string;
  city: string;
  caseNumber: string;
  proceedingNumber: string;
  href?: string;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({
  className,
  city,
  description,
  title,
  caseNumber,
  proceedingNumber,
  href,
}) => (
  <div
    className={cn(
      "border-1 border-secondary-main p-5 bg-secondary-light flex flex-col justify-between gap-5 opacity-90 hover:opacity-100 duration-200",
      className,
    )}
  >
    <span className="text-secondary-dark">{city}</span>

    <h3 className="text-secondary-darker line-clamp-3">{title}</h3>

    <div className="flex flex-col gap-5">
      <span className="text-secondary-dark">Номер справи {caseNumber}</span>

      <span className="text-secondary-dark">
        Номер провадження {proceedingNumber}
      </span>

      {description && (
        <span
          className="text-secondary-dark line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></span>
      )}

      {href && (
        <Button href={href} size="sm" color="secondary">
          Детальнiше
        </Button>
      )}
    </div>
  </div>
);
