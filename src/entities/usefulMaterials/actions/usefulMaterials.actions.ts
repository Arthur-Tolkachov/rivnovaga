"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { UsefulMaterialsDTO } from "../model/usefulMaterials.dto";

export const updateUsefulMaterials = async (dto: UsefulMaterialsDTO) => {
  await prisma.setting.update({
    where: { key: "useful_materials" },
    data: { value: dto },
  });

  revalidateTag("usefulMaterials");

  return dto;
};
