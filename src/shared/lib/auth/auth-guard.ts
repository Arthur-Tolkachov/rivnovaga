import { redirect } from "next/navigation";

import { getUser } from "./auth";

export const requireAuth = async () => {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  if (user.forcePasswordChange) {
    redirect("/change-password");
  }

  return user;
};
