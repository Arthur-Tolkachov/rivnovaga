import { getAboutPractice } from "@entity/aboutPractice";
import { PracticePage } from "@pages/admin/practice";

import Error from "../../../error";

export default async function AboutPractice() {
  try {
    const practice = await getAboutPractice();

    return <PracticePage practice={practice} />;
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
