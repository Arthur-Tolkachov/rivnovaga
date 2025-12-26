import { getService } from "@entity/service";
import { ServicePage } from "@pages/admin/service";

import Error from "../../../../error";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function UpdateService({ params }: Props) {
  try {
    const { id } = await params;
    const service = await getService(id);

    return <ServicePage service={service} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
