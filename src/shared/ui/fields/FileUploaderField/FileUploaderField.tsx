import {
  FieldPath,
  FieldValues,
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
