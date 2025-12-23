import { prisma } from "@shared/lib/prisma-client";

import { ProfileSchema } from "../model/profile.model";

export const getProfile = async () => {
  const profileArr = await prisma.setting.findMany({
    where: {
      key: {
        in: [
          "workingDaysSchedule",
          "workingTimeSchedule",
          "general",
          "map",
          "logo",
          "address",
        ],
      },
    },
    select: {
      key: true,
      value: true,
    },
  });

  const profileObj: Record<string, unknown> = {};

  profileArr.forEach(({ key, value }) => {
    profileObj[key] = value;
  });

  return ProfileSchema.parse(profileObj);
};
