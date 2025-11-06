import { useMemo, useState } from "react";

export interface UseTextareaProps {
  defaultFocus?: boolean;
  defaultValue?: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const useTextarea = ({
  defaultFocus = false,
  defaultValue = "",
  onBlur,
  onFocus,
}: UseTextareaProps) => {
  const [isFocus, setIsFocus] = useState(defaultFocus);
  const [value, setValue] = useState<string>(defaultValue);

  const shouldLabelTransform = useMemo(() => {
    if (value || isFocus) {
      return true;
    }

    return false;
  }, [isFocus, value]);

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onFocus) {
      onFocus(event);
    }

    setIsFocus(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur(event);
    }

    setIsFocus(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    isFocus,
    shouldLabelTransform,
    handleFocus,
    handleBlur,
    handleChange,
  };
};
