"use client";

import { useState } from "react";
import { FormProvider } from "react-hook-form";

import { PracticeForm } from "@entity/practice";
import { Modal } from "@shared/ui/composite/Modal";

import {
  useUpdatePracticeForm,
  UseUpdatePracticeFormProps,
} from "../model/useUpdatePracticeForm";

export type UpdatePracticeFormProps = UseUpdatePracticeFormProps;

export const UpdatePracticeForm: React.FC<UpdatePracticeFormProps> = ({
  services,
  initialValues,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { methods, servicesDropdownOptions, onDelete, ...rest } =
    useUpdatePracticeForm({
      services,
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
        <PracticeForm
          dropdownOptions={servicesDropdownOptions}
          onDelete={handleDelete}
          {...rest}
        />
      </FormProvider>

      <Modal
        title="Ви збираєтеся видалити практику"
        open={isModalOpen}
        onConfirm={onDelete}
        onCancel={handleCancel}
      >
        Практику буде видалено без можливості відновити. Ви можете тимчасово її
        приховати, натиснувши на чекбокс відображення, або підтвердіть повне
        видалення.
      </Modal>
    </>
  );
};
