"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";
import { CheckboxField } from "@shared/ui/fields/CheckboxField";
import { TextField } from "@shared/ui/fields/TextField";

import { UsefulLinkFields } from "./UsefulLinkFields";

export interface UsefulLinkFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
  onDelete?: VoidFunction;
}

export const UsefulLinkForm: React.FC<UsefulLinkFormProps> = ({
  isLoading,
  onCancel,
  onSubmit,
  onDelete,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-5">
    <div className="flex flex-col gap-5 bg-secondary-light p-5">
      <TextField name="title" label="Заголовок роздiлу" />
    </div>

    <div className="flex flex-col gap-5 bg-secondary-light p-5">
      <span className="text-primary-dark">Набiр посилань:</span>

      <UsefulLinkFields />
    </div>

    <div className="bg-secondary-light p-5">
      <CheckboxField
        name="isActive"
        label="Вiдображати роздiл корисних посилань"
      />
    </div>

    <FormActionButtons
      isLoading={isLoading}
      onDelete={onDelete}
      onCancel={onCancel}
    />
  </form>
);
