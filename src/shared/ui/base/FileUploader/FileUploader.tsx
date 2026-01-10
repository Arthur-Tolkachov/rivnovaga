"use client";

import { useFileUploader, UseFileUploaderProps } from "./useFileUploader";

export interface FileUploaderProps extends UseFileUploaderProps {
  name: string;
  label?: string;
  error?: string | null;
  alt?: string;
  accept?: string;
  isDocument?: boolean;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  value,
  alt,
  error,
  accept = "image/*",
  isDocument,
  onChange,
  ...rest
}) => {
  const { placeholder, hasValue, onFileChange } = useFileUploader({
    value,
    onChange,
  });

  return (
    <div className="flex flex-col gap-3">
      <label className="w-fit cursor-pointer text-secondary-main flex flex-col gap-1 text-sm">
        {label}

        <input
          type="file"
          accept={accept}
          className="hidden"
          onChange={onFileChange}
          {...rest}
        />

        {isDocument ? (
          <div
            className="border-1 border-secondary-main w-70 max-w-full p-2"
            style={{
              ...(error && { borderColor: "var(--color-error)" }),
            }}
          >
            {hasValue ? placeholder.fileName : "Оберiть файл"}
          </div>
        ) : (
          <div className="relative">
            <img src={placeholder.url} alt={alt || placeholder.fileName} />
          </div>
        )}

        {error && <span className="text-sm text-error">{error}</span>}
      </label>
    </div>
  );
};
