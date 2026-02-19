import { Metadata } from "next";

import { getAllPractices, getPracticesBySlug } from "@entity/practice";
import { getPracticeCategories } from "@entity/practiceCategory";
import { PracticesPage } from "@pages/admin/practices";

import Error from "../../../error";

interface Props {
  searchParams: Promise<{
    categories?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Практика | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Practices({ searchParams }: Props) {
  const params = await searchParams;
  const filterSlug = params.categories || null;

  try {
    const practices = filterSlug
      ? await getPracticesBySlug(filterSlug)
      : await getAllPractices();
    const categories = await getPracticeCategories();

    return <PracticesPage categories={categories} practices={practices} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
