"use client";

import { useState } from "react";
import { FormProvider } from "react-hook-form";

import { ServiceForm } from "@entity/service";
import { Modal } from "@shared/ui/composite/Modal";

import {
  useUpdateServiceForm,
  UseUpdateServiceFormProps,
} from "../model/useUpdateServiceForm";

export type UpdateServiceFormProps = UseUpdateServiceFormProps;

export const UpdateServiceForm: React.FC<UpdateServiceFormProps> = ({
  initialValues,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { methods, onDelete, ...rest } = useUpdateServiceForm({
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
        <ServiceForm onDelete={handleDelete} {...rest} />
      </FormProvider>

      <Modal
        title="Ви збираєтеся видалити послугу"
        open={isModalOpen}
        onConfirm={onDelete}
        onCancel={handleCancel}
      >
        Послугу буде видалено без можливості відновити. Ви можете тимчасово її
        приховати, натиснувши на чекбокс відображення, або підтвердіть повне
        видалення.
      </Modal>
    </>
  );
};
