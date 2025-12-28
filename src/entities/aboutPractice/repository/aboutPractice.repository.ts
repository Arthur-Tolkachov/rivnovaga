import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { AboutPracticeSchema } from "../model/aboutPractice.model";

export const getAboutPractice = unstable_cache(
  async () => {
    const aboutPractice = await prisma.setting.findUnique({
      where: {
        key: "about_practice",
      },
    });

    return AboutPracticeSchema.parse(aboutPractice?.value);
  },
  ["aboutPractice"],
  { tags: ["aboutPractice"] }
);
