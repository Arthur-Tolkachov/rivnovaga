import { Metadata } from "next";

import { getAllServices } from "@entity/service";
import { ServicesPage } from "@pages/admin/services";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Послуги | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Services() {
  try {
    const services = await getAllServices();

    return <ServicesPage services={services} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
