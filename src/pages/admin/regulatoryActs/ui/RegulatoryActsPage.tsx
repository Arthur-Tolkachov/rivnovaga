import { RegulatoryActModel } from "@entity/regulatoryActs";
import { UpdateRegulatoryActsForm } from "@features/regulatoryActs/UpdateRegulatoryActs";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface RegulatoryActsPageProps {
  regulatoryActs: RegulatoryActModel[];
}

export const RegulatoryActsPage: React.FC<RegulatoryActsPageProps> = ({
  regulatoryActs,
}) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs
      home={{
        title: "Нормативно-правові акти",
        href: "/admin/regulatory_acts",
      }}
    />

    <h2 className="text-primary-dark">Нормативно-правові акти</h2>

    <UpdateRegulatoryActsForm initialValues={regulatoryActs} />
  </div>
);
