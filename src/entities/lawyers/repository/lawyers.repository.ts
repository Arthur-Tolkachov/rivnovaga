import { prisma } from "@shared/lib/prisma-client";

import { LawyersSchema } from "../model/lawyers.model";

export const getLawyers = async () => {
  const lawyersArr = await prisma.setting.findMany({
    where: {
      key: {
        in: ["lawyers", "about_lawyers"],
      },
    },
    select: {
      key: true,
      value: true,
    },
  });

  const lawyersObj: Record<string, unknown> = {};

  lawyersArr.forEach(({ key, value }) => {
    lawyersObj[key] = value;
  });

  return LawyersSchema.parse(lawyersObj);
};
