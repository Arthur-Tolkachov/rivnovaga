import { unstable_cache } from "next/cache";
import { redirect } from "next/navigation";

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
        slug: true,
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
      }),
    );

    return ServicesArraySchema.parse(servicesWithMappedPractices);
  },
  ["services"],
  { tags: ["services"] },
);

export const getAllAvailableServices = unstable_cache(
  async () => {
    const services = await getAllServices();
    const availableServices = services.filter((service) => service.isActive);

    return availableServices;
  },
  ["services"],
  { tags: ["services"] },
);

export const getService = async (slug: string) =>
  unstable_cache(
    async () => {
      const service = await prisma.service.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          title: true,
          description: true,
          isActive: true,
          slug: true,
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

      if (!service) {
        redirect("/admin/services");
      }

      const mappedPractice = service?.practices.map(({ id }) => id);

      return ServiceSchema.parse({ ...service, practices: mappedPractice });
    },
    ["service", slug],
    { tags: [`service-${slug}`] },
  )();

export const getServiceWithPractices = async (slug: string) =>
  unstable_cache(
    async () => {
      const service = await prisma.service.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
          isActive: true,
          practices: {
            select: {
              id: true,
              slug: true,
              caseNumber: true,
              description: true,
              city: true,
              file: true,
              isActive: true,
              proceedingNumber: true,
              title: true,
              url: true,
              categories: true,
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

      const practicesWithMappedCategories = service?.practices.map(
        (practice) => {
          return {
            ...practice,
            categories: practice.categories.map(({ slug }) => slug),
          };
        },
      );

      return ServiceWithPracticesSchema.parse({
        ...service,
        practices: practicesWithMappedCategories,
      });
    },
    ["service", slug],
    { tags: [`service-${slug}`] },
  )();
