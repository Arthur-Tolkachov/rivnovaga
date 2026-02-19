"use server";

import { Prisma } from "@prisma/client";
import { revalidateTag } from "next/cache";

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
    const service = await prisma.service.findUnique({
      where: { id },
      select: { cover: true },
    });

    const practicesArray =
      practices?.map((practiceId) => ({ id: practiceId })) || [];

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

    if (service?.cover && service.cover.fileName !== cover.fileName) {
      removeFile(service.cover.fileName, `services/${id}`);
    }

    revalidateTag("services");
    revalidateTag("practices");
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
  const service = await prisma.service.findUnique({
    where: { slug },
    select: { cover: true, id: true },
  });

  await prisma.practice.updateMany({
    where: { services: { some: { slug } } },
    data: { services: { disconnect: { slug } } },
  });

  await prisma.service.delete({
    where: {
      slug,
    },
  });

  if (service?.cover) {
    removeFile(service.cover.fileName, `services/${service.id}`);
  }

  revalidateTag("services");
  revalidateTag(`service-${slug}`);
};
