import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { RegulatoryActsSchema } from "../model/regulatoryActs.model";

export const getRegulatoryActs = unstable_cache(
  async () => {
    const regulatoryActs = await prisma.setting.findUnique({
      where: {
        key: "regulatory_acts",
      },
      select: {
        key: true,
        value: true,
      },
    });

    return RegulatoryActsSchema.parse(regulatoryActs?.value || []);
  },
  ["regulatoryActs"],
  { tags: ["regulatoryActs"] }
);
