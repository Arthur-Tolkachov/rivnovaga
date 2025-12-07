import { EditUsefulLinksForm } from "@features/admin/EditUsefulLinks";

export const UsefulLinksPage = () => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Кориснi посилання</h2>

    <div className="flex flex-col gap-2">
      <EditUsefulLinksForm />
    </div>
  </div>
);
