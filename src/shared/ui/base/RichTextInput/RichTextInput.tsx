"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import "quill/dist/quill.snow.css";
import "./richTextInput.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export interface RichTextInputProps {
  label?: string;
  value?: string;
  error?: string | null;
  onChange: (value: string) => void;
}

export const RichTextInput: React.FC<RichTextInputProps> = ({
  value = "<p><br></p>",
  label,
  error,
  onChange,
}) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-secondary-main">{label}</label>}

      <ReactQuill onChange={handleChange} value={value || "<p><br></p>"} />

      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};
