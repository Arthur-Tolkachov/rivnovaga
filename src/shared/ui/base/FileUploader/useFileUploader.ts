import { useEffect, useState } from "react";

import EmptyPlaceholderImg from "@public/assets/images/empty_placeholder.png";

export interface UseFileUploaderProps {
  value?: File | { url: string; fileName: string };
  onChange?: (file: File) => void;
}

export const useFileUploader = ({ value, onChange }: UseFileUploaderProps) => {
  const [placeholder, setPlaceholder] = useState({
    url: EmptyPlaceholderImg.src,
    fileName: "empty_placeholder.png",
  });
  const [hasValue, setHasValue] = useState(false);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (onChange) {
      onChange(file);
    }

    const objUrl = URL.createObjectURL(file);

    setHasValue(true);

    setPlaceholder({ url: objUrl, fileName: file.name });
  };

  useEffect(() => {
    if (!value) return;

    if (value instanceof File) {
      const objUrl = URL.createObjectURL(value);

      setHasValue(true);
      return setPlaceholder({ url: objUrl, fileName: value.name });
    }

    if (value.url && value.fileName) {
      setHasValue(true);
      return setPlaceholder(value);
    }

    return () => {
      URL.revokeObjectURL(placeholder.url);
    };
  }, [value]);

  return {
    hasValue,
    placeholder,
    onFileChange,
  };
};
