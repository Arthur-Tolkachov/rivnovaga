"use server";

import { prisma } from "@shared/lib/prisma-client";

import { UpdateCtaDTO } from "../model/updateCta.dto";

export const updateCta = async (dto: UpdateCtaDTO) => {
  await prisma.setting.update({
    where: { key: "cta" },
    data: { value: dto },
  });

  return dto;
};
