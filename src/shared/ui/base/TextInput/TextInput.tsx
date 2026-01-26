"use client";

import cn from "classnames";
import { forwardRef } from "react";

import NotVisibleIcon from "@public/assets/icons/not-visible.svg";
import VisibleIcon from "@public/assets/icons/visible.svg";

import { useTextInput, UseTextInputProps } from "./useTextInput";

export interface TextInputProps extends UseTextInputProps {
  name?: string;
  value?: string;
  label?: string;
  className?: string;
  containerClassName?: string;
  readonly?: boolean;
  disabled?: boolean;
  error?: string | null;
  multiline?: boolean;
  rows?: number;
  type?: "password" | "email" | "text";
  onClick?: VoidFunction;
}

export const TextInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextInputProps
>(
  (
    {
      id,
      defaultFocus = false,
      className,
      label,
      value,
      error,
      multiline,
      rows = 3,
      containerClassName,
      readonly,
      type = "text",
      onFocus,
      onBlur,
      onChange,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const {
      inputValue,
      isFocus,
      shouldLabelTransform,
      isVisibleText,
      onChangeTextVisibility,
      ...textInput
    } = useTextInput({
      id,
      value,
      defaultFocus,
      onBlur,
      onFocus,
      onChange,
    });

    const isPasswordField = type === "password";

    return (
      <div className={cn("pt-5 w-full", containerClassName)}>
        <div className="relative">
          {label && (
            <label
              className={cn(
                "absolute inset-0 text-secondary-main cursor-text translate-x-3 top-2 origin-top-left duration-100 pr-[24px]",
              )}
              htmlFor={textInput.id}
              style={{
                ...(shouldLabelTransform && {
                  transform: "translate(-12px, -35px) scale(.8)",
                  top: 12,
                  paddingRight: 0,
                }),
              }}
              onClick={onClick}
            >
              {label}
            </label>
          )}

          {multiline ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              value={inputValue}
              className={cn(
                "outline-none text-secondary-dark border-1 border-secondary-main w-full p-3 resize-none relative z-1",
                className,
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
            <div className="relative">
              {isPasswordField && (
                <button
                  type="button"
                  className="absolute flex justify-center items-center right-0 top-0 bottom-0 w-10 bg-secondary-main cursor-pointer"
                  onClick={onChangeTextVisibility}
                >
                  {isVisibleText ? (
                    <NotVisibleIcon className="w-5 h-5 fill-secondary-light" />
                  ) : (
                    <VisibleIcon className="w-5 h-5 fill-secondary-light" />
                  )}
                </button>
              )}

              <input
                ref={ref as React.Ref<HTMLInputElement>}
                value={inputValue}
                type={!isPasswordField || !isVisibleText ? type : "text"}
                className={cn(
                  "outline-none text-secondary-dark border-b-1 border-secondary-main w-full p-2",
                  className,
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
                  ...(isPasswordField && {
                    paddingRight: 50,
                  }),
                }}
                {...textInput}
                {...rest}
                readOnly={readonly}
              />
            </div>
          )}
        </div>

        {error && <span className="text-sm text-error">{error}</span>}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
