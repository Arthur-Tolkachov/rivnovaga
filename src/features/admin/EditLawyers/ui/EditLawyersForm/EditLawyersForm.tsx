"use client";

import { FormProvider } from "react-hook-form";

import { LawyersForm } from "@entity/lawyers";

import { useEditLawyersForm } from "../../model/useEditLawyersForm";

export const EditLawyersForm = () => {
  const { methods, ...rest } = useEditLawyersForm();

  return (
    <FormProvider {...methods}>
      <LawyersForm {...rest} />
    </FormProvider>
  );
};
