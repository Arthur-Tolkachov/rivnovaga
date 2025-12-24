"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { LawyersFields } from "./LawyersFields";

export interface LawyersFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const LawyersForm: React.FC<LawyersFormProps> = ({
  isLoading,
  onCancel,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <LawyersFields />

    <FormActionButtons onCancel={onCancel} isLoading={isLoading} />
  </form>
);
