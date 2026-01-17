import { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import { getProfile } from "@entity/profile";
import { AdminPanel } from "@widgets/AdminPanel";

export const metadata: Metadata = {
  title: "Адмiн панель",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    logo,
    general: { name },
  } = await getProfile();

  return (
    <main className="grid grid-cols-[1fr_3fr]">
      <AdminPanel logo={logo} organizationName={name} />

      <div className="p-5">{children}</div>

      <ToastContainer />
    </main>
  );
}
