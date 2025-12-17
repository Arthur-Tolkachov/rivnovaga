import { useMemo } from "react";
import {
  FieldPath,
  FieldValues,
  get,
  useController,
  useFormContext,
} from "react-hook-form";

import { FileUploader, FileUploaderProps } from "@shared/ui/base/FileUploader";

export interface FileUploaderFieldProps<T extends FieldValues>
  extends Omit<FileUploaderProps, "name"> {
  name: FieldPath<T>;
}

export const FileUploaderField = <T extends FieldValues>({
  name,
  ...rest
}: FileUploaderFieldProps<T>) => {
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
    <FileUploader
      name={name}
      error={error}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
