import { ProfileModel } from "@entity/profile";
import { UpdateProfileForm } from "@features/UpdateProfile";

interface ProfilePageProps {
  profile: ProfileModel;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ profile }) => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Налаштування профiлю</h2>

    <UpdateProfileForm initialValues={profile} />
  </div>
);
