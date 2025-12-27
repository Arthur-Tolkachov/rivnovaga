"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { HeroSectionFields } from "./HeroSectionFields";

export interface HeroSectionFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const HeroSectionForm: React.FC<HeroSectionFormProps> = ({
  isLoading,
  onCancel,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <HeroSectionFields />

    <FormActionButtons
      isLoading={isLoading}
      onCancel={onCancel}
      cancelButtonTitle="Скасувати"
      disableCancelButtonIfNotDirty
    />
  </form>
);
