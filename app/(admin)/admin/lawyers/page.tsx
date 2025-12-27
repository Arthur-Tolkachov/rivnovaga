import { getLawyers } from "@entity/lawyer";
import { LawyersPage } from "@pages/admin/lawyers";

import Error from "../../../error";

export default async function Lawyers() {
  try {
    const lawyers = await getLawyers();

    return <LawyersPage lawyers={lawyers} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
