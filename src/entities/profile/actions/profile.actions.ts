"use server";

import { revalidateTag } from "next/cache";

import { FileDto } from "@entity/upload";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

import { UpdateProfileDTO } from "../model/updateProfile.dto";

export const updateProfile = async (dto: UpdateProfileDTO) => {
  const currentLogo = (await prisma.setting.findUnique({
    where: { key: "logo" },
    select: { value: true },
  })) as { value: FileDto } | null;

  if (!currentLogo) {
    throw new Error("Logo not found");
  }

  await prisma.$transaction(
    Object.entries(dto).map(([key, value]) =>
      prisma.setting.update({
        where: { key },
        data: { value },
      })
    )
  );

  if (currentLogo.value.fileName !== dto.logo.fileName) {
    removeFile(currentLogo.value.fileName, "logo");
  }

  revalidateTag("profile");

  return dto;
};
