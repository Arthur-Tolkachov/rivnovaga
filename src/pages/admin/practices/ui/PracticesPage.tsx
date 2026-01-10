import Link from "next/link";

import { PracticeCard, PracticeModel } from "@entity/practice";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";
import { CardButton } from "@shared/ui/composite/CardButton";

interface PracticesPageProps {
  practices: PracticeModel[];
}

export const PracticesPage: React.FC<PracticesPageProps> = async ({
  practices,
}) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs home={{ title: "Практика", href: "/admin/practices" }} />

    <h2 className="text-primary-dark">Практика</h2>

    <div className="grid grid-cols-4 gap-5">
      <CardButton className="h-[350px]" href="/admin/practices/new" />

      {practices.map(({ id, title, city, caseNumber, proceedingNumber }) => (
        <Link key={id} href={`/admin/practices/${id}`}>
          <PracticeCard
            className="h-[350px]"
            title={title}
            city={city}
            caseNumber={caseNumber}
            proceedingNumber={proceedingNumber}
            disabled
          />
        </Link>
      ))}
    </div>
  </div>
);
