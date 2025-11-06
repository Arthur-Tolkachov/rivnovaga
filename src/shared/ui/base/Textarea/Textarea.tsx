"use client";
import cn from "classnames";

import { useTextarea, UseTextareaProps } from "./useTextarea";

export interface TextareaProps extends UseTextareaProps {
  id: string;
  name: string;
  label?: string;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  defaultFocus = false,
  className,
  label,
  defaultValue = "",
  onFocus,
  onBlur,
  ...rest
}) => {
  const {
    value,
    isFocus,
    shouldLabelTransform,
    handleBlur,
    handleChange,
    handleFocus,
  } = useTextarea({ defaultFocus, defaultValue, onBlur, onFocus });

  return (
    <div className="pt-8">
      <div className="relative">
        {label && (
          <label
            className="absolute cursor-pointer inset-0 top-3 text-secondary-main duration-100 translate-x-3"
            htmlFor={id}
            style={{
              ...(shouldLabelTransform && {
                transform: "translate(-135px, -65px) scale(.8)",
              }),
            }}
          >
            {label}
          </label>
        )}

        <textarea
          id={id}
          value={value}
          className={cn(
            "outline-none cursor-pointer text-secondary-dark border-1 border-secondary-main w-full p-3 resize-none h-[300px]",
            className
          )}
          style={{
            ...(isFocus && {
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
};
