import { getAboutServices } from "@entity/aboutServices";
import { AboutServicesPage } from "@pages/admin/aboutServices";

import Error from "../../../error";

export default async function AboutServices() {
  try {
    const aboutServices = await getAboutServices();

    return <AboutServicesPage aboutServices={aboutServices} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
