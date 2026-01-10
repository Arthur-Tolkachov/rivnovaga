import { UsefulMaterialsModel } from "@entity/usefulMaterials";
import { UpdateUsefulMaterialsForm } from "@features/usefulMaterials";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface UsefulMaterialsPageProps {
  usefulMaterials: UsefulMaterialsModel;
}

export const UsefulMaterialsPage: React.FC<UsefulMaterialsPageProps> = async ({
  usefulMaterials,
}) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs
      home={{
        title: "Сторiнка корисних матерiалiв",
        href: "/admin/useful_materials",
      }}
    />

    <h2 className="text-primary-dark">Сторiнка корисних матерiалiв</h2>

    <UpdateUsefulMaterialsForm initialValues={usefulMaterials} />
  </div>
);
