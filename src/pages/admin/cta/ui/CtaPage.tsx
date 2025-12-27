import { CtaModel } from "@entity/cta";
import { UpdateCtaSectionForm } from "@features/cta";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface CtaPageProps {
  cta: CtaModel;
}

export const CtaPage: React.FC<CtaPageProps> = ({ cta }) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs
      home={{ title: "Секція заклику до дії", href: "/admin/cta" }}
    />

    <h2 className="text-primary-dark">Налаштування секції заклику до дії</h2>

    <div className="flex flex-col gap-2">
      <UpdateCtaSectionForm initialValues={cta} />
    </div>
  </div>
);
