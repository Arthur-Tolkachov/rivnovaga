"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { UpdateHeroDTO } from "../model/updateHero.dto";

export const updateHero = async (dto: UpdateHeroDTO) => {
  await prisma.setting.update({
    where: { key: "hero" },
    data: { value: dto },
  });

  revalidateTag("hero");

  return dto;
};
