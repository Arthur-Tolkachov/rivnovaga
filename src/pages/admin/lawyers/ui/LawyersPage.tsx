import { LawyersModel } from "@entity/lawyers";
import { UpdateLawyersForm } from "@features/UpdateLawyers";

interface LawyersPageProps {
  lawyers: LawyersModel;
}

export const LawyersPage: React.FC<LawyersPageProps> = ({ lawyers }) => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Адвокати</h2>

    <div className="flex flex-col gap-2">
      <UpdateLawyersForm initialValues={lawyers} />
    </div>
  </div>
);
