"use client";

import dynamic from "next/dynamic";
import { Props as ReactSelectProps } from "react-select";

const ReactSelect = dynamic(() => import("react-select"), { ssr: false });

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<ReactSelectProps, "classNames" | "unstyled" | "onChange"> {
  onChange: (value: unknown) => void;
}

export const Select: React.FC<SelectProps> = ({ onChange, ...rest }) => {
  const handleChange = (value: unknown) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <ReactSelect
      classNames={{
        valueContainer: () => "cursor-pointer",
        control: () =>
          "flex gap-5 border-1 border-secondary-main px-5 py-2 bg-secondary-light",
        placeholder: () => "text-secondary-main",
        indicatorsContainer: () => "text-secondary-darker cursor-pointer",
        menu: () =>
          "border-1 border-t-0 border-secondary-main bg-secondary-light",
        option: ({ isSelected }) =>
          [
            "px-5 py-1 text-secondary-dark",
            isSelected && "bg-secondary-main text-secondary-light",
          ].join(" "),
      }}
      styles={{
        option: () => ({ cursor: "pointer" }),
      }}
      menuPlacement="auto"
      menuPosition="fixed"
      onChange={handleChange}
      unstyled
      {...rest}
    />
  );
};
