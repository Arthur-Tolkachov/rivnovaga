import { getLawyer } from "@entity/lawyer";
import { LawyerPage } from "@pages/admin/lawyer";
import { stripHtml } from "@shared/lib/stripHtml";

import Error from "../../../../error";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const lawyer = await getLawyer(id);

  const lawyerFullName = `${lawyer.surname} ${lawyer.name} ${lawyer.patronymic}`;
  const description = stripHtml(lawyer.description);

  return {
    title: lawyerFullName,
    description,
    robots: {
      index: false,
      follow: false,
    },
  };
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
