import { getAllPractices } from "@entity/practice";
import { getService } from "@entity/service";
import { ServicePage } from "@pages/admin/service";
import { stripHtml } from "@shared/lib/stripHtml";

import Error from "../../../../error";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = await getService(slug);

  const description = stripHtml(service.description);

  return {
    title: service.title,
    description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function UpdateService({ params }: Props) {
  try {
    const { slug } = await params;
    const service = await getService(slug);
    const practices = await getAllPractices();

    return <ServicePage service={service} practices={practices} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
