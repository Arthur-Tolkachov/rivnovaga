import { Metadata } from "next";

import { getPracticesBySlug } from "@entity/practice";
import { getPracticeCategory } from "@entity/practiceCategory";
import { PracticePage } from "@pages/content/practice";
import { stripHtml } from "@shared/lib/stripHtml";

import Error from "../../../error";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;
  const category = await getPracticeCategory(slug);

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

export default async function Practice({ params }: PageProps) {
  try {
    const { slug } = params;
    const practices = await getPracticesBySlug(slug);
    const category = await getPracticeCategory(slug);

    return <PracticePage practices={practices} category={category} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
