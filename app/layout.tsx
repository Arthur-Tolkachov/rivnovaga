import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/app/components/layout/Footer";
import { Header } from "@/app/components/layout/Header";
import UtilsPanel from "@/app/components/layout/UtilsPanel";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Рiвновага",
  description:
    "Адвокатське бюро 'Рiвновага' об'єднує досвідчених	адвокатів, юристів, аудиторів та бухгалтерів, які надають	цілий комплекс юридичних та консалтингових послуг, включаючи правову допомогу та консультації в галузі цивільного, господарського, корпоративного, кримінального,	податкового та митного права. rights8, RIGHTS8.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Header />

          <main>{children}</main>

          <Footer />
        </div>

        <UtilsPanel />
      </body>
    </html>
  );
}
