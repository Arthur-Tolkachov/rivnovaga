"use client";

import { FormProvider } from "react-hook-form";

import { OrganizationForm } from "@entity/organization";

import { useEditMainInformationForm } from "../model/useEditMainInformationForm";

export const EditMainInformationForm = () => {
  const { methods, ...rest } = useEditMainInformationForm();

  return (
    <FormProvider {...methods}>
      <OrganizationForm {...rest} />
    </FormProvider>
  );
};
