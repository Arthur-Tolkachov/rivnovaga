import { useEffect, useState } from "react";

import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";

export interface UseFileUploaderProps {
  value?: File | string;
  onChange?: (file: File) => void;
}

export const useFileUploader = ({ value, onChange }: UseFileUploaderProps) => {
  const [previewValue, setPreviewValue] = useState<string>(
    EmptyPlaceholderImg.src
  );

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (onChange) {
      onChange(file);
    }

    const objUrl = URL.createObjectURL(file);

    setPreviewValue(objUrl);
  };

  useEffect(() => {
    if (!value) return;

    if (value instanceof File) {
      const objUrl = URL.createObjectURL(value);

      return setPreviewValue(objUrl);
    }

    setPreviewValue(value);

    return () => {
      URL.revokeObjectURL(previewValue);
    };
  }, [value]);

  return {
    previewValue,
    onFileChange,
  };
};
