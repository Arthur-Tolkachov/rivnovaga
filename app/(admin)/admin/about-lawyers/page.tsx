import { getAboutLawyers } from "@entity/aboutLawyers";
import { AboutLawyersPage } from "@pages/admin/aboutLawyers";

import Error from "../../../error";

export default async function AboutLawyers() {
  try {
    const aboutLawyers = await getAboutLawyers();

    return <AboutLawyersPage aboutLawyers={aboutLawyers} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
