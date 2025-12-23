import { prisma } from "@shared/lib/prisma-client";

import { CtaSchema } from "../model/cta.model";

export const getCta = async () => {
  const hero = await prisma.setting.findUnique({
    where: {
      key: "cta",
    },
    select: {
      key: true,
      value: true,
    },
  });

  return CtaSchema.parse(hero?.value);
};
