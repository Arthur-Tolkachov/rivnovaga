"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { ProfileAddress } from "./ProfileAddress";
import { ProfileGeneral } from "./ProfileGeneral";
import { ProfileSchedule } from "./ProfileSchedule";

export interface ProfileFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  isLoading,
  onSubmit,
  onCancel,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <div className="flex flex-col gap-5">
      <ProfileGeneral />
      <ProfileAddress />
      <ProfileSchedule />
    </div>

    <FormActionButtons isLoading={isLoading} onCancel={onCancel} />
  </form>
);
