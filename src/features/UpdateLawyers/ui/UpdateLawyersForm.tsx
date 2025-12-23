"use client";

import { FormProvider } from "react-hook-form";

import { LawyersForm } from "@entity/lawyers";

import {
  useUpdateLawyersForm,
  UseUpdateLawyersFormProps,
} from "../model/useUpdateLawyersForm";

export type UpdateLawyersFormProps = UseUpdateLawyersFormProps;

export const UpdateLawyersForm: React.FC<UpdateLawyersFormProps> = ({
  initialValues,
}) => {
  const { methods, ...rest } = useUpdateLawyersForm({ initialValues });

  return (
    <FormProvider {...methods}>
      <LawyersForm {...rest} />
    </FormProvider>
  );
};
