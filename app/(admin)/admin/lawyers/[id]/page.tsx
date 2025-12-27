import { getLawyer } from "@entity/lawyer";
import { LawyerPage } from "@pages/admin/lawyer";

import Error from "../../../../error";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function UpdateLawyer({ params }: Props) {
  try {
    const { id } = await params;
    const lawyer = await getLawyer(id);

    return <LawyerPage lawyer={lawyer} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
