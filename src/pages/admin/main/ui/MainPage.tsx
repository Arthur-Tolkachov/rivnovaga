import { EditMainInformationForm } from "@features/admin/EditMainInformationForm";

export const MainPage = () => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Налаштування профiлю</h2>

    <div className="flex flex-col gap-2">
      <div>
        <EditMainInformationForm />
      </div>
    </div>
  </div>
);
