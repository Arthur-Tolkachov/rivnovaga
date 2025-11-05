"use client";

import cn from "classnames";

import { useTextInput, UseTextInputProps } from "./useTextInput";

export interface TextInputProps extends UseTextInputProps {
  id: string;
  name: string;
  value?: string;
  label?: string;
  className?: string;
}

export function TextInput({
  id,
  defaultFocus = false,
  className,
  label,
  value,
  defaultValue = "",
  onFocus,
  onBlur,
  onChange,
  ...rest
}: TextInputProps) {
  const {
    inputValue,
    isFocus,
    shouldLabelTransform,
    handleBlur,
    handleChange,
    handleFocus,
  } = useTextInput({
    value,
    defaultFocus,
    defaultValue,
    onBlur,
    onFocus,
    onChange,
  });

  return (
    <div className="pt-8">
      <div className="relative">
        {label && (
          <label
            className="absolute inset-0 cursor-pointer flex items-center text-secondary-main duration-100 translate-x-3"
            htmlFor={id}
            style={{
              ...(shouldLabelTransform && {
                transform: "translate(-60px, -40px) scale(.8)",
              }),
            }}
          >
            {label}
          </label>
        )}

        <input
          id={id}
          type="text"
          value={inputValue}
          className={cn(
            "outline-none text-secondary-dark border-b-1 border-secondary-main w-full p-3",
            className
          )}
          style={{
            ...(isFocus && {
              borderColor: "transparent",
              boxShadow: "0px 0px 0px 1px var(--color-secondary-main)",
            }),
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...rest}
        />
      </div>
    </div>
  );
}
