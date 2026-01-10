"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { RegulatoryActsDTO } from "../model/regulatoryActs.dto";

export const updateRegulatoryActs = async (dto: RegulatoryActsDTO) => {
  await prisma.setting.update({
    where: { key: "regulatory_acts" },
    data: { value: dto },
  });

  revalidateTag("regulatoryActs");

  return dto;
};
