import { Metadata } from "next";

import { getAllPractices } from "@entity/practice";
import { PracticeCategoryPage } from "@pages/admin/practiceCategory";

import Error from "../../../../error";

export const metadata: Metadata = {
  title: "Нова послуга | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CreatePracticeCategory() {
  try {
    const practices = await getAllPractices();

    return <PracticeCategoryPage practices={practices} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
