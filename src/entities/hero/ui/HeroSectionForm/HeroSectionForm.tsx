import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { HeroSectionFields } from "./HeroSectionFields";

export interface HeroSectionFormProps {
  isFetching?: boolean;
  isLoading?: boolean;
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const HeroSectionForm: React.FC<HeroSectionFormProps> = ({
  isFetching,
  isLoading,
  onReset,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <HeroSectionFields isFetching={isFetching} />

    <FormActionButtons
      isFetching={isFetching}
      isLoading={isLoading}
      onReset={onReset}
    />
  </form>
);
