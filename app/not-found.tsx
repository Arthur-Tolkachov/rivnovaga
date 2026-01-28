import { Metadata } from "next";

import { NotFoundPage } from "@pages/not-found";

export const metadata: Metadata = {
  title: "Сторінку не знайдено | Рівновага",
  description: "На жаль, сторінку, яку ви шукаєте, не знайдено.",
  alternates: { canonical: "/404" },
  openGraph: {
    title: "Сторінку не знайдено | Рівновага",
    description: "На жаль, сторінку, яку ви шукаєте, не знайдено.",
    url: "/404",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
