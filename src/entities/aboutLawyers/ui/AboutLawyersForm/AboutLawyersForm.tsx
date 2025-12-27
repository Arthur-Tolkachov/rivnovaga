"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { AboutLawyersFields } from "./AboutLawyersFields";

export interface AboutLawyersFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const AboutLawyersForm: React.FC<AboutLawyersFormProps> = ({
  onCancel,
  onSubmit,
  isLoading,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <AboutLawyersFields />

    <FormActionButtons
      cancelButtonTitle="Скасувати"
      onCancel={onCancel}
      isLoading={isLoading}
      disableCancelButtonIfNotDirty
    />
  </form>
);
