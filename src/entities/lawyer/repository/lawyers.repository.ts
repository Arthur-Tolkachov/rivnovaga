import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { LawyersArraySchema, LawyerSchema } from "../model/lawyer.model";

export const getLawyers = unstable_cache(
  async () => {
    const lawyers = await prisma.setting.findUnique({
      where: {
        key: "lawyers",
      },
      select: {
        key: true,
        value: true,
      },
    });

    return LawyersArraySchema.parse(lawyers?.value || []);
  },
  ["lawyers"],
  { tags: ["lawyers"] }
);

export const getLawyer = async (id: string) =>
  unstable_cache(
    async () => {
      const lawyers = await getLawyers();

      const lawyer = lawyers.find((lawyer) => lawyer.id === id);

      return LawyerSchema.parse(lawyer);
    },
    ["lawyer", id],
    { tags: ["lawyer"] }
  )();
