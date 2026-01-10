import { getRegulatoryActs } from "@entity/regulatoryActs";
import { RegulatoryActsPage } from "@pages/admin/regulatoryActs";

import Error from "../../../error";

export default async function RegulatoryActs() {
  try {
    const regulatoryActs = await getRegulatoryActs();

    return <RegulatoryActsPage regulatoryActs={regulatoryActs} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
