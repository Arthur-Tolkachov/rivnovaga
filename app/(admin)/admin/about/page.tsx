import { Metadata } from "next";

import { getAbout } from "@entity/about";
import { AboutPage } from "@pages/admin/about";

import Error from "../../../error";

export const metadata: Metadata = {
  title: 'Секцiя "Про нас" | Рівновага',
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function About() {
  try {
    const about = await getAbout();

    return <AboutPage about={about} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
