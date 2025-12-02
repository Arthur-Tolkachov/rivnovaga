"use client";

import { FormProvider } from "react-hook-form";

import { CtaSectionForm } from "@entity/cta";

import { useEditCtaSectionForm } from "../../model/useEditCtaSectionForm";

export const EditCtaSectionForm = () => {
  const { methods, ...rest } = useEditCtaSectionForm();

  return (
    <FormProvider {...methods}>
      <CtaSectionForm {...rest} />
    </FormProvider>
  );
};
