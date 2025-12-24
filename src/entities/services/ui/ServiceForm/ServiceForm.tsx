"use client";

import { FormActionButtons } from "@shared/ui/composite/FormActionButtons";
import { CheckboxField } from "@shared/ui/fields/CheckboxField";
import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
import { RichTextField } from "@shared/ui/fields/RichTextField";
import { TextField } from "@shared/ui/fields/TextField";

export interface ServiceFormProps {
  isLoading?: boolean;
  onCancel: VoidFunction;
  onDelete?: VoidFunction;
  onSubmit: (event: React.BaseSyntheticEvent) => Promise<void>;
}

export const ServiceForm: React.FC<ServiceFormProps> = ({
  isLoading,
  onSubmit,
  onDelete,
  onCancel,
}) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <div className="flex flex-col gap-5 bg-secondary-light p-5">
      <div className="max-w-[300px] ">
        <FileUploaderField name="cover" label="Обкладинка" />
      </div>

      <div className="flex flex-col gap-5">
        <TextField name="title" label="Заголовок" />
        <RichTextField name="description" label="Опис" />
        <CheckboxField name="isActive" label="Вiдображати послугу" />
      </div>
    </div>

    <FormActionButtons
      isLoading={isLoading}
      onCancel={onCancel}
      onDelete={onDelete}
    />
  </form>
);
