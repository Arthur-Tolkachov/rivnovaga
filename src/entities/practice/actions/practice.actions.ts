"use server";

import { Prisma } from "@prisma/client";
import { revalidateTag } from "next/cache";
import slugify from "slugify";

import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

import { PracticeDTO } from "../model/practice.dto";

export const createPractice = async (
  id: string,
  { file, services, categories, ...dto }: PracticeDTO,
) => {
  const servicesArray = services?.map((id) => ({ id }));
  const categoriesArray = categories?.map((id) => ({ id }));

  const baseSlug = slugify(dto.title, {
    lower: true,
    strict: true,
  });

  for (let attempt = 0; attempt < 10; attempt++) {
    const slug = attempt === 0 ? baseSlug : `${baseSlug}-${attempt}`;

    try {
      await prisma.practice.create({
        data: {
          id,
          slug,
          file: { create: file },
          services: { connect: servicesArray },
          categories: { connect: categoriesArray },
          ...dto,
        },
      });

      break;
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        continue;
      }
      throw error;
    }
  }

  revalidateTag("practices");
  revalidateTag("services");
  revalidateTag("practice_categories");
  revalidateTag("service");

  return dto;
};

export const updatePractice = async (
  id: string,
  { file, services, categories, ...dto }: PracticeDTO,
) => {
  const practice = await prisma.practice.findUnique({
    where: { id },
    select: { file: true },
  });

  const servicesArray =
    services?.map((servicesId) => ({ id: servicesId })) || [];
  const categoriesArray = categories?.map((categoryId) => ({ id: categoryId }));

  const newPractice = await prisma.practice.update({
    where: {
      id,
    },
    data: {
      file: {
        update: file,
      },
      services: {
        set: servicesArray,
      },
      categories: {
        set: categoriesArray,
      },
      ...dto,
    },
  });

  if (practice?.file && practice.file.fileName !== file.fileName) {
    removeFile(practice.file.fileName, `practices/${id}`);
  }

  revalidateTag("practices");
  revalidateTag("services");
  revalidateTag("practice_categories");
  revalidateTag("practice");
  revalidateTag("service");
  revalidateTag("practice_category");
  revalidateTag(`practice-${newPractice.slug}`);

  return { file, ...dto };
};

export const deletePractice = async (slug: string) => {
  const practice = await prisma.practice.findUnique({
    where: { slug },
    select: { file: true, id: true },
  });

  await prisma.practice.delete({
    where: {
      slug,
    },
  });

  if (practice?.file) {
    removeFile(practice.file.fileName, `practices/${practice.id}`);
  }

  revalidateTag("practices");
  revalidateTag("practice_categories");
  revalidateTag("services");
  revalidateTag("service");
  revalidateTag(`practice-${slug}`);
};
