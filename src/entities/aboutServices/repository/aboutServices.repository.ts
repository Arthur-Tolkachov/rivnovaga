import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { AboutServicesSchema } from "../model/aboutServices.model";

export const getAboutServices = unstable_cache(
  async () => {
    const aboutServices = await prisma.setting.findUnique({
      where: {
        key: "about_services",
      },
      select: {
        key: true,
        value: true,
      },
    });

    return AboutServicesSchema.parse(aboutServices?.value);
  },
  ["aboutServices"],
  { tags: ["aboutServices"] }
);
