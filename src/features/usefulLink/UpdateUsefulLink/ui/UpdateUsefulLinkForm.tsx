"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FormProvider } from "react-hook-form";

import { UsefulLinkForm } from "@entity/usefulLink";

import {
  UseUpdateUsefulLinkForm,
  useUpdateUsefulLinkForm,
} from "../model/useUpdateUsefulLinkForm";

const Modal = dynamic(() =>
  import("@shared/ui/composite/Modal").then((mod) => mod.Modal),
);

type UpdateUsefulLinkProps = UseUpdateUsefulLinkForm;

export const UpdateUsefulLinkForm: React.FC<UpdateUsefulLinkProps> = ({
  initialValues,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { methods, onDelete, ...rest } = useUpdateUsefulLinkForm({
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
        <UsefulLinkForm onDelete={handleDelete} {...rest} />
      </FormProvider>

      <Modal
        title="Ви збираєтеся видалити роздiл корисних посилань"
        open={isModalOpen}
        onConfirm={onDelete}
        onCancel={handleCancel}
      >
        Роздiл корисних посилань буде видалено без можливості відновити. Ви
        можете тимчасово його приховати, натиснувши на чекбокс відображення, або
        підтвердіть повне видалення.
      </Modal>
    </>
  );
};
