import { cookies } from "next/headers";

import { prisma } from "../prisma-client";

export async function getUser() {
  const cookiesStore = await cookies();
  const sessionId = cookiesStore.get("session")?.value;

  if (!sessionId) {
    return null;
  }

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: {
      user: true,
    },
  });

  if (!session || session.expiresAt < new Date()) {
    return null;
  }

  return session.user;
}
