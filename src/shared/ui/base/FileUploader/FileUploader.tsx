"use client";
import { useFileUploader, UseFileUploaderProps } from "./useFileUploader";

export interface FileUploaderProps extends UseFileUploaderProps {
  name: string;
  label?: string;
  error?: string | null;
  alt: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  value,
  alt,
  error,
  onChange,
  ...rest
}) => {
  const { previewValue, onFileChange } = useFileUploader({ value, onChange });

  return (
    <div className="flex flex-col gap-3">
      <label className="w-fit cursor-pointer text-secondary-main flex flex-col gap-3 text-sm">
        {label}

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
          {...rest}
        />

        <div className="relative">
          <img src={previewValue.url} alt={alt} />
        </div>

        {error && <span className="text-sm text-error">{error}</span>}
      </label>
    </div>
  );
};
