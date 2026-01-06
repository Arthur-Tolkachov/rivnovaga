import { getAllPractices } from "@entity/practice";
import { PracticesPage } from "@pages/admin/practices";

import Error from "../../../error";

export default async function Practices() {
  try {
    const practices = await getAllPractices();

    return <PracticesPage practices={practices} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
