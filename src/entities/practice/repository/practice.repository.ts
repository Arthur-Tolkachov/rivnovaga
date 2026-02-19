import { unstable_cache } from "next/cache";
import { redirect } from "next/navigation";

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
        slug: true,
        description: true,
        caseNumber: true,
        proceedingNumber: true,
        isActive: true,
        url: true,
        services: true,
        file: {
          select: {
            url: true,
            fileName: true,
          },
        },
      },
    });

    const practicesWithMappedServices = practices.map(
      ({ services, ...practice }) => ({
        ...practice,
        services: services.map(({ id }) => id),
      }),
    );

    return PracticesArraySchema.parse(practicesWithMappedServices);
  },
  ["practices"],
  { tags: ["practices"] },
);

export const getPracticesBySlug = unstable_cache(
  async (slug: string) => {
    const practices = await prisma.practice.findMany({
      where: {
        categories: { some: { slug } },
      },
      select: {
        id: true,
        title: true,
        description: true,
        city: true,
        slug: true,
        caseNumber: true,
        proceedingNumber: true,
        isActive: true,
        url: true,
        services: { select: { id: true } },
        file: {
          select: {
            url: true,
            fileName: true,
          },
        },
      },
    });

    const practicesWithMappedServices = practices.map(
      ({ services, ...practice }) => ({
        ...practice,
        services: services.map(({ id }) => id),
      }),
    );

    return PracticesArraySchema.parse(practicesWithMappedServices);
  },
  ["practices"],
  { tags: ["practices"] },
);

export const getAvailablePractices = unstable_cache(
  async () => {
    const practices = await getAllPractices();

    return practices;
  },
  ["practices"],
  { tags: ["practices"] },
);

export const getPractice = async (slug: string) =>
  unstable_cache(
    async () => {
      const practice = await prisma.practice.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          title: true,
          description: true,
          slug: true,
          city: true,
          caseNumber: true,
          proceedingNumber: true,
          isActive: true,
          url: true,
          services: true,
          categories: true,
          file: {
            select: {
              url: true,
              fileName: true,
            },
          },
        },
      });

      if (!practice) {
        redirect("/admin/practices");
      }

      const mappedServices = practice?.services.map(({ id }) => id);
      const mappedCategories = practice?.categories.map(({ id }) => id);

      return PracticeSchema.parse({
        ...practice,
        categories: mappedCategories,
        services: mappedServices,
      });
    },
    ["practice", slug],
    { tags: ["practices", `practice-${slug}`] },
  )();
