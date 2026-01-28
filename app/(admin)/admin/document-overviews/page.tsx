import { Metadata } from "next";

import { getAllDocumentOverviews } from "@entity/documentOverview";
import { DocumentOverviewsPage } from "@pages/admin/documentOverviews";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Зразки документів | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DocumentOverviews() {
  try {
    const documentOverviews = await getAllDocumentOverviews();

    return <DocumentOverviewsPage documentOverviews={documentOverviews} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
