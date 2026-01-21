"use server";

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

import { createSession } from "@shared/lib/auth/session";
import { prisma } from "@shared/lib/prisma-client";

import { LoginDTO } from "../model/login.dto";

export const login = async ({ email, password }: LoginDTO) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: "Невірний email або пароль" };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return { error: "Невірний email або пароль" };
  }

  await createSession(user.id);

  if (user.forcePasswordChange) {
    redirect("/change-password");
  }

  return { success: true };
};
