import { useEffect, useId, useMemo, useState } from "react";

export interface UseTextInputProps {
  value?: string;
  defaultFocus?: boolean;
  transform?: (value: string) => string;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const useTextInput = ({
  value,
  defaultFocus = false,
  transform,
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
  }, [value, hasExternalValue, setInputValue]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;

    const transformedValue = transform ? transform(value) : value;

    if (onChange) {
      event.target.value = transformedValue;
      onChange(event);
    }

    if (!hasExternalValue) {
      setInputValue(transformedValue);
    }
  };

  const handleFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onFocus) {
      onFocus(event);
    }

    setIsFocus(true);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
  };
};
