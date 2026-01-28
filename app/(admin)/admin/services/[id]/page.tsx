import { getAllPractices } from "@entity/practice";
import { getService } from "@entity/service";
import { ServicePage } from "@pages/admin/service";
import { stripHtml } from "@shared/lib/stripHtml";

import Error from "../../../../error";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const service = await getService(id);

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
    const { id } = await params;
    const service = await getService(id);
    const practices = await getAllPractices();

    return <ServicePage service={service} practices={practices} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
