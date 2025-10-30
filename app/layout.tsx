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
  title: "Адвокатське об'єднання «Рівновага» – Захист ваших прав та інтересів",
  description:
    "Надійна юридична допомога у кримінальних, цивільних, сімейних та адміністративних справах. Експертний захист ваших прав на всіх етапах.",
  keywords: [
    "адвокат",
    "адвокатське об'єднання",
    "захист прав",
    "кримінальні справи",
    "сімейний адвокат",
    "цивільні справи",
    "юридичні послуги",
  ],
  openGraph: {
    title:
      "Адвокатське об'єднання «Рівновага» – Захист ваших прав та інтересів",
    description:
      "Експертний юридичний захист у всіх галузях права. Ваш надійний адвокат у суді та поза ним.",
    url: "https://zahist-ua.com/",
    type: "website",
  },
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
