"use client";

import { FormProvider } from "react-hook-form";

import { CtaSectionForm } from "@entity/cta";

import {
  useUpdateCtaSectionForm,
  UseUpdateCtaSectionFormProps,
} from "../model/useUpdateCtaSectionForm";

export type UpdateCtaSectionFormProps = UseUpdateCtaSectionFormProps;

export const UpdateCtaSectionForm: React.FC<UpdateCtaSectionFormProps> = ({
  initialValues,
}) => {
  const { methods, ...rest } = useUpdateCtaSectionForm({ initialValues });

  return (
    <FormProvider {...methods}>
      <CtaSectionForm {...rest} />
    </FormProvider>
  );
};
