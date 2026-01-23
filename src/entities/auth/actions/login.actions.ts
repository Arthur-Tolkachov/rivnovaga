"use server";

import bcrypt from "bcrypt";

import { createSession } from "@shared/lib/auth/session";
import { prisma } from "@shared/lib/prisma-client";

import { LoginDTO } from "../model/login.dto";

export const login = async ({ email, password }: LoginDTO) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: "Невірний email або пароль", redirectTo: "/login" };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return { error: "Невірний email або пароль", redirectTo: "/login" };
  }

  await createSession(user.id);

  if (user.forcePasswordChange) {
    return { redirectTo: "/change-password" };
  }

  return { redirectTo: "/admin" };
};
