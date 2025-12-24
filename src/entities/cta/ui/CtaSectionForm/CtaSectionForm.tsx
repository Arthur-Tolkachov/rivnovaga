"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { CtaSectionFields } from "./CtaSectionFields";

export interface CtaSectionFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const CtaSectionForm: React.FC<CtaSectionFormProps> = ({
  isLoading,
  onCancel,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <CtaSectionFields />

    <FormActionButtons onCancel={onCancel} isLoading={isLoading} />
  </form>
);
