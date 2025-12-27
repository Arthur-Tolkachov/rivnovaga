"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { AboutLawyersDTO } from "../model/aboutLawyers.dto";

export const updateAboutLawyers = async (dto: AboutLawyersDTO) => {
  await prisma.setting.update({
    where: { key: "about_lawyers" },
    data: { value: dto },
  });

  revalidateTag("aboutLawyers");

  return dto;
};
