import { getAllPractices } from "@entity/practice";
import { getPracticeCategory } from "@entity/practiceCategory";
import { PracticeCategoryPage } from "@pages/admin/practiceCategory";
import { stripHtml } from "@shared/lib/stripHtml";

import Error from "../../../../error";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const practiceCategory = await getPracticeCategory(slug);

  const description = stripHtml(practiceCategory.description);

  return {
    title: practiceCategory.title,
    description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function UpdatePracticeCategory({ params }: Props) {
  try {
    const { slug } = await params;
    const practiceCategory = await getPracticeCategory(slug);
    const practices = await getAllPractices();

    return (
      <PracticeCategoryPage
        practiceCategory={practiceCategory}
        practices={practices}
      />
    );
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
