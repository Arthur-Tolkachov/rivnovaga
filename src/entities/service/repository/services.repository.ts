import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { ServicesArraySchema, ServiceSchema } from "../model/service.model";

export const getAllServices = unstable_cache(
  async () => {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        description: true,
        isActive: true,
        cover: {
          select: {
            url: true,
            fileName: true,
          },
        },
      },
    });

    return ServicesArraySchema.parse(services);
  },
  ["services"],
  { tags: ["services"] }
);

export const getService = async (id: string) =>
  unstable_cache(
    async () => {
      const service = await prisma.service.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          title: true,
          description: true,
          isActive: true,
          cover: {
            select: {
              url: true,
              fileName: true,
            },
          },
        },
      });

      return ServiceSchema.parse(service);
    },
    ["service", id],
    { tags: ["service"] }
  )();
