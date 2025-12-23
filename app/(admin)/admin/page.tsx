import { getProfile } from "@entity/profile";
import { ProfilePage } from "@pages/admin/profile";

import Error from "../../error";

export default async function Profile() {
  try {
    const profile = await getProfile();

    return <ProfilePage profile={profile} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
