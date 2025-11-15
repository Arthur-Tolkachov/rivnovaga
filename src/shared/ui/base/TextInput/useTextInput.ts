import { useEffect, useId, useMemo, useState } from "react";

export interface UseTextInputProps {
  value?: string;
  defaultFocus?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useTextInput = ({
  value,
  defaultFocus = false,
  onBlur,
  onChange,
  onFocus,
}: UseTextInputProps) => {
  const id = useId();
  const hasExternalValue = value !== undefined;
  const [isFocus, setIsFocus] = useState(defaultFocus);
  const [inputValue, setInputValue] = useState<string>(value || "");

  const shouldLabelTransform = useMemo(() => {
    if (inputValue || isFocus) {
      return true;
    }

    return false;
  }, [isFocus, inputValue]);

  useEffect(() => {
    if (hasExternalValue && value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }

    if (!hasExternalValue) {
      setInputValue(event.target.value);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(event);
    }

    setIsFocus(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }

    setIsFocus(false);
  };

  return {
    id,
    inputValue,
    isFocus,
    shouldLabelTransform,
    handleFocus,
    handleBlur,
    handleChange,
  };
};
