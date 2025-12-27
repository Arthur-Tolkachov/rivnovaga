import { unstable_cache } from "next/cache";
import z from "zod";

import { prisma } from "@shared/lib/prisma-client";

import { AboutSchema } from "../model/about.model";

export const getAbout = unstable_cache(
  async () => {
    const about = await prisma.setting.findUnique({
      where: {
        key: "about",
      },
    });

    return z.array(AboutSchema).parse(about?.value);
  },
  ["about"],
  { tags: ["about"] }
);
