import { cookies } from "next/headers";

import { prisma } from "../prisma-client";

export const createSession = async (userId: string) => {
  const session = await prisma.session.create({
    data: {
      userId,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    },
  });

  const cookiesStore = await cookies();

  cookiesStore.set("session", session.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
};
