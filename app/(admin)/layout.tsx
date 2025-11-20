import { ToastContainer } from "react-toastify";

import { AdminPanel } from "@widgets/AdminPanel";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-[1fr_3fr]">
      <AdminPanel />

      <div className="p-5">{children}</div>

      <ToastContainer />
    </main>
  );
}
