import { getAllDocumentOverviews } from "@entity/documentOverview";
import { DocumentOverviewsPage } from "@pages/admin/documentOverviews";

import Error from "../../../error";

export default async function DocumentOverviews() {
  try {
    const documentOverviews = await getAllDocumentOverviews();

    return <DocumentOverviewsPage documentOverviews={documentOverviews} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
