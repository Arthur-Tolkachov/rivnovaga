import { EditLawyersForm } from "@features/admin/EditLawyers";

export const LawyersPage = () => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Адвокати</h2>

    <div className="flex flex-col gap-2">
      <EditLawyersForm />
    </div>
  </div>
);
