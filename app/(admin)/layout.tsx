import { Geist, Geist_Mono } from "next/font/google";

import { AdminPanel } from "@/src/components/layout/AdminPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["cyrillic"],
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="grid grid-cols-[1fr_3fr]">
          <AdminPanel />

          <div className="p-5">{children}</div>
        </main>
      </body>
    </html>
  );
}
