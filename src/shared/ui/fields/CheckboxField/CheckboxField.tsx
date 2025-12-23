"use client";

import { ChangeEvent } from "react";
import {
  FieldPath,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { Checkbox, CheckboxProps } from "@shared/ui/base/Checkbox";

export interface CheckboxFieldProps<T extends FieldValues>
  extends Omit<CheckboxProps, "name"> {
  name: FieldPath<T>;
}

export const CheckboxField = <T extends FieldValues>({
  name,
  ...rest
}: CheckboxFieldProps<T>) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange: onFieldChange },
  } = useController({
    name,
    control,
  });

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onFieldChange(event);
  };

  return <Checkbox name={name} value={value} onChange={onChange} {...rest} />;
};
