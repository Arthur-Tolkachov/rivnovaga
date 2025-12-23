import { getUsefulLinks } from "@entity/usefulLinks";
import { UsefulLinksPage } from "@pages/admin/usefulLinks";

import Error from "../../../error";

export default async function UsefulLinks() {
  try {
    const usefulLinks = await getUsefulLinks();

    return <UsefulLinksPage usefulLinks={usefulLinks} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
