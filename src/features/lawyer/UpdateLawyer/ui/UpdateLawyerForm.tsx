"use client";

import { useState } from "react";
import { FormProvider } from "react-hook-form";

import { LawyerForm } from "@entity/lawyer";
import { Modal } from "@shared/ui/composite/Modal";

import {
  useUpdateLawyerForm,
  UseUpdateLawyerFormProps,
} from "../model/useUpdateLawyerForm";

export type UpdateLawyerFormProps = UseUpdateLawyerFormProps;

export const UpdateLawyerForm: React.FC<UpdateLawyerFormProps> = ({
  initialValues,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { methods, onDelete, ...rest } = useUpdateLawyerForm({ initialValues });

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FormProvider {...methods}>
        <LawyerForm onDelete={handleDelete} {...rest} />
      </FormProvider>

      <Modal
        title="Ви збираєтеся видалити адвоката"
        open={isModalOpen}
        onConfirm={onDelete}
        onCancel={handleCancel}
      >
        Адвоката буде видалено без можливості відновити. Ви можете тимчасово
        його приховати, натиснувши на чекбокс відображення, або підтвердіть
        повне видалення.
      </Modal>
    </>
  );
};
