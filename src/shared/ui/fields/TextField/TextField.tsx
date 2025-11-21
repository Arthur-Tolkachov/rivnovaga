"use client";

import { useMemo } from "react";
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
  ...rest
}: TextFieldProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const {
    field: { value, onChange },
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
