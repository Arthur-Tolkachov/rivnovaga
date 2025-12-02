import { EditCtaSectionForm } from "@features/admin/EditCtaSectionForm";

export const CtaPage = () => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Налаштування секції заклику до дії</h2>

    <div className="flex flex-col gap-2">
      <EditCtaSectionForm />
    </div>
  </div>
);
