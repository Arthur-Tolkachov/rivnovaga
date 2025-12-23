import { getCta } from "@entity/cta";
import { CtaPage } from "@pages/admin/cta";

import Error from "../../../error";

export default async function Cta() {
  try {
    const cta = await getCta();

    return <CtaPage cta={cta} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
