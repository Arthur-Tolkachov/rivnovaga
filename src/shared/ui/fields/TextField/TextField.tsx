"use client";

import { ChangeEvent, useMemo } from "react";
import {
  FieldPath,
  FieldValues,
  get,
  useController,
  useFormContext,
} from "react-hook-form";

import { TextInput, TextInputProps } from "@shared/ui/base/TextInput";

export interface TextFieldProps<T extends FieldValues>
  extends Omit<TextInputProps, "name"> {
  name: FieldPath<T>;
}

export const TextField = <T extends FieldValues>({
  name,
  onChange: externalOnChange,
  ...rest
}: TextFieldProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    field: { value, onChange: onFieldChange },
  } = useController({
    name,
    control,
  });

  const fieldError = get(errors, name);

  const error = useMemo(() => {
    const errorMessage = fieldError?.message;

    if (typeof errorMessage === "string") {
      return errorMessage;
    }

    return null;
  }, [fieldError]);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (externalOnChange) {
      externalOnChange(event);
    }

    onFieldChange(event);
  };

  return (
    <TextInput
      name={name}
      error={error}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
