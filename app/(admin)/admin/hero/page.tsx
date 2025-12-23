import { getHero } from "@entity/hero";
import { HeroPage } from "@pages/admin/hero";

import Error from "../../../error";

export default async function Hero() {
  try {
    const hero = await getHero();

    return <HeroPage hero={hero} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
