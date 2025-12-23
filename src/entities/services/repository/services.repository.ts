import { prisma } from "@shared/lib/prisma-client";

import { ServiceSchema } from "../model/service.model";

export const getAllServices = async () => {
  const services = await prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      description: true,
      isActive: true,
      createdAt: true,
      cover: {
        select: {
          url: true,
          fileName: true,
        },
      },
    },
  });

  return services;
};

export const getService = async (id: string) => {
  const service = await prisma.service.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      isActive: true,
      createdAt: true,
      cover: {
        select: {
          url: true,
          fileName: true,
        },
      },
    },
  });

  return ServiceSchema.parse(service);
};
