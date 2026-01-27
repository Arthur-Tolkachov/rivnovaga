import cn from "classnames";
import { ChangeEvent, useEffect, useId, useState } from "react";

import CheckIcon from "@public/assets/icons/check.svg";

export interface CheckboxProps {
  label?: string;
  value?: boolean;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  name,
  onChange,
}) => {
  const [checked, setChecked] = useState(false);
  const id = useId();

  useEffect(() => {
    if (typeof value === "boolean") {
      setChecked(value);
    }
  }, [value, setChecked]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    if (onChange) {
      onChange(event);
    }

    setChecked(checked);
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="inline-flex gap-5 cursor-pointer hover:opacity-85 transition-opacity duration-200 text-primary-dark"
      >
        <div
          className={cn("w-6 h-6  border-1 border-secondary-main shrink-0", {
            "bg-secondary-main": checked,
          })}
        >
          {checked && (
            <CheckIcon className="w-full h-full stroke-secondary-light" />
          )}
        </div>

        <input
          id={id}
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={handleChange}
          name={name}
        />
        {label}
      </label>
    </div>
  );
};
