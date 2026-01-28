import { Metadata } from "next";

import { getHero } from "@entity/hero";
import { HeroPage } from "@pages/admin/hero";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Налаштування головного екрану | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Hero() {
  try {
    const hero = await getHero();

    return <HeroPage hero={hero} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
