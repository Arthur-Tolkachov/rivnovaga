import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import {
  ServicesArraySchema,
  ServiceSchema,
  ServiceWithPracticesSchema,
} from "../model/service.model";

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
        practices: {
          select: {
            id: true,
          },
        },
        cover: {
          select: {
            url: true,
            fileName: true,
          },
        },
      },
    });

    const servicesWithMappedPractices = services.map(
      ({ practices, ...service }) => ({
        ...service,
        practices: practices.map(({ id }) => id),
      })
    );

    return ServicesArraySchema.parse(servicesWithMappedPractices);
  },
  ["services"],
  { tags: ["services"] }
);

export const getAllAvailableServices = unstable_cache(
  async () => {
    const services = await getAllServices();
    const availableServices = services.filter((service) => service.isActive);

    return availableServices;
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
          practices: {
            select: {
              id: true,
            },
          },
          cover: {
            select: {
              url: true,
              fileName: true,
            },
          },
        },
      });

      const mappedPractice = service?.practices.map(({ id }) => id);

      return ServiceSchema.parse({ ...service, practices: mappedPractice });
    },
    ["service", id],
    { tags: ["service"] }
  )();

export const getServiceWithPractices = async (id: string) =>
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
          practices: {
            select: {
              id: true,
              caseNumber: true,
              city: true,
              file: true,
              isActive: true,
              proceedingNumber: true,
              title: true,
              url: true,
            },
          },
          cover: {
            select: {
              url: true,
              fileName: true,
            },
          },
        },
      });

      return ServiceWithPracticesSchema.parse(service);
    },
    ["service", id],
    { tags: ["service"] }
  )();
