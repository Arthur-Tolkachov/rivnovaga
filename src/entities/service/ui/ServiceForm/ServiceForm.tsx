"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";

import { ServiceFields, ServiceFieldsProps } from "./ServiceFields";

export interface ServiceFormProps extends ServiceFieldsProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onDelete?: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const ServiceForm: React.FC<ServiceFormProps> = ({
  isLoading,
  practicesDropdownOptions,
  onSubmit,
  onDelete,
  onCancel,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <ServiceFields practicesDropdownOptions={practicesDropdownOptions} />

    <FormActionButtons
      isLoading={isLoading}
      onCancel={onCancel}
      onDelete={onDelete}
    />
  </form>
);
