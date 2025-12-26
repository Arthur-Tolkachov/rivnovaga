"use client";

import { FormProvider } from "react-hook-form";

import { UsefulLinkForm } from "@entity/usefulLink";

import { useCreateUsefulLinkForm } from "../model/useCreateUsefulLinkForm";

export const CreateUsefulLinkForm = () => {
  const { methods, ...rest } = useCreateUsefulLinkForm();

  return (
    <FormProvider {...methods}>
      <UsefulLinkForm {...rest} />
    </FormProvider>
  );
};
