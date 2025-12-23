"use server";

import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

import { LawyerModel } from "../model/lawyers.model";
import { UpdateLawyersDTO } from "../model/updateLawyers.dto";

export const updateLawyers = async (dto: UpdateLawyersDTO) => {
  const currentLawyers = await prisma.setting.findUnique({
    where: { key: "lawyers" },
  });

  if (!currentLawyers) {
    throw new Error("Lawyers not found");
  }

  await prisma.$transaction(
    Object.entries(dto).map(([key, value]) =>
      prisma.setting.update({
        where: { key },
        data: { value },
      })
    )
  );

  dto.lawyers.forEach(({ photo, id }) => {
    const currentLawyer = (currentLawyers.value as LawyerModel[]).find(
      (lawyer) => lawyer.id === id
    );

    if (currentLawyer && currentLawyer.photo.fileName !== photo.fileName) {
      removeFile(currentLawyer?.photo.fileName, "lawyers");
    }
  });

  return dto;
};
