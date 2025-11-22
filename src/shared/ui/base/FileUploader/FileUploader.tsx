"use client";
import { useFileUploader, UseFileUploaderProps } from "./useFileUploader";

export interface FileUploaderProps extends UseFileUploaderProps {
  name: string;
  label?: string;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  value,
  onChange,
  ...rest
}) => {
  const { previewValue, onFileChange } = useFileUploader({ value, onChange });

  return (
    <div className="flex flex-col gap-3">
      <label className="w-fit cursor-pointer text-secondary-main flex flex-col gap-3">
        {label}

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onFileChange}
          {...rest}
        />

        <div className="relative w-[150px] h-[150px]">
          <img src={previewValue.url} alt="Логотип" className="w-full" />
        </div>
      </label>
    </div>
  );
};
