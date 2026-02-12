"use server";

import { Prisma } from "@prisma/client";
import { revalidateTag } from "next/cache";

import { FileDto } from "@entity/upload";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

import { ServiceDTO } from "../model/service.dto";

export const createService = async (
  id: string,
  { cover, practices, ...dto }: ServiceDTO,
) => {
  try {
    const practicesArray = practices?.map((practiceId) => ({ id: practiceId }));

    await prisma.service.upsert({
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

    revalidateTag("services");

    return dto;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Послуга з таким заголовком вже існує");
    }

    throw error;
  }
};

export const updateService = async (
  id: string,
  { cover, practices, ...dto }: ServiceDTO,
) => {
  try {
    const { cover: currentCover } = (await prisma.service.findUnique({
      where: { id },
      select: { cover: true },
    })) as { cover: FileDto };

    if (!currentCover) {
      throw new Error("Logo not found");
    }

    const practicesArray = practices?.map((practiceId) => ({ id: practiceId }));

    await prisma.service.update({
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
      removeFile(currentCover.fileName, `services/${id}`);
    }

    revalidateTag("services");
    revalidateTag("service");
    revalidateTag(`service-${dto.slug}`);

    return { cover, ...dto };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Послуга з таким заголовком вже існує");
    }

    throw error;
  }
};

export const deleteService = async (slug: string) => {
  const { cover: currentCover, id } = (await prisma.service.findUnique({
    where: { slug },
    select: { cover: true, id: true },
  })) as { cover: FileDto; id: string };

  if (!currentCover) {
    throw new Error("Logo not found");
  }

  await prisma.service.delete({
    where: {
      slug,
    },
  });

  removeFile(currentCover.fileName, `services/${id}`);

  revalidateTag("services");
  revalidateTag(`service-${slug}`);
};
