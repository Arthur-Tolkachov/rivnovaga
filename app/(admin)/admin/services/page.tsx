import { getAllServices } from "@entity/services";
import { ServicesPage } from "@pages/admin/services";

import Error from "../../../error";

export default async function Services() {
  try {
    const services = await getAllServices();

    return <ServicesPage services={services} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
