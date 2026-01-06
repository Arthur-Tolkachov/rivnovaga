"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { PracticeFields, PracticeFieldsProps } from "./PracticeFields";

export interface PracticeFormProps extends PracticeFieldsProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onDelete?: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const PracticeForm: React.FC<PracticeFormProps> = ({
  isLoading,
  dropdownOptions,
  onSubmit,
  onDelete,
  onCancel,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <PracticeFields dropdownOptions={dropdownOptions} />

    <FormActionButtons
      isLoading={isLoading}
      onCancel={onCancel}
      onDelete={onDelete}
    />
  </form>
);
