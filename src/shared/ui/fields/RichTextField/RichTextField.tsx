import { useMemo } from "react";
import {
  FieldPath,
  FieldValues,
  get,
  useController,
  useFormContext,
} from "react-hook-form";

import {
  RichTextInput,
  RichTextInputProps,
} from "@shared/ui/base/RichTextInput";

export interface RichTextFieldProps<T extends FieldValues>
  extends Omit<RichTextInputProps, "name" | "onChange"> {
  name: FieldPath<T>;
}

export const RichTextField = <T extends FieldValues>({
  name,
  ...rest
}: RichTextFieldProps<T>) => {
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
    <RichTextInput value={value} onChange={onChange} error={error} {...rest} />
  );
};
