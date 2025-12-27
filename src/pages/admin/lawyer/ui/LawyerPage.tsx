import { LawyerModel } from "@entity/lawyer";
import { CreateLawyerForm } from "@features/lawyer/CreateLawyer";
import { UpdateLawyerForm } from "@features/lawyer/UpdateLawyer";

interface LawyerPageProps {
  lawyer?: LawyerModel;
}

export const LawyerPage: React.FC<LawyerPageProps> = async ({ lawyer }) => {
  const title = lawyer ? "Редагування адвоката" : "Новий адвокат";

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-primary-dark">{title}</h2>

      {lawyer ? (
        <UpdateLawyerForm initialValues={lawyer} />
      ) : (
        <CreateLawyerForm />
      )}
    </div>
  );
};
