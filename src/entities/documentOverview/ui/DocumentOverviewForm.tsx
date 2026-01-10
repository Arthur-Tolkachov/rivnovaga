"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { DocumentOverviewFields } from "./DocumentOverviewFields";

export interface DocumentOverviewFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onDelete?: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const DocumentOverviewForm: React.FC<DocumentOverviewFormProps> = ({
  isLoading,
  onCancel,
  onDelete,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <DocumentOverviewFields />

    <FormActionButtons
      onCancel={onCancel}
      onDelete={onDelete}
      isLoading={isLoading}
    />
  </form>
);
