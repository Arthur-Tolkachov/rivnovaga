import { unstable_cache } from "next/cache";
import { redirect } from "next/navigation";

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
  { tags: ["lawyers"] },
);

export const getLawyer = async (slug: string) => {
  const lawyers = await getLawyers();

  const lawyer = lawyers?.find((lawyer) => lawyer.slug === slug);

  if (!lawyer) {
    redirect("/admin/lawyers");
  }

  return LawyerSchema.parse(lawyer);
};
