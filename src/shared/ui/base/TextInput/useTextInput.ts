import { useMemo, useState } from "react";

export interface UseTextInputProps {
  value?: string;
  defaultFocus?: boolean;
  defaultValue?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useTextInput = ({
  value,
  defaultFocus = false,
  defaultValue = "",
  onBlur,
  onChange,
  onFocus,
}: UseTextInputProps) => {
  const [isFocus, setIsFocus] = useState(defaultFocus);
  const [inputValue, setInputValue] = useState<string>(value || defaultValue);

  const shouldLabelTransform = useMemo(() => {
    if (value || isFocus) {
      return true;
    }

    return false;
  }, [isFocus, value]);

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }

    setInputValue(event.target.value);
  };

  return {
    inputValue,
    isFocus,
    shouldLabelTransform,
    handleFocus,
    handleBlur,
    handleChange,
  };
};
