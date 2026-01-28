import { Metadata } from "next";

import { getLawyers } from "@entity/lawyer";
import { LawyersPage } from "@pages/admin/lawyers";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Адвокати | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Lawyers() {
  try {
    const lawyers = await getLawyers();

    return <LawyersPage lawyers={lawyers} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
