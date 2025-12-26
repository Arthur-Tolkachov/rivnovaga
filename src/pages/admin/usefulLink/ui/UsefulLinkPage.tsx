import { UsefulLinkModel } from "@entity/usefulLink";
import { CreateUsefulLinkForm } from "@features/usefulLink/CreateUsefulLink";
import { UpdateUsefulLinkForm } from "@features/usefulLink/UpdateUsefulLink";

interface UsefulLinkPageProps {
  usefulLink?: UsefulLinkModel;
}

export const UsefulLinkPage: React.FC<UsefulLinkPageProps> = ({
  usefulLink,
}) => {
  const title = usefulLink
    ? "Редагування роздiлу корисних посилань"
    : "Новий роздiл корисних посилань";

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-primary-dark">{title}</h2>

      <div className="flex flex-col gap-2">
        {usefulLink ? (
          <UpdateUsefulLinkForm initialValues={usefulLink} />
        ) : (
          <CreateUsefulLinkForm />
        )}
      </div>
    </div>
  );
};
