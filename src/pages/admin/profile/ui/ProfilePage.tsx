import { EditProfileForm } from "@features/admin/EditProfile";

export const ProfilePage = () => (
  <div className="flex flex-col gap-5">
    <h2 className="text-primary-dark">Налаштування профiлю</h2>

    <div className="flex flex-col gap-2">
      <div>
        <EditProfileForm />
      </div>
    </div>
  </div>
);
