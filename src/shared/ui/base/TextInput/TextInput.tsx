"use client";

import cn from "classnames";
import { forwardRef } from "react";

import { useTextInput, UseTextInputProps } from "./useTextInput";

export interface TextInputProps extends UseTextInputProps {
  name: string;
  value?: string;
  label?: string;
  className?: string;
  readonly?: boolean;
  disabled?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      defaultFocus = false,
      className,
      label,
      value,
      onFocus,
      onBlur,
      onChange,
      ...rest
    },
    ref
  ) => {
    const {
      id,
      inputValue,
      isFocus,
      shouldLabelTransform,
      handleBlur,
      handleChange,
      handleFocus,
    } = useTextInput({
      value,
      defaultFocus,
      onBlur,
      onFocus,
      onChange,
    });

    return (
      <div className="pt-8">
        <div className="relative">
          {label && (
            <label
              className="absolute inset-0 cursor-pointer flex items-center text-secondary-main duration-100 translate-x-3 origin-left"
              htmlFor={id}
              style={{
                ...(shouldLabelTransform && {
                  transform: "translate(-12px, -40px) scale(.8)",
                }),
              }}
            >
              {label}
            </label>
          )}

          <input
            id={id}
            ref={ref}
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
);

TextInput.displayName = "TextInput";
