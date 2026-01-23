import { ChangePasswordPage } from "@pages/changePassword";
import { requireAuth } from "@shared/lib/auth/auth-guard";

export default async function ChangePassword() {
  await requireAuth({ forcePasswordChange: false });

  return <ChangePasswordPage />;
}
