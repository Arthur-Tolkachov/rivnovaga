import cn from "classnames";
import { uk } from "date-fns/locale/uk";
import ReactDatePicker, { registerLocale } from "react-datepicker";

import { TextInput, TextInputProps } from "../TextInput";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import { useDatePicker, UseDatePickerProps } from "./useDatePicker";

export interface DatePickerProps
  extends Omit<TextInputProps, "onChange">,
    Omit<UseDatePickerProps, "value"> {
  containerClassName?: string;
}

registerLocale("uk", uk);

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  containerClassName,
  onChange,
  ...rest
}) => {
  const { dateValue, inputRef, onDateChange } = useDatePicker({
    value,
    onChange,
  });

  return (
    <div className={cn("w-full", containerClassName)}>
      <ReactDatePicker
        ref={inputRef}
        selected={dateValue}
        onChange={(date) => onDateChange(date)}
        customInput={<TextInput {...rest} />}
        locale="uk"
        dateFormat="dd.MM.yyyy"
        showYearDropdown
      />
    </div>
  );
};
