"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { RegulatoryActsFields } from "./RegulatoryActsFields";

export interface RegulatoryActsFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
  onDelete?: VoidFunction;
}

export const RegulatoryActsForm: React.FC<RegulatoryActsFormProps> = ({
  isLoading,
  onCancel,
  onSubmit,
  onDelete,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <div className="p-5 bg-secondary-light">
      <RegulatoryActsFields />
    </div>

    <FormActionButtons
      isLoading={isLoading}
      onDelete={onDelete}
      onCancel={onCancel}
      cancelButtonTitle="Скасувати"
      disableCancelButtonIfNotDirty
    />
  </form>
);
