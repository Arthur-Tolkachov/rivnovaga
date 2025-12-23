"use client";

import { useMemo } from "react";
import {
  FieldPath,
  FieldValues,
  get,
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
    <PhoneInput
      name={name}
      value={value}
      error={error}
      onChange={onChange}
      {...rest}
    />
  );
};
