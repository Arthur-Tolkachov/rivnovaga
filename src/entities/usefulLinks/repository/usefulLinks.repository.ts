import { prisma } from "@shared/lib/prisma-client";

import { UsefulLinksSchema } from "../model/usefulLinks.model";

export const getUsefulLinks = async () => {
  const usefulLinks = await prisma.setting.findUnique({
    where: {
      key: "useful_links",
    },
    select: {
      key: true,
      value: true,
    },
  });

  return UsefulLinksSchema.parse(usefulLinks?.value);
};
