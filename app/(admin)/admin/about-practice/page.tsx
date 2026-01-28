import { Metadata } from "next";

import { getAboutPractice } from "@entity/aboutPractice";
import { AboutPracticePage } from "@pages/admin/aboutPractice";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Сторiнка практики | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AboutPractice() {
  try {
    const practice = await getAboutPractice();

    return <AboutPracticePage practice={practice} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
