"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { UpdateAboutDTO } from "../model/updateAbout.dto";

export const updateAbout = async (dto: UpdateAboutDTO) => {
  await prisma.setting.update({
    where: { key: "about" },
    data: { value: dto },
  });

  revalidateTag("about");

  return dto;
};
