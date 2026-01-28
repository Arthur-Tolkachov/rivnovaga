import { Metadata } from "next";

import { getUsefulLinks } from "@entity/usefulLink";
import { UsefulLinksPage } from "@pages/admin/usefulLinks";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Кориснi посилання | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function UsefulLinks() {
  try {
    const usefulLinks = await getUsefulLinks();

    return <UsefulLinksPage usefulLinks={usefulLinks} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
