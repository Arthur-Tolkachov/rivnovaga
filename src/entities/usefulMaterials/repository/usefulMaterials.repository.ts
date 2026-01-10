import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { UsefulMaterialsSchema } from "../model/usefulMaterials.model";

export const getUsefulMaterials = unstable_cache(
  async () => {
    const aboutLawyers = await prisma.setting.findUnique({
      where: {
        key: "useful_materials",
      },
      select: {
        key: true,
        value: true,
      },
    });

    return UsefulMaterialsSchema.parse(aboutLawyers?.value);
  },
  ["usefulMaterials"],
  { tags: ["usefulMaterials"] }
);
