"use server";

import { prisma } from "@shared/lib/prisma-client";

import { UpdateUsefulLinksDTO } from "../model/usefulLinks.dto";

export const updateUsefulLinks = async (dto: UpdateUsefulLinksDTO) => {
  await prisma.setting.update({
    where: { key: "useful_links" },
    data: { value: dto },
  });

  return dto;
};
