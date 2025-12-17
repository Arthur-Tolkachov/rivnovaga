"use client";

import { useMemo } from "react";
import {
  FieldPath,
  FieldValues,
  get,
  useController,
  useFormContext,
} from "react-hook-form";

import { DatePicker, DatePickerProps } from "@shared/ui/base/DatePicker";

export interface DatePickerFieldProps<T extends FieldValues>
  extends Omit<DatePickerProps, "name"> {
  name: FieldPath<T>;
}

export const DatePickerField = <T extends FieldValues>({
  name,
  onChange: externalOnChange,
  ...rest
}: DatePickerFieldProps<T>) => {
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

  const onChange = (value: string | null) => {
    if (externalOnChange) {
      externalOnChange(value);
    }

    onFieldChange(value);
  };

  return (
    <DatePicker
      name={name}
      error={error}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
