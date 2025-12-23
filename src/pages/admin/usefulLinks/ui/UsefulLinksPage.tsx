import { UsefulLinkModel } from "@entity/usefulLinks";
import { UpdateUsefulLinksForm } from "@features/UpdateUsefulLinks";

interface UsefulLinksPageProps {
  usefulLinks: UsefulLinkModel[];
}

export const UsefulLinksPage: React.FC<UsefulLinksPageProps> = ({
  usefulLinks,
}) => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Кориснi посилання</h2>

    <div className="flex flex-col gap-2">
      <UpdateUsefulLinksForm initialValues={usefulLinks} />
    </div>
  </div>
);
