import { getAllServices } from "@entity/service";
import { PracticePage } from "@pages/admin/practice";

import Error from "../../../../error";

export default async function CreatePractice() {
  try {
    const services = await getAllServices();

    return <PracticePage services={services} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
