"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Props as ReactSelectProps } from "react-select";

const ReactSelect = dynamic(() => import("react-select"), { ssr: false });

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<
    ReactSelectProps,
    "classNames" | "unstyled" | "onChange" | "options"
  > {
  error?: string | null;
  options: SelectOption[];
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  error,
  value,
  options,
  onChange,
  ...rest
}) => {
  const handleChange = (option: unknown) => {
    if (!option || !onChange) return;

    if (
      typeof option === "object" &&
      "value" in option &&
      typeof option.value === "string"
    ) {
      onChange(option.value);
    }
  };

  const selectedOption = useMemo(() => {
    const newOption = options?.find((option) => option.value === value);

    return newOption || null;
  }, [value, options]);

  return (
    <div>
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
          ...(error && {
            control: () => ({
              boxShadow: "0px 0px 0px 1px var(--color-error)",
              borderColor: "transparent",
            }),
          }),
        }}
        menuPlacement="auto"
        menuPosition="fixed"
        onChange={handleChange}
        options={options}
        value={selectedOption}
        unstyled
        {...rest}
      />

      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};
