"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FormProvider } from "react-hook-form";

import { DocumentOverviewForm } from "@entity/documentOverview";

const Modal = dynamic(() =>
  import("@shared/ui/composite/Modal").then((mod) => mod.Modal),
);

import {
  UseUpdateDocumentOverviewForm,
  useUpdateDocumentOverviewForm,
} from "../model/useUpdateDocumentOverviewForm";

export type UpdateDocumentOverviewProps = UseUpdateDocumentOverviewForm;

export const UpdateDocumentOverviewForm: React.FC<
  UpdateDocumentOverviewProps
> = ({ initialValues }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { methods, onDelete, ...rest } = useUpdateDocumentOverviewForm({
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
        <DocumentOverviewForm onDelete={handleDelete} {...rest} />
      </FormProvider>

      <Modal
        title="Ви збираєтеся видалити адвоката"
        open={isModalOpen}
        onConfirm={onDelete}
        onCancel={handleCancel}
      >
        Зразок документа буде видалено без можливості відновити. Ви можете
        тимчасово його приховати, натиснувши на чекбокс відображення, або
        підтвердіть повне видалення.
      </Modal>
    </>
  );
};
