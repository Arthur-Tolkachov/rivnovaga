"use client";

import { useEffect } from "react";

import PlusIcon from "@public/assets/icons/plus.svg";
import { Button } from "@shared/ui/base/Button";

export interface ModalProps {
  children: React.ReactNode;
  title?: string;
  open?: boolean;
  width?: string | number;
  showActions?: boolean;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  open = false,
  width = 500,
  showActions = true,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-primary-main-30 z-2 min-[500px]:p-5"
      onClick={onCancel}
    >
      <div
        className="bg-secondary-light border-1 border-secondary-main max-w-full max-h-full overflow-auto"
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b-1 border-secondary-main p-5 flex justify-between items-start sticky top-0 bg-secondary-light z-1">
          <span className="text-primary-dark">{title}</span>

          <button className="cursor-pointer" onClick={onCancel}>
            <PlusIcon className="w-6 h-6 rotate-45 fill-primary-dark" />
          </button>
        </div>

        <div className="p-5 text-primary-dark">{children}</div>

        {showActions && (
          <div className="flex gap-5 justify-center p-5">
            <Button
              size="sm"
              variant="filled"
              color="secondary"
              onClick={onConfirm}
            >
              Видалити
            </Button>

            <Button
              size="sm"
              variant="outlined-dark"
              color="secondary"
              onClick={onCancel}
            >
              Вiдмiнити
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
