"use client";

import { FormProvider } from "react-hook-form";

import { ServiceForm } from "@entity/services";

import {
  useUpdateServiceForm,
  UseUpdateServiceFormProps,
} from "../model/useUpdateServiceForm";

export type UpdateServiceFormProps = UseUpdateServiceFormProps;

export const UpdateServiceForm: React.FC<UpdateServiceFormProps> = ({
  initialValues,
}) => {
  const { methods, ...rest } = useUpdateServiceForm({ initialValues });

  return (
    <FormProvider {...methods}>
      <ServiceForm {...rest} />
    </FormProvider>
  );
};
