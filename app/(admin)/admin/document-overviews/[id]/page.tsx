import { getDocumentOverview } from "@entity/documentOverview";
import { DocumentOverviewPage } from "@pages/admin/documentOverview";

import Error from "../../../../error";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function UpdateDocumentOverview({ params }: Props) {
  try {
    const { id } = await params;
    const documentOverview = await getDocumentOverview(id);

    return <DocumentOverviewPage documentOverview={documentOverview} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
