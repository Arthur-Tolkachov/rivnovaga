"use server";

import { prisma } from "@shared/lib/prisma-client";

import { UpdateHeroDTO } from "../model/updateHero.dto";

export const updateHero = async (dto: UpdateHeroDTO) => {
  await prisma.setting.update({
    where: { key: "hero" },
    data: { value: dto },
  });

  return dto;
};
