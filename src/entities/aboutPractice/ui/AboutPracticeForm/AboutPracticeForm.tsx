"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { AboutPracticeFields } from "./AboutPracticeFields";

export interface AboutPracticeFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const AboutPracticeForm: React.FC<AboutPracticeFormProps> = ({
  isLoading,
  onCancel,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <AboutPracticeFields />

    <FormActionButtons
      cancelButtonTitle="Скасувати"
      onCancel={onCancel}
      isLoading={isLoading}
      disableCancelButtonIfNotDirty
    />
  </form>
);
