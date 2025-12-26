"use client";

import { FormProvider } from "react-hook-form";

import { ServiceForm } from "@entity/service";

import { useCreateServiceForm } from "../model/useCreateServiceForm";

export const CreateServiceForm = () => {
  const { methods, ...rest } = useCreateServiceForm();

  return (
    <FormProvider {...methods}>
      <ServiceForm {...rest} />
    </FormProvider>
  );
};
