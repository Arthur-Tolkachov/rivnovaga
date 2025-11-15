"use client";

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
}

export const TextField = <T extends FieldValues>({
  name,
  ...rest
}: TextFieldProps<T>) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return <TextInput name={name} value={value} onChange={onChange} {...rest} />;
};
