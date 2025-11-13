import {
  FieldPath,
  FieldValues,
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
  const { control } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return <Select value={value} onChange={onChange} {...rest} />;
};
