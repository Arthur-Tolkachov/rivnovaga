import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "./components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
