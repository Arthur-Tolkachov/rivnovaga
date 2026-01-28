import { getUsefulLink } from "@entity/usefulLink";
import { UsefulLinkPage } from "@pages/admin/usefulLink";

import Error from "../../../../error";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const usefulLink = await getUsefulLink(id);

  return {
    title: usefulLink.title,
    description: "Редагування роздiа корисних посилань",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function UpdateUsefulLink({ params }: Props) {
  try {
    const { id } = await params;
    const usefulLink = await getUsefulLink(id);

    return <UsefulLinkPage usefulLink={usefulLink} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
