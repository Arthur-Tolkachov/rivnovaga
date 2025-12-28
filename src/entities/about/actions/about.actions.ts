"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { AboutDTO } from "../model/about.dto";

export const updateAbout = async (dto: AboutDTO) => {
  await prisma.setting.update({
    where: { key: "about" },
    data: { value: dto },
  });

  revalidateTag("about");

  return dto;
};
