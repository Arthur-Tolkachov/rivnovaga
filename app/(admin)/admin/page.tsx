import { Metadata } from "next";

import { getProfile } from "@entity/profile";
import { ProfilePage } from "@pages/admin/profile";

import Error from "../../error";

export const metadata: Metadata = {
  title: "Налаштування профiлю | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Profile() {
  try {
    const profile = await getProfile();

    return <ProfilePage profile={profile} />;
  } catch (error) {
    console.error(error);

    return <Error />;
  }
}
