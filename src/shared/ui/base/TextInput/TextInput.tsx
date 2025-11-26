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
  error?: string | null;
  multiline?: boolean;
  rows?: number;
}

export const TextInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextInputProps
>(
  (
    {
      defaultFocus = false,
      className,
      label,
      value,
      error,
      multiline,
      rows = 3,
      transform,
      onFocus,
      onBlur,
      onChange,
      ...rest
    },
    ref
  ) => {
    const { inputValue, isFocus, shouldLabelTransform, ...textInput } =
      useTextInput({
        value,
        defaultFocus,
        transform,
        onBlur,
        onFocus,
        onChange,
      });

    return (
      <div className="pt-5">
        <div className="relative">
          {label && (
            <label
              className={cn(
                "absolute inset-0 text-secondary-main cursor-text translate-x-3 top-3 origin-top-left duration-100 pr-[24px]"
              )}
              htmlFor={textInput.id}
              style={{
                ...(shouldLabelTransform && {
                  transform: "translate(-12px, -35px) scale(.8)",
                  paddingRight: 0,
                }),
              }}
            >
              {label}
            </label>
          )}

          {multiline ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              value={inputValue}
              className={cn(
                "outline-none text-secondary-dark border-1 border-secondary-main w-full p-3 resize-none",
                className
              )}
              rows={rows}
              style={{
                ...(isFocus && {
                  boxShadow: "0px 0px 0px 1px var(--color-secondary-main)",
                }),
              }}
              {...textInput}
              {...rest}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              value={inputValue}
              type="text"
              className={cn(
                "outline-none text-secondary-dark border-b-1 border-secondary-main w-full p-2",
                className
              )}
              style={{
                ...(isFocus &&
                  !error && {
                    borderColor: "transparent",
                    boxShadow: "0px 0px 0px 1px var(--color-secondary-main)",
                  }),
                ...(error && {
                  borderColor: "transparent",
                  boxShadow: "0px 0px 0px 1px var(--color-error)",
                }),
              }}
              {...textInput}
              {...rest}
            />
          )}
        </div>

        {error && <span className="text-sm text-error">{error}</span>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
