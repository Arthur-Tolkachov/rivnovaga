import { unstable_cache } from "next/cache";

import { prisma } from "@shared/lib/prisma-client";

import {
  DocumentOverviewsArraySchema,
  DocumentOverviewSchema,
} from "../model/documentOverview.model";

export const getAllDocumentOverviews = unstable_cache(
  async () => {
    const documentOverviews = await prisma.setting.findUnique({
      where: {
        key: "document_overviews",
      },
      select: {
        key: true,
        value: true,
      },
    });

    return DocumentOverviewsArraySchema.parse(documentOverviews?.value || []);
  },
  ["documentOverviews"],
  { tags: ["documentOverviews"] },
);

export const getAvailableDocumentOverviews = unstable_cache(
  async () => {
    const documentOverviews = await getAllDocumentOverviews();
    const availableDocumentOverviews = documentOverviews.filter(
      (documentOverview) => documentOverview.isActive,
    );

    return availableDocumentOverviews;
  },
  ["documentOverviews"],
  { tags: ["documentOverviews"] },
);

export const getDocumentOverview = async (id: string) =>
  unstable_cache(
    async () => {
      const documentOverviews = await getAllDocumentOverviews();

      const documentOverview = documentOverviews.find(
        (documentOverview) => documentOverview.id === id,
      );

      return DocumentOverviewSchema.parse(documentOverview);
    },
    ["documentOverview", id],
    { tags: ["documentOverview"] },
  )();
