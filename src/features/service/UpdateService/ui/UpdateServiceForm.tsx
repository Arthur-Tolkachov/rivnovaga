"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FormProvider } from "react-hook-form";

import { ServiceForm } from "@entity/service";

import {
  useUpdateServiceForm,
  UseUpdateServiceFormProps,
} from "../model/useUpdateServiceForm";

const Modal = dynamic(() =>
  import("@shared/ui/composite/Modal").then((mod) => mod.Modal),
);

export type UpdateServiceFormProps = UseUpdateServiceFormProps;

export const UpdateServiceForm: React.FC<UpdateServiceFormProps> = ({
  initialValues,
  practices,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { methods, onDelete, ...rest } = useUpdateServiceForm({
    initialValues,
    practices,
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
