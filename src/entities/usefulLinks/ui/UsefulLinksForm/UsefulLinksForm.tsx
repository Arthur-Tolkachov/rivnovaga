import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { UsefulLinksFields } from "./UsefulLinksFields";

export interface UsefulLinksFormProps {
  isFetching?: boolean;
  isLoading?: boolean;
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const UsefulLinksForm: React.FC<UsefulLinksFormProps> = ({
  isFetching,
  isLoading,
  onReset,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <UsefulLinksFields isFetching={isFetching} />

    <FormActionButtons
      isFetching={isFetching}
      isLoading={isLoading}
      onReset={onReset}
    />
  </form>
);
