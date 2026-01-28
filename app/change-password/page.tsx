import { Metadata } from "next";

import { ChangePasswordPage } from "@pages/changePassword";
import { requireAuth } from "@shared/lib/auth/auth-guard";

export const metadata: Metadata = {
  title: "Змiнити пароль | Рівновага",
  description: "Сторінка для відновлення або зміни пароля користувача.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ChangePassword() {
  await requireAuth({ forcePasswordChange: false });

  return <ChangePasswordPage />;
}
