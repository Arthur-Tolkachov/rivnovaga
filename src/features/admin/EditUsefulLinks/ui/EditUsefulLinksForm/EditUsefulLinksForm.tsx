"use client";

import { FormProvider } from "react-hook-form";

import { UsefulLinksForm } from "@entity/usefulLinks";

import { useEditUsefulLinks } from "../../model/useEditUsefulLinks";

export const EditUsefulLinksForm = () => {
  const { methods, ...rest } = useEditUsefulLinks();
  console.log(1);
  return (
    <FormProvider {...methods}>
      <UsefulLinksForm {...rest} />
    </FormProvider>
  );
};
