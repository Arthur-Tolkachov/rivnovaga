import { getUsefulLink } from "@entity/usefulLink";
import { UsefulLinkPage } from "@pages/admin/usefulLink";

import Error from "../../../../error";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function UpdateUsefulLink({ params }: Props) {
  try {
    const { slug } = await params;
    const usefulLink = await getUsefulLink(slug);

    return <UsefulLinkPage usefulLink={usefulLink} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
