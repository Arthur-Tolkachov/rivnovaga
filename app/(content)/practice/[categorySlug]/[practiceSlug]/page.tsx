import { Metadata } from "next";

import { getPractice } from "@entity/practice";
import { getPracticeCategory } from "@entity/practiceCategory";
import { PracticePage } from "@pages/content/practice";
import { stripHtml } from "@shared/lib/stripHtml";

import Error from "../../../../error";

type PageProps = {
  params: {
    categorySlug: string;
    practiceSlug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { practiceSlug, categorySlug } = params;
  const practice = await getPractice(practiceSlug);

  if (!practice) {
    return {
      title: "Практику не знайдено не знайдено",
    };
  }

  const description = stripHtml(practice.description);

  return {
    title: `${practice.title} | Адвокатське об'єднання «Рівновага»`,
    description,

    alternates: {
      canonical: `/practice/${categorySlug}/${practice.slug}`,
    },

    openGraph: {
      title: `${practice.title} | Рівновага`,
      description,
      url: `/practice/${categorySlug}/${practice.slug}`,
      type: "article",
      locale: "uk_UA",
    },
  };
}

export default async function Practice({ params }: PageProps) {
  try {
    const { practiceSlug, categorySlug } = params;

    const practice = await getPractice(practiceSlug);
    const category = await getPracticeCategory(categorySlug);

    return <PracticePage practice={practice} category={category} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
