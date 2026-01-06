"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { ActionMeta, Props as ReactSelectProps } from "react-select";

const ReactSelect = dynamic(() => import("react-select"), { ssr: false });

export interface SelectOption {
  value: unknown;
  label: string;
}

export interface SelectProps
  extends Omit<
    ReactSelectProps,
    "classNames" | "unstyled" | "onChange" | "options"
  > {
  error?: string | null;
  width?: string;
  options: SelectOption[];
  onChange: (value: unknown) => void;
}

export const Select: React.FC<SelectProps> = ({
  error,
  value,
  width,
  options,
  onChange,
  ...rest
}) => {
  const handleChange = (option: unknown, actionMeta: ActionMeta<unknown>) => {
    if (actionMeta.action === "clear") {
      onChange(null);
    }

    if (!option || !onChange) return;

    if (typeof option === "object" && "value" in option) {
      onChange(option.value);
    }
  };

  const selectedOption = useMemo(() => {
    const newOption = options?.find((option) => option.value === value);

    return newOption || null;
  }, [value, options]);
  console.log("selectedOption :>> ", selectedOption);
  return (
    <div>
      <ReactSelect
        classNames={{
          valueContainer: () => "cursor-pointer",
          control: () =>
            "flex gap-5 border-1 border-secondary-main px-5 py-2 bg-secondary-light",
          placeholder: () => "text-secondary-main",
          indicatorsContainer: () => "text-secondary-darker cursor-pointer",
          noOptionsMessage: () => "p-2 text-primary-dark",
          menu: () =>
            "border-1 border-t-0 border-secondary-main bg-secondary-light",
          option: ({ isSelected }) =>
            [
              "px-5 py-1 text-secondary-dark",
              isSelected && "bg-secondary-main text-secondary-light",
            ].join(" "),
        }}
        styles={{
          container: (base) => ({
            ...base,
            width,
          }),
          option: () => ({
            cursor: "pointer",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
          }),
          ...(error && {
            control: () => ({
              boxShadow: "0px 0px 0px 1px var(--color-error)",
              borderColor: "transparent",
            }),
          }),
        }}
        noOptionsMessage={() => "Список порожнiй"}
        menuPlacement="auto"
        menuPosition="fixed"
        onChange={handleChange}
        options={options}
        value={selectedOption}
        isClearable
        unstyled
        {...rest}
      />

      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};
