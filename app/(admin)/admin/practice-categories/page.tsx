import { Metadata } from "next";

import { getPracticeCategories } from "@entity/practiceCategory";
import { PracticeCategoriesPage } from "@pages/admin/practiceCategories";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Адвокати | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PracticeCategories() {
  try {
    const practiceCategories = await getPracticeCategories();

    return <PracticeCategoriesPage practiceCategories={practiceCategories} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
