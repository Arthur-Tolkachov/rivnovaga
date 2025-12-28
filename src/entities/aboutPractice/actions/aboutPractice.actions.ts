"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { AboutPracticeDTO } from "../model/aboutPractice.dto";

export const updateAboutPractice = async (dto: AboutPracticeDTO) => {
  await prisma.setting.update({
    where: { key: "about_practice" },
    data: { value: dto },
  });

  revalidateTag("aboutPractice");

  return dto;
};
