"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import {
  ActionMeta,
  MultiValue,
  Props as ReactSelectProps,
  SingleValue,
} from "react-select";

type RSProps = ReactSelectProps<SelectOption, boolean>;

const ReactSelect = dynamic<RSProps>(
  () => import("react-select").then((m) => m.default),
  { ssr: false }
);

export interface SelectOption {
  value: unknown;
  label: string;
}

type BaseProps = Omit<
  ReactSelectProps<SelectOption, boolean>,
  "classNames" | "unstyled" | "onChange" | "options" | "value"
>;

export interface SelectProps extends BaseProps {
  error?: string | null;
  width?: string;
  options: SelectOption[];
  value?: unknown | unknown[] | null;
  onChange: (value: unknown | unknown[] | null) => void;
}

export const Select: React.FC<SelectProps> = ({
  error,
  value,
  width,
  options,
  isMulti,
  onChange,
  ...rest
}) => {
  const handleChange = (
    option: SingleValue<SelectOption> | MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => {
    if (actionMeta.action === "clear") {
      onChange(null);
      return;
    }

    if (isMulti) {
      const values = (option as MultiValue<SelectOption>)?.map(
        (opt) => opt.value
      );
      onChange(values ?? []);
      return;
    }

    onChange((option as SingleValue<SelectOption>)?.value ?? null);
  };

  const selectedOption = useMemo(() => {
    if (isMulti && Array.isArray(value)) {
      return options.filter((opt) => value.includes(opt.value));
    }

    return options.find((opt) => opt.value === value) ?? null;
  }, [value, options, isMulti]);

  return (
    <div>
      <ReactSelect
        classNames={{
          valueContainer: () => "cursor-pointer flex flex-wrap gap-1",
          control: () =>
            "flex gap-5 border-1 border-secondary-main px-5 py-2 bg-secondary-light",
          placeholder: () => "text-secondary-main",
          indicatorsContainer: () => "text-secondary-darker cursor-pointer",
          noOptionsMessage: () => "p-2 text-primary-dark",
          menu: () =>
            "border-1 border-t-0 border-secondary-main bg-secondary-light",
          option: ({ isSelected }) =>
            [
              "px-5 py-1 text-secondary-dark hover:bg-secondary-main hover:text-secondary-light",
              isSelected && "bg-secondary-main text-secondary-light",
            ].join(" "),
          multiValue: () => "bg-secondary-main text-secondary-light px-2",
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
        isMulti={isMulti}
        value={selectedOption}
        isClearable
        unstyled
        {...rest}
      />

      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};
