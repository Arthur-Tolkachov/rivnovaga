import { LawyerModel } from "@entity/lawyer";
import { CreateLawyerForm } from "@features/lawyer/CreateLawyer";
import { UpdateLawyerForm } from "@features/lawyer/UpdateLawyer";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface LawyerPageProps {
  lawyer?: LawyerModel;
}

export const LawyerPage: React.FC<LawyerPageProps> = async ({ lawyer }) => {
  const title = lawyer ? "Редагування адвоката" : "Новий адвокат";

  const breadCrumbsConfig = [
    {
      key: lawyer?.id || "lawyer",
      title: lawyer
        ? `${lawyer.surname} ${lawyer.name} ${lawyer.patronymic}`
        : "Новий адвокат",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <BreadCrumbs
        home={{ title: "Адвокати", href: "/admin/lawyers" }}
        config={breadCrumbsConfig}
      />

      <h2 className="text-primary-dark">{title}</h2>

      {lawyer ? (
        <UpdateLawyerForm initialValues={lawyer} />
      ) : (
        <CreateLawyerForm />
      )}
    </div>
  );
};
