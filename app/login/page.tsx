import { redirect } from "next/navigation";

import { LoginPage } from "@pages/login";
import { getUser } from "@shared/lib/auth/auth";

export default async function Login() {
  const user = await getUser();

  if (user) {
    redirect("/admin");
  }

  return <LoginPage />;
}
