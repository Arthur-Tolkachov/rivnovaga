"use server";

import { FileDto } from "@entity/upload";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

import { ServiceDTO } from "../model/service.dto";

export const createService = async (
  id: string,
  { cover, ...dto }: ServiceDTO
) => {
  await prisma.service.create({
    data: {
      id,
      cover: {
        create: cover,
      },
      ...dto,
    },
  });

  return dto;
};

export const updateService = async (
  id: string,
  { cover, ...dto }: ServiceDTO
) => {
  const { cover: currentCover } = (await prisma.service.findUnique({
    where: { id },
    select: { cover: true },
  })) as { cover: FileDto };

  if (!currentCover) {
    throw new Error("Logo not found");
  }
  console.log("currentCover :>> ", currentCover);
  await prisma.service.update({
    where: {
      id,
    },
    data: {
      cover: {
        update: cover,
      },
      ...dto,
    },
  });

  if (currentCover.fileName !== cover.fileName) {
    removeFile(currentCover.fileName, `services/${id}`);
  }

  return { cover, ...dto };
};

export const deleteService = async (id: string) => {
  await prisma.service.delete({
    where: {
      id,
    },
  });
};
