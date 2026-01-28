"use client";

import { Metadata } from "next";

import { ErrorPage } from "@pages/error";

export const metadata: Metadata = {
  title: "Помилка сервера | Рівновага",
  description: "На сайті сталася тимчасова помилка. Спробуйте пізніше.",
  alternates: { canonical: "/500" },
  openGraph: {
    title: "Помилка сервера | Рівновага",
    description: "На сайті сталася тимчасова помилка. Спробуйте пізніше.",
    url: "/500",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Error() {
  return <ErrorPage />;
}
