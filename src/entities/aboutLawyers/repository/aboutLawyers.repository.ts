import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { AboutLawyersSchema } from "../model/aboutLawyers.model";

export const getAboutLawyers = unstable_cache(
  async () => {
    const aboutLawyers = await prisma.setting.findUnique({
      where: {
        key: "about_lawyers",
      },
      select: {
        key: true,
        value: true,
      },
    });

    return AboutLawyersSchema.parse(aboutLawyers?.value);
  },
  ["aboutLawyers"],
  { tags: ["aboutLawyers"] }
);
