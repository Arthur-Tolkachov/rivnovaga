import { format, parse } from "date-fns";
import { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";

export interface UseDatePickerProps {
  value?: string;
  onChange?: (value: string | null) => void;
}

export const useDatePicker = ({ value, onChange }: UseDatePickerProps) => {
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const inputRef = useRef<ReactDatePicker>(null);
  let timeoutId: ReturnType<typeof setTimeout>;

  useEffect(() => {
    if (value) {
      const date = parse(value, "dd.MM.yyyy", new Date());

      setDateValue(date);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  const onDateChange = (date: Date | null) => {
    setDateValue(date);

    if (onChange) {
      const formattedDate = date ? format(date, "dd.MM.yyyy") : null;
      onChange(formattedDate);
    }

    timeoutId = setTimeout(() => {
      inputRef.current?.input?.blur();
    }, 1);
  };

  return {
    inputRef,
    dateValue,
    onDateChange,
  };
};
