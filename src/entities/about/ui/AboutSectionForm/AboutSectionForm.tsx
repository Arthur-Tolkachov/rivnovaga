import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { AboutSectionFields } from "./AboutSectionFields";

export interface AboutSectionFormProps {
  isFetching?: boolean;
  isLoading?: boolean;
  fields: Record<"id", string>[];
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const AboutSectionForm: React.FC<AboutSectionFormProps> = ({
  isFetching,
  isLoading,
  fields,
  onReset,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <AboutSectionFields isFetching={isFetching} fields={fields} />

    <FormActionButtons
      onReset={onReset}
      isFetching={isFetching}
      isLoading={isLoading}
    />
  </form>
);
