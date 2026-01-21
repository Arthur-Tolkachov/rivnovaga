import { UsefulLinkModel } from "@entity/usefulLink";
import { CreateUsefulLinkForm } from "@features/usefulLink/CreateUsefulLink";
import { UpdateUsefulLinkForm } from "@features/usefulLink/UpdateUsefulLink";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface UsefulLinkPageProps {
  usefulLink?: UsefulLinkModel;
}

export const UsefulLinkPage: React.FC<UsefulLinkPageProps> = ({
  usefulLink,
}) => {
  const title = usefulLink
    ? "Редагування роздiлу корисних посилань"
    : "Новий роздiл корисних посилань";

  const breadCrumbsConfig = [
    {
      key: usefulLink?.id || "usefulLink",
      title: usefulLink ? usefulLink.title : "Новий роздiл корисних посилань",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <BreadCrumbs
        home={{ title: "Кориснi посилання", href: "/admin/useful-links" }}
        config={breadCrumbsConfig}
      />

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
