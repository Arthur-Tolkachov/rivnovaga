import { Metadata } from "next";

import { getAllPractices } from "@entity/practice";
import { PracticesPage } from "@pages/admin/practices";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Практика | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Practices() {
  try {
    const practices = await getAllPractices();

    return <PracticesPage practices={practices} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
