import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { ProfileAddress } from "./ProfileAddress";
import { ProfileGeneral } from "./ProfileGeneral";
import { ProfileSchedule } from "./ProfileSchedule";

export interface ProfileFormProps {
  isFetching?: boolean;
  isLoading?: boolean;
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  isFetching,
  isLoading,
  onSubmit,
  onReset,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <div className="flex flex-col gap-5">
      <ProfileGeneral isFetching={isFetching} />
      <ProfileAddress isFetching={isFetching} />
      <ProfileSchedule isFetching={isFetching} />
    </div>

    <FormActionButtons
      isFetching={isFetching}
      isLoading={isLoading}
      onReset={onReset}
    />
  </form>
);
