import { Metadata } from "next";

import { DocumentOverviewPage } from "@pages/admin/documentOverview";

export const metadata: Metadata = {
  title: "Новий документ | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CreateDocumentOverview() {
  return <DocumentOverviewPage />;
}
