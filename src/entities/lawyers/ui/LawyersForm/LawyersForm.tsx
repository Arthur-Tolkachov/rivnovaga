import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { LawyersFields } from "./LawyersFields";

export interface LawyersFormProps {
  isFetching?: boolean;
  isLoading?: boolean;
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const LawyersForm: React.FC<LawyersFormProps> = ({
  isFetching,
  isLoading,
  onReset,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <LawyersFields isFetching={isFetching} />

    <FormActionButtons
      onReset={onReset}
      isFetching={isFetching}
      isLoading={isLoading}
    />
  </form>
);
