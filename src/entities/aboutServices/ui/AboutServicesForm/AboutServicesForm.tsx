"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { AboutServicesFields } from "./AboutServicesFields";

export interface AboutServicesFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const AboutServicesForm: React.FC<AboutServicesFormProps> = ({
  isLoading,
  onCancel,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <AboutServicesFields />

    <FormActionButtons
      cancelButtonTitle="Скасувати"
      onCancel={onCancel}
      isLoading={isLoading}
      disableCancelButtonIfNotDirty
    />
  </form>
);
