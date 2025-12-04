"use client";

import { FormProvider } from "react-hook-form";

import { AboutSectionForm } from "@entity/about";

import { useEditAboutSectionForm } from "../../model/useEditAboutSectionForm";

export const EditAboutSectionForm = () => {
  const { methods, ...rest } = useEditAboutSectionForm();

  return (
    <FormProvider {...methods}>
      <AboutSectionForm {...rest} />
    </FormProvider>
  );
};
