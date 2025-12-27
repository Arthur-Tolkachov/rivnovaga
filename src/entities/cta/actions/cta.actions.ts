"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { UpdateCtaDTO } from "../model/updateCta.dto";

export const updateCta = async (dto: UpdateCtaDTO) => {
  await prisma.setting.update({
    where: { key: "cta" },
    data: { value: dto },
  });

  revalidateTag("cta");

  return dto;
};
