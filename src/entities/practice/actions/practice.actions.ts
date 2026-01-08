"use server";

import { revalidateTag } from "next/cache";

import { FileDto } from "@entity/upload";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

import { PracticeDTO } from "../model/practice.dto";

export const createPractice = async (
  id: string,
  { file, services, ...dto }: PracticeDTO
) => {
  const servicesArray = services?.map((serviceId) => ({ id: serviceId }));

  await prisma.practice.create({
    data: {
      id,
      file: {
        create: file,
      },

      services: {
        connect: servicesArray,
      },

      ...dto,
    },
  });

  revalidateTag("practices");
  revalidateTag("services");
  revalidateTag("service");

  return dto;
};

export const updatePractice = async (
  id: string,
  { file, services, ...dto }: PracticeDTO
) => {
  const { file: currentFile } = (await prisma.practice.findUnique({
    where: { id },
    select: { file: true },
  })) as { file: FileDto };

  if (!currentFile) {
    throw new Error("File not found");
  }

  const servicesArray = services?.map((servicesId) => ({ id: servicesId }));

  await prisma.practice.update({
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
      ...dto,
    },
  });

  if (currentFile.fileName !== file.fileName) {
    removeFile(currentFile.fileName, `practices/${id}`);
  }

  revalidateTag("practices");
  revalidateTag("services");
  revalidateTag("practice");
  revalidateTag("service");
  revalidateTag(`practice-${id}`);

  return { file, ...dto };
};

export const deletePractice = async (id: string) => {
  const { file: currentFile } = (await prisma.practice.findUnique({
    where: { id },
    select: { file: true },
  })) as { file: FileDto };

  if (!currentFile) {
    throw new Error("File not found");
  }

  await prisma.practice.delete({
    where: {
      id,
    },
  });

  removeFile(currentFile.fileName, `practices/${id}`);

  revalidateTag("practices");
  revalidateTag("services");
  revalidateTag("service");
};
