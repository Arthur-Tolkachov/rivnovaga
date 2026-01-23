import { redirect } from "next/navigation";

import { getUser } from "./auth";

interface RequireAuthProps {
  forcePasswordChange?: boolean;
}

export const requireAuth = async ({
  forcePasswordChange = true,
}: RequireAuthProps) => {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  if (forcePasswordChange && user.forcePasswordChange) {
    redirect("/change-password");
  }

  return user;
};
