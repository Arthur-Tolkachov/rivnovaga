import { getDocumentOverview } from "@entity/documentOverview";
import { DocumentOverviewPage } from "@pages/admin/documentOverview";

import Error from "../../../../error";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const documentOverview = await getDocumentOverview(id);

  return {
    title: documentOverview.title,
    description: `Редагування документа`,
    robots: {
      index: false,
      follow: false,
    },
  };
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
