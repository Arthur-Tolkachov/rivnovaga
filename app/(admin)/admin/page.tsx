import { MainInformationForm } from "@/src/components/forms/MainInformationForm/MainInformationForm";

export default function Main() {
  return (
    <div>
      <h2 className="text-primary-dark">Основна iнформацiя</h2>

      <div className="flex flex-col gap-2">
        <div className="max-w-[500px]">
          <MainInformationForm />
        </div>
      </div>
    </div>
  );
}
