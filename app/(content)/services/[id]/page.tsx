import { Metadata } from "next";

import { getServiceWithPractices } from "@entity/service";
import { ServicePage } from "@pages/content/service";
import { stripHtml } from "@shared/lib/stripHtml";

import Error from "../../../error";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = params;
  const service = await getServiceWithPractices(id);

  if (!service) {
    return {
      title: "Послугу не знайдено",
    };
  }

  const description = stripHtml(service.description);

  return {
    title: `${service.title} | Адвокатське об'єднання «Рівновага»`,
    description,

    alternates: {
      canonical: `/services/${service.id}`,
    },

    openGraph: {
      title: `${service.title} | Рівновага`,
      description: service.description,
      url: `/services/${service.id}`,
      type: "article",
      locale: "uk_UA",
    },
  };
}

export default async function Service({ params }: PageProps) {
  try {
    const { id } = params;
    const service = await getServiceWithPractices(id);
    return <ServicePage service={service} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
