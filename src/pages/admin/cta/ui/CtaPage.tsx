import { CtaModel } from "@entity/cta";
import { UpdateCtaSectionForm } from "@features/UpdateCtaSection";

interface CtaPageProps {
  cta: CtaModel;
}

export const CtaPage: React.FC<CtaPageProps> = ({ cta }) => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Налаштування секції заклику до дії</h2>

    <div className="flex flex-col gap-2">
      <UpdateCtaSectionForm initialValues={cta} />
    </div>
  </div>
);
