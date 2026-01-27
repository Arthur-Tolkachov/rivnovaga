import { Metadata } from "next";

import { getProfile } from "@entity/profile";
import { requireAuth } from "@shared/lib/auth/auth-guard";
import { AdminPanel } from "@widgets/AdminPanel";

export const metadata: Metadata = {
  title: "Адмiн панель",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireAuth({ forcePasswordChange: true });

  const {
    logo,
    general: { name },
  } = await getProfile();

  return (
    <main className="grid md:grid-cols-[2.8fr_3fr] lg:grid-cols-[1fr_3fr]">
      <AdminPanel logo={logo} organizationName={name} />

      <div className="p-5">{children}</div>
    </main>
  );
}
