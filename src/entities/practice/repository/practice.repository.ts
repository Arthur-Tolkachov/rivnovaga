import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { PracticesArraySchema, PracticeSchema } from "../model/practice.model";

export const getAllPractices = unstable_cache(
  async () => {
    const practices = await prisma.practice.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        city: true,
        caseNumber: true,
        proceedingNumber: true,
        isActive: true,
        url: true,
        serviceId: true,
        file: {
          select: {
            url: true,
            fileName: true,
          },
        },
      },
    });

    return PracticesArraySchema.parse(practices);
  },
  ["practices"],
  { tags: ["practices"] }
);

export const getPractice = async (id: string) =>
  unstable_cache(
    async () => {
      const practice = await prisma.practice.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          title: true,
          city: true,
          caseNumber: true,
          proceedingNumber: true,
          isActive: true,
          url: true,
          serviceId: true,
          file: {
            select: {
              url: true,
              fileName: true,
            },
          },
        },
      });

      return PracticeSchema.parse(practice);
    },
    ["practice", id],
    { tags: ["practice"] }
  )();
