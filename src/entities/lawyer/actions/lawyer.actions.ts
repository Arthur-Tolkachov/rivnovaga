"use server";

import { revalidateTag } from "next/cache";

import { getLawyers, LawyerDTO } from "@entity/lawyer";
import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

export const createLawyer = async (id: string, dto: LawyerDTO) => {
  const currentLawyers = await getLawyers();

  const isUnique = currentLawyers.every((lawyer) => lawyer.slug !== dto.slug);

  if (!isUnique) {
    throw new Error("Адвокат з таким П.I.Б вже існує");
  }

  await prisma.setting.upsert({
    where: { key: "lawyers" },
    update: {
      value: [...currentLawyers, { id, ...dto }],
    },
    create: {
      key: "lawyers",
      value: [{ id, ...dto }],
    },
  });

  revalidateTag("lawyers");

  return dto;
};

export const updateLawyer = async (id: string, dto: LawyerDTO) => {
  const currentLawyers = await getLawyers();

  const isUnique = currentLawyers.every((lawyer) => lawyer.slug !== dto.slug);

  if (!isUnique) {
    throw new Error("Адвокат з таким П.I.Б вже існує");
  }

  const currentLawyer = currentLawyers.find((lawyer) => lawyer.id === id);
  const currentPhoto = currentLawyer?.photo || { fileName: "", url: "" };

  const newLawyers = currentLawyers.map((lawyer) => {
    if (lawyer.id === id) {
      return { id, ...dto };
    }

    return lawyer;
  });

  await prisma.setting.update({
    where: { key: "lawyers" },
    data: { value: newLawyers },
  });

  revalidateTag("lawyers");

  if (currentPhoto.fileName !== dto.photo.fileName) {
    removeFile(currentPhoto.fileName, `lawyers/${id}`);
  }

  return dto;
};

export const deleteLawyer = async (id: string) => {
  const currentLawyers = await getLawyers();
  const currentLawyer = currentLawyers.find((lawyer) => lawyer.id === id);
  const currentPhoto = currentLawyer?.photo || { fileName: "", url: "" };

  const newLawyers = currentLawyers.filter((lawyer) => lawyer.id !== id);

  await prisma.setting.update({
    where: { key: "lawyers" },
    data: { value: newLawyers },
  });

  removeFile(currentPhoto.fileName, `lawyers/${currentLawyer?.id}`);

  revalidateTag("lawyers");
};
