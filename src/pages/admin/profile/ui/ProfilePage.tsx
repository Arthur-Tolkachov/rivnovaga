import { ProfileModel } from "@entity/profile";
import { UpdateProfileForm } from "@features/profile";
import { BreadCrumbs } from "@shared/ui/composite/BreadCrumbs";

interface ProfilePageProps {
  profile: ProfileModel;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ profile }) => (
  <div className="flex flex-col gap-5">
    <BreadCrumbs home={{ title: "Профiль", href: "/admin" }} />

    <h2 className="text-primary-dark">Налаштування профiлю</h2>

    <UpdateProfileForm initialValues={profile} />
  </div>
);
