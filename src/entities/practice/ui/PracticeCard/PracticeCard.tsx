import cn from "classnames";

import { Button } from "@shared/ui/base/Button";

export interface PracticeCardProps {
  className?: string;
  title: string;
  city: string;
  caseNumber: string;
  proceedingNumber: string;
  href?: string | null;
  fileUrl?: string | null;
  disabled?: boolean;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({
  className,
  city,
  href,
  title,
  caseNumber,
  proceedingNumber,
  fileUrl,
  disabled,
}) => (
  <div
    className={cn(
      "border-1 border-secondary-main p-5 bg-secondary-light flex flex-col justify-between gap-5 opacity-90 hover:opacity-100 duration-200",
      className
    )}
  >
    <span className="text-secondary-dark">{city}</span>

    <h3 className="text-secondary-darker line-clamp-3">{title}</h3>

    <div className="flex flex-col">
      <span className="text-secondary-dark">Номер справи {caseNumber}</span>

      <span className="text-secondary-dark">
        Номер провадження {proceedingNumber}
      </span>

      <div className="flex gap-5 mt-5">
        {href && (
          <Button
            href={href}
            color="secondary"
            variant="outlined-dark"
            size="sm"
            target="_blank"
            disabled={disabled}
          >
            Рішення в ЄРДСР
          </Button>
        )}

        {fileUrl && (
          <Button
            href={fileUrl}
            target="_blank"
            size="sm"
            color="secondary"
            variant="filled"
            disabled={disabled}
          >
            PDF
          </Button>
        )}
      </div>
    </div>
  </div>
);
