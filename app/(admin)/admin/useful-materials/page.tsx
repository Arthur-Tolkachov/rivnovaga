import { Metadata } from "next";

import { getUsefulMaterials } from "@entity/usefulMaterials";
import { UsefulMaterialsPage } from "@pages/admin/usefulMaterials";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Сторiнка корисних матерiалiв | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function UsefulMaterials() {
  try {
    const usefulMaterials = await getUsefulMaterials();

    return <UsefulMaterialsPage usefulMaterials={usefulMaterials} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
