import { useCallback, useId, useState } from "react";

export interface UseTextInputProps {
  id?: string;
  value?: string;
  defaultFocus?: boolean;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const useTextInput = ({
  id: inputId,
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
  const [isVisibleText, setIsVisibleText] = useState<boolean>(false);

  const currentValue = hasExternalValue ? value : inputValue;
  const shouldLabelTransform = isFocus || currentValue.length;

  const onChangeTextVisibility = () => {
    setIsVisibleText((prev) => !prev);
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;

      if (onChange) {
        onChange(event);
      }

      if (!hasExternalValue) {
        setInputValue(value);
      }
    },
    [setInputValue, hasExternalValue, onChange],
  );

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (onFocus) {
        onFocus(event);
      }

      if (!isFocus) {
        setIsFocus(true);
      }
    },
    [setIsFocus, onFocus, isFocus],
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (onBlur) {
        onBlur(event);
      }

      if (isFocus) {
        setIsFocus(false);
      }
    },
    [setIsFocus, onBlur, isFocus],
  );

  return {
    id: id || inputId,
    isVisibleText,
    inputValue: currentValue,
    isFocus,
    shouldLabelTransform,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    onChangeTextVisibility,
  };
};
