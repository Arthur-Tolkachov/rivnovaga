import { getUsefulMaterials } from "@entity/usefulMaterials";
import { UsefulMaterialsPage } from "@pages/admin/usefulMaterials";

import Error from "../../../error";

export default async function UsefulMaterials() {
  try {
    const usefulMaterials = await getUsefulMaterials();

    return <UsefulMaterialsPage usefulMaterials={usefulMaterials} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
