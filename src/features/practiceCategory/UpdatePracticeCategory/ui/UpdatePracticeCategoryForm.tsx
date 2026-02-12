"use client";

import { useState } from "react";
import { FormProvider } from "react-hook-form";

import { PracticeCategoryForm } from "@entity/practiceCategory";
import { Modal } from "@shared/ui/composite/Modal";

import {
  useUpdatePracticeCategoryForm,
  UseUpdatePracticeCategoryForm,
} from "../model/useUpdatePracticeCategoryForm";

export type UpdatePracticeCategoryFormProps = UseUpdatePracticeCategoryForm;

export const UpdatePracticeCategoryForm: React.FC<
  UpdatePracticeCategoryFormProps
> = ({ practices, initialValues }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { methods, onDelete, ...rest } = useUpdatePracticeCategoryForm({
    practices,
    initialValues,
  });

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FormProvider {...methods}>
        <PracticeCategoryForm onDelete={handleDelete} {...rest} />
      </FormProvider>

      <Modal
        title="Ви збираєтеся видалити роздiл"
        open={isModalOpen}
        onConfirm={onDelete}
        onCancel={handleCancel}
      >
        Роздiл буде видалено без можливості відновити. Всi практики залишаться.
        Продовжити видалення?
      </Modal>
    </>
  );
};
