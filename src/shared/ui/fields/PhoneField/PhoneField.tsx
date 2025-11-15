"use client";

import {
  FieldPath,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { PhoneInput } from "@shared/ui/base/PhoneInput";
import { PhoneInputProps } from "@shared/ui/base/PhoneInput/PhoneInput";

export interface PhoneFieldProps<T extends FieldValues>
  extends Omit<PhoneInputProps, "name" | "onChange"> {
  name: FieldPath<T>;
}

export const PhoneField = <T extends FieldValues>({
  name,
  ...rest
}: PhoneFieldProps<T>) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return <PhoneInput name={name} value={value} onChange={onChange} {...rest} />;
};
