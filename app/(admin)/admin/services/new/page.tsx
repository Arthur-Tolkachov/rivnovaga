import { getAllPractices } from "@entity/practice";
import { ServicePage } from "@pages/admin/service";

import Error from "../../../../error";

export default async function CreateService() {
  try {
    const practices = await getAllPractices();

    return <ServicePage practices={practices} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
