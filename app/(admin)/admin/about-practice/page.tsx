import { getAboutPractice } from "@entity/aboutPractice";
import { AboutPracticePage } from "@pages/admin/aboutPractice";

import Error from "../../../error";

export default async function AboutPractice() {
  try {
    const practice = await getAboutPractice();

    return <AboutPracticePage practice={practice} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
