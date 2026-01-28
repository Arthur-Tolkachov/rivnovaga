import { Metadata } from "next";

import { getAboutServices } from "@entity/aboutServices";
import { AboutServicesPage } from "@pages/admin/aboutServices";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Сторiнка послуг | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AboutServices() {
  try {
    const aboutServices = await getAboutServices();

    return <AboutServicesPage aboutServices={aboutServices} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
