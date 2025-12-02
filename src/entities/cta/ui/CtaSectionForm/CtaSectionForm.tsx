"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { CtaSectionFields } from "./CtaSectionFields";

export interface CtaSectionFormProps {
  isFetching?: boolean;
  isLoading?: boolean;
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const CtaSectionForm: React.FC<CtaSectionFormProps> = ({
  isFetching,
  isLoading,
  onReset,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <CtaSectionFields isFetching={isFetching} />

    <FormActionButtons
      onReset={onReset}
      isFetching={isFetching}
      isLoading={isLoading}
    />
  </form>
);
