import { getPractice } from "@entity/practice";
import { getPracticeCategories } from "@entity/practiceCategory";
import { getAllServices } from "@entity/service";
import { PracticePage } from "@pages/admin/practice";

import Error from "../../../../error";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const practice = await getPractice(slug);

  return {
    title: practice.title,
    description: `Налаштування практики ${practice.title}`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function UpdatePractice({ params }: Props) {
  try {
    const { slug } = await params;
    const practice = await getPractice(slug);
    const services = await getAllServices();
    const practiceCategories = await getPracticeCategories();

    return (
      <PracticePage
        practice={practice}
        practiceCategories={practiceCategories}
        services={services}
      />
    );
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
