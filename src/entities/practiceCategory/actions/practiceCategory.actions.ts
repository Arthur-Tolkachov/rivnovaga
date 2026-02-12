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
    const { cover: currentCover } = (await prisma.category.findUnique({
      where: { id },
      select: { cover: true },
    })) as { cover: FileDto };

    if (!currentCover) {
      throw new Error("Cover not found");
    }

    const practicesArray = practices?.map((practiceId) => ({ id: practiceId }));

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

    if (currentCover.fileName !== cover.fileName) {
      removeFile(currentCover.fileName, `practice_categories/${id}`);
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
  const { cover: currentCover, id } = (await prisma.category.findUnique({
    where: { slug },
    select: { cover: true, id: true },
  })) as { cover: FileDto; id: string };

  if (!currentCover) {
    throw new Error("Cover not found");
  }

  await prisma.category.delete({
    where: {
      slug,
    },
  });

  removeFile(currentCover.fileName, `practice_categories/${id}`);

  revalidateTag("practice_categories");
  revalidateTag(`practice_category-${slug}`);
};
