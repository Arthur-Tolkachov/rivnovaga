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
  servicesDropdownOptions,
  categoriesDropdownOptions,
  onSubmit,
  onDelete,
  onCancel,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <PracticeFields
      categoriesDropdownOptions={categoriesDropdownOptions}
      servicesDropdownOptions={servicesDropdownOptions}
    />

    <FormActionButtons
      isLoading={isLoading}
      onCancel={onCancel}
      onDelete={onDelete}
    />
  </form>
);
