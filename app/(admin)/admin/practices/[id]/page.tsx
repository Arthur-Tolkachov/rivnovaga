import { getPractice } from "@entity/practice";
import { getAllServices } from "@entity/service";
import { PracticePage } from "@pages/admin/practice";

import Error from "../../../../error";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const practice = await getPractice(id);

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
    const { id } = await params;
    const practice = await getPractice(id);
    const services = await getAllServices();

    return <PracticePage practice={practice} services={services} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
