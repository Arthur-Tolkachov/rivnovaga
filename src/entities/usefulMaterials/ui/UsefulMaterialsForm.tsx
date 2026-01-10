"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { UsefulMaterialsFields } from "./UsefulMaterialsFields";

export interface UsefulMaterialsFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const UsefulMaterialsForm: React.FC<UsefulMaterialsFormProps> = ({
  onCancel,
  onSubmit,
  isLoading,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <UsefulMaterialsFields />

    <FormActionButtons
      cancelButtonTitle="Скасувати"
      onCancel={onCancel}
      isLoading={isLoading}
      disableCancelButtonIfNotDirty
    />
  </form>
);
