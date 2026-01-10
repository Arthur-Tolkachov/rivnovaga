"use client";

import { ChangeEvent, useMemo } from "react";
import {
  FieldPath,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { TextInput, TextInputProps } from "@shared/ui/base/TextInput";

export interface TextFieldProps<T extends FieldValues>
  extends Omit<TextInputProps, "name"> {
  name: FieldPath<T>;
  transform?: (value: string) => string;
}

export const TextField = <T extends FieldValues>({
  name,
  transform,
  onChange: externalOnChange,
  ...rest
}: TextFieldProps<T>) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange: onFieldChange },
    fieldState: { error: fieldError },
  } = useController({
    name,
    control,
  });

  const error = fieldError?.message || null;

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (externalOnChange) {
      externalOnChange(event);
    }

    onFieldChange(event);
  };

  const currentValue = useMemo(
    () => (transform ? transform(value) : value),
    [transform, value]
  );

  return (
    <TextInput
      name={name}
      error={error}
      value={currentValue}
      onChange={onChange}
      {...rest}
    />
  );
};
