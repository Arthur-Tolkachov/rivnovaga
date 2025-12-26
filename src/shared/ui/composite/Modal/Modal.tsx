"use client";

import PlusIcon from "@public/assets/icons/plus.svg";
import { Button } from "@shared/ui/base/Button";

export interface ModalProps {
  children: React.ReactNode;
  title?: string;
  open?: boolean;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  open = false,
  onConfirm,
  onCancel,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-primary-main-30">
      <div className="bg-secondary-light border-1 border-secondary-main w-[500px] max-w-full">
        <div className="border-b-1 border-secondary-main p-5 flex justify-between items-start">
          <span className="text-primary-dark">{title}</span>

          <button className="cursor-pointer" onClick={onCancel}>
            <PlusIcon className="w-6 h-6 rotate-45 fill-primary-dark" />
          </button>
        </div>

        <div className="p-5 text-primary-dark">{children}</div>

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
      </div>
    </div>
  );
};
