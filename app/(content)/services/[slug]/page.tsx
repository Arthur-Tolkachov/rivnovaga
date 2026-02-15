import { Metadata } from "next";

import { getServiceWithPractices } from "@entity/service";
import { ServicePage } from "@pages/content/service";
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
  const service = await getServiceWithPractices(slug);

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
    const { slug } = params;
    const service = await getServiceWithPractices(slug);

    return <ServicePage service={service} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
