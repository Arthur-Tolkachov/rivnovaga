import { Metadata } from "next";
import { redirect } from "next/navigation";

import { LoginPage } from "@pages/login";
import { getUser } from "@shared/lib/auth/auth";

export const metadata: Metadata = {
  title: "Вхід | Рівновага",
  description: "Авторизація для доступу до адміністративної панелі.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Login() {
  const user = await getUser();

  if (user) {
    redirect("/admin");
  }

  return <LoginPage />;
}
