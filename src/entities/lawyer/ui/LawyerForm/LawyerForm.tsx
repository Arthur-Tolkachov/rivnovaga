"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { LawyerFields } from "./LawyerFields";

export interface LawyerFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onDelete?: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const LawyerForm: React.FC<LawyerFormProps> = ({
  isLoading,
  onCancel,
  onDelete,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <LawyerFields />

    <FormActionButtons
      onCancel={onCancel}
      onDelete={onDelete}
      isLoading={isLoading}
    />
  </form>
);
