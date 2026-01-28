import { Metadata } from "next";

import { getRegulatoryActs } from "@entity/regulatoryActs";
import { RegulatoryActsPage } from "@pages/admin/regulatoryActs";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Нормативно-правові акти | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RegulatoryActs() {
  try {
    const regulatoryActs = await getRegulatoryActs();

    return <RegulatoryActsPage regulatoryActs={regulatoryActs} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
