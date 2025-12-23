import { getAbout } from "@entity/about";
import { AboutPage } from "@pages/admin/about";

import Error from "../../../error";

export default async function About() {
  try {
    const about = await getAbout();

    return <AboutPage about={about} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
