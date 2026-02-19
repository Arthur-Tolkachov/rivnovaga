import { Metadata } from "next";

import { getPracticesBySlug } from "@entity/practice";
import { getPracticeCategory } from "@entity/practiceCategory";
import { PracticeCategoryPage } from "@pages/content/practiceCategory";
import { stripHtml } from "@shared/lib/stripHtml";

import Error from "../../../error";

type PageProps = {
  params: {
    categorySlug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { categorySlug } = params;
  const category = await getPracticeCategory(categorySlug);

  if (!category) {
    return {
      title: "Категорiю не знайдено",
    };
  }

  const description = stripHtml(category.description);

  return {
    title: `${category.title} | Адвокатське об'єднання «Рівновага»`,
    description,

    alternates: {
      canonical: `/practice/${category.slug}`,
    },

    openGraph: {
      title: `${category.title} | Рівновага`,
      description,
      url: `/practice/${category.slug}`,
      type: "article",
      locale: "uk_UA",
    },
  };
}

export default async function PracticeCategory({ params }: PageProps) {
  try {
    const { categorySlug } = params;
    const practices = await getPracticesBySlug(categorySlug);
    const category = await getPracticeCategory(categorySlug);

    return <PracticeCategoryPage practices={practices} category={category} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
