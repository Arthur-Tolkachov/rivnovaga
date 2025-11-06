"use client";

import { useId } from "react";
import {
  FieldPath,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { TextInput, TextInputProps } from "@shared/ui/base/TextInput";

export interface TextFieldProps<T extends FieldValues>
  extends Omit<TextInputProps, "id" | "name"> {
  name: FieldPath<T>;
}

export const TextField = <T extends FieldValues>({
  name,
  ...rest
}: TextFieldProps<T>) => {
  const id = useId();

  const { control } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return (
    <TextInput
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
