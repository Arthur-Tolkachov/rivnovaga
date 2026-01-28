import { Metadata } from "next";

import { getCta } from "@entity/cta";
import { CtaPage } from "@pages/admin/cta";

import Error from "../../../error";

export const metadata: Metadata = {
  title: "Секцiя заклику до дії | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Cta() {
  try {
    const cta = await getCta();

    return <CtaPage cta={cta} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
