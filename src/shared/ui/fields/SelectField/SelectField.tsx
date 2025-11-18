import { useMemo } from "react";
import {
  FieldPath,
  FieldValues,
  get,
  useController,
  useFormContext,
} from "react-hook-form";

import { Select } from "@shared/ui/base/Select";
import { SelectProps } from "@shared/ui/base/Select/Select";

export interface SelectFieldProps<T extends FieldValues>
  extends Omit<SelectProps, "name" | "onChange"> {
  name: FieldPath<T>;
}

export const SelectField = <T extends FieldValues>({
  name,
  ...rest
}: SelectFieldProps<T>) => {
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

  return <Select value={value} error={error} onChange={onChange} {...rest} />;
};
