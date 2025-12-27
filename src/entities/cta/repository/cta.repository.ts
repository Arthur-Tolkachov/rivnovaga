import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { CtaSchema } from "../model/cta.model";

export const getCta = unstable_cache(
  async () => {
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
  },
  ["cta"],
  { tags: ["cta"] }
);
