"use client";

import { FormProvider } from "react-hook-form";

import { LawyerForm } from "@entity/lawyer";

import { useCreateLawyerForm } from "../model/useCreateLawyerForm";

export const CreateLawyerForm = () => {
  const { methods, ...rest } = useCreateLawyerForm();

  return (
    <FormProvider {...methods}>
      <LawyerForm {...rest} />
    </FormProvider>
  );
};
