"use client";

import { FormProvider } from "react-hook-form";

import { HeroSectionForm } from "@entity/hero";

import { useEditHeroSectionForm } from "../../model/useEditHeroSectionForm";

export const EditHeroSectionForm = () => {
  const { methods, ...rest } = useEditHeroSectionForm();

  return (
    <FormProvider {...methods}>
      <HeroSectionForm {...rest} />
    </FormProvider>
  );
};
