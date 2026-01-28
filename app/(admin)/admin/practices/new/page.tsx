import { Metadata } from "next";

import { getAllServices } from "@entity/service";
import { PracticePage } from "@pages/admin/practice";

import Error from "../../../../error";

export const metadata: Metadata = {
  title: "нова практика | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CreatePractice() {
  try {
    const services = await getAllServices();

    return <PracticePage services={services} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
