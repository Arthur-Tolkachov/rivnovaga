"use client";

import { useEffect } from "react";
import { useIMask } from "react-imask";

import { TextInput, TextInputProps } from "../TextInput";

export interface PhoneInputProps extends Omit<TextInputProps, "onChange"> {
  onChange: (value: string | null) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  ...rest
}) => {
  const {
    ref,
    value: maskedInput,
    unmaskedValue,
    setValue,
  } = useIMask(
    {
      mask: "+38 (000) 000-00-00",
    },
    {
      onAccept: (_v, mask) => {
        const newValue = mask.unmaskedValue ? `+38${mask.unmaskedValue}` : "";

        if (onChange) {
          onChange(newValue);
        }
      },
    }
  );

  useEffect(() => {
    if (value !== unmaskedValue) {
      setValue(value || "");
    }
  }, [value, unmaskedValue, setValue]);

  return (
    <TextInput
      ref={ref as React.Ref<HTMLInputElement>}
      value={maskedInput}
      {...rest}
    />
  );
};
