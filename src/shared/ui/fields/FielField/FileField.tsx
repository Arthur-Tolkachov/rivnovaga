import {
  FieldPath,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { FileUploader, FileUploaderProps } from "@shared/ui/base/FileUploader";

export interface FileFieldProps<T extends FieldValues>
  extends Omit<FileUploaderProps, "name"> {
  name: FieldPath<T>;
}

export const FileField = <T extends FieldValues>({
  name,
  ...rest
}: FileFieldProps<T>) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <FileUploader name={name} value={value} onChange={onChange} {...rest} />
    </div>
  );
};
