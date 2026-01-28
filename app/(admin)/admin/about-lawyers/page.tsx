import { Metadata } from "next";

import { getAboutLawyers } from "@entity/aboutLawyers";
import { AboutLawyersPage } from "@pages/admin/aboutLawyers";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Сторiнка адвокатiв | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AboutLawyers() {
  try {
    const aboutLawyers = await getAboutLawyers();

    return <AboutLawyersPage aboutLawyers={aboutLawyers} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
