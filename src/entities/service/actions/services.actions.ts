"use server";

import { revalidateTag } from "next/cache";

import { FileDto } from "@entity/upload";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

import { ServiceDTO } from "../model/service.dto";

export const createService = async (
  id: string,
  { cover, practices, ...dto }: ServiceDTO
) => {
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
};

export const updateService = async (
  id: string,
  { cover, practices, ...dto }: ServiceDTO
) => {
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
  revalidateTag(`service-${id}`);

  return { cover, ...dto };
};

export const deleteService = async (id: string) => {
  const { cover: currentCover } = (await prisma.service.findUnique({
    where: { id },
    select: { cover: true },
  })) as { cover: FileDto };

  if (!currentCover) {
    throw new Error("Logo not found");
  }

  await prisma.service.delete({
    where: {
      id,
    },
  });

  removeFile(currentCover.fileName, `services/${id}`);

  revalidateTag("services");
};
