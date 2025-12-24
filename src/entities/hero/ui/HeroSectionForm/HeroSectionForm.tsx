"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { HeroSectionFields } from "./HeroSectionFields";

export interface HeroSectionFormProps {
  isLoading?: boolean;
  onReset: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const HeroSectionForm: React.FC<HeroSectionFormProps> = ({
  isLoading,
  onReset,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <HeroSectionFields />

    <FormActionButtons isLoading={isLoading} onCancel={onReset} />
  </form>
);
