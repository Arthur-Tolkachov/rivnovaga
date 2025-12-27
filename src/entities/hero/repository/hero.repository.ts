import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { HeroSchema } from "../model/hero.model";

export const getHero = unstable_cache(
  async () => {
    const hero = await prisma.setting.findUnique({
      where: {
        key: "hero",
      },
      select: {
        key: true,
        value: true,
      },
    });

    return HeroSchema.parse(hero?.value);
  },
  ["hero"],
  { tags: ["hero"] }
);
