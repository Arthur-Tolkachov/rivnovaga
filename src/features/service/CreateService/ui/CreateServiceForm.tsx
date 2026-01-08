"use client";

import { FormProvider } from "react-hook-form";

import { ServiceForm } from "@entity/service";

import {
  useCreateServiceForm,
  UseCreateServiceFormProps,
} from "../model/useCreateServiceForm";

export type CreateServiceFormProps = UseCreateServiceFormProps;

export const CreateServiceForm: React.FC<CreateServiceFormProps> = ({
  practices,
}) => {
  const { methods, ...rest } = useCreateServiceForm({ practices });

  return (
    <FormProvider {...methods}>
      <ServiceForm {...rest} />
    </FormProvider>
  );
};
