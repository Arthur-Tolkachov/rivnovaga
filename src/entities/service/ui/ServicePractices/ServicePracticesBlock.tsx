import Link from "next/link";

import { PracticeCard, PracticeModel } from "@entity/practice";

interface ServicePracticesBlockProps {
  practices: PracticeModel[];
}

export const ServicePracticesBlock: React.FC<ServicePracticesBlockProps> = ({
  practices,
}) => (
  <div>
    {!!practices.length && (
      <div className="flex flex-col gap-5">
        <h2 className="text-secondary-dark">Пов&apos;язана практика</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {practices.map((practice) => {
            if (!practice.categories) {
              return <></>;
            }

            const href = `/practice/${practice.categories[0]}/${practice.slug}`;

            return (
              <Link key={practice.id} href={href}>
                <PracticeCard
                  caseNumber={practice.caseNumber}
                  city={practice.city}
                  proceedingNumber={practice.proceedingNumber}
                  title={practice.title}
                  description={practice.description}
                />
              </Link>
            );
          })}
        </div>
      </div>
    )}
  </div>
);
