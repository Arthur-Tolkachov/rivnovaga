import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { UsefulLinkSchema, UsefulLinksSchema } from "../model/usefulLink.model";

export const getUsefulLinks = unstable_cache(
  async () => {
    const usefulLinks = await prisma.setting.findUnique({
      where: {
        key: "useful_links",
      },
      select: {
        key: true,
        value: true,
      },
    });

    return UsefulLinksSchema.parse(usefulLinks?.value || []);
  },
  ["usefulLinks"],
  { tags: ["usefulLinks"] }
);

export const getAvailableUsefulLinks = unstable_cache(
  async () => {
    const usefulLinks = await getUsefulLinks();
    const availableUsefulLinks = usefulLinks.filter(
      (usefulLink) => usefulLink.isActive
    );

    return availableUsefulLinks;
  },
  ["usefulLinks"],
  { tags: ["usefulLinks"] }
);

export const getUsefulLink = async (id: string) =>
  unstable_cache(
    async () => {
      const usefulLinks = await getUsefulLinks();

      const usefulLink = usefulLinks.find((usefulLink) => usefulLink.id === id);

      return UsefulLinkSchema.parse(usefulLink);
    },
    ["usefulLink", id],
    {
      tags: ["usefulLink"],
    }
  )();
