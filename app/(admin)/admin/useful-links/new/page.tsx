import { Metadata } from "next";

import { UsefulLinkPage } from "@pages/admin/usefulLink";

export const metadata: Metadata = {
  title: "Новий роздiл корисних посилань | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CreateUsefulLink() {
  return <UsefulLinkPage />;
}
