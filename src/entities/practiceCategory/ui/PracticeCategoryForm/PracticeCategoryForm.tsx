"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import {
  PracticeCategoryFields,
  PracticeCategoryFieldsProps,
} from "./PracticeCategoryFields";

export interface PracticeCategoryFormProps extends PracticeCategoryFieldsProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onDelete?: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const PracticeCategoryForm: React.FC<PracticeCategoryFormProps> = ({
  isLoading,
  practicesDropdownOptions,
  onSubmit,
  onDelete,
  onCancel,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <PracticeCategoryFields
      practicesDropdownOptions={practicesDropdownOptions}
    />

    <FormActionButtons
      isLoading={isLoading}
      onCancel={onCancel}
      onDelete={onDelete}
    />
  </form>
);
