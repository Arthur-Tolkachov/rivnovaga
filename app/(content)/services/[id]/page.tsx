import { Metadata } from "next";

import { getServiceWithPractices } from "@entity/service";
import { ServicePage } from "@pages/content/service";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Вирішення сімейних спорів | Адвокатське об'єднання «Рівновага»",
  description:
    "Професійний юридичний захист у сімейних спорах: розірвання шлюбу, поділ майна, визначення місця проживання дитини. Надійна допомога адвокатів на всіх етапах процесу.",
  keywords: [
    "сімейні спори",
    "розірвання шлюбу",
    "поділ майна",
    "адвокат сімейний",
    "захист прав дитини",
    "сімейний адвокат",
    "юридична допомога",
  ],
  openGraph: {
    title: "Вирішення сімейних спорів | Адвокатське об'єднання «Рівновага»",
    description:
      "Експертний юридичний захист у сімейних спорах: розірвання шлюбу, поділ майна, визначення місця проживання дитини.",
    url: "https://zahist-ua.com/services",
    type: "website",
  },
};

type PageProps = {
  params: {
    id: string;
  };
};

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
