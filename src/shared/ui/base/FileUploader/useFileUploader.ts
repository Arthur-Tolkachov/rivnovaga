import { useEffect, useState } from "react";

import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";

export interface UseFileUploaderProps {
  value?: File | { url: string; fileName: string };
  onChange?: (file: File) => void;
}

export const useFileUploader = ({ value, onChange }: UseFileUploaderProps) => {
  const [previewValue, setPreviewValue] = useState({
    url: EmptyPlaceholderImg.src,
    fileName: "empty_placeholder.png",
  });

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (onChange) {
      onChange(file);
    }

    const objUrl = URL.createObjectURL(file);

    setPreviewValue({ url: objUrl, fileName: file.name });
  };

  useEffect(() => {
    if (!value) return;

    if (value instanceof File) {
      const objUrl = URL.createObjectURL(value);

      return setPreviewValue({ url: objUrl, fileName: value.name });
    }

    if (value.url && value.fileName) {
      return setPreviewValue(value);
    }

    return () => {
      URL.revokeObjectURL(previewValue.url);
    };
  }, [value]);

  return {
    previewValue,
    onFileChange,
  };
};
