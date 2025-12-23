"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { LawyersFields } from "./LawyersFields";

export interface LawyersFormProps {
  isLoading?: boolean;
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const LawyersForm: React.FC<LawyersFormProps> = ({
  isLoading,
  onReset,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <LawyersFields />

    <FormActionButtons onReset={onReset} isLoading={isLoading} />
  </form>
);
