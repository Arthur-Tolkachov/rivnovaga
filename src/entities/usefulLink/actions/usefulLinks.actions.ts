"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import { UsefulLinkDTO } from "../model/usefulLink.dto";
import { getUsefulLinks } from "../repository/usefulLinks.repository";

export const createUsefulLink = async (dto: UsefulLinkDTO) => {
  const currentUsefulLinks = await getUsefulLinks();

  await prisma.setting.update({
    where: { key: "useful_links" },
    data: { value: [...currentUsefulLinks, dto] },
  });

  revalidateTag("usefulLinks");

  return dto;
};

export const updateUsefulLink = async (id: string, dto: UsefulLinkDTO) => {
  const currentUsefulLinks = await getUsefulLinks();

  const newUsefulLinks = currentUsefulLinks.map((usefulLink) => {
    if (usefulLink.id === id) {
      return { id, ...dto };
    }

    return usefulLink;
  });

  await prisma.setting.update({
    where: { key: "useful_links" },
    data: { value: newUsefulLinks },
  });

  revalidateTag("usefulLinks");
  revalidateTag("usefulLink");
  revalidateTag(`usefulLink-${id}`);

  return dto;
};

export const deleteUsefulLink = async (id: string) => {
  const currentUsefulLinks = await getUsefulLinks();
  const newUsefulLinks = currentUsefulLinks.filter(
    (usefulLink) => usefulLink.id !== id
  );

  await prisma.setting.update({
    where: { key: "useful_links" },
    data: { value: newUsefulLinks },
  });

  revalidateTag("usefulLinks");
};
