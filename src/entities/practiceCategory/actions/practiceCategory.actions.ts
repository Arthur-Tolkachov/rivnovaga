"use server";

import { Prisma } from "@prisma/client";
import { revalidateTag } from "next/cache";

import { FileDto } from "@entity/upload";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

import { PracticeCategoryDTO } from "../model/practiceCategory.dto";

export const createPracticeCategory = async (
  id: string,
  { cover, practices, ...dto }: PracticeCategoryDTO,
) => {
  try {
    const practicesArray = practices?.map((practiceId) => ({ id: practiceId }));

    await prisma.category.upsert({
      where: { id },
      update: {
        cover: {
          upsert: {
            update: cover,
            create: cover,
          },
        },
        practices: {
          set: practicesArray,
        },
        ...dto,
      },
      create: {
        id,
        cover: {
          create: cover,
        },
        practices: {
          connect: practicesArray,
        },
        ...dto,
      },
    });

    revalidateTag("practice_categories");

    return dto;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Роздiл з таким заголовком вже існує");
    }

    throw error;
  }
};

export const updatePracticeCategory = async (
  id: string,
  { cover, practices, ...dto }: PracticeCategoryDTO,
) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id },
      select: { cover: true },
    });

    const practicesArray =
      practices?.map((practiceId) => ({ id: practiceId })) || [];

    await prisma.category.update({
      where: {
        id,
      },
      data: {
        cover: {
          update: cover,
        },
        practices: {
          set: practicesArray,
        },
        ...dto,
      },
    });

    if (category?.cover && category.cover.fileName !== cover.fileName) {
      removeFile(category.cover.fileName, `practice_categories/${id}`);
    }

    revalidateTag("practice_categories");
    revalidateTag("practices");
    revalidateTag("practice_category");
    revalidateTag(`practice_category-${dto.slug}`);

    return { cover, ...dto };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Роздiл з таким заголовком вже існує");
    }

    throw error;
  }
};

export const deletePracticeCategory = async (slug: string) => {
  const category = await prisma.category.findUnique({
    where: { slug },
    select: { cover: true, id: true },
  });

  await prisma.category.delete({
    where: {
      slug,
    },
  });

  if (category?.cover) {
    removeFile(category.cover.fileName, `practice_categories/${category.id}`);
  }

  revalidateTag("practice_categories");
  revalidateTag(`practice_category-${slug}`);
};
