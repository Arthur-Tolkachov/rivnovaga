import { Metadata } from "next";

import { getAllPractices } from "@entity/practice";
import { ServicePage } from "@pages/admin/service";

import Error from "../../../../error";

export const metadata: Metadata = {
  title: "Нова послуга | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CreateService() {
  try {
    const practices = await getAllPractices();

    return <ServicePage practices={practices} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
