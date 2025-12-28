"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { AboutServicesDTO } from "../model/aboutServices.dto";

export const updateAboutServices = async (dto: AboutServicesDTO) => {
  await prisma.setting.update({
    where: { key: "about_services" },
    data: { value: dto },
  });

  revalidateTag("aboutServices");

  return dto;
};
