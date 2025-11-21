import { ActionButtons } from "./ActionButtons";
import { OrganizationAddress } from "./OrganizationAddress";
import { OrganizationMainInformation } from "./OrganizationMainInformation";
import { OrganizationSchedule } from "./OrganizationSchedule";

export interface OrganizationFormProps {
  isFetching?: boolean;
  isLoading?: boolean;
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const OrganizationForm: React.FC<OrganizationFormProps> = ({
  isFetching,
  isLoading,
  onSubmit,
  onReset,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <div className="flex flex-col gap-5">
      <OrganizationMainInformation isFetching={isFetching} />
      <OrganizationAddress isFetching={isFetching} />
      <OrganizationSchedule isFetching={isFetching} />
    </div>

    <ActionButtons
      isFetching={isFetching}
      isLoading={isLoading}
      onReset={onReset}
    />
  </form>
);
