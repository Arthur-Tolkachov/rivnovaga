"use server";

import { prisma } from "@shared/lib/prisma-client";

import { UpdateAboutDTO } from "../model/updateAbout.dto";

export const updateAbout = async (dto: UpdateAboutDTO) => {
  await prisma.setting.update({
    where: { key: "about" },
    data: { value: dto },
  });

  return dto;
};
