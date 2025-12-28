"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { CtaDTO } from "../model/cta.dto";

export const updateCta = async (dto: CtaDTO) => {
  await prisma.setting.update({
    where: { key: "cta" },
    data: { value: dto },
  });

  revalidateTag("cta");

  return dto;
};
