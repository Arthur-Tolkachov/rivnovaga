import { unstable_cache } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@shared/lib/prisma-client";

import {
  PracticeCategoryArraySchema,
  PracticeCategorySchema,
  PracticeCategoryWithPracticesSchema,
} from "../model/practiceCategory.model";

export const getPracticeCategories = unstable_cache(
  async () => {
    const practiceCategories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
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

    const practiceCategoriesWithMappedPractices = practiceCategories.map(
      ({ practices, ...practiceCategory }) => ({
        ...practiceCategory,
        practices: practices.map(({ id }) => id),
      }),
    );

    return PracticeCategoryArraySchema.parse(
      practiceCategoriesWithMappedPractices,
    );
  },
  ["practice_categories"],
  { tags: ["practice_categories"] },
);

export const getPracticeCategory = async (slug: string) =>
  unstable_cache(
    async () => {
      const practiceCategory = await prisma.category.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
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

      if (!practiceCategory) {
        redirect("/admin/practice-categories");
      }

      const mappedPractice = practiceCategory.practices.map(({ id }) => id);

      return PracticeCategorySchema.parse({
        ...practiceCategory,
        practices: mappedPractice,
      });
    },
    ["practice_category", slug],
    { tags: [`practice_category-${slug}`] },
  )();

export const getPracticeCategoryWithPractices = async (slug: string) =>
  unstable_cache(
    async () => {
      const practiceCategory = await prisma.category.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
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

      return PracticeCategoryWithPracticesSchema.parse(practiceCategory);
    },
    ["practice_category", slug],
    { tags: ["practice_category"] },
  )();
