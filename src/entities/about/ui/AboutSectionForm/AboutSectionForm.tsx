"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { AboutSectionFields } from "./AboutSectionFields";

export interface AboutSectionFormProps {
  isLoading?: boolean;
  fields: Record<"id", string>[];
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const AboutSectionForm: React.FC<AboutSectionFormProps> = ({
  isLoading,
  fields,
  onReset,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <AboutSectionFields fields={fields} />

    <FormActionButtons onCancel={onReset} isLoading={isLoading} />
  </form>
);
