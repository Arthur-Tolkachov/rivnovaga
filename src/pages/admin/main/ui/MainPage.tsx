import { EditMainInformationForm } from "@features/admin/EditMainInformationForm";

export const MainPage = () => (
  <div>
    <h2 className="text-primary-dark">Основна iнформацiя</h2>

    <div className="flex flex-col gap-2">
      <div className="max-w-[500px]">
        <EditMainInformationForm />
      </div>
    </div>
  </div>
);
