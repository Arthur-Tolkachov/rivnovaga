"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { HeroDTO } from "../model/hero.dto";

export const updateHero = async (dto: HeroDTO) => {
  await prisma.setting.update({
    where: { key: "hero" },
    data: { value: dto },
  });

  revalidateTag("hero");

  return dto;
};
