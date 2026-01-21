"use server";

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

import { getUser } from "@shared/lib/auth/auth";
import { createSession } from "@shared/lib/auth/session";
import { prisma } from "@shared/lib/prisma-client";

import { PasswordDTO } from "../model/password.dto";

export const changePassword = async (dto: PasswordDTO) => {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const passwordHash = await bcrypt.hash(dto.password, 12);

  await prisma.session.deleteMany({
    where: { userId: user.id },
  });

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: passwordHash,
      forcePasswordChange: false,
    },
  });

  await createSession(user.id);
};
