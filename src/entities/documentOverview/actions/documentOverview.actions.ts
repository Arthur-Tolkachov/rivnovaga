"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";
import { removeFile } from "@shared/lib/removeFile";

import { DocumentOverviewDTO } from "../model/documentOverview.dto";
import { getAllDocumentOverviews } from "../repository/documentOverview.repository";

export const createDocumentOverview = async (
  id: string,
  dto: DocumentOverviewDTO
) => {
  const currentDocumentOverviews = await getAllDocumentOverviews();

  await prisma.setting.upsert({
    where: { key: "document_overviews" },
    update: {
      value: [...currentDocumentOverviews, { id, ...dto }],
    },
    create: {
      key: "document_overviews",
      value: [{ id, ...dto }],
    },
  });

  revalidateTag("documentOverviews");

  return dto;
};

export const updateDocumentOverview = async (
  id: string,
  dto: DocumentOverviewDTO
) => {
  const currentDocumentOverviews = await getAllDocumentOverviews();
  const currentDocumentOverview = currentDocumentOverviews.find(
    (documentOverview) => documentOverview.id === id
  );
  const currentFile = currentDocumentOverview?.file || {
    fileName: "",
    url: "",
  };

  const newDocumentOverviews = currentDocumentOverviews.map(
    (documentOverview) => {
      if (documentOverview.id === id) {
        return { id, ...dto };
      }

      return documentOverview;
    }
  );

  await prisma.setting.update({
    where: { key: "document_overviews" },
    data: { value: newDocumentOverviews },
  });

  revalidateTag("documentOverviews");
  revalidateTag("documentOverview");
  revalidateTag(`documentOverview-${id}`);

  if (currentFile.fileName !== dto.file.fileName) {
    removeFile(currentFile.fileName, `document_overviews/${id}`);
  }

  return dto;
};

export const deleteDocumentOverview = async (id: string) => {
  const currentDocumentOverviews = await getAllDocumentOverviews();
  const currentDocumentOverview = currentDocumentOverviews.find(
    (documentOverview) => documentOverview.id === id
  );
  const currentFile = currentDocumentOverview?.file || {
    fileName: "",
    url: "",
  };

  const newDocumentOverviews = currentDocumentOverviews.filter(
    (documentOverview) => documentOverview.id !== id
  );

  await prisma.setting.update({
    where: { key: "document_overviews" },
    data: { value: newDocumentOverviews },
  });

  removeFile(currentFile.fileName, `document_overviews/${id}`);

  revalidateTag("documentOverviews");
};
